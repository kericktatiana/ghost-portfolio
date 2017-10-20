var express = require('express'),
    _       = require('lodash'),
    config  = require('../../config'),
    errors  = require('../../errors'),
    i18n    = require('../../i18n'),
    rss     = require('../../data/xml/rss'),
    utils   = require('../../utils'),
    channelConfig = require('./channel-config'),
    renderChannel = require('./render-channel'),
    rssRouter,
    channelRouter;

function handlePageParam(req, res, next, page) {
    var pageRegex = new RegExp('/' + config.get('routeKeywords').page + '/(.*)?/'),
        rssRegex = new RegExp('/rss/(.*)?/');

    page = parseInt(page, 10);

    if (page === 1) {
        // Page 1 is an alias, do a permanent 301 redirect
        if (rssRegex.test(req.url)) {
            return utils.url.redirect301(res, req.originalUrl.replace(rssRegex, '/rss/'));
        } else {
            return utils.url.redirect301(res, req.originalUrl.replace(pageRegex, '/'));
        }
    } else if (page < 1 || isNaN(page)) {
        // Nothing less than 1 is a valid page number, go straight to a 404
        return next(new errors.NotFoundError({message: i18n.t('errors.errors.pageNotFound')}));
    } else {
        // Set req.params.page to the already parsed number, and continue
        req.params.page = page;
        return next();
    }
}

rssRouter = function rssRouter(channelConfig) {
    function rssConfigMiddleware(req, res, next) {
        res.locals.channel.isRSS = true;
        next();
    }

    // @TODO move this to an RSS module
    var router = express.Router({mergeParams: true}),
        stack = [channelConfig, rssConfigMiddleware, rss],
        baseRoute = '/rss/';

    router.get(baseRoute, stack);
    router.get(utils.url.urlJoin(baseRoute, ':page(\\d+)/'), stack);
    router.get('/feed/', function redirectToRSS(req, res) {
        return utils.url.redirect301(res, utils.url.urlJoin(utils.url.getSubdir(), req.baseUrl, baseRoute));
    });

    router.param('page', handlePageParam);
    return router;
};

channelRouter = function router() {
    function channelConfigMiddleware(channel) {
        return function doChannelConfig(req, res, next) {
            res.locals.channel = _.cloneDeep(channel);
            next();
        };
    }

    var channelsRouter = express.Router({mergeParams: true}),
        baseRoute = '/',
        pageRoute = utils.url.urlJoin('/', config.get('routeKeywords').page, ':page(\\d+)/');

    _.each(channelConfig.list(), function (channel) {
        var channelRouter = express.Router({mergeParams: true}),
            configChannel = channelConfigMiddleware(channel);

        // @TODO figure out how to collapse this into a single rule
        channelRouter.get(baseRoute, configChannel, renderChannel);

        // @TODO improve config and add defaults to make this simpler
        if (channel.paged !== false) {
            channelRouter.param('page', handlePageParam);
            channelRouter.get(pageRoute, configChannel, renderChannel);
        }

        // @TODO improve config and add defaults to make this simpler
        if (channel.rss !== false) {
            channelRouter.use(rssRouter(configChannel));
        }

        if (channel.editRedirect) {
            channelRouter.get('/edit/', function redirect(req, res) {
                utils.url.redirectToAdmin(302, res, channel.editRedirect.replace(':slug', req.params.slug));
            });
        }

        // Mount this channel router on the parent channels router
        channelsRouter.use(channel.route, channelRouter);
    });

    return channelsRouter;
};

module.exports.router = channelRouter;
