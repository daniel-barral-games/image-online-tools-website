(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[509],{9264:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"DrawJS logo",src:n(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/"}},[t._v("All online tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/crop-image"}},[t._v("Crop image")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/trim-transparent-pixels"}},[t._v("Trim transparent pixels")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/button-generator"}},[t._v("Button generator")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/change-image-color"}},[t._v("Change image color")])],1)},o=[],i={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},a=i,u=n(1001),c=(0,u.Z)(a,r,o,!1,null,"32ec9c5b",null),f=c.exports},9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),a=function(t){return function(e,n,a){var u,c=r(e),f=i(c),s=o(a,f);if(t&&n!=n){while(f>s)if(u=c[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),o=n(3157),i=TypeError,a=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(o(t)&&!a(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e,n){for(var u=o(e),c=a.f,f=i.f,s=0;s<u.length;s++){var l=u[s];r(t,l)||n&&r(n,l)||c(t,l,f(e,l))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);t.exports=function(t,e,n,u){u||(u={});var c=u.enumerable,f=void 0!==u.name?u.name:e;if(r(n)&&i(n,f,u),u.global)c?t[e]=n:a(e,n);else{try{u.unsafe?t[e]&&(c=!0):delete t[e]}catch(s){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),u=i.process,c=i.Deno,f=u&&u.versions||c&&c.version,s=f&&f.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(8052),u=n(3072),c=n(9920),f=n(4705);t.exports=function(t,e){var n,s,l,p,g,v,h=t.target,d=t.global,b=t.stat;if(s=d?r:b?r[h]||u(h,{}):(r[h]||{}).prototype,s)for(l in e){if(g=e[l],t.dontCallGetSet?(v=o(s,l),p=v&&v.value):p=s[l],n=f(d?l:h+(b?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof g==typeof p)continue;c(g,p)}(t.sham||p&&p.sham)&&i(g,"sham",!0),a(s,l,g,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,f=u&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:f}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);t.exports=r?a:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,u=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):a(t)}:a},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,a=n(4811),u=n(7854),c=n(111),f=n(8880),s=n(2597),l=n(5465),p=n(6200),g=n(3501),v="Object already initialized",h=u.TypeError,d=u.WeakMap,b=function(t){return i(t)?o(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return n}};if(a||l.state){var m=l.state||(l.state=new d);m.get=m.get,m.has=m.has,m.set=m.set,r=function(t,e){if(m.has(t))throw h(v);return e.facade=t,m.set(t,e),e},o=function(t){return m.get(t)||{}},i=function(t){return m.has(t)}}else{var x=p("state");g[x]=!0,r=function(t,e){if(s(t,x))throw h(v);return e.facade=t,f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:b,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(t,e){var n=c[u(t)];return n==s||n!=f&&(o(e)?r(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},f=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,u(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),o=n(614),i=n(2597),a=n(9781),u=n(6530).CONFIGURABLE,c=n(2788),f=n(9909),s=f.enforce,l=f.get,p=Object.defineProperty,g=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),v=String(String).split("String"),h=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||u&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),g&&n&&i(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=s(t);return i(r,"source")||(r.source=v.join("string"==typeof e?e:"")),t};Function.prototype.toString=h((function(){return o(this)&&l(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),u=n(4948),c=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",g="writable";e.f=r?i?function(t,e,n){if(a(t),e=u(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&g in n&&!n[g]){var r=s(t,e);r&&r[g]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return f(t,e,n)}:f:function(t,e,n){if(a(t),e=u(e),a(n),o)try{return f(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),u=n(5656),c=n(4948),f=n(2597),s=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=c(e),s)try{return l(t,e)}catch(n){}if(f(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,u=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),f=0,s=[];for(n in r)!o(u,n)&&o(r,n)&&c(s,n);while(e.length>f)o(r,n=e[f++])&&(~a(s,n)||c(s,n));return s}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&o(n=t.toString)&&!i(u=r(n,t)))return u;if(o(n=t.valueOf)&&!i(u=r(n,t)))return u;if("string"!==e&&o(n=t.toString)&&!i(u=r(n,t)))return u;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),u=n(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=a.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),u=n(2140),c=n(5112),f=TypeError,s=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=a(t,s);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),u=n(6293),c=n(3307),f=o("wks"),s=r.Symbol,l=s&&s["for"],p=c?s:s&&s.withoutSetter||a;t.exports=function(t){if(!i(f,t)||!u&&"string"!=typeof f[t]){var e="Symbol."+t;u&&i(s,t)?f[t]=s[t]:f[t]=c&&l?l(e):p(e)}return f[t]}},7658:function(t,e,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),a=n(3658),u=n(7207),c=n(7293),f=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:f||s},{push:function(t){var e=o(this),n=i(e),r=arguments.length;u(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return a(e,n),n}})},3162:function(t,e,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function r(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){c(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,u=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(t,e,n){var u=a.URL||a.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):o(c.href)?r(t,e,n):i(c,c.target="_blank")):(c.href=u.createObjectURL(t),setTimeout((function(){u.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,a){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),n);else if(o(t))r(t,n,a);else{var u=document.createElement("a");u.href=t,u.target="_blank",setTimeout((function(){i(u)}))}}:function(t,e,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return r(t,e,n);var i="application/octet-stream"===t.type,c=/constructor/i.test(a.HTMLElement)||a.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||i&&c||u)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=f?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},s.readAsDataURL(t)}else{var l=a.URL||a.webkitURL,p=l.createObjectURL(t);o?o.location=p:location.href=p,o=null,setTimeout((function(){l.revokeObjectURL(p)}),4e4)}});a.saveAs=c.saveAs=c,t.exports=c}))},9314:function(t,e,n){"use strict";n(7658);let r={pasteClipboardImage(t){if(t.clipboardData){var e=t.clipboardData.items;if(e){for(var n=!1,r=0;r<e.length;r++)if(-1!==e[r].type.indexOf("image")){var o=e[r].getAsFile(),i=window.URL||window.webkitURL,a=i.createObjectURL(o);if(null!=a){var u=new Image;u.onload=function(){window.ctx.drawImage(u,0,0)},u.src=a}n=!0}n&&t.preventDefault()}}},convoluteLayer(t,e,n){let r=t.canvas.width,o=t.canvas.height;const i=t.getImageData(0,0,r,o);let a=this.convolute(i,e,n);t.putImageData(a,0,0)},convolute(t,e,n){for(var r=Math.round(Math.sqrt(e.length)),o=Math.floor(r/2),i=t.data,a=t.width,u=t.height,c=a,f=u,s=document.createElement("canvas").getContext("2d").createImageData(c,f),l=s.data,p=n?1:0,g=0;g<f;g++)for(var v=0;v<c;v++){for(var h=g,d=v,b=4*(g*c+v),y=0,m=0,x=0,w=0,O=0;O<r;O++)for(var S=0;S<r;S++){var j=h+O-o,k=d+S-o;if(j>=0&&j<u&&k>=0&&k<a){var E=4*(j*a+k),P=e[O*r+S];y+=i[E]*P,m+=i[E+1]*P,x+=i[E+2]*P,w+=i[E+3]*P}}l[b]=y,l[b+1]=m,l[b+2]=x,l[b+3]=w+p*(255-w)}return s},rgbToHex(t){return"#"+[t.r,t.g,t.b].map((t=>{const e=t.toString(16);return 1===e.length?"0"+e:e})).join("")},hexToRgb(t){let e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,n,r)=>"#"+e+e+n+n+r+r)).substring(1).match(/.{2}/g).map((t=>parseInt(t,16)));return{r:e[0],g:e[1],b:e[2]}},hexToRgba(t){t.length<9&&(t+="ff");let e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,n,r,o)=>"#"+e+e+n+n+r+r+o+o)).substring(1).match(/.{2}/g).map((t=>parseInt(t,16)));return{r:e[0],g:e[1],b:e[2],a:e[3]/255}},rgbAdd(t,e){return t.r+=e,t.g+=e,t.b+=e,t.r=this.rgbFit(t.r),t.g=this.rgbFit(t.g),t.b=this.rgbFit(t.b),t},rgbFit(t){return t=Math.round(t),Math.max(Math.min(t,255),0)},random256(){return Math.floor(256*Math.random())},cloneCanvas(t){let e=document.createElement("canvas");e.width=600,e.height=400;let n=e.getContext("2d");return n.drawImage(t,0,0),e},getImageDataPosition(t,e,n){let r=t.width,o=4*(n*r+e);return o},cropAt(t,e,n,r,o){let i=t.width,a=t.height,u=t.getContext("2d"),c=u.getImageData(0,0,i,a),f=r-e+1,s=o-n+1,l=document.createElement("canvas");l.width=f,l.height=s;let p=l.getContext("2d");return p.putImageData(c,-e,-n),l},crop(t){let e=t.width,n=t.height,r=t.getContext("2d"),o=r.getImageData(0,0,e,n),i=0,a=0,u=e-1,c=n-1;for(let f=0;f<e;f++){let e=!0;i=f;for(let r=0;r<n;r++){let n=this.getImageDataPosition(t,f,r);if(o.data[n+3]>0){e=!1;break}}if(!e)break}for(let f=e-1;f>=0;f--){let e=!0;u=f;for(let r=0;r<n;r++){let n=this.getImageDataPosition(t,f,r);if(o.data[n+3]>0){e=!1;break}}if(!e)break}for(let f=0;f<n;f++){let n=!0;a=f;for(let r=0;r<e;r++){let e=this.getImageDataPosition(t,r,f);if(o.data[e+3]>0){n=!1;break}}if(!n)break}for(let f=n-1;f>=0;f--){let n=!0;c=f;for(let r=0;r<e;r++){let e=this.getImageDataPosition(t,r,f);if(o.data[e+3]>0){n=!1;break}}if(!n)break}return this.cropAt(t,i,a,u,c)},getColorAtPixel(t,e,n){const{width:r,data:o}=t;return{r:o[4*(r*n+e)+0],g:o[4*(r*n+e)+1],b:o[4*(r*n+e)+2],a:o[4*(r*n+e)+3]}},setColorAtPixel(t,e,n,r){const{width:o,data:i}=t;i[4*(o*r+n)+0]=255&e.r,i[4*(o*r+n)+1]=255&e.g,i[4*(o*r+n)+2]=255&e.b,i[4*(o*r+n)+3]=255&e.a},colorMatch(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a},floodFill(t,e,n,r){let o=t.canvas.width,i=t.canvas.height,a=t.getImageData(0,0,o,i);this.floodFillImageData(a,e,n,r),t.putImageData(a,0,0)},floodFillImageData(t,e,n,r){const{width:o,height:i}=t,a=[],u=this.getColorAtPixel(t,n,r);let c={x:n,y:r};if(!this.colorMatch(u,e)){a.push({x:c.x,y:c.y});while(a.length){c=a.pop();let n=!0,r=!0,f=!1,s=!1;while(r&&c.y>=0)c.y--,r=this.colorMatch(this.getColorAtPixel(t,c.x,c.y),u);while(n&&c.y<i)this.setColorAtPixel(t,e,c.x,c.y),c.x-1>=0&&this.colorMatch(this.getColorAtPixel(t,c.x-1,c.y),u)?f||(f=!0,a.push({x:c.x-1,y:c.y})):f=!1,c.x+1<o&&this.colorMatch(this.getColorAtPixel(t,c.x+1,c.y),u)?s||(a.push({x:c.x+1,y:c.y}),s=!0):s=!1,c.y++,n=this.colorMatch(this.getColorAtPixel(t,c.x,c.y),u)}}}};e["Z"]=r},6286:function(t,e,n){"use strict";t.exports=n.p+"img/image-online-tools.988f9e93.png"}}]);