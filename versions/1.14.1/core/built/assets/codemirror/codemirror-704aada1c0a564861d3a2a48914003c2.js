!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t()}(this,function(){"use strict"
function e(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function t(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function r(e,r){return t(e).appendChild(r)}function n(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function i(e,t,r,i){var o=n(e,t,r,i)
return o.setAttribute("role","presentation"),o}function o(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function a(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function l(t,r){var n=t.className
e(r).test(n)||(t.className+=(n?" ":"")+r)}function s(t,r){for(var n=t.split(" "),i=0;i<n.length;i++)n[i]&&!e(n[i]).test(r)&&(r+=" "+n[i])
return r}function u(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function c(e,t,r){t||(t={})
for(var n in e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function d(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=n||0,a=i||0;;){var l=e.indexOf("\t",o)
if(l<0||l>=t)return a+(t-o)
a+=l-o,a+=r-a%r,o=l+1}}function f(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}function h(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length)
var a=o-n
if(o==e.length||i+a>=t)return n+Math.min(a,t-i)
if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n}}function p(e){for(;Ga.length<=e;)Ga.push(g(Ga)+" ")
return Ga[e]}function g(e){return e[e.length-1]}function m(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function v(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++
e.splice(n,0,t)}function y(){}function b(e,t){var r
return Object.create?r=Object.create(e):(y.prototype=e,r=new y),t&&c(t,r),r}function w(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Ua.test(e))}function x(e,t){return t?!!(t.source.indexOf("\\w")>-1&&w(e))||t.test(e):w(e)}function k(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function C(e){return e.charCodeAt(0)>=768&&qa.test(e)}function S(e,t,r){for(;(r<0?t>0:t<e.length)&&C(e.charAt(t));)t+=r
return t}function L(e,t,r){for(var n=t>r?-1:1;;){if(t==r)return t
var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:r
e(o)?r=o:t=o+n}}function M(e,t,r){var o=this
this.input=r,o.scrollbarFiller=n("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=n("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=i("div",null,"CodeMirror-code"),o.selectionDiv=n("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=n("div",null,"CodeMirror-cursors"),o.measure=n("div",null,"CodeMirror-measure"),o.lineMeasure=n("div",null,"CodeMirror-measure"),o.lineSpace=i("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var a=i("div",[o.lineSpace],"CodeMirror-lines")
o.mover=n("div",[a],null,"position: relative"),o.sizer=n("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=n("div",null,null,"position: absolute; height: "+Ra+"px; width: 1px;"),o.gutters=n("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=n("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=n("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),ga&&ma<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),va||da&&Ma||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,r.init(o)}function T(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function N(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function A(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function O(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function W(e){if(null==e.parent)return null
for(var t=e.parent,r=f(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function z(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var l=e.lines[a].height
if(t<l)break
t-=l}return r+a}function D(e,t){return t>=e.first&&t<e.first+e.size}function H(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function P(e,t,r){if(void 0===r&&(r=null),!(this instanceof P))return new P(e,t,r)
this.line=e,this.ch=t,this.sticky=r}function E(e,t){return e.line-t.line||e.ch-t.ch}function I(e,t){return e.sticky==t.sticky&&0==E(e,t)}function F(e){return P(e.line,e.ch)}function R(e,t){return E(e,t)<0?t:e}function B(e,t){return E(e,t)<0?e:t}function j(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function V(e,t){if(t.line<e.first)return P(e.first,0)
var r=e.first+e.size-1
return t.line>r?P(r,T(e,r).text.length):K(t,T(e,t.line).text.length)}function K(e,t){var r=e.ch
return null==r||r>t?P(e.line,t):r<0?P(e.line,0):e}function G(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=V(e,t[n])
return r}function U(){$a=!0}function q(){_a=!0}function $(e,t,r){this.marker=e,this.from=t,this.to=r}function _(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function X(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function Y(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function Z(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!r||!o.marker.insertLeft)){var l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new $(a,o.from,l?null:o.to))}}return n}function Q(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!r||o.marker.insertLeft)){var l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new $(a,l?null:o.from-t,null==o.to?null:o.to-t))}}return n}function J(e,t){if(t.full)return null
var r=D(e,t.from.line)&&T(e,t.from.line).markedSpans,n=D(e,t.to.line)&&T(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,a=0==E(t.from,t.to),l=Z(r,i,a),s=Q(n,o,a),u=1==t.text.length,c=g(t.text).length+(u?i:0)
if(l)for(var d=0;d<l.length;++d){var f=l[d]
if(null==f.to){var h=_(s,f.marker)
h?u&&(f.to=null==h.to?null:h.to+c):f.to=i}}if(s)for(var p=0;p<s.length;++p){var m=s[p]
null!=m.to&&(m.to+=c),null==m.from?_(l,m.marker)||(m.from=c,u&&(l||(l=[])).push(m)):(m.from+=c,u&&(l||(l=[])).push(m))}l&&(l=ee(l)),s&&s!=l&&(s=ee(s))
var v=[l]
if(!u){var y,b=t.text.length-2
if(b>0&&l)for(var w=0;w<l.length;++w)null==l[w].to&&(y||(y=[])).push(new $(l[w].marker,null,null))
for(var x=0;x<b;++x)v.push(y)
v.push(s)}return v}function ee(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function te(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&-1!=f(n,r)||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var a=n[o],l=a.find(0),s=0;s<i.length;++s){var u=i[s]
if(!(E(u.to,l.from)<0||E(u.from,l.to)>0)){var c=[s,1],d=E(u.from,l.from),h=E(u.to,l.to);(d<0||!a.inclusiveLeft&&!d)&&c.push({from:u.from,to:l.from}),(h>0||!a.inclusiveRight&&!h)&&c.push({from:l.to,to:u.to}),i.splice.apply(i,c),s+=c.length-3}}return i}function re(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function ne(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function ie(e){return e.inclusiveLeft?-1:0}function oe(e){return e.inclusiveRight?1:0}function ae(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=E(n.from,i.from)||ie(e)-ie(t)
return o?-o:E(n.to,i.to)||oe(e)-oe(t)||t.id-e.id}function le(e,t){var r,n=_a&&e.markedSpans
if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||ae(r,i.marker)<0)&&(r=i.marker)
return r}function se(e){return le(e,!0)}function ue(e){return le(e,!1)}function ce(e,t,r,n,i){var o=T(e,t),a=_a&&o.markedSpans
if(a)for(var l=0;l<a.length;++l){var s=a[l]
if(s.marker.collapsed){var u=s.marker.find(0),c=E(u.from,r)||ie(s.marker)-ie(i),d=E(u.to,n)||oe(s.marker)-oe(i)
if(!(c>=0&&d<=0||c<=0&&d>=0)&&(c<=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?E(u.to,r)>=0:E(u.to,r)>0)||c>=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?E(u.from,n)<=0:E(u.from,n)<0)))return!0}}}function de(e){for(var t;t=se(e);)e=t.find(-1,!0).line
return e}function fe(e){for(var t;t=ue(e);)e=t.find(1,!0).line
return e}function he(e){for(var t,r;t=ue(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}function pe(e,t){var r=T(e,t),n=de(r)
return r==n?t:W(n)}function ge(e,t){if(t>e.lastLine())return t
var r,n=T(e,t)
if(!me(e,n))return t
for(;r=ue(n);)n=r.find(1,!0).line
return W(n)+1}function me(e,t){var r=_a&&t.markedSpans
if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&ve(e,t,n))return!0}}function ve(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return ve(e,n.line,_(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&ve(e,t,i))return!0}function ye(e){for(var t=0,r=(e=de(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;r=o,o=r.parent)for(var a=0;a<o.children.length;++a){var l=o.children[a]
if(l==r)break
t+=l.height}return t}function be(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=se(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=ue(n);){var o=t.find(0,!0)
r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch}return r}function we(e){var t=e.display,r=e.doc
t.maxLine=T(r,r.first),t.maxLineLength=be(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=be(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function xe(e,t,r,n){if(!e)return n(t,r,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<r&&a.to>t||t==r&&a.to==t)&&(n(Math.max(a.from,t),Math.min(a.to,r),1==a.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}function ke(e,t,r){var n
Xa=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==r?n=i:Xa=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:Xa=i)}return null!=n?n:Xa}function Ce(e,t){var r=e.order
return null==r&&(r=e.order=Ya(e.text,t)),r}function Se(e,t){return e._handlers&&e._handlers[t]||Za}function Le(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers,i=n&&n[t]
if(i){var o=f(i,r)
o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function Me(e,t){var r=Se(e,t)
if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function Te(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Me(e,r||t.type,e,t),De(t)||t.codemirrorIgnore}function Ne(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==f(r,t[n])&&r.push(t[n])}function Ae(e,t){return Se(e,t).length>0}function Oe(e){e.prototype.on=function(e,t){Qa(this,e,t)},e.prototype.off=function(e,t){Le(this,e,t)}}function We(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ze(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function De(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function He(e){We(e),ze(e)}function Pe(e){return e.target||e.srcElement}function Ee(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),Ta&&e.ctrlKey&&1==t&&(t=3),t}function Ie(e){if(null==Ia){var t=n("span","​")
r(e,n("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Ia=t.offsetWidth<=1&&t.offsetHeight>2&&!(ga&&ma<8))}var i=Ia?n("span","​"):n("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return i.setAttribute("cm-text",""),i}function Fe(e){if(null!=Fa)return Fa
var n=r(e,document.createTextNode("AخA")),i=Wa(n,0,1).getBoundingClientRect(),o=Wa(n,1,2).getBoundingClientRect()
return t(e),!(!i||i.left==i.right)&&(Fa=o.right-i.right<3)}function Re(e){if(null!=nl)return nl
var t=r(e,n("span","x")),i=t.getBoundingClientRect(),o=Wa(t,0,1).getBoundingClientRect()
return nl=Math.abs(i.left-o.left)>1}function Be(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),il[e]=t}function je(e){if("string"==typeof e&&ol.hasOwnProperty(e))e=ol[e]
else if(e&&"string"==typeof e.name&&ol.hasOwnProperty(e.name)){var t=ol[e.name]
"string"==typeof t&&(t={name:t}),(e=b(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return je("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return je("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ve(e,t){t=je(t)
var r=il[t.name]
if(!r)return Ve(e,"text/plain")
var n=r(e,t)
if(al.hasOwnProperty(t.name)){var i=al[t.name]
for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)n[a]=t.modeProps[a]
return n}function Ke(e,t){c(t,al.hasOwnProperty(e)?al[e]:al[e]={})}function Ge(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function Ue(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode
return r||{mode:e,state:t}}function qe(e,t,r){return!e.startState||e.startState(t,r)}function $e(e,t,r,n){var i=[e.state.modeGen],o={}
tt(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n)
for(var a=r.state,l=0;l<e.state.overlays.length;++l)!function(n){var a=e.state.overlays[n],l=1,s=0
r.state=!0,tt(e,t.text,a.mode,r,function(e,t){for(var r=l;s<e;){var n=i[l]
n>e&&i.splice(l,1,e,i[l+1],n),l+=2,s=Math.min(e,n)}if(t)if(a.opaque)i.splice(r,l-r,e,"overlay "+t),l=r+2
else for(;r<l;r+=2){var o=i[r+1]
i[r+1]=(o?o+" ":"")+"overlay "+t}},o)}(l)
return r.state=a,{styles:i,classes:o.bgClass||o.textClass?o:null}}function _e(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=Xe(e,W(t)),i=t.text.length>e.options.maxHighlightLength&&Ge(e.doc.mode,n.state),o=$e(e,t,n)
i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function Xe(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return new ul(n,!0,t)
var o=rt(e,t,r),a=o>n.first&&T(n,o-1).stateAfter,l=a?ul.fromSaved(n,a,o):new ul(n,qe(n.mode),o)
return n.iter(o,t,function(r){Ye(e,r.text,l)
var n=l.line
r.stateAfter=n==t-1||n%5==0||n>=i.viewFrom&&n<i.viewTo?l.save():null,l.nextLine()}),r&&(n.modeFrontier=l.line),l}function Ye(e,t,r,n){var i=e.doc.mode,o=new ll(t,e.options.tabSize,r)
for(o.start=o.pos=n||0,""==t&&Ze(i,r.state);!o.eol();)Qe(i,o,r.state),o.start=o.pos}function Ze(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var r=Ue(e,t)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function Qe(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Ue(e,r).mode)
var o=e.token(t,r)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function Je(e,t,r,n){var i,o,a=e.doc,l=a.mode,s=T(a,(t=V(a,t)).line),u=Xe(e,t.line,r),c=new ll(s.text,e.options.tabSize,u)
for(n&&(o=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=Qe(l,c,u.state),n&&o.push(new cl(c,i,Ge(a.mode,u.state)))
return n?o:new cl(c,i,u.state)}function et(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function tt(e,t,r,n,i,o,a){var l=r.flattenSpans
null==l&&(l=e.options.flattenSpans)
var s,u=0,c=null,d=new ll(t,e.options.tabSize,n),f=e.options.addModeClass&&[null]
for(""==t&&et(Ze(r,n.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(l=!1,a&&Ye(e,t,n,d.pos),d.pos=t.length,s=null):s=et(Qe(r,d,n.state,f),o),f){var h=f[0].name
h&&(s="m-"+(s?h+" "+s:h))}if(!l||c!=s){for(;u<d.start;)i(u=Math.min(d.start,u+5e3),c)
c=s}d.start=d.pos}for(;u<d.pos;){var p=Math.min(d.pos,u+5e3)
i(p,c),u=p}}function rt(e,t,r){for(var n,i,o=e.doc,a=r?-1:t-(e.doc.mode.innerMode?1e3:100),l=t;l>a;--l){if(l<=o.first)return o.first
var s=T(o,l-1),u=s.stateAfter
if(u&&(!r||l+(u instanceof sl?u.lookAhead:0)<=o.modeFrontier))return l
var c=d(s.text,null,e.options.tabSize);(null==i||n>c)&&(i=l-1,n=c)}return i}function nt(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;n>r;n--){var i=T(e,n).stateAfter
if(i&&(!(i instanceof sl)||n+i.lookAhead<t)){r=n+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}}function it(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),re(e),ne(e,r)
var i=n?n(e):1
i!=e.height&&O(e,i)}function ot(e){e.parent=null,re(e)}function at(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?pl:hl
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function lt(e,t){var r=i("span",null,null,va?"padding-right: .1px":null),n={pre:i("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:(ga||va)&&e.getOption("lineWrapping")}
t.measure={}
for(var o=0;o<=(t.rest?t.rest.length:0);o++){var a=o?t.rest[o-1]:t.line,l=void 0
n.pos=0,n.addToken=ut,Fe(e.display.measure)&&(l=Ce(a,e.doc.direction))&&(n.addToken=dt(n.addToken,l)),n.map=[],ht(a,n,_e(e,a,t!=e.display.externalMeasured&&W(a))),a.styleClasses&&(a.styleClasses.bgClass&&(n.bgClass=s(a.styleClasses.bgClass,n.bgClass||"")),a.styleClasses.textClass&&(n.textClass=s(a.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Ie(e.display.measure))),0==o?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(va){var u=n.content.lastChild;(/\bcm-tab\b/.test(u.className)||u.querySelector&&u.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return Me(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=s(n.pre.className,n.textClass||"")),n}function st(e){var t=n("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function ut(e,t,r,i,o,a,l){if(t){var s,u=e.splitSpaces?ct(t,e.trailingSpace):t,c=e.cm.state.specialChars,d=!1
if(c.test(t)){s=document.createDocumentFragment()
for(var f=0;;){c.lastIndex=f
var h=c.exec(t),g=h?h.index-f:t.length-f
if(g){var m=document.createTextNode(u.slice(f,f+g))
ga&&ma<9?s.appendChild(n("span",[m])):s.appendChild(m),e.map.push(e.pos,e.pos+g,m),e.col+=g,e.pos+=g}if(!h)break
f+=g+1
var v=void 0
if("\t"==h[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(v=s.appendChild(n("span",p(b),"cm-tab"))).setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==h[0]||"\n"==h[0]?((v=s.appendChild(n("span","\r"==h[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",h[0]),e.col+=1):((v=e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text",h[0]),ga&&ma<9?s.appendChild(n("span",[v])):s.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,s=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,s),ga&&ma<9&&(d=!0),e.pos+=t.length
if(e.trailingSpace=32==u.charCodeAt(t.length-1),r||i||o||d||l){var w=r||""
i&&(w+=i),o&&(w+=o)
var x=n("span",[s],w,l)
return a&&(x.title=a),e.content.appendChild(x)}e.content.appendChild(s)}}function ct(e,t){if(e.length>1&&!/  /.test(e))return e
for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}function dt(e,t){return function(r,n,i,o,a,l,s){i=i?i+" cm-force-border":"cm-force-border"
for(var u=r.pos,c=u+n.length;;){for(var d=void 0,f=0;f<t.length&&!((d=t[f]).to>u&&d.from<=u);f++);if(d.to>=c)return e(r,n,i,o,a,l,s)
e(r,n.slice(0,d.to-u),i,o,null,l,s),o=null,n=n.slice(d.to-u),u=d.to}}}function ft(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function ht(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var a,l,s,u,c,d,f,h=i.length,p=0,g=1,m="",v=0;;){if(v==p){s=u=c=d=l="",f=null,v=1/0
for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],k=x.marker
"bookmark"==k.type&&x.from==p&&k.widgetNode?y.push(k):x.from<=p&&(null==x.to||x.to>p||k.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&v>x.to&&(v=x.to,u=""),k.className&&(s+=" "+k.className),k.css&&(l=(l?l+";":"")+k.css),k.startStyle&&x.from==p&&(c+=" "+k.startStyle),k.endStyle&&x.to==v&&(b||(b=[])).push(k.endStyle,x.to),k.title&&!d&&(d=k.title),k.collapsed&&(!f||ae(f.marker,k)<0)&&(f=x)):x.from>p&&v>x.from&&(v=x.from)}if(b)for(var C=0;C<b.length;C+=2)b[C+1]==v&&(u+=" "+b[C])
if(!f||f.from==p)for(var S=0;S<y.length;++S)ft(t,0,y[S])
if(f&&(f.from||0)==p){if(ft(t,(null==f.to?h+1:f.to)-p,f.marker,null==f.from),null==f.to)return
f.to==p&&(f=!1)}}if(p>=h)break
for(var L=Math.min(h,v);;){if(m){var M=p+m.length
if(!f){var T=M>L?m.slice(0,L-p):m
t.addToken(t,T,a?a+s:s,c,p+T.length==v?u:"",d,l)}if(M>=L){m=m.slice(L-p),p=L
break}p=M,c=""}m=i.slice(o,o=r[g++]),a=at(r[g++],t.cm.options)}}else for(var N=1;N<r.length;N+=2)t.addToken(t,i.slice(o,o=r[N]),at(r[N+1],t.cm.options))}function pt(e,t,r){this.line=t,this.rest=he(t),this.size=this.rest?W(g(this.rest))-r+1:1,this.node=this.text=null,this.hidden=me(e,t)}function gt(e,t,r){for(var n,i=[],o=t;o<r;o=n){var a=new pt(e.doc,T(e.doc,o),o)
n=o+a.size,i.push(a)}return i}function mt(e){gl?gl.ops.push(e):e.ownsGroup=gl={ops:[e],delayedCallbacks:[]}}function vt(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r].call(null)
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}function yt(e,t){var r=e.ownsGroup
if(r)try{vt(r)}finally{gl=null,t(r)}}function bt(e,t){var r=Se(e,t)
if(r.length){var n,i=Array.prototype.slice.call(arguments,2)
gl?n=gl.delayedCallbacks:ml?n=ml:(n=ml=[],setTimeout(wt,0))
for(var o=0;o<r.length;++o)!function(e){n.push(function(){return r[e].apply(null,i)})}(o)}}function wt(){var e=ml
ml=null
for(var t=0;t<e.length;++t)e[t]()}function xt(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?Lt(e,t):"gutter"==o?Tt(e,t,r,n):"class"==o?Mt(e,t):"widget"==o&&Nt(e,t,n)}t.changes=null}function kt(e){return e.node==e.text&&(e.node=n("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),ga&&ma<8&&(e.node.style.zIndex=2)),e.node}function Ct(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(r){var i=kt(t)
t.background=i.insertBefore(n("div",null,r),i.firstChild),e.display.input.setUneditable(t.background)}}function St(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):lt(e,t)}function Lt(e,t){var r=t.text.className,n=St(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,Mt(e,t)):r&&(t.text.className=r)}function Mt(e,t){Ct(e,t),t.line.wrapClass?kt(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=r||""}function Tt(e,t,r,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var o=kt(t)
t.gutterBackground=n("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),o.insertBefore(t.gutterBackground,t.text)}var a=t.line.gutterMarkers
if(e.options.lineNumbers||a){var l=kt(t),s=t.gutter=n("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(s),l.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||a&&a["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(n("div",H(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),a)for(var u=0;u<e.options.gutters.length;++u){var c=e.options.gutters[u],d=a.hasOwnProperty(c)&&a[c]
d&&s.appendChild(n("div",[d],"CodeMirror-gutter-elt","left: "+i.gutterLeft[c]+"px; width: "+i.gutterWidth[c]+"px"))}}}function Nt(e,t,r){t.alignable&&(t.alignable=null)
for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n)
Ot(e,t,r)}function At(e,t,r,n){var i=St(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),Mt(e,t),Tt(e,t,r,n),Ot(e,t,n),t.node}function Ot(e,t,r){if(Wt(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)Wt(e,t.rest[n],t,r,!1)}function Wt(e,t,r,i,o){if(t.widgets)for(var a=kt(r),l=0,s=t.widgets;l<s.length;++l){var u=s[l],c=n("div",[u.node],"CodeMirror-linewidget")
u.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),zt(u,c,r,i),e.display.input.setUneditable(c),o&&u.above?a.insertBefore(c,r.gutter||r.text):a.appendChild(c),bt(u,"redraw")}}function zt(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function Dt(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!o(document.body,e.node)){var i="position: relative;"
e.coverGutter&&(i+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(i+="width: "+t.display.wrapper.clientWidth+"px;"),r(t.display.measure,n("div",[e.node],null,i))}return e.height=e.node.parentNode.offsetHeight}function Ht(e,t){for(var r=Pe(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function Pt(e){return e.lineSpace.offsetTop}function Et(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function It(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=r(e.measure,n("pre","x")),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,o={left:parseInt(i.paddingLeft),right:parseInt(i.paddingRight)}
return isNaN(o.left)||isNaN(o.right)||(e.cachedPaddingH=o),o}function Ft(e){return Ra-e.display.nativeBarWidth}function Rt(e){return e.display.scroller.clientWidth-Ft(e)-e.display.barWidth}function Bt(e){return e.display.scroller.clientHeight-Ft(e)-e.display.barHeight}function jt(e,t,r){var n=e.options.lineWrapping,i=n&&Rt(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),l=0;l<a.length-1;l++){var s=a[l],u=a[l+1]
Math.abs(s.bottom-u.bottom)>2&&o.push((s.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}function Vt(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var i=0;i<e.rest.length;i++)if(W(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Kt(e,t){var n=W(t=de(t)),i=e.display.externalMeasured=new pt(e.doc,t,n)
i.lineN=n
var o=i.built=lt(e,i)
return i.text=o.pre,r(e.display.lineMeasure,o.pre),i}function Gt(e,t,r,n){return $t(e,qt(e,t),r,n)}function Ut(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Sr(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function qt(e,t){var r=W(t),n=Ut(e,r)
n&&!n.text?n=null:n&&n.changes&&(xt(e,n,r,br(e)),e.curOp.forceUpdate=!0),n||(n=Kt(e,t))
var i=Vt(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function $t(e,t,r,n,i){t.before&&(r=-1)
var o,a=r+(n||"")
return t.cache.hasOwnProperty(a)?o=t.cache[a]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(jt(e,t.view,t.rect),t.hasHeights=!0),(o=Yt(e,t,r,n)).bogus||(t.cache[a]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function _t(e,t,r){for(var n,i,o,a,l,s,u=0;u<e.length;u+=3)if(l=e[u],s=e[u+1],t<l?(i=0,o=1,a="left"):t<s?o=1+(i=t-l):(u==e.length-3||t==s&&e[u+3]>t)&&(i=(o=s-l)-1,t>=s&&(a="right")),null!=i){if(n=e[u+2],l==s&&r==(n.insertLeft?"left":"right")&&(a=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[2+(u-=3)],a="left"
if("right"==r&&i==s-l)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],a="right"
break}return{node:n,start:i,end:o,collapse:a,coverStart:l,coverEnd:s}}function Xt(e,t){var r=vl
if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function Yt(e,t,r,n){var i,o=_t(t.map,r,n),a=o.node,l=o.start,s=o.end,u=o.collapse
if(3==a.nodeType){for(var c=0;c<4;c++){for(;l&&C(t.line.text.charAt(o.coverStart+l));)--l
for(;o.coverStart+s<o.coverEnd&&C(t.line.text.charAt(o.coverStart+s));)++s
if((i=ga&&ma<9&&0==l&&s==o.coverEnd-o.coverStart?a.parentNode.getBoundingClientRect():Xt(Wa(a,l,s).getClientRects(),n)).left||i.right||0==l)break
s=l,l-=1,u="right"}ga&&ma<11&&(i=Zt(e.display.measure,i))}else{l>0&&(u=n="right")
var d
i=e.options.lineWrapping&&(d=a.getClientRects()).length>1?d["right"==n?d.length-1:0]:a.getBoundingClientRect()}if(ga&&ma<9&&!l&&(!i||!i.left&&!i.right)){var f=a.parentNode.getClientRects()[0]
i=f?{left:f.left,right:f.left+yr(e.display),top:f.top,bottom:f.bottom}:vl}for(var h=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(h+p)/2,m=t.view.measure.heights,v=0;v<m.length-1&&!(g<m[v]);v++);var y=v?m[v-1]:0,b=m[v],w={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:y,bottom:b}
return i.left||i.right||(w.bogus=!0),e.options.singleCursorHeightPerLine||(w.rtop=h,w.rbottom=p),w}function Zt(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Re(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function Qt(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Jt(e){e.display.externalMeasure=null,t(e.display.lineMeasure)
for(var r=0;r<e.display.view.length;r++)Qt(e.display.view[r])}function er(e){Jt(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function tr(){return ba&&La?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function rr(){return ba&&La?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function nr(e){var t=0
if(e.widgets)for(var r=0;r<e.widgets.length;++r)e.widgets[r].above&&(t+=Dt(e.widgets[r]))
return t}function ir(e,t,r,n,i){if(!i){var o=nr(t)
r.top+=o,r.bottom+=o}if("line"==n)return r
n||(n="local")
var a=ye(t)
if("local"==n?a+=Pt(e.display):a-=e.display.viewOffset,"page"==n||"window"==n){var l=e.display.lineSpace.getBoundingClientRect()
a+=l.top+("window"==n?0:rr())
var s=l.left+("window"==n?0:tr())
r.left+=s,r.right+=s}return r.top+=a,r.bottom+=a,r}function or(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=tr(),i-=rr()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:n-a.left,top:i-a.top}}function ar(e,t,r,n,i){return n||(n=T(e.doc,t.line)),ir(e,n,Gt(e,n,t.ch,i),r)}function lr(e,t,r,n,i,o){function a(t,a){var l=$t(e,i,t,a?"right":"left",o)
return a?l.left=l.right:l.right=l.left,ir(e,n,l,r)}function l(e,t,r){var n=1==s[t].level
return a(r?e-1:e,n!=r)}n=n||T(e.doc,t.line),i||(i=qt(e,n))
var s=Ce(n,e.doc.direction),u=t.ch,c=t.sticky
if(u>=n.text.length?(u=n.text.length,c="before"):u<=0&&(u=0,c="after"),!s)return a("before"==c?u-1:u,"before"==c)
var d=ke(s,u,c),f=Xa,h=l(u,d,"before"==c)
return null!=f&&(h.other=l(u,f,"before"!=c)),h}function sr(e,t){var r=0
t=V(e.doc,t),e.options.lineWrapping||(r=yr(e.display)*t.ch)
var n=T(e.doc,t.line),i=ye(n)+Pt(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function ur(e,t,r,n,i){var o=P(e,t,r)
return o.xRel=i,n&&(o.outside=!0),o}function cr(e,t,r){var n=e.doc
if((r+=e.display.viewOffset)<0)return ur(n.first,0,null,!0,-1)
var i=z(n,r),o=n.first+n.size-1
if(i>o)return ur(n.first+n.size-1,T(n,o).text.length,null,!0,1)
t<0&&(t=0)
for(var a=T(n,i);;){var l=pr(e,a,i,t,r),s=ue(a),u=s&&s.find(0,!0)
if(!s||!(l.ch>u.from.ch||l.ch==u.from.ch&&l.xRel>0))return l
i=W(a=u.to.line)}}function dr(e,t,r,n){n-=nr(t)
var i=t.text.length,o=L(function(t){return $t(e,r,t-1).bottom<=n},i,0)
return i=L(function(t){return $t(e,r,t).top>n},o,i),{begin:o,end:i}}function fr(e,t,r,n){return r||(r=qt(e,t)),dr(e,t,r,ir(e,t,$t(e,r,n),"line").top)}function hr(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function pr(e,t,r,n,i){i-=ye(t)
var o=qt(e,t),a=nr(t),l=0,s=t.text.length,u=!0,c=Ce(t,e.doc.direction)
if(c){var d=(e.options.lineWrapping?mr:gr)(e,t,r,o,c,n,i)
l=(u=1!=d.level)?d.from:d.to-1,s=u?d.to:d.from-1}var f,h,p=null,g=null,m=L(function(t){var r=$t(e,o,t)
return r.top+=a,r.bottom+=a,!!hr(r,n,i,!1)&&(r.top<=i&&r.left<=n&&(p=t,g=r),!0)},l,s),v=!1
if(g){var y=n-g.left<g.right-n,b=y==u
m=p+(b?0:1),h=b?"after":"before",f=y?g.left:g.right}else{u||m!=s&&m!=l||m++,h=0==m?"after":m==t.text.length?"before":$t(e,o,m-(u?1:0)).bottom+a<=i==u?"after":"before"
var w=lr(e,P(r,m,h),"line",t,o)
f=w.left,v=i<w.top||i>=w.bottom}return m=S(t.text,m,1),ur(r,m,h,v,n-f)}function gr(e,t,r,n,i,o,a){var l=L(function(l){var s=i[l],u=1!=s.level
return hr(lr(e,P(r,u?s.to:s.from,u?"before":"after"),"line",t,n),o,a,!0)},0,i.length-1),s=i[l]
if(l>0){var u=1!=s.level,c=lr(e,P(r,u?s.from:s.to,u?"after":"before"),"line",t,n)
hr(c,o,a,!0)&&c.top>a&&(s=i[l-1])}return s}function mr(e,t,r,n,i,o,a){for(var l=dr(e,t,n,a),s=l.begin,u=l.end,c=null,d=null,f=0;f<i.length;f++){var h=i[f]
if(!(h.from>=u||h.to<=s)){var p=$t(e,n,1!=h.level?Math.min(u,h.to)-1:Math.max(s,h.from)).right,g=p<o?o-p+1e9:p-o;(!c||d>g)&&(c=h,d=g)}}return c||(c=i[i.length-1]),c.from<s&&(c={from:s,to:c.to,level:c.level}),c.to>u&&(c={from:c.from,to:u,level:c.level}),c}function vr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==fl){fl=n("pre")
for(var i=0;i<49;++i)fl.appendChild(document.createTextNode("x")),fl.appendChild(n("br"))
fl.appendChild(document.createTextNode("x"))}r(e.measure,fl)
var o=fl.offsetHeight/50
return o>3&&(e.cachedTextHeight=o),t(e.measure),o||1}function yr(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=n("span","xxxxxxxxxx"),i=n("pre",[t])
r(e.measure,i)
var o=t.getBoundingClientRect(),a=(o.right-o.left)/10
return a>2&&(e.cachedCharWidth=a),a||10}function br(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a)r[e.options.gutters[a]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[a]]=o.clientWidth
return{fixedPos:wr(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function wr(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function xr(e){var t=vr(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/yr(e.display)-3)
return function(i){if(me(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function kr(e){var t=e.doc,r=xr(e)
t.iter(function(e){var t=r(e)
t!=e.height&&O(e,t)})}function Cr(e,t,r,n){var i=e.display
if(!r&&"true"==Pe(t).getAttribute("cm-not-content"))return null
var o,a,l=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-l.left,a=t.clientY-l.top}catch(t){return null}var s,u=cr(e,o,a)
if(n&&1==u.xRel&&(s=T(e.doc,u.line).text).length==u.ch){var c=d(s,s.length,e.options.tabSize)-s.length
u=P(u.line,Math.max(0,Math.round((o-It(e.display).left)/yr(e.display))-c))}return u}function Sr(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function Lr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Mr(e,t){void 0===t&&(t=!0)
for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),a=0;a<r.sel.ranges.length;a++)if(t||a!=r.sel.primIndex){var l=r.sel.ranges[a]
if(!(l.from().line>=e.display.viewTo||l.to().line<e.display.viewFrom)){var s=l.empty();(s||e.options.showCursorWhenSelecting)&&Tr(e,l.head,i),s||Ar(e,l,o)}}return n}function Tr(e,t,r){var i=lr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),o=r.appendChild(n("div"," ","CodeMirror-cursor"))
if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",i.other){var a=r.appendChild(n("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
a.style.display="",a.style.left=i.other.left+"px",a.style.top=i.other.top+"px",a.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function Nr(e,t){return e.top-t.top||e.left-t.left}function Ar(e,t,r){function i(e,t,r,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),s.appendChild(n("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?d-e:r)+"px;\n                             height: "+(i-t)+"px"))}function o(t,r,n){function o(r,n){return ar(e,P(t,r),"div",u,n)}var a,s,u=T(l,t),f=u.text.length,h=Ce(u,l.direction)
return xe(h,r||0,null==n?f:n,function(t,l,p,g){var m=o(t,"ltr"==p?"left":"right"),v=o(l-1,"ltr"==p?"right":"left")
if("ltr"==p){var y=null==r&&0==t?c:m.left,b=null==n&&l==f?d:v.right
v.top-m.top<=3?i(y,v.top,b-y,v.bottom):(i(y,m.top,null,m.bottom),m.bottom<v.top&&i(c,m.bottom,null,v.top),i(c,v.top,v.right,v.bottom))}else if(t<l){var w=null==r&&0==t?d:m.right,x=null==n&&l==f?c:v.left
if(v.top-m.top<=3)i(x,v.top,w-x,v.bottom)
else{var k=c
if(g){var C=fr(e,u,null,t).end
k=o(C-(/\s/.test(u.text.charAt(C-1))?2:1),"left").left}i(k,m.top,w-k,m.bottom),m.bottom<v.top&&i(c,m.bottom,null,v.top)
var S=null
h.length,S=o(fr(e,u,null,l).begin,"right").right-x,i(x,v.top,S,v.bottom)}}(!a||Nr(m,a)<0)&&(a=m),Nr(v,a)<0&&(a=v),(!s||Nr(m,s)<0)&&(s=m),Nr(v,s)<0&&(s=v)}),{start:a,end:s}}var a=e.display,l=e.doc,s=document.createDocumentFragment(),u=It(e.display),c=u.left,d=Math.max(a.sizerWidth,Rt(e)-a.sizer.offsetLeft)-u.right,f=t.from(),h=t.to()
if(f.line==h.line)o(f.line,f.ch,h.ch)
else{var p=T(l,f.line),g=T(l,h.line),m=de(p)==de(g),v=o(f.line,f.ch,m?p.text.length+1:null).end,y=o(h.line,m?0:null,h.ch).start
m&&(v.top<y.top-2?(i(v.right,v.top,null,v.bottom),i(c,y.top,y.left,y.bottom)):i(v.right,v.top,y.left-v.right,v.bottom)),v.bottom<y.top&&i(c,v.bottom,null,y.top)}r.appendChild(s)}function Or(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Wr(e){e.state.focused||(e.display.input.focus(),Dr(e))}function zr(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Hr(e))},100)}function Dr(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Me(e,"focus",e,t),e.state.focused=!0,l(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),va&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Or(e))}function Hr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(Me(e,"blur",e,t),e.state.focused=!1,Ha(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Pr(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=void 0
if(!i.hidden){if(ga&&ma<8){var a=i.node.offsetTop+i.node.offsetHeight
o=a-r,r=a}else{var l=i.node.getBoundingClientRect()
o=l.bottom-l.top}var s=i.line.height-o
if(o<2&&(o=vr(t)),(s>.005||s<-.005)&&(O(i.line,o),Er(i.line),i.rest))for(var u=0;u<i.rest.length;u++)Er(i.rest[u])}}}function Er(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight}function Ir(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-Pt(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=z(t,n),a=z(t,i)
if(r&&r.ensure){var l=r.ensure.from.line,s=r.ensure.to.line
l<o?(o=l,a=z(t,ye(T(t,l))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=a&&(o=z(t,ye(T(t,s))-e.wrapper.clientHeight),a=s)}return{from:o,to:Math.max(a,o+1)}}function Fr(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=wr(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",a=0;a<r.length;a++)if(!r[a].hidden){e.options.fixedGutter&&(r[a].gutter&&(r[a].gutter.style.left=o),r[a].gutterBackground&&(r[a].gutterBackground.style.left=o))
var l=r[a].alignable
if(l)for(var s=0;s<l.length;s++)l[s].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function Rr(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=H(e.options,t.first+t.size-1),i=e.display
if(r.length!=i.lineNumChars){var o=i.measure.appendChild(n("div",[n("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),a=o.firstChild.offsetWidth,l=o.offsetWidth-a
return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(a,i.lineGutter.offsetWidth-l)+1,i.lineNumWidth=i.lineNumInnerWidth+l,i.lineNumChars=i.lineNumInnerWidth?r.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",Wn(e),!0}return!1}function Br(e,t){if(!Te(e,"scrollCursorIntoView")){var r=e.display,i=r.sizer.getBoundingClientRect(),o=null
if(t.top+i.top<0?o=!0:t.bottom+i.top>(window.innerHeight||document.documentElement.clientHeight)&&(o=!1),null!=o&&!Ca){var a=n("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-Pt(e.display))+"px;\n                         height: "+(t.bottom-t.top+Ft(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(a),a.scrollIntoView(o),e.display.lineSpace.removeChild(a)}}}function jr(e,t,r,n){null==n&&(n=0)
var i
e.options.lineWrapping||t!=r||(r="before"==(t=t.ch?P(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?P(t.line,t.ch+1,"before"):t)
for(var o=0;o<5;o++){var a=!1,l=lr(e,t),s=r&&r!=t?lr(e,r):l,u=Kr(e,i={left:Math.min(l.left,s.left),top:Math.min(l.top,s.top)-n,right:Math.max(l.left,s.left),bottom:Math.max(l.bottom,s.bottom)+n}),c=e.doc.scrollTop,d=e.doc.scrollLeft
if(null!=u.scrollTop&&(Yr(e,u.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(a=!0)),null!=u.scrollLeft&&(Qr(e,u.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}function Vr(e,t){var r=Kr(e,t)
null!=r.scrollTop&&Yr(e,r.scrollTop),null!=r.scrollLeft&&Qr(e,r.scrollLeft)}function Kr(e,t){var r=e.display,n=vr(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Bt(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var l=e.doc.height+Et(r),s=t.top<n,u=t.bottom>l-n
if(t.top<i)a.scrollTop=s?0:t.top
else if(t.bottom>i+o){var c=Math.min(t.top,(u?l:t.bottom)-o)
c!=i&&(a.scrollTop=c)}var d=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,f=Rt(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),h=t.right-t.left>f
return h&&(t.right=t.left+f),t.left<10?a.scrollLeft=0:t.left<d?a.scrollLeft=Math.max(0,t.left-(h?0:10)):t.right>f+d-3&&(a.scrollLeft=t.right+(h?0:10)-f),a}function Gr(e,t){null!=t&&(_r(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function Ur(e){_r(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function qr(e,t,r){null==t&&null==r||_r(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function $r(e,t){_r(e),e.curOp.scrollToPos=t}function _r(e){var t=e.curOp.scrollToPos
t&&(e.curOp.scrollToPos=null,Xr(e,sr(e,t.from),sr(e,t.to),t.margin))}function Xr(e,t,r,n){var i=Kr(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n})
qr(e,i.scrollLeft,i.scrollTop)}function Yr(e,t){Math.abs(e.doc.scrollTop-t)<2||(da||An(e,{top:t}),Zr(e,t,!0),da&&An(e),kn(e,100))}function Zr(e,t,r){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Qr(e,t,r,n){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,Fr(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Jr(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Et(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Ft(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function en(e,t){t||(t=Jr(e))
var r=e.display.barWidth,n=e.display.barHeight
tn(e,t)
for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Pr(e),tn(e,Jr(e)),r=e.display.barWidth,n=e.display.barHeight}function tn(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}function rn(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ha(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new wl[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),Qa(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?Qr(e,t):Yr(e,t)},e),e.display.scrollbars.addClass&&l(e.display.wrapper,e.display.scrollbars.addClass)}function nn(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++xl},mt(e.curOp)}function on(e){yt(e.curOp,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
an(e)})}function an(e){for(var t=e.ops,r=0;r<t.length;r++)ln(t[r])
for(var n=0;n<t.length;n++)sn(t[n])
for(var i=0;i<t.length;i++)un(t[i])
for(var o=0;o<t.length;o++)cn(t[o])
for(var a=0;a<t.length;a++)dn(t[a])}function ln(e){var t=e.cm,r=t.display
Sn(t),e.updateMaxLine&&we(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new kl(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function sn(e){e.updatedDisplay=e.mustUpdate&&Tn(e.cm,e.update)}function un(e){var t=e.cm,r=t.display
e.updatedDisplay&&Pr(t),e.barMeasure=Jr(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Gt(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Ft(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Rt(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function cn(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Qr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var r=e.focus&&e.focus==a()
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&en(t,e.barMeasure),e.updatedDisplay&&zn(t,e.barMeasure),e.selectionChanged&&Or(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Wr(e.cm)}function dn(e){var t=e.cm,r=t.display,n=t.doc
e.updatedDisplay&&Nn(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&Zr(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Qr(t,e.scrollLeft,!0,!0),e.scrollToPos&&Br(t,jr(t,V(n,e.scrollToPos.from),V(n,e.scrollToPos.to),e.scrollToPos.margin))
var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers
if(i)for(var a=0;a<i.length;++a)i[a].lines.length||Me(i[a],"hide")
if(o)for(var l=0;l<o.length;++l)o[l].lines.length&&Me(o[l],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Me(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function fn(e,t){if(e.curOp)return t()
nn(e)
try{return t()}finally{on(e)}}function hn(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
nn(e)
try{return t.apply(e,arguments)}finally{on(e)}}}function pn(e){return function(){if(this.curOp)return e.apply(this,arguments)
nn(this)
try{return e.apply(this,arguments)}finally{on(this)}}}function gn(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
nn(t)
try{return e.apply(this,arguments)}finally{on(t)}}}function mn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)_a&&pe(e.doc,t)<i.viewTo&&yn(e)
else if(r<=i.viewFrom)_a&&ge(e.doc,r+n)>i.viewFrom?yn(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)yn(e)
else if(t<=i.viewFrom){var o=bn(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):yn(e)}else if(r>=i.viewTo){var a=bn(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):yn(e)}else{var l=bn(e,t,t,-1),s=bn(e,r,r+n,1)
l&&s?(i.view=i.view.slice(0,l.index).concat(gt(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):yn(e)}var u=i.externalMeasured
u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function vn(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Sr(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[]);-1==f(a,r)&&a.push(r)}}}function yn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function bn(e,t,r,n){var i,o=Sr(e,t),a=e.display.view
if(!_a||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var l=e.display.viewFrom,s=0;s<o;s++)l+=a[s].size
if(l!=t){if(n>0){if(o==a.length-1)return null
i=l+a[o].size-t,o++}else i=l-t
t+=i,r+=i}for(;pe(e.doc,r)!=r;){if(o==(n<0?0:a.length-1))return null
r+=n*a[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function wn(e,t,r){var n=e.display
0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=gt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=gt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Sr(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(gt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Sr(e,r)))),n.viewTo=r}function xn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function kn(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,u(Cn,e))}function Cn(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=Xe(e,t.highlightFrontier),i=[]
t.iter(n.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(n.line>=e.display.viewFrom){var a=o.styles,l=o.text.length>e.options.maxHighlightLength?Ge(t.mode,n.state):null,s=$e(e,o,n,!0)
l&&(n.state=l),o.styles=s.styles
var u=o.styleClasses,c=s.classes
c?o.styleClasses=c:u&&(o.styleClasses=null)
for(var d=!a||a.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),f=0;!d&&f<a.length;++f)d=a[f]!=o.styles[f]
d&&i.push(n.line),o.stateAfter=n.save(),n.nextLine()}else o.text.length<=e.options.maxHighlightLength&&Ye(e,o.text,n),o.stateAfter=n.line%5==0?n.save():null,n.nextLine()
if(+new Date>r)return kn(e,e.options.workDelay),!0}),t.highlightFrontier=n.line,t.modeFrontier=Math.max(t.modeFrontier,n.line),i.length&&fn(e,function(){for(var t=0;t<i.length;t++)vn(e,i[t],"text")})}}function Sn(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Ft(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Ft(e)+"px",t.scrollbarsClipped=!0)}function Ln(e){if(e.hasFocus())return null
var t=a()
if(!t||!o(e.display.lineDiv,t))return null
var r={activeElt:t}
if(window.getSelection){var n=window.getSelection()
n.anchorNode&&n.extend&&o(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}function Mn(e){if(e&&e.activeElt&&e.activeElt!=a()&&(e.activeElt.focus(),e.anchorNode&&o(document.body,e.anchorNode)&&o(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange()
r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset)}}function Tn(e,r){var n=e.display,i=e.doc
if(r.editorIsHidden)return yn(e),!1
if(!r.force&&r.visible.from>=n.viewFrom&&r.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==xn(e))return!1
Rr(e)&&(yn(e),r.dims=br(e))
var o=i.first+i.size,a=Math.max(r.visible.from-e.options.viewportMargin,i.first),l=Math.min(o,r.visible.to+e.options.viewportMargin)
n.viewFrom<a&&a-n.viewFrom<20&&(a=Math.max(i.first,n.viewFrom)),n.viewTo>l&&n.viewTo-l<20&&(l=Math.min(o,n.viewTo)),_a&&(a=pe(e.doc,a),l=ge(e.doc,l))
var s=a!=n.viewFrom||l!=n.viewTo||n.lastWrapHeight!=r.wrapperHeight||n.lastWrapWidth!=r.wrapperWidth
wn(e,a,l),n.viewOffset=ye(T(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px"
var u=xn(e)
if(!s&&0==u&&!r.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1
var c=Ln(e)
return u>4&&(n.lineDiv.style.display="none"),On(e,n.updateLineNumbers,r.dims),u>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,Mn(c),t(n.cursorDiv),t(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,s&&(n.lastWrapHeight=r.wrapperHeight,n.lastWrapWidth=r.wrapperWidth,kn(e,400)),n.updateLineNumbers=null,!0}function Nn(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Rt(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Et(e.display)-Bt(e),r.top)}),t.visible=Ir(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&Tn(e,t);n=!1){Pr(e)
var i=Jr(e)
Lr(e),en(e,i),zn(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function An(e,t){var r=new kl(e,t)
if(Tn(e,r)){Pr(e),Nn(e,r)
var n=Jr(e)
Lr(e),en(e,n),zn(e,n),r.finish()}}function On(e,r,n){function i(t){var r=t.nextSibling
return va&&Ta&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var o=e.display,a=e.options.lineNumbers,l=o.lineDiv,s=l.firstChild,u=o.view,c=o.viewFrom,d=0;d<u.length;d++){var h=u[d]
if(h.hidden);else if(h.node&&h.node.parentNode==l){for(;s!=h.node;)s=i(s)
var p=a&&null!=r&&r<=c&&h.lineNumber
h.changes&&(f(h.changes,"gutter")>-1&&(p=!1),xt(e,h,c,n)),p&&(t(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(H(e.options,c)))),s=h.node.nextSibling}else{var g=At(e,h,c,n)
l.insertBefore(g,s)}c+=h.size}for(;s;)s=i(s)}function Wn(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function zn(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Ft(e)+"px"}function Dn(e){var r=e.display.gutters,i=e.options.gutters
t(r)
for(var o=0;o<i.length;++o){var a=i[o],l=r.appendChild(n("div",null,"CodeMirror-gutter "+a))
"CodeMirror-linenumbers"==a&&(e.display.lineGutter=l,l.style.width=(e.display.lineNumWidth||1)+"px")}r.style.display=o?"":"none",Wn(e)}function Hn(e){var t=f(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function Pn(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function En(e){var t=Pn(e)
return t.x*=Sl,t.y*=Sl,t}function In(e,t){var r=Pn(t),n=r.x,i=r.y,o=e.display,a=o.scroller,l=a.scrollWidth>a.clientWidth,s=a.scrollHeight>a.clientHeight
if(n&&l||i&&s){if(i&&Ta&&va)e:for(var u=t.target,c=o.view;u!=a;u=u.parentNode)for(var d=0;d<c.length;d++)if(c[d].node==u){e.display.currentWheelTarget=u
break e}if(n&&!da&&!wa&&null!=Sl)return i&&s&&Yr(e,Math.max(0,a.scrollTop+i*Sl)),Qr(e,Math.max(0,a.scrollLeft+n*Sl)),(!i||i&&s)&&We(t),void(o.wheelStartX=null)
if(i&&null!=Sl){var f=i*Sl,h=e.doc.scrollTop,p=h+o.wrapper.clientHeight
f<0?h=Math.max(0,h+f-50):p=Math.min(e.doc.height,p+f+50),An(e,{top:h,bottom:p})}Cl<20&&(null==o.wheelStartX?(o.wheelStartX=a.scrollLeft,o.wheelStartY=a.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=a.scrollLeft-o.wheelStartX,t=a.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,r&&(Sl=(Sl*Cl+r)/(Cl+1),++Cl)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}function Fn(e,t){var r=e[t]
e.sort(function(e,t){return E(e.from(),t.from())}),t=f(e,r)
for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1]
if(E(o.to(),i.from())>=0){var a=B(o.from(),i.from()),l=R(o.to(),i.to()),s=o.empty()?i.from()==i.head:o.from()==o.head
n<=t&&--t,e.splice(--n,2,new Ml(s?l:a,s?a:l))}}return new Ll(e,t)}function Rn(e,t){return new Ll([new Ml(e,t||e)],0)}function Bn(e){return e.text?P(e.from.line+e.text.length-1,g(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function jn(e,t){if(E(e,t.from)<0)return e
if(E(e,t.to)<=0)return Bn(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Bn(t).ch-t.to.ch),P(r,n)}function Vn(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new Ml(jn(i.anchor,t),jn(i.head,t)))}return Fn(r,e.sel.primIndex)}function Kn(e,t,r){return e.line==t.line?P(r.line,e.ch-t.ch+r.ch):P(r.line+(e.line-t.line),e.ch)}function Gn(e,t,r){for(var n=[],i=P(e.first,0),o=i,a=0;a<t.length;a++){var l=t[a],s=Kn(l.from,i,o),u=Kn(Bn(l),i,o)
if(i=l.to,o=u,"around"==r){var c=e.sel.ranges[a],d=E(c.head,c.anchor)<0
n[a]=new Ml(d?u:s,d?s:u)}else n[a]=new Ml(s,s)}return new Ll(n,e.sel.primIndex)}function Un(e){e.doc.mode=Ve(e.options,e.doc.modeOption),qn(e)}function qn(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,kn(e,100),e.state.modeGen++,e.curOp&&mn(e)}function $n(e,t){return 0==t.from.ch&&0==t.to.ch&&""==g(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function _n(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){it(e,r,i,n),bt(e,"change",e,t)}function a(e,t){for(var r=[],o=e;o<t;++o)r.push(new dl(u[o],i(o),n))
return r}var l=t.from,s=t.to,u=t.text,c=T(e,l.line),d=T(e,s.line),f=g(u),h=i(u.length-1),p=s.line-l.line
if(t.full)e.insert(0,a(0,u.length)),e.remove(u.length,e.size-u.length)
else if($n(e,t)){var m=a(0,u.length-1)
o(d,d.text,h),p&&e.remove(l.line,p),m.length&&e.insert(l.line,m)}else if(c==d)if(1==u.length)o(c,c.text.slice(0,l.ch)+f+c.text.slice(s.ch),h)
else{var v=a(1,u.length-1)
v.push(new dl(f+c.text.slice(s.ch),h,n)),o(c,c.text.slice(0,l.ch)+u[0],i(0)),e.insert(l.line+1,v)}else if(1==u.length)o(c,c.text.slice(0,l.ch)+u[0]+d.text.slice(s.ch),i(0)),e.remove(l.line+1,p)
else{o(c,c.text.slice(0,l.ch)+u[0],i(0)),o(d,f+d.text.slice(s.ch),h)
var y=a(1,u.length-1)
p>1&&e.remove(l.line+1,p-1),e.insert(l.line+1,y)}bt(e,"change",e,t)}function Xn(e,t,r){function n(e,i,o){if(e.linked)for(var a=0;a<e.linked.length;++a){var l=e.linked[a]
if(l.doc!=i){var s=o&&l.sharedHist
r&&!s||(t(l.doc,s),n(l.doc,e,s))}}}n(e,null,!0)}function Yn(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,kr(e),Un(e),Zn(e),e.options.lineWrapping||we(e),e.options.mode=t.modeOption,mn(e)}function Zn(e){("rtl"==e.doc.direction?l:Ha)(e.display.lineDiv,"CodeMirror-rtl")}function Qn(e){fn(e,function(){Zn(e),mn(e)})}function Jn(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function ei(e,t){var r={from:F(t.from),to:Bn(t),text:N(e,t.from,t.to)}
return li(e,r,t.from.line,t.to.line+1),Xn(e,function(e){return li(e,r,t.from.line,t.to.line+1)},!0),r}function ti(e){for(;e.length&&g(e).ranges;)e.pop()}function ri(e,t){return t?(ti(e.done),g(e.done)):e.done.length&&!g(e.done).ranges?g(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),g(e.done)):void 0}function ni(e,t,r,n){var i=e.history
i.undone.length=0
var o,a,l=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>l-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=ri(i,i.lastOp==n)))a=g(o.changes),0==E(t.from,t.to)&&0==E(t.from,a.to)?a.to=Bn(t):o.changes.push(ei(e,t))
else{var s=g(i.done)
for(s&&s.ranges||ai(e.sel,i.done),o={changes:[ei(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,a||Me(e,"historyAdded")}function ii(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function oi(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||ii(e,o,g(i.done),t))?i.done[i.done.length-1]=t:ai(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&ti(i.undone)}function ai(e,t){var r=g(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function li(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function si(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function ui(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=[],i=0;i<t.text.length;++i)n.push(si(r[i]))
return n}function ci(e,t){var r=ui(e,t),n=J(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],a=n[i]
if(o&&a)e:for(var l=0;l<a.length;++l){for(var s=a[l],u=0;u<o.length;++u)if(o[u].marker==s.marker)continue e
o.push(s)}else a&&(r[i]=a)}return r}function di(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)n.push(r?Ll.prototype.deepCopy.call(o):o)
else{var a=o.changes,l=[]
n.push({changes:l})
for(var s=0;s<a.length;++s){var u=a[s],c=void 0
if(l.push({from:u.from,to:u.to,text:u.text}),t)for(var d in u)(c=d.match(/^spans_(\d+)$/))&&f(t,Number(c[1]))>-1&&(g(l)[d]=u[d],delete u[d])}}}return n}function fi(e,t,r,n){if(n){var i=e.anchor
if(r){var o=E(t,i)<0
o!=E(r,i)<0?(i=t,t=r):o!=E(t,r)<0&&(t=r)}return new Ml(i,t)}return new Ml(r||t,t)}function hi(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),bi(e,new Ll([fi(e.sel.primary(),t,r,i)],0),n)}function pi(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=fi(e.sel.ranges[o],t[o],null,i)
bi(e,Fn(n,e.sel.primIndex),r)}function gi(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,bi(e,Fn(i,e.sel.primIndex),n)}function mi(e,t,r,n){bi(e,Rn(t,r),n)}function vi(e,t,r){var n={ranges:t.ranges,update:function(t){var r=this
this.ranges=[]
for(var n=0;n<t.length;n++)r.ranges[n]=new Ml(V(e,t[n].anchor),V(e,t[n].head))},origin:r&&r.origin}
return Me(e,"beforeSelectionChange",e,n),e.cm&&Me(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?Fn(n.ranges,n.ranges.length-1):t}function yi(e,t,r){var n=e.history.done,i=g(n)
i&&i.ranges?(n[n.length-1]=t,wi(e,t,r)):bi(e,t,r)}function bi(e,t,r){wi(e,t,r),oi(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function wi(e,t,r){(Ae(e,"beforeSelectionChange")||e.cm&&Ae(e.cm,"beforeSelectionChange"))&&(t=vi(e,t,r)),xi(e,Ci(e,t,r&&r.bias||(E(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||Ur(e.cm)}function xi(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Ne(e.cm)),bt(e,"cursorActivity",e))}function ki(e){xi(e,Ci(e,e.sel,null,!1))}function Ci(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],l=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=Li(e,a.anchor,l&&l.anchor,r,n),u=Li(e,a.head,l&&l.head,r,n);(i||s!=a.anchor||u!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ml(s,u))}return i?Fn(i,t.primIndex):t}function Si(e,t,r,n,i){var o=T(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var l=o.markedSpans[a],s=l.marker
if((null==l.from||(s.inclusiveLeft?l.from<=t.ch:l.from<t.ch))&&(null==l.to||(s.inclusiveRight?l.to>=t.ch:l.to>t.ch))){if(i&&(Me(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!s.atomic)continue
if(r){var u=s.find(n<0?1:-1),c=void 0
if((n<0?s.inclusiveRight:s.inclusiveLeft)&&(u=Mi(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=E(u,r))&&(n<0?c<0:c>0))return Si(e,u,t,n,i)}var d=s.find(n<0?-1:1)
return(n<0?s.inclusiveLeft:s.inclusiveRight)&&(d=Mi(e,d,n,d.line==t.line?o:null)),d?Si(e,d,t,n,i):null}}return t}function Li(e,t,r,n,i){var o=n||1
return Si(e,t,r,o,i)||!i&&Si(e,t,r,o,!0)||Si(e,t,r,-o,i)||!i&&Si(e,t,r,-o,!0)||(e.cantEdit=!0,P(e.first,0))}function Mi(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?V(e,P(t.line-1)):null:r>0&&t.ch==(n||T(e,t.line)).text.length?t.line<e.first+e.size-1?P(t.line+1,0):null:new P(t.line,t.ch+r)}function Ti(e){e.setSelection(P(e.firstLine(),0),P(e.lastLine()),ja)}function Ni(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}}
return r&&(n.update=function(t,r,i,o){t&&(n.from=V(e,t)),r&&(n.to=V(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o)}),Me(e,"beforeChange",e,n),e.cm&&Me(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function Ai(e,t,r){if(e.cm){if(!e.cm.curOp)return hn(e.cm,Ai)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(Ae(e,"beforeChange")||e.cm&&Ae(e.cm,"beforeChange"))||(t=Ni(e,t,!0))){var n=$a&&!r&&te(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)Oi(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin})
else Oi(e,t)}}function Oi(e,t){if(1!=t.text.length||""!=t.text[0]||0!=E(t.from,t.to)){var r=Vn(e,t)
ni(e,t,r,e.cm?e.cm.curOp.id:NaN),Di(e,t,r,J(e,t))
var n=[]
Xn(e,function(e,r){r||-1!=f(n,e.history)||(Fi(e.history,t),n.push(e.history)),Di(e,t,null,J(e,t))})}}function Wi(e,t,r){if(!e.cm||!e.cm.state.suppressEdits||r){for(var n,i=e.history,o=e.sel,a="undo"==t?i.done:i.undone,l="undo"==t?i.undone:i.done,s=0;s<a.length&&(n=a[s],r?!n.ranges||n.equals(e.sel):n.ranges);s++);if(s!=a.length){for(i.lastOrigin=i.lastSelOrigin=null;(n=a.pop()).ranges;){if(ai(n,l),r&&!n.equals(e.sel))return void bi(e,n,{clearRedo:!1})
o=n}var u=[]
ai(o,l),l.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration
for(var c=Ae(e,"beforeChange")||e.cm&&Ae(e.cm,"beforeChange"),d=n.changes.length-1;d>=0;--d){var h=function(r){var i=n.changes[r]
if(i.origin=t,c&&!Ni(e,i,!1))return a.length=0,{}
u.push(ei(e,i))
var o=r?Vn(e,i):g(a)
Di(e,i,o,ci(e,i)),!r&&e.cm&&e.cm.scrollIntoView({from:i.from,to:Bn(i)})
var l=[]
Xn(e,function(e,t){t||-1!=f(l,e.history)||(Fi(e.history,i),l.push(e.history)),Di(e,i,null,ci(e,i))})}(d)
if(h)return h.v}}}}function zi(e,t){if(0!=t&&(e.first+=t,e.sel=new Ll(m(e.sel.ranges,function(e){return new Ml(P(e.anchor.line+t,e.anchor.ch),P(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){mn(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)vn(e.cm,n,"gutter")}}function Di(e,t,r,n){if(e.cm&&!e.cm.curOp)return hn(e.cm,Di)(e,t,r,n)
if(t.to.line<e.first)zi(e,t.text.length-1-(t.to.line-t.from.line))
else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
zi(e,i),t={from:P(e.first,0),to:P(t.to.line+i,t.to.ch),text:[g(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:P(o,T(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=N(e,t.from,t.to),r||(r=Vn(e,t)),e.cm?Hi(e.cm,t,n):_n(e,t,n),wi(e,r,ja)}}function Hi(e,t,r){var n=e.doc,i=e.display,o=t.from,a=t.to,l=!1,s=o.line
e.options.lineWrapping||(s=W(de(T(n,o.line))),n.iter(s,a.line+1,function(e){if(e==i.maxLine)return l=!0,!0})),n.sel.contains(t.from,t.to)>-1&&Ne(e),_n(n,t,r,xr(e)),e.options.lineWrapping||(n.iter(s,o.line+t.text.length,function(e){var t=be(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,l=!1)}),l&&(e.curOp.updateMaxLine=!0)),nt(n,o.line),kn(e,400)
var u=t.text.length-(a.line-o.line)-1
t.full?mn(e):o.line!=a.line||1!=t.text.length||$n(e.doc,t)?mn(e,o.line,a.line+1,u):vn(e,o.line,"text")
var c=Ae(e,"changes"),d=Ae(e,"change")
if(d||c){var f={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&bt(e,"change",e,f),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}function Pi(e,t,r,n,i){if(n||(n=r),E(n,r)<0){var o
r=(o=[n,r])[0],n=o[1]}"string"==typeof t&&(t=e.splitLines(t)),Ai(e,{from:r,to:n,text:t,origin:i})}function Ei(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function Ii(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0)
for(var l=0;l<o.ranges.length;l++)Ei(o.ranges[l].anchor,t,r,n),Ei(o.ranges[l].head,t,r,n)}else{for(var s=0;s<o.changes.length;++s){var u=o.changes[s]
if(r<u.from.line)u.from=P(u.from.line+n,u.from.ch),u.to=P(u.to.line+n,u.to.ch)
else if(t<=u.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function Fi(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
Ii(e.done,r,n,i),Ii(e.undone,r,n,i)}function Ri(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=T(e,j(e,t)):i=W(t),null==i?null:(n(o,i)&&e.cm&&vn(e.cm,i,r),o)}function Bi(e){var t=this
this.lines=e,this.parent=null
for(var r=0,n=0;n<e.length;++n)e[n].parent=t,r+=e[n].height
this.height=r}function ji(e){var t=this
this.children=e
for(var r=0,n=0,i=0;i<e.length;++i){var o=e[i]
r+=o.chunkSize(),n+=o.height,o.parent=t}this.size=r,this.height=n,this.parent=null}function Vi(e,t,r){ye(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Gr(e,r)}function Ki(e,t,r,n){var i=new Tl(e,r,n),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),Ri(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!me(e,t)){var n=ye(t)<e.scrollTop
O(t,t.height+Dt(i)),n&&Gr(o,i.height),o.curOp.forceUpdate=!0}return!0}),bt(o,"lineWidgetAdded",o,i,"number"==typeof t?t:W(t)),i}function Gi(e,t,r,n,o){if(n&&n.shared)return Ui(e,t,r,n,o)
if(e.cm&&!e.cm.curOp)return hn(e.cm,Gi)(e,t,r,n,o)
var a=new Al(e,o),l=E(t,r)
if(n&&c(n,a,!1),l>0||0==l&&!1!==a.clearWhenEmpty)return a
if(a.replacedWith&&(a.collapsed=!0,a.widgetNode=i("span",[a.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||a.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(a.widgetNode.insertLeft=!0)),a.collapsed){if(ce(e,t.line,t,r,a)||t.line!=r.line&&ce(e,r.line,t,r,a))throw new Error("Inserting collapsed marker partially overlapping an existing one")
q()}a.addToHistory&&ni(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var s,u=t.line,d=e.cm
if(e.iter(u,r.line+1,function(e){d&&a.collapsed&&!d.options.lineWrapping&&de(e)==d.display.maxLine&&(s=!0),a.collapsed&&u!=t.line&&O(e,0),Y(e,new $(a,u==t.line?t.ch:null,u==r.line?r.ch:null)),++u}),a.collapsed&&e.iter(t.line,r.line+1,function(t){me(e,t)&&O(t,0)}),a.clearOnEnter&&Qa(a,"beforeCursorEnter",function(){return a.clear()}),a.readOnly&&(U(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),a.collapsed&&(a.id=++Nl,a.atomic=!0),d){if(s&&(d.curOp.updateMaxLine=!0),a.collapsed)mn(d,t.line,r.line+1)
else if(a.className||a.title||a.startStyle||a.endStyle||a.css)for(var f=t.line;f<=r.line;f++)vn(d,f,"text")
a.atomic&&ki(d.doc),bt(d,"markerAdded",d,a)}return a}function Ui(e,t,r,n,i){(n=c(n)).shared=!1
var o=[Gi(e,t,r,n,i)],a=o[0],l=n.widgetNode
return Xn(e,function(e){l&&(n.widgetNode=l.cloneNode(!0)),o.push(Gi(e,V(e,t),V(e,r),n,i))
for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return
a=g(o)}),new Ol(o,a)}function qi(e){return e.findMarks(P(e.first,0),e.clipPos(P(e.lastLine())),function(e){return e.parent})}function $i(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(E(o,a)){var l=Gi(e,o,a,n.primary,n.primary.type)
n.markers.push(l),l.parent=n}}}function _i(e){for(var t=0;t<e.length;t++)!function(t){var r=e[t],n=[r.primary.doc]
Xn(r.primary.doc,function(e){return n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==f(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}}(t)}function Xi(e){var t=this
if(Qi(t),!Te(t,e)&&!Ht(t.display,e)){We(e),ga&&(Dl=+new Date)
var r=Cr(t,e,!0),n=e.dataTransfer.files
if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),a=0,l=function(e,n){if(!t.options.allowDropFileTypes||-1!=f(t.options.allowDropFileTypes,e.type)){var l=new FileReader
l.onload=hn(t,function(){var e=l.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++a==i){var s={from:r=V(t.doc,r),to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
Ai(t.doc,s),yi(t.doc,Rn(r,Bn(s)))}}),l.readAsText(e)}},s=0;s<i;++s)l(n[s],s)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var u=e.dataTransfer.getData("Text")
if(u){var c
if(t.state.draggingText&&!t.state.draggingText.copy&&(c=t.listSelections()),wi(t.doc,Rn(r,r)),c)for(var d=0;d<c.length;++d)Pi(t.doc,"",c[d].anchor,c[d].head,"drag")
t.replaceSelection(u,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Yi(e,t){if(ga&&(!e.state.draggingText||+new Date-Dl<100))He(t)
else if(!Te(e,t)&&!Ht(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!xa)){var r=n("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",wa&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),wa&&r.parentNode.removeChild(r)}}function Zi(e,t){var i=Cr(e,t)
if(i){var o=document.createDocumentFragment()
Tr(e,i,o),e.display.dragCursor||(e.display.dragCursor=n("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),r(e.display.dragCursor,o)}}function Qi(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Ji(e){if(document.getElementsByClassName)for(var t=document.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror
n&&e(n)}}function eo(){Hl||(to(),Hl=!0)}function to(){var e
Qa(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Ji(ro)},100))}),Qa(window,"blur",function(){return Ji(Hr)})}function ro(e){var t=e.display
t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function no(e){var t=e.split(/-(?!$)/)
e=t[t.length-1]
for(var r,n,i,o,a=0;a<t.length-1;a++){var l=t[a]
if(/^(cmd|meta|m)$/i.test(l))o=!0
else if(/^a(lt)?$/i.test(l))r=!0
else if(/^(c|ctrl|control)$/i.test(l))n=!0
else{if(!/^s(hift)?$/i.test(l))throw new Error("Unrecognized modifier name: "+l)
i=!0}}return r&&(e="Alt-"+e),n&&(e="Ctrl-"+e),o&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function io(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=m(r.split(" "),no),o=0;o<i.length;o++){var a=void 0,l=void 0
o==i.length-1?(l=i.join(" "),a=n):(l=i.slice(0,o+1).join(" "),a="...")
var s=t[l]
if(s){if(s!=a)throw new Error("Inconsistent bindings for "+l)}else t[l]=a}delete e[r]}for(var u in t)e[u]=t[u]
return e}function oo(e,t,r,n){var i=(t=uo(t)).call?t.call(e,n):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return oo(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var a=oo(e,t.fallthrough[o],r,n)
if(a)return a}}}function ao(e){var t="string"==typeof e?e:Pl[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function lo(e,t,r){var n=e
return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(za?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(za?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function so(e,t){if(wa&&34==e.keyCode&&e.char)return!1
var r=Pl[e.keyCode]
return null!=r&&!e.altGraphKey&&lo(r,e,t)}function uo(e){return"string"==typeof e?Rl[e]:e}function co(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&E(o.from,g(n).to)<=0;){var a=n.pop()
if(E(a.from,o.from)<0){o.from=a.from
break}}n.push(o)}fn(e,function(){for(var t=n.length-1;t>=0;t--)Pi(e.doc,"",n[t].from,n[t].to,"+delete")
Ur(e)})}function fo(e,t,r){var n=S(e.text,t+r,r)
return n<0||n>e.text.length?null:n}function ho(e,t,r){var n=fo(e,t.ch,r)
return null==n?null:new P(t.line,n,r<0?"after":"before")}function po(e,t,r,n,i){if(e){var o=Ce(r,t.doc.direction)
if(o){var a,l=i<0?g(o):o[0],s=i<0==(1==l.level)?"after":"before"
if(l.level>0){var u=qt(t,r)
a=i<0?r.text.length-1:0
var c=$t(t,u,a).top
a=L(function(e){return $t(t,u,e).top==c},i<0==(1==l.level)?l.from:l.to-1,a),"before"==s&&(a=fo(r,a,1))}else a=i<0?l.to:l.from
return new P(n,a,s)}}return new P(n,i<0?r.text.length:0,i<0?"before":"after")}function go(e,t,r,n){var i=Ce(t,e.doc.direction)
if(!i)return ho(t,r,n)
r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after")
var o=ke(i,r.ch,r.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(n>0?a.to>r.ch:a.from<r.ch))return ho(t,r,n)
var l,s=function(e,r){return fo(t,e instanceof P?e.ch:e,r)},u=function(r){return e.options.lineWrapping?(l=l||qt(e,t),fr(e,t,l,r)):{begin:0,end:t.text.length}},c=u("before"==r.sticky?s(r,-1):r.ch)
if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==n<0,f=s(r,d?1:-1)
if(null!=f&&(d?f<=a.to&&f<=c.end:f>=a.from&&f>=c.begin)){var h=d?"before":"after"
return new P(r.line,f,h)}}var p=function(e,t,n){for(var o=function(e,t){return t?new P(r.line,s(e,1),"before"):new P(r.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],l=t>0==(1!=a.level),u=l?n.begin:s(n.end,-1)
if(a.from<=u&&u<a.to)return o(u,l)
if(u=l?a.from:s(a.to,-1),n.begin<=u&&u<n.end)return o(u,l)}},g=p(o+n,n,c)
if(g)return g
var m=n>0?c.end:s(c.begin,-1)
return null==m||n>0&&m==t.text.length||!(g=p(n>0?0:i.length-1,n,u(m)))?null:g}function mo(e,t){var r=T(e.doc,t),n=de(r)
return n!=r&&(t=W(n)),po(!0,e,n,t,1)}function vo(e,t){var r=T(e.doc,t),n=fe(r)
return n!=r&&(t=W(n)),po(!0,e,r,t,-1)}function yo(e,t){var r=mo(e,t.line),n=T(e.doc,r.line),i=Ce(n,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),a=t.line==r.line&&t.ch<=o&&t.ch
return P(r.line,a?0:o,r.sticky)}return r}function bo(e,t,r){if("string"==typeof t&&!(t=Bl[t]))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=Ba}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}function wo(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=oo(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&oo(t,e.options.extraKeys,r,e)||oo(t,e.options.keyMap,r,e)}function xo(e,t,r,n){var i=e.state.keySeq
if(i){if(ao(t))return"handled"
jl.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),t=i+" "+t}var o=wo(e,t,n)
return"multi"==o&&(e.state.keySeq=t),"handled"==o&&bt(e,"keyHandled",e,t,r),"handled"!=o&&"multi"!=o||(We(r),Or(e)),i&&!o&&/\'$/.test(t)?(We(r),!0):!!o}function ko(e,t){var r=so(t,!0)
return!!r&&(t.shiftKey&&!e.state.keySeq?xo(e,"Shift-"+r,t,function(t){return bo(e,t,!0)})||xo(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return bo(e,t)}):xo(e,r,t,function(t){return bo(e,t)}))}function Co(e,t,r){return xo(e,"'"+r+"'",t,function(t){return bo(e,t,!0)})}function So(e){var t=this
if(t.curOp.focus=a(),!Te(t,e)){ga&&ma<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var n=ko(t,e)
wa&&(Vl=n?r:null,!n&&88==r&&!rl&&(Ta?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||Lo(t)}}function Lo(e){function t(e){18!=e.keyCode&&e.altKey||(Ha(r,"CodeMirror-crosshair"),Le(document,"keyup",t),Le(document,"mouseover",t))}var r=e.display.lineDiv
l(r,"CodeMirror-crosshair"),Qa(document,"keyup",t),Qa(document,"mouseover",t)}function Mo(e){16==e.keyCode&&(this.doc.sel.shift=!1),Te(this,e)}function To(e){var t=this
if(!(Ht(t.display,e)||Te(t,e)||e.ctrlKey&&!e.altKey||Ta&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(wa&&r==Vl)return Vl=null,void We(e)
if(!wa||e.which&&!(e.which<10)||!ko(t,e)){var i=String.fromCharCode(null==n?r:n)
"\b"!=i&&(Co(t,e,i)||t.display.input.onKeyPress(e))}}}function No(e,t){var r=+new Date
return Ul&&Ul.compare(r,e,t)?(Gl=Ul=null,"triple"):Gl&&Gl.compare(r,e,t)?(Ul=new Kl(r,e,t),Gl=null,"double"):(Gl=new Kl(r,e,t),Ul=null,"single")}function Ao(e){var t=this,r=t.display
if(!(Te(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,Ht(r,e))va||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100))
else if(!Fo(t,e)){var n=Cr(t,e),i=Ee(e),o=n?No(n,i):"single"
window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&Oo(t,i,n,o,e)||(1==i?n?zo(t,n,o,e):Pe(e)==r.scroller&&We(e):2==i?(n&&hi(t.doc,n),setTimeout(function(){return r.input.focus()},20)):3==i&&(Da?Ro(t,e):zr(t)))}}function Oo(e,t,r,n,i){var o="Click"
return"double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o),o=(1==t?"Left":2==t?"Middle":"Right")+o,xo(e,lo(o,i),i,function(t){if("string"==typeof t&&(t=Bl[t]),!t)return!1
var n=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=Ba}finally{e.state.suppressEdits=!1}return n})}function Wo(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{}
if(null==i.unit){var o=Na?r.shiftKey&&r.metaKey:r.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey),null==i.addNew&&(i.addNew=Ta?r.metaKey:r.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(Ta?r.altKey:r.ctrlKey)),i}function zo(e,t,r,n){ga?setTimeout(u(Wr,e),0):e.curOp.focus=a()
var i,o=Wo(e,r,n),l=e.doc.sel
e.options.dragDrop&&Ja&&!e.isReadOnly()&&"single"==r&&(i=l.contains(t))>-1&&(E((i=l.ranges[i]).from(),t)<0||t.xRel>0)&&(E(i.to(),t)>0||t.xRel<0)?Do(e,n,t,o):Po(e,n,t,o)}function Do(e,t,r,n){var i=e.display,o=!1,a=hn(e,function(t){va&&(i.scroller.draggable=!1),e.state.draggingText=!1,Le(document,"mouseup",a),Le(document,"mousemove",l),Le(i.scroller,"dragstart",s),Le(i.scroller,"drop",a),o||(We(t),n.addNew||hi(e.doc,r,null,null,n.extend),va||ga&&9==ma?setTimeout(function(){document.body.focus(),i.input.focus()},20):i.input.focus())}),l=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},s=function(){return o=!0}
va&&(i.scroller.draggable=!0),e.state.draggingText=a,a.copy=!n.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),Qa(document,"mouseup",a),Qa(document,"mousemove",l),Qa(i.scroller,"dragstart",s),Qa(i.scroller,"drop",a),zr(e),setTimeout(function(){return i.input.focus()},20)}function Ho(e,t,r){if("char"==r)return new Ml(t,t)
if("word"==r)return e.findWordAt(t)
if("line"==r)return new Ml(P(t.line,0),V(e.doc,P(t.line+1,0)))
var n=r(e,t)
return new Ml(n.from,n.to)}function Po(e,t,r,n){function i(t){if(0!=E(v,t))if(v=t,"rectangle"==n.unit){for(var i=[],o=e.options.tabSize,a=d(T(u,r.line).text,r.ch,o),l=d(T(u,t.line).text,t.ch,o),s=Math.min(a,l),g=Math.max(a,l),m=Math.min(r.line,t.line),y=Math.min(e.lastLine(),Math.max(r.line,t.line));m<=y;m++){var b=T(u,m).text,w=h(b,s,o)
s==g?i.push(new Ml(P(m,w),P(m,w))):b.length>w&&i.push(new Ml(P(m,w),P(m,h(b,g,o))))}i.length||i.push(new Ml(r,r)),bi(u,Fn(p.ranges.slice(0,f).concat(i),f),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x,k=c,C=Ho(e,t,n.unit),S=k.anchor
E(C.anchor,S)>0?(x=C.head,S=B(k.from(),C.anchor)):(x=C.anchor,S=R(k.to(),C.head))
var L=p.ranges.slice(0)
L[f]=Eo(e,new Ml(V(u,S),x)),bi(u,Fn(L,f),Va)}}function o(t){var r=++b,l=Cr(e,t,!0,"rectangle"==n.unit)
if(l)if(0!=E(l,v)){e.curOp.focus=a(),i(l)
var c=Ir(s,u);(l.line>=c.to||l.line<c.from)&&setTimeout(hn(e,function(){b==r&&o(t)}),150)}else{var d=t.clientY<y.top?-20:t.clientY>y.bottom?20:0
d&&setTimeout(hn(e,function(){b==r&&(s.scroller.scrollTop+=d,o(t))}),50)}}function l(t){e.state.selectingText=!1,b=1/0,We(t),s.input.focus(),Le(document,"mousemove",w),Le(document,"mouseup",x),u.history.lastSelOrigin=null}var s=e.display,u=e.doc
We(t)
var c,f,p=u.sel,g=p.ranges
if(n.addNew&&!n.extend?(f=u.sel.contains(r),c=f>-1?g[f]:new Ml(r,r)):(c=u.sel.primary(),f=u.sel.primIndex),"rectangle"==n.unit)n.addNew||(c=new Ml(r,r)),r=Cr(e,t,!0,!0),f=-1
else{var m=Ho(e,r,n.unit)
c=n.extend?fi(c,m.anchor,m.head,n.extend):m}n.addNew?-1==f?(f=g.length,bi(u,Fn(g.concat([c]),f),{scroll:!1,origin:"*mouse"})):g.length>1&&g[f].empty()&&"char"==n.unit&&!n.extend?(bi(u,Fn(g.slice(0,f).concat(g.slice(f+1)),0),{scroll:!1,origin:"*mouse"}),p=u.sel):gi(u,f,c,Va):(f=0,bi(u,new Ll([c],0),Va),p=u.sel)
var v=r,y=s.wrapper.getBoundingClientRect(),b=0,w=hn(e,function(e){Ee(e)?o(e):l(e)}),x=hn(e,l)
e.state.selectingText=x,Qa(document,"mousemove",w),Qa(document,"mouseup",x)}function Eo(e,t){var r=t.anchor,n=t.head,i=T(e.doc,r.line)
if(0==E(r,n)&&r.sticky==n.sticky)return t
var o=Ce(i)
if(!o)return t
var a=ke(o,r.ch,r.sticky),l=o[a]
if(l.from!=r.ch&&l.to!=r.ch)return t
var s=a+(l.from==r.ch==(1!=l.level)?0:1)
if(0==s||s==o.length)return t
var u
if(n.line!=r.line)u=(n.line-r.line)*("ltr"==e.doc.direction?1:-1)>0
else{var c=ke(o,n.ch,n.sticky),d=c-a||(n.ch-r.ch)*(1==l.level?-1:1)
u=c==s-1||c==s?d<0:d>0}var f=o[s+(u?-1:0)],h=u==(1==f.level),p=h?f.from:f.to,g=h?"after":"before"
return r.ch==p&&r.sticky==g?t:new Ml(new P(r.line,p,g),n)}function Io(e,t,r,n){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&We(t)
var a=e.display,l=a.lineDiv.getBoundingClientRect()
if(o>l.bottom||!Ae(e,r))return De(t)
o-=l.top-a.viewOffset
for(var s=0;s<e.options.gutters.length;++s){var u=a.gutters.childNodes[s]
if(u&&u.getBoundingClientRect().right>=i)return Me(e,r,e,z(e.doc,o),e.options.gutters[s],t),De(t)}}function Fo(e,t){return Io(e,t,"gutterClick",!0)}function Ro(e,t){Ht(e.display,t)||Bo(e,t)||Te(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function Bo(e,t){return!!Ae(e,"gutterContextMenu")&&Io(e,t,"gutterContextMenu",!1)}function jo(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),er(e)}function Vo(e){Dn(e),mn(e),Fr(e)}function Ko(e,t,r){if(!t!=!(r&&r!=ql)){var n=e.display.dragFunctions,i=t?Qa:Le
i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function Go(e){e.options.lineWrapping?(l(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ha(e.display.wrapper,"CodeMirror-wrap"),we(e)),kr(e),mn(e),er(e),setTimeout(function(){return en(e)},100)}function Uo(e,t){var r=this
if(!(this instanceof Uo))return new Uo(e,t)
this.options=t=t?c(t):{},c($l,t,!1),Hn(t)
var n=t.value
"string"==typeof n&&(n=new zl(n,t.mode,null,t.lineSeparator,t.direction)),this.doc=n
var i=new Uo.inputStyles[t.inputStyle](this),o=this.display=new M(e,n,i)
o.wrapper.CodeMirror=this,Dn(this),jo(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),rn(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Ea,keySeq:null,specialChars:null},t.autofocus&&!Ma&&o.input.focus(),ga&&ma<11&&setTimeout(function(){return r.display.input.reset(!0)},20),qo(this),eo(),nn(this),this.curOp.forceUpdate=!0,Yn(this,n),t.autofocus&&!Ma||this.hasFocus()?setTimeout(u(Dr,this),20):Hr(this)
for(var a in _l)_l.hasOwnProperty(a)&&_l[a](r,t[a],ql)
Rr(this),t.finishInit&&t.finishInit(this)
for(var l=0;l<Xl.length;++l)Xl[l](r)
on(this),va&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}function qo(e){function t(){i.activeTouch&&(o=setTimeout(function(){return i.activeTouch=null},1e3),(a=i.activeTouch).end=+new Date)}function r(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function n(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}var i=e.display
Qa(i.scroller,"mousedown",hn(e,Ao)),ga&&ma<11?Qa(i.scroller,"dblclick",hn(e,function(t){if(!Te(e,t)){var r=Cr(e,t)
if(r&&!Fo(e,t)&&!Ht(e.display,t)){We(t)
var n=e.findWordAt(r)
hi(e.doc,n.anchor,n.head)}}})):Qa(i.scroller,"dblclick",function(t){return Te(e,t)||We(t)}),Da||Qa(i.scroller,"contextmenu",function(t){return Ro(e,t)})
var o,a={end:0}
Qa(i.scroller,"touchstart",function(t){if(!Te(e,t)&&!r(t)&&!Fo(e,t)){i.input.ensurePolled(),clearTimeout(o)
var n=+new Date
i.activeTouch={start:n,moved:!1,prev:n-a.end<=300?a:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),Qa(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),Qa(i.scroller,"touchend",function(r){var o=i.activeTouch
if(o&&!Ht(i,r)&&null!=o.left&&!o.moved&&new Date-o.start<300){var a,l=e.coordsChar(i.activeTouch,"page")
a=!o.prev||n(o,o.prev)?new Ml(l,l):!o.prev.prev||n(o,o.prev.prev)?e.findWordAt(l):new Ml(P(l.line,0),V(e.doc,P(l.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),We(r)}t()}),Qa(i.scroller,"touchcancel",t),Qa(i.scroller,"scroll",function(){i.scroller.clientHeight&&(Yr(e,i.scroller.scrollTop),Qr(e,i.scroller.scrollLeft,!0),Me(e,"scroll",e))}),Qa(i.scroller,"mousewheel",function(t){return In(e,t)}),Qa(i.scroller,"DOMMouseScroll",function(t){return In(e,t)}),Qa(i.wrapper,"scroll",function(){return i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){Te(e,t)||He(t)},over:function(t){Te(e,t)||(Zi(e,t),He(t))},start:function(t){return Yi(e,t)},drop:hn(e,Xi),leave:function(t){Te(e,t)||Qi(e)}}
var l=i.input.getField()
Qa(l,"keyup",function(t){return Mo.call(e,t)}),Qa(l,"keydown",hn(e,So)),Qa(l,"keypress",hn(e,To)),Qa(l,"focus",function(t){return Dr(e,t)}),Qa(l,"blur",function(t){return Hr(e,t)})}function $o(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=Xe(e,t).state:r="prev")
var a=e.options.tabSize,l=T(o,t),s=d(l.text,null,a)
l.stateAfter&&(l.stateAfter=null)
var u,c=l.text.match(/^\s*/)[0]
if(n||/\S/.test(l.text)){if("smart"==r&&((u=o.mode.indent(i,l.text.slice(c.length),l.text))==Ba||u>150)){if(!n)return
r="prev"}}else u=0,r="not"
"prev"==r?u=t>o.first?d(T(o,t-1).text,null,a):0:"add"==r?u=s+e.options.indentUnit:"subtract"==r?u=s-e.options.indentUnit:"number"==typeof r&&(u=s+r),u=Math.max(0,u)
var f="",h=0
if(e.options.indentWithTabs)for(var g=Math.floor(u/a);g;--g)h+=a,f+="\t"
if(h<u&&(f+=p(u-h)),f!=c)return Pi(o,f,P(t,0),P(t,c.length),"+input"),l.stateAfter=null,!0
for(var m=0;m<o.sel.ranges.length;m++){var v=o.sel.ranges[m]
if(v.head.line==t&&v.head.ch<c.length){var y=P(t,c.length)
gi(o,m,new Ml(y,y))
break}}}function _o(e){Yl=e}function Xo(e,t,r,n,i){var o=e.doc
e.display.shift=!1,n||(n=o.sel)
var a=e.state.pasteIncoming||"paste"==i,l=el(t),s=null
if(a&&n.ranges.length>1)if(Yl&&Yl.text.join("\n")==t){if(n.ranges.length%Yl.text.length==0){s=[]
for(var u=0;u<Yl.text.length;u++)s.push(o.splitLines(Yl.text[u]))}}else l.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(s=m(l,function(e){return[e]}))
for(var c,d=n.ranges.length-1;d>=0;d--){var f=n.ranges[d],h=f.from(),p=f.to()
f.empty()&&(r&&r>0?h=P(h.line,h.ch-r):e.state.overwrite&&!a?p=P(p.line,Math.min(T(o,p.line).text.length,p.ch+g(l).length)):Yl&&Yl.lineWise&&Yl.text.join("\n")==t&&(h=p=P(h.line,0))),c=e.curOp.updateInput
var v={from:h,to:p,text:s?s[d%s.length]:l,origin:i||(a?"paste":e.state.cutIncoming?"cut":"+input")}
Ai(e.doc,v),bt(e,"inputRead",e,v)}t&&!a&&Zo(e,t),Ur(e),e.curOp.updateInput=c,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function Yo(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text")
if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||fn(t,function(){return Xo(t,r,0,null,"paste")}),!0}function Zo(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n]
if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var l=0;l<o.electricChars.length;l++)if(t.indexOf(o.electricChars.charAt(l))>-1){a=$o(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(T(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=$o(e,i.head.line,"smart"))
a&&bt(e,"electricInput",e,i.head.line)}}}function Qo(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:P(i,0),head:P(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Jo(e,t){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck",!!t)}function ea(){var e=n("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=n("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return va?e.style.width="1000px":e.setAttribute("wrap","off"),Sa&&(e.style.border="1px solid black"),Jo(e),t}function ta(e,t,r,n,i){function o(){var n=t.line+r
return!(n<e.first||n>=e.first+e.size)&&(t=new P(n,t.ch,t.sticky),u=T(e,n))}function a(n){var a
if(null==(a=i?go(e.cm,u,t,r):ho(u,t,r))){if(n||!o())return!1
t=po(i,e.cm,u,t.line,r)}else t=a
return!0}var l=t,s=r,u=T(e,t.line)
if("char"==n)a()
else if("column"==n)a(!0)
else if("word"==n||"group"==n)for(var c=null,d="group"==n,f=e.cm&&e.cm.getHelper(t,"wordChars"),h=!0;!(r<0)||a(!h);h=!1){var p=u.text.charAt(t.ch)||"\n",g=x(p,f)?"w":d&&"\n"==p?"n":!d||/\s/.test(p)?null:"p"
if(!d||h||g||(g="s"),c&&c!=g){r<0&&(r=1,a(),t.sticky="after")
break}if(g&&(c=g),r>0&&!a(!h))break}var m=Li(e,t,l,s,!0)
return I(l,m)&&(m.hitSide=!0),m}function ra(e,t,r,n){var i,o=e.doc,a=t.left
if("page"==n){var l=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),s=Math.max(l-.5*vr(e.display),3)
i=(r>0?t.bottom:t.top)+r*s}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(var u;(u=cr(e,a,i)).outside;){if(r<0?i<=0:i>=o.height){u.hitSide=!0
break}i+=5*r}return u}function na(e,t){var r=Ut(e,t.line)
if(!r||r.hidden)return null
var n=T(e.doc,t.line),i=Vt(r,n,t.line),o=Ce(n,e.doc.direction),a="left"
o&&(a=ke(o,t.ch)%2?"right":"left")
var l=_t(i.map,t.ch,a)
return l.offset="right"==l.collapse?l.end:l.start,l}function ia(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}function oa(e,t){return t&&(e.bad=!0),e}function aa(e,t,r,n,i){function o(e){return function(t){return t.id==e}}function a(){c&&(u+=d,c=!1)}function l(e){e&&(a(),u+=e)}function s(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(null!=r)return void l(r||t.textContent.replace(/\u200b/g,""))
var u,f=t.getAttribute("cm-marker")
if(f){var h=e.findMarks(P(n,0),P(i+1,0),o(+f))
return void(h.length&&(u=h[0].find(0))&&l(N(e.doc,u.from,u.to).join(d)))}if("false"==t.getAttribute("contenteditable"))return
var p=/^(pre|div|p)$/i.test(t.nodeName)
p&&a()
for(var g=0;g<t.childNodes.length;g++)s(t.childNodes[g])
p&&(c=!0)}else 3==t.nodeType&&l(t.nodeValue)}for(var u="",c=!1,d=e.doc.lineSeparator();s(t),t!=r;)t=t.nextSibling
return u}function la(e,t,r){var n
if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return oa(e.clipPos(P(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return sa(o,t,r)}}function sa(e,t,r){function n(t,r,n){for(var i=-1;i<(d?d.length:0);i++)for(var o=i<0?c.map:d[i],a=0;a<o.length;a+=3){var l=o[a+2]
if(l==t||l==r){var s=W(i<0?e.line:e.rest[i]),u=o[a]+n
return(n<0||l!=t)&&(u=o[a+(n?1:0)]),P(s,u)}}}var i=e.text.firstChild,a=!1
if(!t||!o(i,t))return oa(P(W(e.line),0),!0)
if(t==i&&(a=!0,t=i.childNodes[r],r=0,!t)){var l=e.rest?g(e.rest):e.line
return oa(P(W(l),l.text.length),a)}var s=3==t.nodeType?t:null,u=t
for(s||1!=t.childNodes.length||3!=t.firstChild.nodeType||(s=t.firstChild,r&&(r=s.nodeValue.length));u.parentNode!=i;)u=u.parentNode
var c=e.measure,d=c.maps,f=n(s,u,r)
if(f)return oa(f,a)
for(var h=u.nextSibling,p=s?s.nodeValue.length-r:0;h;h=h.nextSibling){if(f=n(h,h.firstChild,0))return oa(P(f.line,f.ch-p),a)
p+=h.textContent.length}for(var m=u.previousSibling,v=r;m;m=m.previousSibling){if(f=n(m,m.firstChild,-1))return oa(P(f.line,f.ch+v),a)
v+=m.textContent.length}}var ua=navigator.userAgent,ca=navigator.platform,da=/gecko\/\d/i.test(ua),fa=/MSIE \d/.test(ua),ha=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ua),pa=/Edge\/(\d+)/.exec(ua),ga=fa||ha||pa,ma=ga&&(fa?document.documentMode||6:+(pa||ha)[1]),va=!pa&&/WebKit\//.test(ua),ya=va&&/Qt\/\d+\.\d+/.test(ua),ba=!pa&&/Chrome\//.test(ua),wa=/Opera\//.test(ua),xa=/Apple Computer/.test(navigator.vendor),ka=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ua),Ca=/PhantomJS/.test(ua),Sa=!pa&&/AppleWebKit/.test(ua)&&/Mobile\/\w+/.test(ua),La=/Android/.test(ua),Ma=Sa||La||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ua),Ta=Sa||/Mac/.test(ca),Na=/\bCrOS\b/.test(ua),Aa=/win/i.test(ca),Oa=wa&&ua.match(/Version\/(\d*\.\d*)/)
Oa&&(Oa=Number(Oa[1])),Oa&&Oa>=15&&(wa=!1,va=!0)
var Wa,za=Ta&&(ya||wa&&(null==Oa||Oa<12.11)),Da=da||ga&&ma>=9,Ha=function(t,r){var n=t.className,i=e(r).exec(n)
if(i){var o=n.slice(i.index+i[0].length)
t.className=n.slice(0,i.index)+(o?i[1]+o:"")}}
Wa=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var Pa=function(e){e.select()}
Sa?Pa=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:ga&&(Pa=function(e){try{e.select()}catch(e){}})
var Ea=function(){this.id=null}
Ea.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var Ia,Fa,Ra=30,Ba={toString:function(){return"CodeMirror.Pass"}},ja={scroll:!1},Va={origin:"*mouse"},Ka={origin:"+move"},Ga=[""],Ua=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,qa=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,$a=!1,_a=!1,Xa=null,Ya=function(){function e(e){return e<=247?r.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?n.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,r){this.level=e,this.from=t,this.to=r}var r="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,a=/[LRr]/,l=/[Lb1n]/,s=/[1n]/
return function(r,n){var u="ltr"==n?"L":"R"
if(0==r.length||"ltr"==n&&!i.test(r))return!1
for(var c=r.length,d=[],f=0;f<c;++f)d.push(e(r.charCodeAt(f)))
for(var h=0,p=u;h<c;++h){var m=d[h]
"m"==m?d[h]=p:p=m}for(var v=0,y=u;v<c;++v){var b=d[v]
"1"==b&&"r"==y?d[v]="n":a.test(b)&&(y=b,"r"==b&&(d[v]="R"))}for(var w=1,x=d[0];w<c-1;++w){var k=d[w]
"+"==k&&"1"==x&&"1"==d[w+1]?d[w]="1":","!=k||x!=d[w+1]||"1"!=x&&"n"!=x||(d[w]=x),x=k}for(var C=0;C<c;++C){var S=d[C]
if(","==S)d[C]="N"
else if("%"==S){var L=void 0
for(L=C+1;L<c&&"%"==d[L];++L);for(var M=C&&"!"==d[C-1]||L<c&&"1"==d[L]?"1":"N",T=C;T<L;++T)d[T]=M
C=L-1}}for(var N=0,A=u;N<c;++N){var O=d[N]
"L"==A&&"1"==O?d[N]="L":a.test(O)&&(A=O)}for(var W=0;W<c;++W)if(o.test(d[W])){var z=void 0
for(z=W+1;z<c&&o.test(d[z]);++z);for(var D="L"==(W?d[W-1]:u),H=D==("L"==(z<c?d[z]:u))?D?"L":"R":u,P=W;P<z;++P)d[P]=H
W=z-1}for(var E,I=[],F=0;F<c;)if(l.test(d[F])){var R=F
for(++F;F<c&&l.test(d[F]);++F);I.push(new t(0,R,F))}else{var B=F,j=I.length
for(++F;F<c&&"L"!=d[F];++F);for(var V=B;V<F;)if(s.test(d[V])){B<V&&I.splice(j,0,new t(1,B,V))
var K=V
for(++V;V<F&&s.test(d[V]);++V);I.splice(j,0,new t(2,K,V)),B=V}else++V
B<F&&I.splice(j,0,new t(1,B,F))}return 1==I[0].level&&(E=r.match(/^\s+/))&&(I[0].from=E[0].length,I.unshift(new t(0,0,E[0].length))),1==g(I).level&&(E=r.match(/\s+$/))&&(g(I).to-=E[0].length,I.push(new t(0,c-E[0].length,c))),"rtl"==n?I.reverse():I}}(),Za=[],Qa=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={})
n[t]=(n[t]||Za).concat(r)}},Ja=function(){if(ga&&ma<9)return!1
var e=n("div")
return"draggable"in e||"dragDrop"in e}(),el=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(r.push(o.slice(0,a)),t+=a+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},tl=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},rl=function(){var e=n("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),nl=null,il={},ol={},al={},ll=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r}
ll.prototype.eol=function(){return this.pos>=this.string.length},ll.prototype.sol=function(){return this.pos==this.lineStart},ll.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},ll.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},ll.prototype.eat=function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},ll.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},ll.prototype.eatSpace=function(){for(var e=this,t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos
return this.pos>t},ll.prototype.skipToEnd=function(){this.pos=this.string.length},ll.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},ll.prototype.backUp=function(e){this.pos-=e},ll.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=d(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},ll.prototype.indentation=function(){return d(this.string,null,this.tabSize)-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},ll.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},ll.prototype.current=function(){return this.string.slice(this.start,this.pos)},ll.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},ll.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)}
var sl=function(e,t){this.state=e,this.lookAhead=t},ul=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0}
ul.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},ul.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},ul.fromSaved=function(e,t,r){return t instanceof sl?new ul(e,Ge(e.mode,t.state),r,t.lookAhead):new ul(e,Ge(e.mode,t),r)},ul.prototype.save=function(e){var t=!1!==e?Ge(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new sl(t,this.maxLookAhead):t}
var cl=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r},dl=function(e,t,r){this.text=e,ne(this,t),this.height=r?r(this):1}
dl.prototype.lineNo=function(){return W(this)},Oe(dl)
var fl,hl={},pl={},gl=null,ml=null,vl={left:0,right:0,top:0,bottom:0},yl=function(e,t,r){this.cm=r
var i=this.vert=n("div",[n("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=n("div",[n("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
e(i),e(o),Qa(i,"scroll",function(){i.clientHeight&&t(i.scrollTop,"vertical")}),Qa(o,"scroll",function(){o.clientWidth&&t(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,ga&&ma<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
yl.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},yl.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},yl.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},yl.prototype.zeroWidthHack=function(){var e=Ta&&!ka?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new Ea,this.disableVert=new Ea},yl.prototype.enableZeroWidthBar=function(e,t,r){function n(){var i=e.getBoundingClientRect();("vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,n)}e.style.pointerEvents="auto",t.set(1e3,n)},yl.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var bl=function(){}
bl.prototype.update=function(){return{bottom:0,right:0}},bl.prototype.setScrollLeft=function(){},bl.prototype.setScrollTop=function(){},bl.prototype.clear=function(){}
var wl={native:yl,null:bl},xl=0,kl=function(e,t,r){var n=e.display
this.viewport=t,this.visible=Ir(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Rt(e),this.force=r,this.dims=br(e),this.events=[]}
kl.prototype.signal=function(e,t){Ae(e,t)&&this.events.push(arguments)},kl.prototype.finish=function(){for(var e=this,t=0;t<this.events.length;t++)Me.apply(null,e.events[t])}
var Cl=0,Sl=null
ga?Sl=-.53:da?Sl=15:ba?Sl=-.7:xa&&(Sl=-1/3)
var Ll=function(e,t){this.ranges=e,this.primIndex=t}
Ll.prototype.primary=function(){return this.ranges[this.primIndex]},Ll.prototype.equals=function(e){var t=this
if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var r=0;r<this.ranges.length;r++){var n=t.ranges[r],i=e.ranges[r]
if(!I(n.anchor,i.anchor)||!I(n.head,i.head))return!1}return!0},Ll.prototype.deepCopy=function(){for(var e=this,t=[],r=0;r<this.ranges.length;r++)t[r]=new Ml(F(e.ranges[r].anchor),F(e.ranges[r].head))
return new Ll(t,this.primIndex)},Ll.prototype.somethingSelected=function(){for(var e=this,t=0;t<this.ranges.length;t++)if(!e.ranges[t].empty())return!0
return!1},Ll.prototype.contains=function(e,t){var r=this
t||(t=e)
for(var n=0;n<this.ranges.length;n++){var i=r.ranges[n]
if(E(t,i.from())>=0&&E(e,i.to())<=0)return n}return-1}
var Ml=function(e,t){this.anchor=e,this.head=t}
Ml.prototype.from=function(){return B(this.anchor,this.head)},Ml.prototype.to=function(){return R(this.anchor,this.head)},Ml.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Bi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=this,n=e,i=e+t;n<i;++n){var o=r.lines[n]
r.height-=o.height,ot(o),bt(o,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){var n=this
this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var i=0;i<t.length;++i)t[i].parent=n},iterN:function(e,t,r){for(var n=this,i=e+t;e<i;++e)if(r(n.lines[e]))return!0}},ji.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){var r=this
this.size-=t
for(var n=0;n<this.children.length;++n){var i=r.children[n],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e),l=i.height
if(i.removeInner(e,a),r.height-=l-i.height,o==a&&(r.children.splice(n--,1),i.parent=null),0==(t-=a))break
e=0}else e-=o}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Bi))){var s=[]
this.collapse(s),this.children=[new Bi(s)],this.children[0].parent=this}},collapse:function(e){for(var t=this,r=0;r<this.children.length;++r)t.children[r].collapse(e)},insertInner:function(e,t,r){var n=this
this.size+=t.length,this.height+=r
for(var i=0;i<this.children.length;++i){var o=n.children[i],a=o.chunkSize()
if(e<=a){if(o.insertInner(e,t,r),o.lines&&o.lines.length>50){for(var l=o.lines.length%25+25,s=l;s<o.lines.length;){var u=new Bi(o.lines.slice(s,s+=25))
o.height-=u.height,n.children.splice(++i,0,u),u.parent=n}o.lines=o.lines.slice(0,l),n.maybeSpill()}break}e-=a}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=new ji(e.children.splice(e.children.length-5,5))
if(e.parent){e.size-=t.size,e.height-=t.height
var r=f(e.parent.children,e)
e.parent.children.splice(r+1,0,t)}else{var n=new ji(e.children)
n.parent=e,e.children=[n,t],e=n}t.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=this,i=0;i<this.children.length;++i){var o=n.children[i],a=o.chunkSize()
if(e<a){var l=Math.min(t,a-e)
if(o.iterN(e,l,r))return!0
if(0==(t-=l))break
e=0}else e-=a}}}
var Tl=function(e,t,r){var n=this
if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])
this.doc=e,this.node=t}
Tl.prototype.clear=function(){var e=this,t=this.doc.cm,r=this.line.widgets,n=this.line,i=W(n)
if(null!=i&&r){for(var o=0;o<r.length;++o)r[o]==e&&r.splice(o--,1)
r.length||(n.widgets=null)
var a=Dt(this)
O(n,Math.max(0,n.height-a)),t&&(fn(t,function(){Vi(t,n,-a),vn(t,i,"widget")}),bt(t,"lineWidgetCleared",t,this,i))}},Tl.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line
this.height=null
var i=Dt(this)-t
i&&(O(n,n.height+i),r&&fn(r,function(){r.curOp.forceUpdate=!0,Vi(r,n,i),bt(r,"lineWidgetChanged",r,e,W(n))}))},Oe(Tl)
var Nl=0,Al=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Nl}
Al.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp
if(r&&nn(t),Ae(this,"clear")){var n=this.find()
n&&bt(this,"clear",n.from,n.to)}for(var i=null,o=null,a=0;a<this.lines.length;++a){var l=e.lines[a],s=_(l.markedSpans,e)
t&&!e.collapsed?vn(t,W(l),"text"):t&&(null!=s.to&&(o=W(l)),null!=s.from&&(i=W(l))),l.markedSpans=X(l.markedSpans,s),null==s.from&&e.collapsed&&!me(e.doc,l)&&t&&O(l,vr(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var c=de(e.lines[u]),d=be(c)
d>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=d,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&mn(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&ki(t.doc)),t&&bt(t,"markerCleared",t,this,i,o),r&&on(t),this.parent&&this.parent.clear()}},Al.prototype.find=function(e,t){var r=this
null==e&&"bookmark"==this.type&&(e=1)
for(var n,i,o=0;o<this.lines.length;++o){var a=r.lines[o],l=_(a.markedSpans,r)
if(null!=l.from&&(n=P(t?a:W(a),l.from),-1==e))return n
if(null!=l.to&&(i=P(t?a:W(a),l.to),1==e))return i}return n&&{from:n,to:i}},Al.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm
t&&n&&fn(n,function(){var i=t.line,o=W(t.line),a=Ut(n,o)
if(a&&(Qt(a),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!me(r.doc,i)&&null!=r.height){var l=r.height
r.height=null
var s=Dt(r)-l
s&&O(i,i.height+s)}bt(n,"markerChanged",n,e)})},Al.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=f(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Al.prototype.detachLine=function(e){if(this.lines.splice(f(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},Oe(Al)
var Ol=function(e,t){var r=this
this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=r}
Ol.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var t=0;t<this.markers.length;++t)e.markers[t].clear()
bt(this,"clear")}},Ol.prototype.find=function(e,t){return this.primary.find(e,t)},Oe(Ol)
var Wl=0,zl=function(e,t,r,n,i){if(!(this instanceof zl))return new zl(e,t,r,n,i)
null==r&&(r=0),ji.call(this,[new Bi([new dl("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r
var o=P(r,0)
this.sel=Rn(o),this.history=new Jn(null),this.id=++Wl,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),_n(this,{from:o,to:o,text:e}),bi(this,Rn(o),ja)}
zl.prototype=b(ji.prototype,{constructor:zl,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=A(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||this.lineSeparator())},setValue:gn(function(e){var t=P(this.first,0),r=this.first+this.size-1
Ai(this,{from:t,to:P(r,T(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&qr(this.cm,0,0),bi(this,Rn(t),ja)}),replaceRange:function(e,t,r,n){Pi(this,e,t=V(this,t),r=r?V(this,r):t,n)},getRange:function(e,t,r){var n=N(this,V(this,e),V(this,t))
return!1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(D(this,e))return T(this,e)},getLineNumber:function(e){return W(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=T(this,e)),de(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return V(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,t,r){mi(this,V(this,"number"==typeof e?P(e,t||0):e),null,r)}),setSelection:gn(function(e,t,r){mi(this,V(this,e),V(this,t||e),r)}),extendSelection:gn(function(e,t,r){hi(this,V(this,e),t&&V(this,t),r)}),extendSelections:gn(function(e,t){pi(this,G(this,e),t)}),extendSelectionsBy:gn(function(e,t){pi(this,G(this,m(this.sel.ranges,e)),t)}),setSelections:gn(function(e,t,r){var n=this
if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Ml(V(n,e[o].anchor),V(n,e[o].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),bi(this,Fn(i,t),r)}}),addSelection:gn(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new Ml(V(this,e),V(this,t||e))),bi(this,Fn(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this,n=this.sel.ranges,i=0;i<n.length;i++){var o=N(r,n[i].from(),n[i].to())
t=t?t.concat(o):o}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=this,r=[],n=this.sel.ranges,i=0;i<n.length;i++){var o=N(t,n[i].from(),n[i].to())
!1!==e&&(o=o.join(e||t.lineSeparator())),r[i]=o}return r},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:gn(function(e,t,r){for(var n=this,i=[],o=this.sel,a=0;a<o.ranges.length;a++){var l=o.ranges[a]
i[a]={from:l.from(),to:l.to(),text:n.splitLines(e[a]),origin:r}}for(var s=t&&"end"!=t&&Gn(this,i,t),u=i.length-1;u>=0;u--)Ai(n,i[u])
s?yi(this,s):this.cm&&Ur(this.cm)}),undo:gn(function(){Wi(this,"undo")}),redo:gn(function(){Wi(this,"redo")}),undoSelection:gn(function(){Wi(this,"undo",!0)}),redoSelection:gn(function(){Wi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new Jn(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:di(this.history.done),undone:di(this.history.undone)}},setHistory:function(e){var t=this.history=new Jn(this.history.maxGeneration)
t.done=di(e.done.slice(0),null,!0),t.undone=di(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,t,r){return Ri(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&k(n)&&(e.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var t=this
this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&Ri(t,r,"gutter",function(){return r.gutterMarkers[e]=null,k(r.gutterMarkers)&&(r.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!D(this,e))return null
if(t=e,!(e=T(this,e)))return null}else if(null==(t=W(e)))return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(t,r,n){return Ri(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass"
if(t[i]){if(e(n).test(t[i]))return!1
t[i]+=" "+n}else t[i]=n
return!0})}),removeLineClass:gn(function(t,r,n){return Ri(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass",o=t[i]
if(!o)return!1
if(null==n)t[i]=null
else{var a=o.match(e(n))
if(!a)return!1
var l=a.index+a[0].length
t[i]=o.slice(0,a.index)+(a.index&&l!=o.length?" ":"")+o.slice(l)||null}return!0})}),addLineWidget:gn(function(e,t,r){return Ki(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return Gi(this,V(this,e),V(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return e=V(this,e),Gi(this,e,e,r,"bookmark")},findMarksAt:function(e){var t=[],r=T(this,(e=V(this,e)).line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=V(this,e),t=V(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var a=o.markedSpans
if(a)for(var l=0;l<a.length;l++){var s=a[l]
null!=s.to&&i==e.line&&e.ch>=s.to||null==s.from&&i!=e.line||null!=s.from&&i==t.line&&s.from>=t.ch||r&&!r(s.marker)||n.push(s.marker.parent||s.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+n
if(o>e)return t=e,!0
e-=o,++r}),V(this,P(r,t))},indexFromPos:function(e){var t=(e=V(this,e)).ch
if(e.line<this.first||e.ch<0)return 0
var r=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new zl(A(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new zl(A(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],$i(n,qi(this)),n},unlinkDoc:function(e){var t=this
if(e instanceof Uo&&(e=e.doc),this.linked)for(var r=0;r<this.linked.length;++r)if(t.linked[r].doc==e){t.linked.splice(r,1),e.unlinkDoc(t),_i(qi(t))
break}if(e.history==this.history){var n=[e.id]
Xn(e,function(e){return n.push(e.id)},!0),e.history=new Jn(null),e.history.done=di(this.history.done,n),e.history.undone=di(this.history.undone,n)}},iterLinkedDocs:function(e){Xn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):el(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:gn(function(e){"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&Qn(this.cm))})}),zl.prototype.eachLine=zl.prototype.iter
for(var Dl=0,Hl=!1,Pl={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},El=0;El<10;El++)Pl[El+48]=Pl[El+96]=String(El)
for(var Il=65;Il<=90;Il++)Pl[Il]=String.fromCharCode(Il)
for(var Fl=1;Fl<=12;Fl++)Pl[Fl+111]=Pl[Fl+63235]="F"+Fl
var Rl={}
Rl.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Rl.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Rl.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Rl.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Rl.default=Ta?Rl.macDefault:Rl.pcDefault
var Bl={selectAll:Ti,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),ja)},killLine:function(e){return co(e,function(t){if(t.empty()){var r=T(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:P(t.head.line+1,0)}:{from:t.head,to:P(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return co(e,function(t){return{from:P(t.from().line,0),to:V(e.doc,P(t.to().line+1,0))}})},delLineLeft:function(e){return co(e,function(e){return{from:P(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return co(e,function(t){var r=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){return co(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(P(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(P(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return mo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return yo(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return vo(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},Ka)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},Ka)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?yo(e,t.head):n},Ka)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),a=d(e.getLine(o.line),o.ch,n)
t.push(p(n-a%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return fn(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=T(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new P(i.line,i.ch-1)),i.ch>0)i=new P(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),P(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=T(e.doc,i.line-1).text
a&&(i=new P(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),P(i.line-1,a.length-1),i,"+transpose"))}r.push(new Ml(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){return fn(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input")
t=e.listSelections()
for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0)
Ur(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}},jl=new Ea,Vl=null,Kl=function(e,t,r){this.time=e,this.pos=t,this.button=r}
Kl.prototype.compare=function(e,t,r){return this.time+400>e&&0==E(t,this.pos)&&r==this.button}
var Gl,Ul,ql={toString:function(){return"CodeMirror.Init"}},$l={},_l={}
Uo.defaults=$l,Uo.optionHandlers=_l
var Xl=[]
Uo.defineInitHook=function(e){return Xl.push(e)}
var Yl=null,Zl=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Ea,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
Zl.prototype.init=function(e){function t(e){if(!Te(i,e)){if(i.somethingSelected())_o({lineWise:!1,text:i.getSelections()}),"cut"==e.type&&i.replaceSelection("",null,"cut")
else{if(!i.options.lineWiseCopyCut)return
var t=Qo(i)
_o({lineWise:!0,text:t.text}),"cut"==e.type&&i.operation(function(){i.setSelections(t.ranges,0,ja),i.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var r=Yl.text.join("\n")
if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var a=ea(),l=a.firstChild
i.display.lineSpace.insertBefore(a,i.display.lineSpace.firstChild),l.value=Yl.text.join("\n")
var s=document.activeElement
Pa(l),setTimeout(function(){i.display.lineSpace.removeChild(a),s.focus(),s==o&&n.showPrimarySelection()},50)}}var r=this,n=this,i=n.cm,o=n.div=e.lineDiv
Jo(o,i.options.spellcheck),Qa(o,"paste",function(e){Te(i,e)||Yo(e,i)||ma<=11&&setTimeout(hn(i,function(){return r.updateFromDOM()}),20)}),Qa(o,"compositionstart",function(e){r.composing={data:e.data,done:!1}}),Qa(o,"compositionupdate",function(e){r.composing||(r.composing={data:e.data,done:!1})}),Qa(o,"compositionend",function(e){r.composing&&(e.data!=r.composing.data&&r.readFromDOMSoon(),r.composing.done=!0)}),Qa(o,"touchstart",function(){return n.forceCompositionEnd()}),Qa(o,"input",function(){r.composing||r.readFromDOMSoon()}),Qa(o,"copy",t),Qa(o,"cut",t)},Zl.prototype.prepareSelection=function(){var e=Mr(this.cm,!1)
return e.focus=this.cm.state.focused,e},Zl.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Zl.prototype.showPrimarySelection=function(){var e=window.getSelection(),t=this.cm,r=t.doc.sel.primary(),n=r.from(),i=r.to()
if(t.display.viewTo==t.display.viewFrom||n.line>=t.display.viewTo||i.line<t.display.viewFrom)e.removeAllRanges()
else{var o=la(t,e.anchorNode,e.anchorOffset),a=la(t,e.focusNode,e.focusOffset)
if(!o||o.bad||!a||a.bad||0!=E(B(o,a),n)||0!=E(R(o,a),i)){var l=t.display.view,s=n.line>=t.display.viewFrom&&na(t,n)||{node:l[0].measure.map[2],offset:0},u=i.line<t.display.viewTo&&na(t,i)
if(!u){var c=l[l.length-1].measure,d=c.maps?c.maps[c.maps.length-1]:c.map
u={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}}if(s&&u){var f,h=e.rangeCount&&e.getRangeAt(0)
try{f=Wa(s.node,s.offset,u.offset,u.node)}catch(e){}f&&(!da&&t.state.focused?(e.collapse(s.node,s.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),h&&null==e.anchorNode?e.addRange(h):da&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Zl.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Zl.prototype.showMultipleSelections=function(e){r(this.cm.display.cursorDiv,e.cursors),r(this.cm.display.selectionDiv,e.selection)},Zl.prototype.rememberSelection=function(){var e=window.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Zl.prototype.selectionInEditor=function(){var e=window.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return o(this.div,t)},Zl.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Zl.prototype.blur=function(){this.div.blur()},Zl.prototype.getField=function(){return this.div},Zl.prototype.supportsTouch=function(){return!0},Zl.prototype.receivedFocus=function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this
this.selectionInEditor()?this.pollSelection():fn(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},Zl.prototype.selectionChanged=function(){var e=window.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Zl.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm
if(La&&ba&&this.cm.options.gutters.length&&ia(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var r=la(t,e.anchorNode,e.anchorOffset),n=la(t,e.focusNode,e.focusOffset)
r&&n&&fn(t,function(){bi(t.doc,Rn(r,n),ja),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},Zl.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e=this.cm,t=e.display,r=e.doc.sel.primary(),n=r.from(),i=r.to()
if(0==n.ch&&n.line>e.firstLine()&&(n=P(n.line-1,T(e.doc,n.line-1).length)),i.ch==T(e.doc,i.line).text.length&&i.line<e.lastLine()&&(i=P(i.line+1,0)),n.line<t.viewFrom||i.line>t.viewTo-1)return!1
var o,a,l
n.line==t.viewFrom||0==(o=Sr(e,n.line))?(a=W(t.view[0].line),l=t.view[0].node):(a=W(t.view[o].line),l=t.view[o-1].node.nextSibling)
var s,u,c=Sr(e,i.line)
if(c==t.view.length-1?(s=t.viewTo-1,u=t.lineDiv.lastChild):(s=W(t.view[c+1].line)-1,u=t.view[c+1].node.previousSibling),!l)return!1
for(var d=e.doc.splitLines(aa(e,l,u,a,s)),f=N(e.doc,P(a,0),P(s,T(e.doc,s).text.length));d.length>1&&f.length>1;)if(g(d)==g(f))d.pop(),f.pop(),s--
else{if(d[0]!=f[0])break
d.shift(),f.shift(),a++}for(var h=0,p=0,m=d[0],v=f[0],y=Math.min(m.length,v.length);h<y&&m.charCodeAt(h)==v.charCodeAt(h);)++h
for(var b=g(d),w=g(f),x=Math.min(b.length-(1==d.length?h:0),w.length-(1==f.length?h:0));p<x&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)++p
if(1==d.length&&1==f.length&&a==n.line)for(;h&&h>n.ch&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)h--,p++
d[d.length-1]=b.slice(0,b.length-p).replace(/^\u200b+/,""),d[0]=d[0].slice(h).replace(/\u200b+$/,"")
var k=P(a,h),C=P(s,f.length?g(f).length-p:0)
return d.length>1||d[0]||E(k,C)?(Pi(e.doc,d,k,C,"+input"),!0):void 0},Zl.prototype.ensurePolled=function(){this.forceCompositionEnd()},Zl.prototype.reset=function(){this.forceCompositionEnd()},Zl.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Zl.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()},80))},Zl.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||fn(this.cm,function(){return mn(e.cm)})},Zl.prototype.setUneditable=function(e){e.contentEditable="false"},Zl.prototype.onKeyPress=function(e){0!=e.charCode&&(e.preventDefault(),this.cm.isReadOnly()||hn(this.cm,Xo)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Zl.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Zl.prototype.onContextMenu=function(){},Zl.prototype.resetPosition=function(){},Zl.prototype.needsContentAttribute=!0
var Ql=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new Ea,this.hasSelection=!1,this.composing=null}
Ql.prototype.init=function(e){function t(e){if(!Te(i,e)){if(i.somethingSelected())_o({lineWise:!1,text:i.getSelections()})
else{if(!i.options.lineWiseCopyCut)return
var t=Qo(i)
_o({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,ja):(n.prevInput="",a.value=t.text.join("\n"),Pa(a))}"cut"==e.type&&(i.state.cutIncoming=!0)}}var r=this,n=this,i=this.cm,o=this.wrapper=ea(),a=this.textarea=o.firstChild
e.wrapper.insertBefore(o,e.wrapper.firstChild),Sa&&(a.style.width="0px"),Qa(a,"input",function(){ga&&ma>=9&&r.hasSelection&&(r.hasSelection=null),n.poll()}),Qa(a,"paste",function(e){Te(i,e)||Yo(e,i)||(i.state.pasteIncoming=!0,n.fastPoll())}),Qa(a,"cut",t),Qa(a,"copy",t),Qa(e.scroller,"paste",function(t){Ht(e,t)||Te(i,t)||(i.state.pasteIncoming=!0,n.focus())}),Qa(e.lineSpace,"selectstart",function(t){Ht(e,t)||We(t)}),Qa(a,"compositionstart",function(){var e=i.getCursor("from")
n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),Qa(a,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},Ql.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=Mr(e)
if(e.options.moveInputWithCursor){var i=lr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return n},Ql.prototype.showSelection=function(e){var t=this.cm.display
r(t.cursorDiv,e.cursors),r(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},Ql.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm
if(t.somethingSelected()){this.prevInput=""
var r=t.getSelection()
this.textarea.value=r,t.state.focused&&Pa(this.textarea),ga&&ma>=9&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",ga&&ma>=9&&(this.hasSelection=null))}},Ql.prototype.getField=function(){return this.textarea},Ql.prototype.supportsTouch=function(){return!1},Ql.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!Ma||a()!=this.textarea))try{this.textarea.focus()}catch(e){}},Ql.prototype.blur=function(){this.textarea.blur()},Ql.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Ql.prototype.receivedFocus=function(){this.slowPoll()},Ql.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},Ql.prototype.fastPoll=function(){function e(){r.poll()||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))}var t=!1,r=this
r.pollingFast=!0,r.polling.set(20,e)},Ql.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput
if(this.contextMenuPending||!t.state.focused||tl(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=r.value
if(i==n&&!t.somethingSelected())return!1
if(ga&&ma>=9&&this.hasSelection===i||Ta&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var a=0,l=Math.min(n.length,i.length);a<l&&n.charCodeAt(a)==i.charCodeAt(a);)++a
return fn(t,function(){Xo(t,i.slice(a),n.length-a,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},Ql.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Ql.prototype.onKeyPress=function(){ga&&ma>=9&&(this.hasSelection=null),this.fastPoll()},Ql.prototype.onContextMenu=function(e){function t(){if(null!=a.selectionStart){var e=i.somethingSelected(),t="​"+(e?a.value:"")
a.value="⇚",a.value=t,n.prevInput=e?"":"​",a.selectionStart=1,a.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function r(){if(n.contextMenuPending=!1,n.wrapper.style.cssText=c,a.style.cssText=u,ga&&ma<9&&o.scrollbars.setScrollTop(o.scroller.scrollTop=s),null!=a.selectionStart){(!ga||ga&&ma<9)&&t()
var e=0,r=function(){o.selForContextMenu==i.doc.sel&&0==a.selectionStart&&a.selectionEnd>0&&"​"==n.prevInput?hn(i,Ti)(i):e++<10?o.detectingSelectAll=setTimeout(r,500):(o.selForContextMenu=null,o.input.reset())}
o.detectingSelectAll=setTimeout(r,200)}}var n=this,i=n.cm,o=i.display,a=n.textarea,l=Cr(i,e),s=o.scroller.scrollTop
if(l&&!wa){i.options.resetSelectionOnContextMenu&&-1==i.doc.sel.contains(l)&&hn(i,bi)(i.doc,Rn(l),ja)
var u=a.style.cssText,c=n.wrapper.style.cssText
n.wrapper.style.cssText="position: absolute"
var d=n.wrapper.getBoundingClientRect()
a.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-d.top-5)+"px; left: "+(e.clientX-d.left-5)+"px;\n      z-index: 1000; background: "+(ga?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
var f
if(va&&(f=window.scrollY),o.input.focus(),va&&window.scrollTo(null,f),o.input.reset(),i.somethingSelected()||(a.value=n.prevInput=" "),n.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),ga&&ma>=9&&t(),Da){He(e)
var h=function(){Le(window,"mouseup",h),setTimeout(r,20)}
Qa(window,"mouseup",h)}else setTimeout(r,50)}},Ql.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},Ql.prototype.setUneditable=function(){},Ql.prototype.needsContentAttribute=!1,function(e){function t(t,n,i,o){e.defaults[t]=n,i&&(r[t]=o?function(e,t,r){r!=ql&&i(e,t,r)}:i)}var r=e.optionHandlers
e.defineOption=t,e.Init=ql,t("value","",function(e,t){return e.setValue(t)},!0),t("mode",null,function(e,t){e.doc.modeOption=t,Un(e)},!0),t("indentUnit",2,Un,!0),t("indentWithTabs",!1),t("smartIndent",!0),t("tabSize",4,function(e){qn(e),er(e),mn(e)},!0),t("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,r.push(P(n,o))}n++})
for(var i=r.length-1;i>=0;i--)Pi(e.doc,t,r[i],P(r[i].line,r[i].ch+t.length))}}),t("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=ql&&e.refresh()}),t("specialCharPlaceholder",st,function(e){return e.refresh()},!0),t("electricChars",!0),t("inputStyle",Ma?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),t("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),t("rtlMoveVisually",!Aa),t("wholeLineUpdateBefore",!0),t("theme","default",function(e){jo(e),Vo(e)},!0),t("keyMap","default",function(e,t,r){var n=uo(t),i=r!=ql&&uo(r)
i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),t("extraKeys",null),t("configureMouse",null),t("lineWrapping",!1,Go,!0),t("gutters",[],function(e){Hn(e.options),Vo(e)},!0),t("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?wr(e.display)+"px":"0",e.refresh()},!0),t("coverGutterNextToScrollbar",!1,function(e){return en(e)},!0),t("scrollbarStyle","native",function(e){rn(e),en(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),t("lineNumbers",!1,function(e){Hn(e.options),Vo(e)},!0),t("firstLineNumber",1,Vo,!0),t("lineNumberFormatter",function(e){return e},Vo,!0),t("showCursorWhenSelecting",!1,Lr,!0),t("resetSelectionOnContextMenu",!0),t("lineWiseCopyCut",!0),t("pasteLinesPerSelection",!0),t("readOnly",!1,function(e,t){"nocursor"==t&&(Hr(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),t("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),t("dragDrop",!0,Ko),t("allowDropFileTypes",null),t("cursorBlinkRate",530),t("cursorScrollMargin",0),t("cursorHeight",1,Lr,!0),t("singleCursorHeightPerLine",!0,Lr,!0),t("workTime",100),t("workDelay",100),t("flattenSpans",!0,qn,!0),t("addModeClass",!1,qn,!0),t("pollInterval",100),t("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),t("historyEventDelay",1250),t("viewportMargin",10,function(e){return e.refresh()},!0),t("maxHighlightLength",1e4,qn,!0),t("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),t("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),t("autofocus",null),t("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0)}(Uo),function(e){var t=e.optionHandlers,r=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,r){var n=this.options,i=n[e]
n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&hn(this,t[e])(this,r,i),Me(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](uo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:pn(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
v(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,mn(this)}),removeOverlay:pn(function(e){for(var t=this,r=this.state.overlays,n=0;n<r.length;++n){var i=r[n].modeSpec
if(i==e||"string"==typeof e&&i.name==e)return r.splice(n,1),t.state.modeGen++,void mn(t)}}),indentLine:pn(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),D(this.doc,e)&&$o(this,e,t,r)}),indentSelection:pn(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i]
if(o.empty())o.head.line>n&&($o(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&Ur(t))
else{var a=o.from(),l=o.to(),s=Math.max(n,a.line)
n=Math.min(t.lastLine(),l.line-(l.ch?0:1))+1
for(var u=s;u<n;++u)$o(t,u,e)
var c=t.doc.sel.ranges
0==a.ch&&r.length==c.length&&c[i].from().ch>0&&gi(t.doc,i,new Ml(a,c[i].to()),ja)}}}),getTokenAt:function(e,t){return Je(this,e,t)},getLineTokens:function(e,t){return Je(this,P(e),t,!0)},getTokenTypeAt:function(e){e=V(this.doc,e)
var t,r=_e(this,T(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var a=n+i>>1
if((a?r[2*a-1]:0)>=o)i=a
else{if(!(r[2*a+1]<o)){t=r[2*a+2]
break}n=a+1}}var l=t?t.indexOf("overlay "):-1
return l<0?t:0==l?null:t.slice(0,l-1)},getModeAt:function(t){var r=this.doc.mode
return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=this,i=[]
if(!r.hasOwnProperty(t))return i
var o=r[t],a=this.getModeAt(e)
if("string"==typeof a[t])o[a[t]]&&i.push(o[a[t]])
else if(a[t])for(var l=0;l<a[t].length;l++){var s=o[a[t][l]]
s&&i.push(s)}else a.helperType&&o[a.helperType]?i.push(o[a.helperType]):o[a.name]&&i.push(o[a.name])
for(var u=0;u<o._global.length;u++){var c=o._global[u]
c.pred(a,n)&&-1==f(i,c.val)&&i.push(c.val)}return i},getStateAfter:function(e,t){var r=this.doc
return e=j(r,null==e?r.first+r.size-1:e),Xe(this,e+1,t).state},cursorCoords:function(e,t){var r,n=this.doc.sel.primary()
return r=null==e?n.head:"object"==typeof e?V(this.doc,e):e?n.from():n.to(),lr(this,r,t||"page")},charCoords:function(e,t){return ar(this,V(this.doc,e),t||"page")},coordsChar:function(e,t){return e=or(this,e,t||"page"),cr(this,e.left,e.top)},lineAtHeight:function(e,t){return e=or(this,{top:e,left:0},t||"page").top,z(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=T(this.doc,e)}else n=e
return ir(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-ye(n):0)},defaultTextHeight:function(){return vr(this.display)},defaultCharWidth:function(){return yr(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display,a=(e=lr(this,V(this.doc,e))).bottom,l=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==n)a=e.top
else if("above"==n||"near"==n){var s=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>s)&&e.top>t.offsetHeight?a=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=s&&(a=e.bottom),l+t.offsetWidth>u&&(l=u-t.offsetWidth)}t.style.top=a+"px",t.style.left=t.style.right="","right"==i?(l=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?l=0:"middle"==i&&(l=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=l+"px"),r&&Vr(this,{left:l,top:a,right:l+t.offsetWidth,bottom:a+t.offsetHeight})},triggerOnKeyDown:pn(So),triggerOnKeyPress:pn(To),triggerOnKeyUp:Mo,triggerOnMouseDown:pn(Ao),execCommand:function(e){if(Bl.hasOwnProperty(e))return Bl[e].call(null,this)},triggerElectric:pn(function(e){Zo(this,e)}),findPosH:function(e,t,r,n){var i=this,o=1
t<0&&(o=-1,t=-t)
for(var a=V(this.doc,e),l=0;l<t&&!(a=ta(i.doc,a,o,r,n)).hitSide;++l);return a},moveH:pn(function(e,t){var r=this
this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?ta(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},Ka)}),deleteH:pn(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):co(this,function(r){var i=ta(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=this,o=1,a=n
t<0&&(o=-1,t=-t)
for(var l=V(this.doc,e),s=0;s<t;++s){var u=lr(i,l,"div")
if(null==a?a=u.left:u.left=a,(l=ra(i,u,o,r)).hitSide)break}return l},moveV:pn(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(a){if(o)return e<0?a.from():a.to()
var l=lr(r,a.head,"div")
null!=a.goalColumn&&(l.left=a.goalColumn),i.push(l.left)
var s=ra(r,l,e,t)
return"page"==t&&a==n.sel.primary()&&Gr(r,ar(r,s,"div").top-l.top),s},Ka),i.length)for(var a=0;a<n.sel.ranges.length;a++)n.sel.ranges[a].goalColumn=i[a]}),findWordAt:function(e){var t=T(this.doc,e.line).text,r=e.ch,n=e.ch
if(t){var i=this.getHelper(e,"wordChars")
"before"!=e.sticky&&n!=t.length||!r?++n:--r
for(var o=t.charAt(r),a=x(o,i)?function(e){return x(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!x(e)};r>0&&a(t.charAt(r-1));)--r
for(;n<t.length&&a(t.charAt(n));)++n}return new Ml(P(e.line,r),P(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?l(this.display.cursorDiv,"CodeMirror-overwrite"):Ha(this.display.cursorDiv,"CodeMirror-overwrite"),Me(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==a()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:pn(function(e,t){qr(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Ft(this)-this.display.barHeight,width:e.scrollWidth-Ft(this)-this.display.barWidth,clientHeight:Bt(this),clientWidth:Rt(this)}},scrollIntoView:pn(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:P(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?$r(this,e):Xr(this,e.from,e.to,e.margin)}),setSize:pn(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&Jt(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){vn(r,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,Me(this,"refresh",this)}),operation:function(e){return fn(this,e)},startOperation:function(){return nn(this)},endOperation:function(){return on(this)},refresh:pn(function(){var e=this.display.cachedTextHeight
mn(this),this.curOp.forceUpdate=!0,er(this),qr(this,this.doc.scrollLeft,this.doc.scrollTop),Wn(this),(null==e||Math.abs(e-vr(this.display))>.5)&&kr(this),Me(this,"refresh",this)}),swapDoc:pn(function(e){var t=this.doc
return t.cm=null,Yn(this,e),er(this),this.display.input.reset(),qr(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,bt(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Oe(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o})}}(Uo)
var Jl="iter insert remove copy getEditor constructor".split(" ")
for(var es in zl.prototype)zl.prototype.hasOwnProperty(es)&&f(Jl,es)<0&&(Uo.prototype[es]=function(e){return function(){return e.apply(this.doc,arguments)}}(zl.prototype[es]))
return Oe(zl),Uo.inputStyles={textarea:Ql,contenteditable:Zl},Uo.defineMode=function(e){Uo.defaults.mode||"null"==e||(Uo.defaults.mode=e),Be.apply(this,arguments)},Uo.defineMIME=function(e,t){ol[e]=t},Uo.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Uo.defineMIME("text/plain","null"),Uo.defineExtension=function(e,t){Uo.prototype[e]=t},Uo.defineDocExtension=function(e,t){zl.prototype[e]=t},Uo.fromTextArea=function(e,t){function r(){e.value=s.getValue()}if(t=t?c(t):{},t.value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=a()
t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}var i
if(e.form&&(Qa(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var l=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=l}}catch(e){}}t.finishInit=function(t){t.save=r,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,r(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(Le(e.form,"submit",r),"function"==typeof e.form.submit&&(e.form.submit=i))}},e.style.display="none"
var s=Uo(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return s},function(e){e.off=Le,e.on=Qa,e.wheelEventPixels=En,e.Doc=zl,e.splitLines=el,e.countColumn=d,e.findColumn=h,e.isWordChar=w,e.Pass=Ba,e.signal=Me,e.Line=dl,e.changeEnd=Bn,e.scrollbarModel=wl,e.Pos=P,e.cmpPos=E,e.modes=il,e.mimeModes=ol,e.resolveMode=je,e.getMode=Ve,e.modeExtensions=al,e.extendMode=Ke,e.copyState=Ge,e.startState=qe,e.innerMode=Ue,e.commands=Bl,e.keyMap=Rl,e.keyName=so,e.isModifierKey=ao,e.lookupKey=oo,e.normalizeKeyMap=io,e.StringStream=ll,e.SharedTextMarker=Ol,e.TextMarker=Al,e.LineWidget=Tl,e.e_preventDefault=We,e.e_stopPropagation=ze,e.e_stop=He,e.addClass=l,e.contains=o,e.rmClass=Ha,e.keyNames=Pl}(Uo),Uo.version="5.30.0",Uo}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},r=0;r<e.length;++r)t[e[r].toLowerCase()]=!0
return t}function r(e,t){for(var r,n=!1;null!=(r=e.next());){if(n&&"/"==r){t.tokenize=null
break}n="*"==r}return["comment","comment"]}e.defineMode("css",function(t,r){function n(e,t){return p=t,e}function i(e,t){var r=e.next()
if(v[r]){var i=v[r](e,t)
if(!1!==i)return i}return"@"==r?(e.eatWhile(/[\w\\\-]/),n("def",e.current())):"="==r||("~"==r||"|"==r)&&e.eat("=")?n(null,"compare"):'"'==r||"'"==r?(t.tokenize=o(r),t.tokenize(e,t)):"#"==r?(e.eatWhile(/[\w\\\-]/),n("atom","hash")):"!"==r?(e.match(/^\s*\w*/),n("keyword","important")):/\d/.test(r)||"."==r&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),n("number","unit")):"-"!==r?/[,+>*\/]/.test(r)?n(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?n("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?n(null,r):"u"==r&&e.match(/rl(-prefix)?\(/)||"d"==r&&e.match("omain(")||"r"==r&&e.match("egexp(")?(e.backUp(1),t.tokenize=a,n("property","word")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),n("property","word")):n(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),n("number","unit")):e.match(/^-[\w\\\-]+/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?n("variable-2","variable-definition"):n("variable-2","variable")):e.match(/^\w+-/)?n("meta","meta"):void 0}function o(e){return function(t,r){for(var i,o=!1;null!=(i=t.next());){if(i==e&&!o){")"==e&&t.backUp(1)
break}o=!o&&"\\"==i}return(i==e||!o&&")"!=e)&&(r.tokenize=null),n("string","string")}}function a(e,t){return e.next(),e.match(/\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=o(")"),n(null,"(")}function l(e,t,r){this.type=e,this.indent=t,this.prev=r}function s(e,t,r,n){return e.context=new l(r,t.indentation()+(!1===n?0:m),e.context),r}function u(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function c(e,t,r){return W[r.context.type](e,t,r)}function d(e,t,r,n){for(var i=n||1;i>0;i--)r.context=r.context.prev
return c(e,t,r)}function f(e){var t=e.current().toLowerCase()
g=T.hasOwnProperty(t)?"atom":M.hasOwnProperty(t)?"keyword":"variable"}var h=r.inline
r.propertyKeywords||(r=e.resolveMode("text/css"))
var p,g,m=t.indentUnit,v=r.tokenHooks,y=r.documentTypes||{},b=r.mediaTypes||{},w=r.mediaFeatures||{},x=r.mediaValueKeywords||{},k=r.propertyKeywords||{},C=r.nonStandardPropertyKeywords||{},S=r.fontProperties||{},L=r.counterDescriptors||{},M=r.colorKeywords||{},T=r.valueKeywords||{},N=r.allowNested,A=r.lineComment,O=!0===r.supportsAtComponent,W={}
return W.top=function(e,t,r){if("{"==e)return s(r,t,"block")
if("}"==e&&r.context.prev)return u(r)
if(O&&/@component/.test(e))return s(r,t,"atComponentBlock")
if(/^@(-moz-)?document$/.test(e))return s(r,t,"documentTypes")
if(/^@(media|supports|(-moz-)?document|import)$/.test(e))return s(r,t,"atBlock")
if(/^@(font-face|counter-style)/.test(e))return r.stateArg=e,"restricted_atBlock_before"
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e))return"keyframes"
if(e&&"@"==e.charAt(0))return s(r,t,"at")
if("hash"==e)g="builtin"
else if("word"==e)g="tag"
else{if("variable-definition"==e)return"maybeprop"
if("interpolation"==e)return s(r,t,"interpolation")
if(":"==e)return"pseudo"
if(N&&"("==e)return s(r,t,"parens")}return r.context.type},W.block=function(e,t,r){if("word"==e){var n=t.current().toLowerCase()
return k.hasOwnProperty(n)?(g="property","maybeprop"):C.hasOwnProperty(n)?(g="string-2","maybeprop"):N?(g=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(g+=" error","maybeprop")}return"meta"==e?"block":N||"hash"!=e&&"qualifier"!=e?W.top(e,t,r):(g="error","block")},W.maybeprop=function(e,t,r){return":"==e?s(r,t,"prop"):c(e,t,r)},W.prop=function(e,t,r){if(";"==e)return u(r)
if("{"==e&&N)return s(r,t,"propBlock")
if("}"==e||"{"==e)return d(e,t,r)
if("("==e)return s(r,t,"parens")
if("hash"!=e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"==e)f(t)
else if("interpolation"==e)return s(r,t,"interpolation")}else g+=" error"
return"prop"},W.propBlock=function(e,t,r){return"}"==e?u(r):"word"==e?(g="property","maybeprop"):r.context.type},W.parens=function(e,t,r){return"{"==e||"}"==e?d(e,t,r):")"==e?u(r):"("==e?s(r,t,"parens"):"interpolation"==e?s(r,t,"interpolation"):("word"==e&&f(t),"parens")},W.pseudo=function(e,t,r){return"meta"==e?"pseudo":"word"==e?(g="variable-3",r.context.type):c(e,t,r)},W.documentTypes=function(e,t,r){return"word"==e&&y.hasOwnProperty(t.current())?(g="tag",r.context.type):W.atBlock(e,t,r)},W.atBlock=function(e,t,r){if("("==e)return s(r,t,"atBlock_parens")
if("}"==e||";"==e)return d(e,t,r)
if("{"==e)return u(r)&&s(r,t,N?"block":"top")
if("interpolation"==e)return s(r,t,"interpolation")
if("word"==e){var n=t.current().toLowerCase()
g="only"==n||"not"==n||"and"==n||"or"==n?"keyword":b.hasOwnProperty(n)?"attribute":w.hasOwnProperty(n)?"property":x.hasOwnProperty(n)?"keyword":k.hasOwnProperty(n)?"property":C.hasOwnProperty(n)?"string-2":T.hasOwnProperty(n)?"atom":M.hasOwnProperty(n)?"keyword":"error"}return r.context.type},W.atComponentBlock=function(e,t,r){return"}"==e?d(e,t,r):"{"==e?u(r)&&s(r,t,N?"block":"top",!1):("word"==e&&(g="error"),r.context.type)},W.atBlock_parens=function(e,t,r){return")"==e?u(r):"{"==e||"}"==e?d(e,t,r,2):W.atBlock(e,t,r)},W.restricted_atBlock_before=function(e,t,r){return"{"==e?s(r,t,"restricted_atBlock"):"word"==e&&"@counter-style"==r.stateArg?(g="variable","restricted_atBlock_before"):c(e,t,r)},W.restricted_atBlock=function(e,t,r){return"}"==e?(r.stateArg=null,u(r)):"word"==e?(g="@font-face"==r.stateArg&&!S.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==r.stateArg&&!L.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},W.keyframes=function(e,t,r){return"word"==e?(g="variable","keyframes"):"{"==e?s(r,t,"top"):c(e,t,r)},W.at=function(e,t,r){return";"==e?u(r):"{"==e||"}"==e?d(e,t,r):("word"==e?g="tag":"hash"==e&&(g="builtin"),"at")},W.interpolation=function(e,t,r){return"}"==e?u(r):"{"==e||";"==e?d(e,t,r):("word"==e?g="variable":"variable"!=e&&"("!=e&&")"!=e&&(g="error"),"interpolation")},{startState:function(e){return{tokenize:null,state:h?"block":"top",stateArg:null,context:new l(h?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null
var r=(t.tokenize||i)(e,t)
return r&&"object"==typeof r&&(p=r[1],r=r[0]),g=r,"comment"!=p&&(t.state=W[t.state](p,e,t)),g},indent:function(e,t){var r=e.context,n=t&&t.charAt(0),i=r.indent
return"prop"!=r.type||"}"!=n&&")"!=n||(r=r.prev),r.prev&&("}"!=n||"block"!=r.type&&"top"!=r.type&&"interpolation"!=r.type&&"restricted_atBlock"!=r.type?(")"!=n||"parens"!=r.type&&"atBlock_parens"!=r.type)&&("{"!=n||"at"!=r.type&&"atBlock"!=r.type)||(i=Math.max(0,r.indent-m)):i=(r=r.prev).indent),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:A,fold:"brace"}})
var n=["domain","regexp","url","url-prefix"],i=t(n),o=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],a=t(o),l=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],s=t(l),u=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],c=t(u),d=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],f=t(d),h=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],p=t(h),g=t(["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"]),m=t(["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"]),v=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],y=t(v),b=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],w=t(b),x=n.concat(o).concat(l).concat(u).concat(d).concat(h).concat(v).concat(b)
e.registerHelper("hintWords","css",x),e.defineMIME("text/css",{documentTypes:i,mediaTypes:a,mediaFeatures:s,mediaValueKeywords:c,propertyKeywords:f,nonStandardPropertyKeywords:p,fontProperties:g,counterDescriptors:m,colorKeywords:y,valueKeywords:w,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=r,r(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:a,mediaFeatures:s,mediaValueKeywords:c,propertyKeywords:f,nonStandardPropertyKeywords:p,colorKeywords:y,valueKeywords:w,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=r,r(e,t)):["operator","operator"]},":":function(e){return!!e.match(/\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return!!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:a,mediaFeatures:s,mediaValueKeywords:c,propertyKeywords:f,nonStandardPropertyKeywords:p,colorKeywords:y,valueKeywords:w,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=r,r(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:i,mediaTypes:a,mediaFeatures:s,propertyKeywords:f,nonStandardPropertyKeywords:p,fontProperties:g,counterDescriptors:m,colorKeywords:y,valueKeywords:w,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=r,r(e,t))}},name:"css",helperType:"gss"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,r){var n=e.current(),i=n.search(t)
return i>-1?e.backUp(n.length-i):n.match(/<\/?$/)&&(e.backUp(n.length),e.match(t,!1)||e.match(n)),r}function r(e){return s[e]||(s[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}function n(e,t){var n=e.match(r(t))
return n?/^\s*(.*?)\s*$/.exec(n[2])[1]:""}function i(e,t){return new RegExp((t?"^":"")+"</s*"+e+"s*>","i")}function o(e,t){for(var r in e)for(var n=t[r]||(t[r]=[]),i=e[r],o=i.length-1;o>=0;o--)n.unshift(i[o])}function a(e,t){for(var r=0;r<e.length;r++){var i=e[r]
if(!i[0]||i[1].test(n(t,i[0])))return i[2]}}var l={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},s={}
e.defineMode("htmlmixed",function(r,n){function s(n,o){var l,d=u.token(n,o.htmlState),f=/\btag\b/.test(d)
if(f&&!/[<>\s\/]/.test(n.current())&&(l=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&c.hasOwnProperty(l))o.inTag=l+" "
else if(o.inTag&&f&&/>$/.test(n.current())){var h=/^([\S]+) (.*)/.exec(o.inTag)
o.inTag=null
var p=">"==n.current()&&a(c[h[1]],h[2]),g=e.getMode(r,p),m=i(h[1],!0),v=i(h[1],!1)
o.token=function(e,r){return e.match(m,!1)?(r.token=s,r.localState=r.localMode=null,null):t(e,v,r.localMode.token(e,r.localState))},o.localMode=g,o.localState=e.startState(g,u.indent(o.htmlState,""))}else o.inTag&&(o.inTag+=n.current(),n.eol()&&(o.inTag+=" "))
return d}var u=e.getMode(r,{name:"xml",htmlMode:!0,multilineTagIndentFactor:n.multilineTagIndentFactor,multilineTagIndentPastTag:n.multilineTagIndentPastTag}),c={},d=n&&n.tags,f=n&&n.scriptTypes
if(o(l,c),d&&o(d,c),f)for(var h=f.length-1;h>=0;h--)c.script.unshift(["type",f[h].matches,f[h].mode])
return{startState:function(){return{token:s,inTag:null,localMode:null,localState:null,htmlState:e.startState(u)}},copyState:function(t){var r
return t.localState&&(r=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:r,htmlState:e.copyState(u,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,r,n){return!t.localMode||/^\s*<\//.test(r)?u.indent(t.htmlState,r):t.localMode.indent?t.localMode.indent(t.localState,r,n):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||u}}}},"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("javascript",function(t,r){function n(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return
"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function i(e,t,r){return Me=e,Te=r,t}function o(e,t){var r=e.next()
if('"'==r||"'"==r)return t.tokenize=a(r),t.tokenize(e,t)
if("."==r&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return i("number","number")
if("."==r&&e.match(".."))return i("spread","meta")
if(/[\[\]{}\(\),;\:\.]/.test(r))return i(r)
if("="==r&&e.eat(">"))return i("=>","operator")
if("0"==r&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),i("number","number")
if("0"==r&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),i("number","number")
if("0"==r&&e.eat(/b/i))return e.eatWhile(/[01]/i),i("number","number")
if(/\d/.test(r))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),i("number","number")
if("/"==r)return e.eat("*")?(t.tokenize=l,l(e,t)):e.eat("/")?(e.skipToEnd(),i("comment","comment")):Le(e,t,1)?(n(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),i("regexp","string-2")):(e.eatWhile(Pe),i("operator","operator",e.current()))
if("`"==r)return t.tokenize=s,s(e,t)
if("#"==r)return e.skipToEnd(),i("error","error")
if(Pe.test(r))return">"==r&&t.lexical&&">"==t.lexical.type||e.eatWhile(Pe),i("operator","operator",e.current())
if(De.test(r)){e.eatWhile(De)
var o=e.current()
if("."!=t.lastType){if(He.propertyIsEnumerable(o)){var u=He[o]
return i(u.type,u.style,o)}if("async"==o&&e.match(/^\s*[\(\w]/,!1))return i("async","keyword",o)}return i("variable","variable",o)}}function a(e){return function(t,r){var n,a=!1
if(Oe&&"@"==t.peek()&&t.match(Ee))return r.tokenize=o,i("jsonld-keyword","meta")
for(;null!=(n=t.next())&&(n!=e||a);)a=!a&&"\\"==n
return a||(r.tokenize=o),i("string","string")}}function l(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=o
break}n="*"==r}return i("comment","comment")}function s(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=o
break}n=!n&&"\\"==r}return i("quasi","string-2",e.current())}function u(e,t){t.fatArrowAt&&(t.fatArrowAt=null)
var r=e.string.indexOf("=>",e.start)
if(!(r<0)){if(ze){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r))
n&&(r=n.index)}for(var i=0,o=!1,a=r-1;a>=0;--a){var l=e.string.charAt(a),s=Ie.indexOf(l)
if(s>=0&&s<3){if(!i){++a
break}if(0==--i){"("==l&&(o=!0)
break}}else if(s>=3&&s<6)++i
else if(De.test(l))o=!0
else{if(/["'\/]/.test(l))return
if(o&&!i){++a
break}}}o&&!i&&(t.fatArrowAt=a)}}function c(e,t,r,n,i,o){this.indented=e,this.column=t,this.type=r,this.prev=i,this.info=o,null!=n&&(this.align=n)}function d(e,t){for(n=e.localVars;n;n=n.next)if(n.name==t)return!0
for(var r=e.context;r;r=r.prev)for(var n=r.vars;n;n=n.next)if(n.name==t)return!0}function f(e,t,r,n,i){var o=e.cc
for(Re.state=e,Re.stream=i,Re.marked=null,Re.cc=o,Re.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():We?k:x)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()()
return Re.marked?Re.marked:"variable"==r&&d(e,n)?"variable-2":t}}function h(){for(var e=arguments.length-1;e>=0;e--)Re.cc.push(arguments[e])}function p(){return h.apply(null,arguments),!0}function g(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0
return!1}var n=Re.state
if(Re.marked="def",n.context){if(t(n.localVars))return
n.localVars={name:e,next:n.localVars}}else{if(t(n.globalVars))return
r.globalVars&&(n.globalVars={name:e,next:n.globalVars})}}function m(){Re.state.context={prev:Re.state.context,vars:Re.state.localVars},Re.state.localVars=Be}function v(){Re.state.localVars=Re.state.context.vars,Re.state.context=Re.state.context.prev}function y(e,t){var r=function(){var r=Re.state,n=r.indented
if("stat"==r.lexical.type)n=r.lexical.indented
else for(var i=r.lexical;i&&")"==i.type&&i.align;i=i.prev)n=i.indented
r.lexical=new c(n,Re.stream.column(),e,null,r.lexical,t)}
return r.lex=!0,r}function b(){var e=Re.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function w(e){function t(r){return r==e?p():";"==e?h():p(t)}return t}function x(e,t){return"var"==e?p(y("vardef",t.length),Q,w(";"),b):"keyword a"==e?p(y("form"),S,x,b):"keyword b"==e?p(y("form"),x,b):"{"==e?p(y("}"),G,b):";"==e?p():"if"==e?("else"==Re.state.lexical.info&&Re.state.cc[Re.state.cc.length-1]==b&&Re.state.cc.pop()(),p(y("form"),S,x,b,ne)):"function"==e?p(ue):"for"==e?p(y("form"),ie,x,b):"variable"==e?ze&&"type"==t?(Re.marked="keyword",p(q,w("operator"),q,w(";"))):ze&&"declare"==t?(Re.marked="keyword",p(x)):p(y("stat"),I):"switch"==e?p(y("form"),S,w("{"),y("}","switch"),G,b,b):"case"==e?p(k,w(":")):"default"==e?p(w(":")):"catch"==e?p(y("form"),m,w("("),ce,w(")"),x,b,v):"class"==e?p(y("form"),fe,b):"export"==e?p(y("stat"),me,b):"import"==e?p(y("stat"),ye,b):"module"==e?p(y("form"),J,w("{"),y("}"),G,b,b):"async"==e?p(x):"@"==t?p(k,x):h(y("stat"),k,w(";"),b)}function k(e){return L(e,!1)}function C(e){return L(e,!0)}function S(e){return"("!=e?h():p(y(")"),k,w(")"),b)}function L(e,t){if(Re.state.fatArrowAt==Re.stream.start){var r=t?D:z
if("("==e)return p(m,y(")"),V(ce,")"),b,w("=>"),r,v)
if("variable"==e)return h(m,J,w("=>"),r,v)}var n=t?A:N
return Fe.hasOwnProperty(e)?p(n):"function"==e?p(ue,n):"class"==e?p(y("form"),de,b):"keyword c"==e||"async"==e?p(t?T:M):"("==e?p(y(")"),M,w(")"),b,n):"operator"==e||"spread"==e?p(t?C:k):"["==e?p(y("]"),Ce,b,n):"{"==e?K(R,"}",null,n):"quasi"==e?h(O,n):"new"==e?p(H(t)):p()}function M(e){return e.match(/[;\}\)\],]/)?h():h(k)}function T(e){return e.match(/[;\}\)\],]/)?h():h(C)}function N(e,t){return","==e?p(k):A(e,t,!1)}function A(e,t,r){var n=0==r?N:A,i=0==r?k:C
return"=>"==e?p(m,r?D:z,v):"operator"==e?/\+\+|--/.test(t)||ze&&"!"==t?p(n):"?"==t?p(k,w(":"),i):p(i):"quasi"==e?h(O,n):";"!=e?"("==e?K(C,")","call",n):"."==e?p(F,n):"["==e?p(y("]"),M,w("]"),b,n):ze&&"as"==t?(Re.marked="keyword",p(q,n)):"regexp"==e?(Re.state.lastType=Re.marked="operator",Re.stream.backUp(Re.stream.pos-Re.stream.start-1),p(i)):void 0:void 0}function O(e,t){return"quasi"!=e?h():"${"!=t.slice(t.length-2)?p(O):p(k,W)}function W(e){if("}"==e)return Re.marked="string-2",Re.state.tokenize=s,p(O)}function z(e){return u(Re.stream,Re.state),h("{"==e?x:k)}function D(e){return u(Re.stream,Re.state),h("{"==e?x:C)}function H(e){return function(t){return"."==t?p(e?E:P):"variable"==t&&ze?p(Z,e?A:N):h(e?C:k)}}function P(e,t){if("target"==t)return Re.marked="keyword",p(N)}function E(e,t){if("target"==t)return Re.marked="keyword",p(A)}function I(e){return":"==e?p(b,x):h(N,w(";"),b)}function F(e){if("variable"==e)return Re.marked="property",p()}function R(e,t){if("async"==e)return Re.marked="property",p(R)
if("variable"==e||"keyword"==Re.style){if(Re.marked="property","get"==t||"set"==t)return p(B)
var r
return ze&&Re.state.fatArrowAt==Re.stream.start&&(r=Re.stream.match(/^\s*:\s*/,!1))&&(Re.state.fatArrowAt=Re.stream.pos+r[0].length),p(j)}return"number"==e||"string"==e?(Re.marked=Oe?"property":Re.style+" property",p(j)):"jsonld-keyword"==e?p(j):"modifier"==e?p(R):"["==e?p(k,w("]"),j):"spread"==e?p(k,j):":"==e?h(j):void 0}function B(e){return"variable"!=e?h(j):(Re.marked="property",p(ue))}function j(e){return":"==e?p(C):"("==e?h(ue):void 0}function V(e,t,r){function n(i,o){if(r?r.indexOf(i)>-1:","==i){var a=Re.state.lexical
return"call"==a.info&&(a.pos=(a.pos||0)+1),p(function(r,n){return r==t||n==t?h():h(e)},n)}return i==t||o==t?p():p(w(t))}return function(r,i){return r==t||i==t?p():h(e,n)}}function K(e,t,r){for(var n=3;n<arguments.length;n++)Re.cc.push(arguments[n])
return p(y(t,r),V(e,t),b)}function G(e){return"}"==e?p():h(x,G)}function U(e,t){if(ze){if(":"==e)return p(q)
if("?"==t)return p(U)}}function q(e,t){return"variable"==e?"keyof"==t?(Re.marked="keyword",p(q)):(Re.marked="type",p(Y)):"string"==e||"number"==e||"atom"==e?p(Y):"["==e?p(y("]"),V(q,"]",","),b,Y):"{"==e?p(y("}"),V(_,"}",",;"),b,Y):"("==e?p(V(X,")"),$):void 0}function $(e){if("=>"==e)return p(q)}function _(e,t){return"variable"==e||"keyword"==Re.style?(Re.marked="property",p(_)):"?"==t?p(_):":"==e?p(q):"["==e?p(k,U,w("]"),_):void 0}function X(e){return"variable"==e?p(X):":"==e?p(q):void 0}function Y(e,t){return"<"==t?p(y(">"),V(q,">"),b,Y):"|"==t||"."==e?p(q):"["==e?p(w("]"),Y):"extends"==t?p(q):void 0}function Z(e,t){if("<"==t)return p(y(">"),V(q,">"),b,Y)}function Q(){return h(J,U,te,re)}function J(e,t){return"modifier"==e?p(J):"variable"==e?(g(t),p()):"spread"==e?p(J):"["==e?K(J,"]"):"{"==e?K(ee,"}"):void 0}function ee(e,t){return"variable"!=e||Re.stream.match(/^\s*:/,!1)?("variable"==e&&(Re.marked="property"),"spread"==e?p(J):"}"==e?h():p(w(":"),J,te)):(g(t),p(te))}function te(e,t){if("="==t)return p(C)}function re(e){if(","==e)return p(Q)}function ne(e,t){if("keyword b"==e&&"else"==t)return p(y("form","else"),x,b)}function ie(e){if("("==e)return p(y(")"),oe,w(")"),b)}function oe(e){return"var"==e?p(Q,w(";"),le):";"==e?p(le):"variable"==e?p(ae):h(k,w(";"),le)}function ae(e,t){return"in"==t||"of"==t?(Re.marked="keyword",p(k)):p(N,le)}function le(e,t){return";"==e?p(se):"in"==t||"of"==t?(Re.marked="keyword",p(k)):h(k,w(";"),se)}function se(e){")"!=e&&p(k)}function ue(e,t){return"*"==t?(Re.marked="keyword",p(ue)):"variable"==e?(g(t),p(ue)):"("==e?p(m,y(")"),V(ce,")"),b,U,x,v):ze&&"<"==t?p(y(">"),V(q,">"),b,ue):void 0}function ce(e,t){return"@"==t&&p(k,ce),"spread"==e||"modifier"==e?p(ce):h(J,U,te)}function de(e,t){return"variable"==e?fe(e,t):he(e,t)}function fe(e,t){if("variable"==e)return g(t),p(he)}function he(e,t){return"<"==t?p(y(">"),V(q,">"),b,he):"extends"==t||"implements"==t||ze&&","==e?p(ze?q:k,he):"{"==e?p(y("}"),pe,b):void 0}function pe(e,t){return"modifier"==e||"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t)&&Re.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(Re.marked="keyword",p(pe)):"variable"==e||"keyword"==Re.style?(Re.marked="property",p(ze?ge:ue,pe)):"["==e?p(k,w("]"),ze?ge:ue,pe):"*"==t?(Re.marked="keyword",p(pe)):";"==e?p(pe):"}"==e?p():"@"==t?p(k,pe):void 0}function ge(e,t){return"?"==t?p(ge):":"==e?p(q,te):"="==t?p(C):h(ue)}function me(e,t){return"*"==t?(Re.marked="keyword",p(ke,w(";"))):"default"==t?(Re.marked="keyword",p(k,w(";"))):"{"==e?p(V(ve,"}"),ke,w(";")):h(x)}function ve(e,t){return"as"==t?(Re.marked="keyword",p(w("variable"))):"variable"==e?h(C,ve):void 0}function ye(e){return"string"==e?p():h(be,we,ke)}function be(e,t){return"{"==e?K(be,"}"):("variable"==e&&g(t),"*"==t&&(Re.marked="keyword"),p(xe))}function we(e){if(","==e)return p(be,we)}function xe(e,t){if("as"==t)return Re.marked="keyword",p(be)}function ke(e,t){if("from"==t)return Re.marked="keyword",p(k)}function Ce(e){return"]"==e?p():h(V(C,"]"))}function Se(e,t){return"operator"==e.lastType||","==e.lastType||Pe.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}function Le(e,t,r){return t.tokenize==o&&/^(?:operator|sof|keyword [bc]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}var Me,Te,Ne=t.indentUnit,Ae=r.statementIndent,Oe=r.jsonld,We=r.json||Oe,ze=r.typescript,De=r.wordCharacters||/[\w$\xa1-\uffff]/,He=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),i=e("operator"),o={type:"atom",style:"atom"},a={if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:e("new"),delete:n,void:n,throw:n,debugger:n,var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}
if(ze){var l={type:"variable",style:"type"},s={interface:e("class"),implements:n,namespace:n,module:e("module"),enum:e("module"),public:e("modifier"),private:e("modifier"),protected:e("modifier"),abstract:e("modifier"),readonly:e("modifier"),string:l,number:l,boolean:l,any:l}
for(var u in s)a[u]=s[u]}return a}(),Pe=/[+\-*&%=<>!?|~^@]/,Ee=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Ie="([{}])",Fe={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0},Re={state:null,column:null,marked:null,cc:null},Be={name:"this",next:{name:"arguments"}}
return b.lex=!0,{startState:function(e){var t={tokenize:o,lastType:"sof",cc:[],lexical:new c((e||0)-Ne,0,"block",!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:e||0}
return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),u(e,t)),t.tokenize!=l&&e.eatSpace())return null
var r=t.tokenize(e,t)
return"comment"==Me?r:(t.lastType="operator"!=Me||"++"!=Te&&"--"!=Te?Me:"incdec",f(t,r,Me,Te,e))},indent:function(t,n){if(t.tokenize==l)return e.Pass
if(t.tokenize!=o)return 0
var i,a=n&&n.charAt(0),s=t.lexical
if(!/^\s*else\b/.test(n))for(var u=t.cc.length-1;u>=0;--u){var c=t.cc[u]
if(c==b)s=s.prev
else if(c!=ne)break}for(;("stat"==s.type||"form"==s.type)&&("}"==a||(i=t.cc[t.cc.length-1])&&(i==N||i==A)&&!/^[,\.=+\-*:?[\(]/.test(n));)s=s.prev
Ae&&")"==s.type&&"stat"==s.prev.type&&(s=s.prev)
var d=s.type,f=a==d
return"vardef"==d?s.indented+("operator"==t.lastType||","==t.lastType?s.info+1:0):"form"==d&&"{"==a?s.indented:"form"==d?s.indented+Ne:"stat"==d?s.indented+(Se(t,n)?Ae||Ne:0):"switch"!=s.info||f||0==r.doubleIndentSwitch?s.align?s.column+(f?0:1):s.indented+(f?0:Ne):s.indented+(/^(?:case|default)\b/.test(n)?Ne:2*Ne)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:We?null:"/*",blockCommentEnd:We?null:"*/",lineComment:We?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:We?"json":"javascript",jsonldMode:Oe,jsonMode:We,expressionAllowed:Le,skipExpression:function(e){var t=e.cc[e.cc.length-1]
t!=k&&t!=C||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1}
e.defineMode("xml",function(n,i){function o(e,t){function r(r){return t.tokenize=r,r(e,t)}var n=e.next()
return"<"==n?e.eat("!")?e.eat("[")?e.match("CDATA[")?r(s("atom","]]>")):null:e.match("--")?r(s("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),r(u(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=s("meta","?>"),"meta"):(M=e.eat("/")?"closeTag":"openTag",t.tokenize=a,"tag bracket"):"&"==n?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function a(e,t){var r=e.next()
if(">"==r||"/"==r&&e.eat(">"))return t.tokenize=o,M=">"==r?"endTag":"selfcloseTag","tag bracket"
if("="==r)return M="equals",null
if("<"==r){t.tokenize=o,t.state=h,t.tagName=t.tagStart=null
var n=t.tokenize(e,t)
return n?n+" tag error":"tag error"}return/[\'\"]/.test(r)?(t.tokenize=l(r),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function l(e){var t=function(t,r){for(;!t.eol();)if(t.next()==e){r.tokenize=a
break}return"string"}
return t.isInAttribute=!0,t}function s(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=o
break}r.next()}return e}}function u(e){return function(t,r){for(var n;null!=(n=t.next());){if("<"==n)return r.tokenize=u(e+1),r.tokenize(t,r)
if(">"==n){if(1==e){r.tokenize=o
break}return r.tokenize=u(e-1),r.tokenize(t,r)}}return"meta"}}function c(e,t,r){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=r,(C.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function d(e){e.context&&(e.context=e.context.prev)}function f(e,t){for(var r;;){if(!e.context)return
if(r=e.context.tagName,!C.contextGrabbers.hasOwnProperty(r)||!C.contextGrabbers[r].hasOwnProperty(t))return
d(e)}}function h(e,t,r){return"openTag"==e?(r.tagStart=t.column(),p):"closeTag"==e?g:h}function p(e,t,r){return"word"==e?(r.tagName=t.current(),T="tag",y):(T="error",p)}function g(e,t,r){if("word"==e){var n=t.current()
return r.context&&r.context.tagName!=n&&C.implicitlyClosed.hasOwnProperty(r.context.tagName)&&d(r),r.context&&r.context.tagName==n||!1===C.matchClosing?(T="tag",m):(T="tag error",v)}return T="error",v}function m(e,t,r){return"endTag"!=e?(T="error",m):(d(r),h)}function v(e,t,r){return T="error",m(e,t,r)}function y(e,t,r){if("word"==e)return T="attribute",b
if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,i=r.tagStart
return r.tagName=r.tagStart=null,"selfcloseTag"==e||C.autoSelfClosers.hasOwnProperty(n)?f(r,n):(f(r,n),r.context=new c(r,n,i==r.indented)),h}return T="error",y}function b(e,t,r){return"equals"==e?w:(C.allowMissing||(T="error"),y(e,t,r))}function w(e,t,r){return"string"==e?x:"word"==e&&C.allowUnquoted?(T="string",y):(T="error",y(e,t,r))}function x(e,t,r){return"string"==e?x:y(e,t,r)}var k=n.indentUnit,C={},S=i.htmlMode?t:r
for(var L in S)C[L]=S[L]
for(var L in i)C[L]=i[L]
var M,T
return o.isInText=!0,{startState:function(e){var t={tokenize:o,state:h,indented:e||0,tagName:null,tagStart:null,context:null}
return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
M=null
var r=t.tokenize(e,t)
return(r||M)&&"comment"!=r&&(T=null,t.state=t.state(M||r,e,t),T&&(r="error"==T?r+" error":T)),r},indent:function(t,r,n){var i=t.context
if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+k
if(i&&i.noIndent)return e.Pass
if(t.tokenize!=a&&t.tokenize!=o)return n?n.match(/^(\s*)/)[0].length:0
if(t.tagName)return!1!==C.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+k*(C.multilineTagIndentFactor||1)
if(C.alignCDATA&&/<!\[CDATA\[/.test(r))return 0
var l=r&&/^<(\/)?([\w_:\.-]*)/.exec(r)
if(l&&l[1])for(;i;){if(i.tagName==l[2]){i=i.prev
break}if(!C.implicitlyClosed.hasOwnProperty(i.tagName))break
i=i.prev}else if(l)for(;i;){var s=C.contextGrabbers[i.tagName]
if(!s||!s.hasOwnProperty(l[2]))break
i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev
return i?i.indent+k:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:C.htmlMode?"html":"xml",helperType:C.htmlMode?"html":"xml",skipAttribute:function(e){e.state==w&&(e.state=y)}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})})
