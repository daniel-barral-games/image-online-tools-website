"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[701],{4701:function(t,e,r){r.d(e,{Z:function(){return ne}});var n,o,i,s,l,a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:"modalColorPicker",tabindex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.screen,expression:"screen"}],attrs:{type:"radio",id:"type_basicColors",value:"basicColors"},domProps:{checked:t._q(t.screen,"basicColors")},on:{change:function(e){t.screen="basicColors"}}}),e("label",{staticClass:"radioLabel",attrs:{for:"type_basicColors"}},[t._v("Basic colors ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.screen,expression:"screen"}],attrs:{type:"radio",id:"type_customColors",value:"customColors"},domProps:{checked:t._q(t.screen,"customColors")},on:{change:function(e){t.screen="customColors"}}}),e("label",{staticClass:"radioLabel",attrs:{for:"type_customColors"}},[t._v("Custom colors ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"basicColors"==t.screen,expression:"screen == 'basicColors'"}]},[e("table",{staticClass:"colorGridTable"},t._l(t.colorGrid.rows,(function(r){return e("tr",{key:r.id},t._l(r.colors,(function(r){return e("td",{key:r.id},[e("svg",{attrs:{height:"30",width:"30"}},[e("circle",{staticClass:"colorSvg",attrs:{cx:"15",cy:"15",r:"13",stroke:"black","stroke-width":"0.5",fill:r.hex},on:{click:function(e){return t.selectColor(r)}}})])])})),0)})),0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:"customColors"==t.screen,expression:"screen == 'customColors'"}]},[e("div",{attrs:{id:"colorPicker"}}),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor.hex,expression:"currentColor.hex"}],domProps:{value:t.currentColor.hex},on:{input:function(e){e.target.composing||t.$set(t.currentColor,"hex",e.target.value)}}}),e("button",{staticClass:"btn btn-primary btn",on:{click:function(e){return t.selectCurrentColor()}}},[t._v("Select")])])]),t._m(1)])])])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"modalLabel"}},[t._v("Color Picker")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")])])}],u=(r(7658),r(9314)),h={},d=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function f(t,e){for(var r in e)t[r]=e[r];return t}function v(t){var e=t.parentNode;e&&e.removeChild(t)}function g(t,e,r){var n,o,i,s,l=arguments;if(e=f({},e),arguments.length>3)for(r=[r],n=3;n<arguments.length;n++)r.push(l[n]);if(null!=r&&(e.children=r),null!=t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===e[o]&&(e[o]=t.defaultProps[o]);return s=e.key,null!=(i=e.ref)&&delete e.ref,null!=s&&delete e.key,_(t,e,s,i)}function _(t,e,r,o){var i={type:t,props:e,key:r,ref:o,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(i),i}function b(t){return t.children}function m(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return _(null,t,null,null);if(null!=t.__e||null!=t.__c){var e=_(t.type,t.props,t.key,null);return e.__e=t.__e,e}return t}function y(t,e){this.props=t,this.context=e}function x(t,e){if(null==e)return t.__p?x(t.__p,t.__p.__k.indexOf(t)+1):null;for(var r;e<t.__k.length;e++)if(null!=(r=t.__k[e])&&null!=r.__e)return r.__e;return"function"==typeof t.type?x(t):null}function w(t){var e,r;if(null!=(t=t.__p)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(r=t.__k[e])&&null!=r.__e){t.__e=t.__c.base=r.__e;break}return w(t)}}function k(t){(!t.__d&&(t.__d=!0)&&1===o.push(t)||s!==n.debounceRendering)&&(s=n.debounceRendering,(n.debounceRendering||i)(C))}function C(){var t,e,r,n,i,s,l,a;for(o.sort((function(t,e){return e.__v.__b-t.__v.__b}));t=o.pop();)t.__d&&(r=void 0,n=void 0,s=(i=(e=t).__v).__e,l=e.__P,a=e.u,e.u=!1,l&&(r=[],n=F(l,i,f({},i),e.__n,void 0!==l.ownerSVGElement,null,r,a,null==s?x(i):s),M(r,i),n!=s&&w(i)))}function S(t,e,r,n,o,i,s,l,a){var c,u,p,f,g,_,b,m=r&&r.__k||d,y=m.length;if(l==h&&(l=null!=i?i[0]:y?x(r,0):null),c=0,e.__k=T(e.__k,(function(r){if(null!=r){if(r.__p=e,r.__b=e.__b+1,null===(p=m[c])||p&&r.key==p.key&&r.type===p.type)m[c]=void 0;else for(u=0;u<y;u++){if((p=m[u])&&r.key==p.key&&r.type===p.type){m[u]=void 0;break}p=null}if(f=F(t,r,p=p||h,n,o,i,s,null,l,a),(u=r.ref)&&p.ref!=u&&(b||(b=[])).push(u,r.__c||f,r),null!=f){if(null==_&&(_=f),null!=r.l)f=r.l,r.l=null;else if(i==p||f!=l||null==f.parentNode){t:if(null==l||l.parentNode!==t)t.appendChild(f);else{for(g=l,u=0;(g=g.nextSibling)&&u<y;u+=2)if(g==f)break t;t.insertBefore(f,l)}"option"==e.type&&(t.value="")}l=f.nextSibling,"function"==typeof e.type&&(e.l=f)}}return c++,r})),e.__e=_,null!=i&&"function"!=typeof e.type)for(c=i.length;c--;)null!=i[c]&&v(i[c]);for(c=y;c--;)null!=m[c]&&I(m[c],m[c]);if(b)for(c=0;c<b.length;c++)G(b[c],b[++c],b[++c])}function T(t,e,r){if(null==r&&(r=[]),null==t||"boolean"==typeof t)e&&r.push(e(null));else if(Array.isArray(t))for(var n=0;n<t.length;n++)T(t[n],e,r);else r.push(e?e(m(t)):t);return r}function E(t,e,r,n,o){var i;for(i in r)i in e||P(t,i,null,r[i],n);for(i in e)o&&"function"!=typeof e[i]||"value"===i||"checked"===i||r[i]===e[i]||P(t,i,e[i],r[i],n)}function R(t,e,r){"-"===e[0]?t.setProperty(e,r):t[e]="number"==typeof r&&!1===p.test(e)?r+"px":null==r?"":r}function P(t,e,r,n,o){var i,s,l,a,c;if("key"===(e=o?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e)if(i=t.style,"string"==typeof r)i.cssText=r;else{if("string"==typeof n&&(i.cssText="",n=null),n)for(s in n)r&&s in r||R(i,s,"");if(r)for(l in r)n&&r[l]===n[l]||R(i,l,r[l])}else"o"===e[0]&&"n"===e[1]?(a=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase(),e=(c in t?c:e).slice(2),r?(n||t.addEventListener(e,A,a),(t.t||(t.t={}))[e]=r):t.removeEventListener(e,A,a)):"list"!==e&&"tagName"!==e&&"form"!==e&&!o&&e in t?t[e]=null==r?"":r:"function"!=typeof r&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==r||!1===r?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):null==r||!1===r?t.removeAttribute(e):t.setAttribute(e,r))}function A(t){return this.t[t.type](n.event?n.event(t):t)}function F(t,e,r,o,i,s,l,a,c,u){var h,d,p,v,g,_,m,x,w,k,C=e.type;if(void 0!==e.constructor)return null;(h=n.__b)&&h(e);try{t:if("function"==typeof C){if(x=e.props,w=(h=C.contextType)&&o[h.__c],k=h?w?w.props.value:h.__p:o,r.__c?m=(d=e.__c=r.__c).__p=d.__E:("prototype"in C&&C.prototype.render?e.__c=d=new C(x,k):(e.__c=d=new y(x,k),d.constructor=C,d.render=D),w&&w.sub(d),d.props=x,d.state||(d.state={}),d.context=k,d.__n=o,p=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=C.getDerivedStateFromProps&&f(d.__s==d.state?d.__s=f({},d.__s):d.__s,C.getDerivedStateFromProps(x,d.__s)),p)null==C.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&l.push(d);else{if(null==C.getDerivedStateFromProps&&null==a&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(x,k),!a&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(x,d.__s,k)){for(d.props=x,d.state=d.__s,d.__d=!1,d.__v=e,e.__e=null!=c?c!==r.__e?c:r.__e:null,e.__k=r.__k,h=0;h<e.__k.length;h++)e.__k[h]&&(e.__k[h].__p=e);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(x,d.__s,k)}for(v=d.props,g=d.state,d.context=k,d.props=x,d.state=d.__s,(h=n.__r)&&h(e),d.__d=!1,d.__v=e,d.__P=t,h=d.render(d.props,d.state,d.context),e.__k=T(null!=h&&h.type==b&&null==h.key?h.props.children:h),null!=d.getChildContext&&(o=f(f({},o),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(_=d.getSnapshotBeforeUpdate(v,g)),S(t,e,r,o,i,s,l,c,u),d.base=e.__e;h=d.__h.pop();)d.__s&&(d.state=d.__s),h.call(d);p||null==v||null==d.componentDidUpdate||d.componentDidUpdate(v,g,_),m&&(d.__E=d.__p=null)}else e.__e=O(r.__e,e,r,o,i,s,l,u);(h=n.diffed)&&h(e)}catch(t){n.__e(t,e,r)}return e.__e}function M(t,e){for(var r;r=t.pop();)try{r.componentDidMount()}catch(t){n.__e(t,r.__v)}n.__c&&n.__c(e)}function O(t,e,r,n,o,i,s,l){var a,c,u,p,f=r.props,v=e.props;if(o="svg"===e.type||o,null==t&&null!=i)for(a=0;a<i.length;a++)if(null!=(c=i[a])&&(null===e.type?3===c.nodeType:c.localName===e.type)){t=c,i[a]=null;break}if(null==t){if(null===e.type)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),i=null}return null===e.type?f!==v&&(null!=i&&(i[i.indexOf(t)]=null),t.data=v):e!==r&&(null!=i&&(i=d.slice.call(t.childNodes)),u=(f=r.props||h).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,l||(p||u)&&(p&&u&&p.__html==u.__html||(t.innerHTML=p&&p.__html||"")),E(t,v,f,o,l),e.__k=e.props.children,p||S(t,e,r,n,"foreignObject"!==e.type&&o,i,s,h,l),l||("value"in v&&void 0!==v.value&&v.value!==t.value&&(t.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==t.checked&&(t.checked=v.checked))),t}function G(t,e,r){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,r)}}function I(t,e,r){var o,i,s;if(n.unmount&&n.unmount(t),(o=t.ref)&&G(o,null,e),r||"function"==typeof t.type||(r=null!=(i=t.__e)),t.__e=t.l=null,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){n.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(s=0;s<o.length;s++)o[s]&&I(o[s],e,r);null!=i&&v(i)}function D(t,e,r){return this.constructor(t,r)}function j(t,e,r){var o,i,s;n.__p&&n.__p(t,e),i=(o=r===l)?null:r&&r.__k||e.__k,t=g(b,null,[t]),s=[],F(e,o?e.__k=t:(r||e).__k=t,i||h,h,void 0!==e.ownerSVGElement,r&&!o?[r]:i?null:d.slice.call(e.childNodes),s,!1,r||h,o),M(s,t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function H(t,e,r){return e&&N(t.prototype,e),r&&N(t,r),t}function $(){return $=Object.assign||function(t){for(var e=arguments,r=1;r<arguments.length;r++){var n=e[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},$.apply(this,arguments)}n={},y.prototype.setState=function(t,e){var r=this.__s!==this.state&&this.__s||(this.__s=f({},this.state));("function"!=typeof t||(t=t(r,this.props)))&&f(r,t),null!=t&&this.__v&&(this.u=!1,e&&this.__h.push(e),k(this))},y.prototype.forceUpdate=function(t){this.__v&&(t&&this.__h.push(t),this.u=!0,k(this))},y.prototype.render=b,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=n.debounceRendering,n.__e=function(t,e,r){for(var n;e=e.__p;)if((n=e.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(t));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(t)}return k(n.__E=n)}catch(e){t=e}throw t},l=h;var L="[-\\+]?\\d+%?",W="[-\\+]?\\d*\\.\\d+%?",z="(?:"+W+")|(?:"+L+")",B="[\\s|\\(]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",U="[\\s|\\(]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",q=new RegExp("rgb"+B),Z=new RegExp("rgba"+U),V=new RegExp("hsl"+B),K=new RegExp("hsla"+U),X="^(?:#?|0x?)",Y="([0-9a-fA-F]{1})",J="([0-9a-fA-F]{2})",Q=new RegExp(X+Y+Y+Y+"$"),tt=new RegExp(X+Y+Y+Y+Y+"$"),et=new RegExp(X+J+J+J+"$"),rt=new RegExp(X+J+J+J+J+"$"),nt=2e3,ot=4e4,it=Math.log,st=Math.round,lt=Math.floor;function at(t,e,r){return Math.min(Math.max(t,e),r)}function ct(t,e){var r=t.indexOf("%")>-1,n=parseFloat(t);return r?e/100*n:n}function ut(t){return parseInt(t,16)}function ht(t){return t.toString(16).padStart(2,"0")}var dt=function(){function t(t,e){this.$={h:0,s:0,v:0,a:1},t&&this.set(t),this.onChange=e,this.initialValue=$({},this.$)}var e=t.prototype;return e.set=function(e){if("string"===typeof e)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(e)?this.hexString=e:/^rgba?/.test(e)?this.rgbString=e:/^hsla?/.test(e)&&(this.hslString=e);else{if("object"!==typeof e)throw new Error("Invalid color value");e instanceof t?this.hsva=e.hsva:"r"in e&&"g"in e&&"b"in e?this.rgb=e:"h"in e&&"s"in e&&"v"in e?this.hsv=e:"h"in e&&"s"in e&&"l"in e?this.hsl=e:"kelvin"in e&&(this.kelvin=e.kelvin)}},e.setChannel=function(t,e,r){var n;this[t]=$({},this[t],(n={},n[e]=r,n))},e.reset=function(){this.hsva=this.initialValue},e.clone=function(){return new t(this)},e.unbind=function(){this.onChange=void 0},t.hsvToRgb=function(t){var e=t.h/60,r=t.s/100,n=t.v/100,o=lt(e),i=e-o,s=n*(1-r),l=n*(1-i*r),a=n*(1-(1-i)*r),c=o%6,u=[n,l,s,s,a,n][c],h=[a,n,n,l,s,s][c],d=[s,s,a,n,n,l][c];return{r:at(255*u,0,255),g:at(255*h,0,255),b:at(255*d,0,255)}},t.rgbToHsv=function(t){var e=t.r/255,r=t.g/255,n=t.b/255,o=Math.max(e,r,n),i=Math.min(e,r,n),s=o-i,l=0,a=o,c=0===o?0:s/o;switch(o){case i:l=0;break;case e:l=(r-n)/s+(r<n?6:0);break;case r:l=(n-e)/s+2;break;case n:l=(e-r)/s+4;break}return{h:60*l%360,s:at(100*c,0,100),v:at(100*a,0,100)}},t.hsvToHsl=function(t){var e=t.s/100,r=t.v/100,n=(2-e)*r,o=n<=1?n:2-n,i=o<1e-9?0:e*r/o;return{h:t.h,s:at(100*i,0,100),l:at(50*n,0,100)}},t.hslToHsv=function(t){var e=2*t.l,r=t.s*(e<=100?e:200-e)/100,n=e+r<1e-9?0:2*r/(e+r);return{h:t.h,s:at(100*n,0,100),v:at((e+r)/2,0,100)}},t.kelvinToRgb=function(t){var e,r,n,o=t/100;return o<66?(e=255,r=-155.25485562709179-.44596950469579133*(r=o-2)+104.49216199393888*it(r),n=o<20?0:.8274096064007395*(n=o-10)-254.76935184120902+115.67994401066147*it(n)):(e=351.97690566805693+.114206453784165*(e=o-55)-40.25366309332127*it(e),r=325.4494125711974+.07943456536662342*(r=o-50)-28.0852963507957*it(r),n=255),{r:at(lt(e),0,255),g:at(lt(r),0,255),b:at(lt(n),0,255)}},t.rgbToKelvin=function(e){var r,n=e.r,o=e.b,i=.4,s=nt,l=ot;while(l-s>i){r=.5*(l+s);var a=t.kelvinToRgb(r);a.b/a.r>=o/n?l=r:s=r}return r},H(t,[{key:"hsv",get:function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},set:function(t){var e=this.$;if(t=$({},e,t),this.onChange){var r={h:!1,v:!1,s:!1,a:!1};for(var n in e)r[n]=t[n]!=e[n];this.$=t,(r.h||r.s||r.v||r.a)&&this.onChange(this,r)}else this.$=t}},{key:"hsva",get:function(){return $({},this.$)},set:function(t){this.hsv=t}},{key:"hue",get:function(){return this.$.h},set:function(t){this.hsv={h:t}}},{key:"saturation",get:function(){return this.$.s},set:function(t){this.hsv={s:t}}},{key:"value",get:function(){return this.$.v},set:function(t){this.hsv={v:t}}},{key:"alpha",get:function(){return this.$.a},set:function(t){this.hsv=$({},this.hsv,{a:t})}},{key:"kelvin",get:function(){return t.rgbToKelvin(this.rgb)},set:function(e){this.rgb=t.kelvinToRgb(e)}},{key:"red",get:function(){var t=this.rgb;return t.r},set:function(t){this.rgb=$({},this.rgb,{r:t})}},{key:"green",get:function(){var t=this.rgb;return t.g},set:function(t){this.rgb=$({},this.rgb,{g:t})}},{key:"blue",get:function(){var t=this.rgb;return t.b},set:function(t){this.rgb=$({},this.rgb,{b:t})}},{key:"rgb",get:function(){var e=t.hsvToRgb(this.$),r=e.r,n=e.g,o=e.b;return{r:st(r),g:st(n),b:st(o)}},set:function(e){this.hsv=$({},t.rgbToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"rgba",get:function(){return $({},this.rgb,{a:this.alpha})},set:function(t){this.rgb=t}},{key:"hsl",get:function(){var e=t.hsvToHsl(this.$),r=e.h,n=e.s,o=e.l;return{h:st(r),s:st(n),l:st(o)}},set:function(e){this.hsv=$({},t.hslToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"hsla",get:function(){return $({},this.hsl,{a:this.alpha})},set:function(t){this.hsl=t}},{key:"rgbString",get:function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},set:function(t){var e,r,n,o,i=1;if((e=q.exec(t))?(r=ct(e[1],255),n=ct(e[2],255),o=ct(e[3],255)):(e=Z.exec(t))&&(r=ct(e[1],255),n=ct(e[2],255),o=ct(e[3],255),i=ct(e[4],1)),!e)throw new Error("Invalid rgb string");this.rgb={r:r,g:n,b:o,a:i}}},{key:"rgbaString",get:function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},set:function(t){this.rgbString=t}},{key:"hexString",get:function(){var t=this.rgb;return"#"+ht(t.r)+ht(t.g)+ht(t.b)},set:function(t){var e,r,n,o,i=255;if((e=Q.exec(t))?(r=17*ut(e[1]),n=17*ut(e[2]),o=17*ut(e[3])):(e=tt.exec(t))?(r=17*ut(e[1]),n=17*ut(e[2]),o=17*ut(e[3]),i=17*ut(e[4])):(e=et.exec(t))?(r=ut(e[1]),n=ut(e[2]),o=ut(e[3])):(e=rt.exec(t))&&(r=ut(e[1]),n=ut(e[2]),o=ut(e[3]),i=ut(e[4])),!e)throw new Error("Invalid hex string");this.rgb={r:r,g:n,b:o,a:i/255}}},{key:"hex8String",get:function(){var t=this.rgba;return"#"+ht(t.r)+ht(t.g)+ht(t.b)+ht(lt(255*t.a))},set:function(t){this.hexString=t}},{key:"hslString",get:function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},set:function(t){var e,r,n,o,i=1;if((e=V.exec(t))?(r=ct(e[1],360),n=ct(e[2],100),o=ct(e[3],100)):(e=K.exec(t))&&(r=ct(e[1],360),n=ct(e[2],100),o=ct(e[3],100),i=ct(e[4],1)),!e)throw new Error("Invalid hsl string");this.hsl={h:r,s:n,l:o,a:i}}},{key:"hslaString",get:function(){var t=this.hsla;return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},set:function(t){this.hslString=t}}]),t}(),pt={sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3};function ft(t){var e,r=t.width,n=t.sliderSize,o=t.borderWidth,i=t.handleRadius,s=t.padding,l=t.sliderShape,a="horizontal"===t.layoutDirection;return n=null!=(e=n)?e:2*s+2*i,"circle"===l?{handleStart:t.padding+t.handleRadius,handleRange:r-2*s-2*i,width:r,height:r,cx:r/2,cy:r/2,radius:r/2-o/2}:{handleStart:n/2,handleRange:r-n,radius:n/2,x:0,y:0,width:a?n:r,height:a?r:n}}function vt(t,e){var r=e.hsva,n=e.rgb;switch(t.sliderType){case"red":return n.r/2.55;case"green":return n.g/2.55;case"blue":return n.b/2.55;case"alpha":return 100*r.a;case"kelvin":var o=t.minTemperature,i=t.maxTemperature,s=i-o,l=(e.kelvin-o)/s*100;return Math.max(0,Math.min(l,100));case"hue":return r.h/=3.6;case"saturation":return r.s;case"value":default:return r.v}}function gt(t,e,r){var n,o=ft(t),i=o.handleRange,s=o.handleStart;n="horizontal"===t.layoutDirection?-1*r+i+s:e-s,n=Math.max(Math.min(n,i),0);var l=Math.round(100/i*n);switch(t.sliderType){case"kelvin":var a=t.minTemperature,c=t.maxTemperature,u=c-a;return a+u*(l/100);case"alpha":return l/100;case"hue":return 3.6*l;case"red":case"blue":case"green":return 2.55*l;default:return l}}function _t(t,e){var r=ft(t),n=r.width,o=r.height,i=r.handleRange,s=r.handleStart,l="horizontal"===t.layoutDirection,a=vt(t,e),c=l?n/2:o/2,u=s+a/100*i;return l&&(u=-1*u+i+2*s),{x:l?c:u,y:l?u:c}}function bt(t,e){var r=e.hsv,n=e.rgb;switch(t.sliderType){case"red":return[[0,"rgb(0,"+n.g+","+n.b+")"],[100,"rgb(255,"+n.g+","+n.b+")"]];case"green":return[[0,"rgb("+n.r+",0,"+n.b+")"],[100,"rgb("+n.r+",255,"+n.b+")"]];case"blue":return[[0,"rgb("+n.r+","+n.g+",0)"],[100,"rgb("+n.r+","+n.g+",255)"]];case"alpha":return[[0,"rgba("+n.r+","+n.g+","+n.b+",0)"],[100,"rgb("+n.r+","+n.g+","+n.b+")"]];case"kelvin":for(var o=[],i=t.minTemperature,s=t.maxTemperature,l=8,a=s-i,c=i,u=0;c<s;c+=a/l,u+=1){var h=dt.kelvinToRgb(c),d=h.r,p=h.g,f=h.b;o.push([100/l*u,"rgb("+d+","+p+","+f+")"])}return o;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var v=dt.hsvToHsl({h:r.h,s:0,v:r.v}),g=dt.hsvToHsl({h:r.h,s:100,v:r.v});return[[0,"hsl("+v.h+","+v.s+"%,"+v.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];case"value":default:var _=dt.hsvToHsl({h:r.h,s:r.s,v:100});return[[0,"#000"],[100,"hsl("+_.h+","+_.s+"%,"+_.l+"%)"]]}}var mt,yt=2*Math.PI,xt=function(t,e){return(t%e+e)%e},wt=function(t,e){return Math.sqrt(t*t+e*e)};function kt(t){return t.width/2-t.padding-t.handleRadius-t.borderWidth}function Ct(t,e,r){var n=St(t),o=n.cx,i=n.cy,s=t.width/2;return wt(o-e,i-r)<s}function St(t){var e=t.width/2;return{width:t.width,radius:e-t.borderWidth,cx:e,cy:e}}function Tt(t,e,r){var n=t.wheelAngle,o=t.wheelDirection;return r&&"clockwise"===o?e=n+e:"clockwise"===o?e=360-n+e:r&&"anticlockwise"===o?e=n+180-e:"anticlockwise"===o&&(e=n-e),xt(e,360)}function Et(t,e){var r=e.hsv,n=St(t),o=n.cx,i=n.cy,s=kt(t),l=(180+Tt(t,r.h,!0))*(yt/360),a=r.s/100*s,c="clockwise"===t.wheelDirection?-1:1;return{x:o+a*Math.cos(l)*c,y:i+a*Math.sin(l)*c}}function Rt(t,e,r){var n=St(t),o=n.cx,i=n.cy,s=kt(t);e=o-e,r=i-r;var l=Tt(t,Math.atan2(-r,-e)*(360/yt)),a=Math.min(wt(e,r),s);return{h:Math.round(l),s:Math.round(100/s*a)}}function Pt(t){var e=t.width,r=t.boxHeight,n=t.padding,o=t.handleRadius;return{width:e,height:null!=r?r:e,radius:n+o}}function At(t,e,r){var n=Pt(t),o=n.width,i=n.height,s=n.radius,l=s,a=o-2*s,c=i-2*s,u=(e-l)/a*100,h=(r-l)/c*100;return{s:Math.max(0,Math.min(u,100)),v:Math.max(0,Math.min(100-h,100))}}function Ft(t,e){var r=Pt(t),n=r.width,o=r.height,i=r.radius,s=e.hsv,l=i,a=n-2*i,c=o-2*i;return{x:l+s.s/100*a,y:l+(c-s.v/100*c)}}function Mt(t,e){var r=e.hue;return[[[0,"#fff"],[100,"hsl("+r+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}function Ot(t){mt||(mt=document.getElementsByTagName("base"));var e=window.navigator.userAgent,r=/^((?!chrome|android).)*safari/i.test(e),n=/iPhone|iPod|iPad/i.test(e),o=window.location;return(r||n)&&mt.length>0?o.protocol+"//"+o.host+o.pathname+o.search+t:t}function Gt(t,e,r,n){for(var o=0;o<n.length;o++){var i=n[o].x-e,s=n[o].y-r,l=Math.sqrt(i*i+s*s);if(l<t.handleRadius)return o}return null}function It(t){return{boxSizing:"border-box",border:t.borderWidth+"px solid "+t.borderColor}}function Dt(t,e,r){return t+"-gradient("+e+", "+r.map((function(t){var e=t[0],r=t[1];return r+" "+e+"%"})).join(",")+")"}function jt(t){return"string"===typeof t?t:t+"px"}var Nt={width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},Ht=["mousemove","touchmove","mouseup","touchend"],$t=function(t){function e(e){t.call(this,e),this.uid=(Math.random()+1).toString(36).substring(5)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(t){var e=this.handleEvent.bind(this),r={onMouseDown:e,ontouchstart:e},n="horizontal"===t.layoutDirection,o=null===t.margin?t.sliderMargin:t.margin,i={overflow:"visible",display:n?"inline-block":"block"};return t.index>0&&(i[n?"marginLeft":"marginTop"]=o),g(b,null,t.children(this.uid,r,i))},e.prototype.handleEvent=function(t){var e=this,r=this.props.onInput,n=this.base.getBoundingClientRect();t.preventDefault();var o=t.touches?t.changedTouches[0]:t,i=o.clientX-n.left,s=o.clientY-n.top;switch(t.type){case"mousedown":case"touchstart":var l=r(i,s,0);!1!==l&&Ht.forEach((function(t){document.addEventListener(t,e,{passive:!1})}));break;case"mousemove":case"touchmove":r(i,s,1);break;case"mouseup":case"touchend":r(i,s,2),Ht.forEach((function(t){document.removeEventListener(t,e,{passive:!1})}));break}},e}(y);function Lt(t){var e=t.r,r=t.url,n=e,o=e;return g("svg",{className:"IroHandle IroHandle--"+t.index+" "+(t.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+jt(t.x)+", "+jt(t.y)+")",willChange:"transform",top:jt(-e),left:jt(-e),width:jt(2*e),height:jt(2*e),position:"absolute",overflow:"visible"}},r&&g("use",Object.assign({xlinkHref:Ot(r)},t.props)),!r&&g("circle",{cx:n,cy:o,r:e,fill:"none","stroke-width":2,stroke:"#000"}),!r&&g("circle",{cx:n,cy:o,r:e-2,fill:t.fill,"stroke-width":2,stroke:"#fff"}))}function Wt(t){var e=t.activeIndex,r=void 0!==e&&e<t.colors.length?t.colors[e]:t.color,n=ft(t),o=n.width,i=n.height,s=n.radius,l=_t(t,r),a=bt(t,r);function c(e,n,o){var i=gt(t,e,n);t.parent.inputActive=!0,r[t.sliderType]=i,t.onInput(o,t.id)}return g($t,Object.assign({},t,{onInput:c}),(function(e,n,c){return g("div",Object.assign({},n,{className:"IroSlider",style:Object.assign({},{position:"relative",width:jt(o),height:jt(i),borderRadius:jt(s),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},c)}),g("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:jt(s),background:Dt("linear","horizontal"===t.layoutDirection?"to top":"to right",a)},It(t))}),g(Lt,{isActive:!0,index:r.index,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:l.x,y:l.y}))}))}function zt(t){var e=Pt(t),r=e.width,n=e.height,o=e.radius,i=t.colors,s=t.parent,l=t.activeIndex,a=void 0!==l&&l<t.colors.length?t.colors[l]:t.color,c=Mt(t,a),u=i.map((function(e){return Ft(t,e)}));function h(e,r,n){if(0===n){var o=Gt(t,e,r,u);null!==o?s.setActiveColor(o):(s.inputActive=!0,a.hsv=At(t,e,r),t.onInput(n,t.id))}else 1===n&&(s.inputActive=!0,a.hsv=At(t,e,r));t.onInput(n,t.id)}return g($t,Object.assign({},t,{onInput:h}),(function(e,s,l){return g("div",Object.assign({},s,{className:"IroBox",style:Object.assign({},{width:jt(r),height:jt(n),position:"relative"},l)}),g("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:jt(o)},It(t),{background:Dt("linear","to bottom",c[1])+","+Dt("linear","to right",c[0])})}),i.filter((function(t){return t!==a})).map((function(e){return g(Lt,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:u[e.index].x,y:u[e.index].y})})),g(Lt,{isActive:!0,index:a.index,fill:a.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:u[a.index].x,y:u[a.index].y}))}))}Lt.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},Wt.defaultProps=Object.assign({},pt);var Bt="conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",Ut="conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";function qt(t){var e=St(t),r=e.width,n=t.colors,o=(t.borderWidth,t.parent),i=t.color,s=i.hsv,l=n.map((function(e){return Et(t,e)})),a={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};function c(e,r,n){if(0===n){if(!Ct(t,e,r))return!1;var s=Gt(t,e,r,l);null!==s?o.setActiveColor(s):(o.inputActive=!0,i.hsv=Rt(t,e,r),t.onInput(n,t.id))}else 1===n&&(o.inputActive=!0,i.hsv=Rt(t,e,r));t.onInput(n,t.id)}return g($t,Object.assign({},t,{onInput:c}),(function(e,o,c){return g("div",Object.assign({},o,{className:"IroWheel",style:Object.assign({},{width:jt(r),height:jt(r),position:"relative"},c)}),g("div",{className:"IroWheelHue",style:Object.assign({},a,{transform:"rotateZ("+(t.wheelAngle+90)+"deg)",background:"clockwise"===t.wheelDirection?Bt:Ut})}),g("div",{className:"IroWheelSaturation",style:Object.assign({},a,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),t.wheelLightness&&g("div",{className:"IroWheelLightness",style:Object.assign({},a,{background:"#000",opacity:1-s.v/100})}),g("div",{className:"IroWheelBorder",style:Object.assign({},a,It(t))}),n.filter((function(t){return t!==i})).map((function(e){return g(Lt,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:l[e.index].x,y:l[e.index].y})})),g(Lt,{isActive:!0,index:i.index,fill:i.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:l[i.index].x,y:l[i.index].y}))}))}function Zt(t){var e=function(e,r){var n,o=document.createElement("div");function i(){var t=e instanceof Element?e:document.querySelector(e);t.appendChild(n.base),n.onMount(t)}return j(g(t,Object.assign({},{ref:function(t){return n=t}},r)),o),"loading"!==document.readyState?i():document.addEventListener("DOMContentLoaded",i),n};return e.prototype=t.prototype,Object.assign(e,t),e.__component=t,e}var Vt=function(t){function e(e){var r=this;t.call(this,e),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=e.id;var n=e.colors.length>0?e.colors:[e.color];n.forEach((function(t){return r.addColor(t)})),this.setActiveColor(0),this.state=Object.assign({},e,{color:this.color,colors:this.colors,layout:e.layout})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addColor=function(t,e){void 0===e&&(e=this.colors.length);var r=new dt(t,this.onColorChange.bind(this));this.colors.splice(e,0,r),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",r)},e.prototype.removeColor=function(t){var e=this.colors.splice(t,1)[0];e.unbind(),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),e.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",e)},e.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},e.prototype.setColors=function(t,e){var r=this;void 0===e&&(e=0),this.colors.forEach((function(t){return t.unbind()})),this.colors=[],t.forEach((function(t){return r.addColor(t)})),this.setActiveColor(e),this.emit("color:setAll",this.colors)},e.prototype.on=function(t,e){var r=this,n=this.events;(Array.isArray(t)?t:[t]).forEach((function(t){(n[t]||(n[t]=[])).push(e),r.deferredEvents[t]&&(r.deferredEvents[t].forEach((function(t){e.apply(null,t)})),r.deferredEvents[t]=[])}))},e.prototype.off=function(t,e){var r=this;(Array.isArray(t)?t:[t]).forEach((function(t){var n=r.events[t];n&&n.splice(n.indexOf(e),1)}))},e.prototype.emit=function(t){var e=this,r=[],n=arguments.length-1;while(n-- >0)r[n]=arguments[n+1];var o=this.activeEvents,i=!!o.hasOwnProperty(t)&&o[t];if(!i){o[t]=!0;var s=this.events[t]||[];s.forEach((function(t){return t.apply(e,r)})),o[t]=!1}},e.prototype.deferredEmit=function(t){var e,r=[],n=arguments.length-1;while(n-- >0)r[n]=arguments[n+1];var o=this.deferredEvents;(e=this).emit.apply(e,[t].concat(r)),(o[t]||(o[t]=[])).push(r)},e.prototype.setOptions=function(t){this.setState(t)},e.prototype.resize=function(t){this.setOptions({width:t})},e.prototype.reset=function(){this.colors.forEach((function(t){return t.reset()})),this.setState({colors:this.colors})},e.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},e.prototype.onColorChange=function(t,e){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,e)),this.emit("color:change",t,e)},e.prototype.emitInputEvent=function(t,e){0===t?this.emit("input:start",this.color,e):1===t?this.emit("input:move",this.color,e):2===t&&this.emit("input:end",this.color,e)},e.prototype.render=function(t,e){var r=this,n=e.layout;if(!Array.isArray(n)){switch(n){default:n=[{component:qt},{component:Wt}]}e.transparency&&n.push({component:Wt,options:{sliderType:"alpha"}})}return g("div",{class:"IroColorPicker",id:e.id,style:{display:e.display}},n.map((function(t,n){var o=t.component,i=t.options;return g(o,Object.assign({},e,i,{ref:void 0,onInput:r.emitInputEvent.bind(r),parent:r,index:n}))})))},e}(y);Vt.defaultProps=Object.assign({},Nt,{colors:[],display:"block",id:null,layout:"default",margin:null});var Kt,Xt=Zt(Vt);(function(t){t.version="5.5.2",t.Color=dt,t.ColorPicker=Xt,function(t){t.h=g,t.ComponentBase=$t,t.Handle=Lt,t.Slider=Wt,t.Wheel=qt,t.Box=zt}(t.ui||(t.ui={}))})(Kt||(Kt={}));var Yt=Kt,Jt=Yt,Qt={name:"ModalColorPicker",components:{},props:{},data(){return{screen:"basicColors",colorPickCallback:null,colorPicker:null,currentColor:{hex:"#FFFFFF"},colorGrid:{rows:[{id:"row1",colors:[{hex:"#000000"}]}]}}},methods:{selectCurrentColor(){this.selectColor(this.currentColor)},selectColor(t){null!=this.colorPickCallback&&this.colorPickCallback(t.hex),window.$("#modalColorPicker").modal("hide")},addColorToGrid(t,e){let r={id:e+"_"+Math.random(),hex:e};this.colorGrid.rows[t].colors.push(r)},buildColorGrid(){this.colorGrid.rows[0].colors=[],this.addColorToGrid(0,"#000000"),this.addColorToGrid(0,"#222222"),this.addColorToGrid(0,"#444444"),this.addColorToGrid(0,"#666666"),this.addColorToGrid(0,"#888888"),this.addColorToGrid(0,"#AAAAAA"),this.addColorToGrid(0,"#CCCCCC"),this.addColorToGrid(0,"#DDDDDD"),this.addColorToGrid(0,"#EEEEEE"),this.addColorToGrid(0,"#FFFFFF");let t={id:"row2",colors:[]};this.colorGrid.rows.push(t),this.addColorToGrid(1,"#FF0000"),this.addColorToGrid(1,"#FF8800"),this.addColorToGrid(1,"#FFFF00"),this.addColorToGrid(1,"#00FF00"),this.addColorToGrid(1,"#00FFFF"),this.addColorToGrid(1,"#0088FF"),this.addColorToGrid(1,"#0000FF"),this.addColorToGrid(1,"#8800FF"),this.addColorToGrid(1,"#FF00FF"),this.addColorToGrid(1,"#880000"),this.buildRow(192),this.buildRow(128),this.buildRow(64),this.buildRow(-64),this.buildRow(-128),this.buildRow(-192)},buildRow(t){let e=this.colorGrid.rows.length,r="row"+e+1,n={id:r,colors:[]};this.colorGrid.rows.push(n);for(let o=0;o<10;o++){let r=this.colorGrid.rows[1].colors[o].hex,n=this.changeColor(r,t);this.addColorToGrid(e,n)}},changeColor(t,e){let r=u.Z.hexToRgb(t),n=u.Z.rgbAdd(r,e),o=u.Z.rgbToHex(n);return o},setCurrentColor(t){this.currentColor.hex=t,this.colorPicker.color.hexString=t}},mounted(){this.buildColorGrid();let t=new Jt.ColorPicker("#colorPicker",{layout:[{component:Jt.ui.Box,options:{}},{component:Jt.ui.Slider,options:{sliderType:"hue"}}]});this.colorPicker=t;let e=this;t.on("color:change",(function(t){e.currentColor.hex=t.hexString}))}},te=Qt,ee=r(1001),re=(0,ee.Z)(te,a,c,!1,null,"2e2df255",null),ne=re.exports}}]);