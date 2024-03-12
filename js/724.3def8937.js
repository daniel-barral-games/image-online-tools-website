(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[724],{4138:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb_div"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(n){return e("li",{key:n.id,class:n.active?"breadcrumb-item active":"breadcrumb-item"},[n.active?t._e():e("a",{attrs:{href:n.url}},[t._v(t._s(n.name))]),n.active?e("span",[t._v(t._s(n.name))]):t._e()])})),0)])])])},o=[],i=(n(7658),n(541),n(3026)),a=n(8273);function s(){let t=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],e=i.Z.listImageEditorTools();for(let o=0;o<e.length;o++){let n=e[o];t.push({id:n.slug,name:n.name,url:"/"+n.slug,parentId:"image-editor-tools"})}let n=i.Z.listImageGeneratorTools();for(let o=0;o<n.length;o++){let e=n[o];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"image-generator-tools"})}let r=a.Z.listLearnPages();for(let o=0;o<r.length;o++){let e=r[o];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"learn"})}return t}var u={listMenuItems:s},l={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=u.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(t){for(let e=0;e<this.pages.length;e++){let n=this.pages[e];if(n.id==t)return n}return null},buildItems(){let t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);let n=e.parentId,r=0;while(null!=n||r>=10){let e=this.getPageById(n);t.unshift(e),n=e.parentId,r++}return t}}},c=l,d=n(1001),f=(0,d.Z)(c,r,o,!1,null,"2d127206",null),h=f.exports},8402:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2024 ImageOnlineTools")])])},o=[],i={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},a=i,s=n(1001),u=(0,s.Z)(a,r,o,!1,null,"18b937ff",null),l=u.exports},5665:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:n(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},o=[],i={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},a=i,s=n(1001),u=(0,s.Z)(a,r,o,!1,null,"65b41b03",null),l=u.exports},7e3:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFFFFF",height:t.size,width:t.size}},[e("path",{attrs:{fill:t.color,d:"M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"}})])},o=[],i={name:"IconDownload",props:{color:{type:String,default:"#ffffff"},size:{type:Number,default:20}}},a=i,s=n(1001),u=(0,s.Z)(a,r,o,!1,null,"d83b91be",null),l=u.exports},7724:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),e("Breadcrumb",{attrs:{pageId:"qr-code-generator"}}),t._m(0),e("br"),e("div",{staticClass:"imageGridLayoutParent"},[e("div",{staticClass:"imageGridLayoutLeft"},[e("div"),e("div",{staticClass:"div_options"},[t._m(1),e("br"),t._m(2),e("div",{staticClass:"optionsLayout"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.url,expression:"options.url"}],staticClass:"input_option",staticStyle:{width:"400px"},attrs:{type:"text"},domProps:{value:t.options.url},on:{keyup:function(e){return t.triggerDrawQrCode()},input:function(e){e.target.composing||t.$set(t.options,"url",e.target.value)}}})])]),e("br"),t._m(3),e("div",{staticClass:"slidecontainer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.scale,expression:"options.scale"}],staticClass:"slider",attrs:{type:"range",min:"1",max:"20",step:"1",id:"myRange"},domProps:{value:t.options.scale},on:{input:function(e){return t.triggerDrawQrCode()},__r:function(e){return t.$set(t.options,"scale",e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.scale,expression:"options.scale"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.scale},on:{input:[function(e){e.target.composing||t.$set(t.options,"scale",e.target.value)},function(e){return t.triggerDrawQrCode()}]}})]),e("br"),t._m(4),e("div",{staticClass:"optionsLayout"},[e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.options.errorCorrectionLevel,expression:"options.errorCorrectionLevel"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"errorCorrectionLevel",e.target.multiple?n:n[0])},function(e){return t.triggerDrawQrCode()}]}},[e("option",{attrs:{value:"L"}},[t._v("L (Low)")]),e("option",{attrs:{value:"M"}},[t._v("M (Medium)")]),e("option",{attrs:{value:"Q"}},[t._v("Q (Quartile)")]),e("option",{attrs:{value:"H"}},[t._v("H (High)")])])])])])]),e("div",{staticClass:"imageGridLayoutRight"},[e("div",{staticClass:"div_image"},[e("div",{staticStyle:{position:"sticky",top:"0"}},[e("div",[e("h3",[t._v("Generated QR code:")]),e("img",{attrs:{src:t.qrCodeImageData}})]),e("br"),e("div",[e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.downloadPng()}}},[e("IconDownload",{attrs:{size:24}}),t._v(" Download PNG")],1),e("button",{staticClass:"btn btn-success",staticStyle:{margin:"4px"},attrs:{type:"button"},on:{click:function(e){return t.downloadSvg()}}},[e("IconDownload",{attrs:{size:24}}),t._v(" Download SVG")],1)])])]),e("div")])]),e("br"),e("br"),t._m(5),e("FooterComponent")],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"documentationContent"},[e("h1",[t._v("QR Code Generator")]),e("h4",[t._v("What is QR Code Generator?")]),e("p",[t._v("QR Code Generator is a free online tool that allows you to generate QR codes.")]),e("p",[t._v("You can download QR code images as PNG or SVG.")])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Options:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("URL or text")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("Scale (size)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("Error correction level")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"documentationContent"},[e("h4",{attrs:{id:"configuration_parameters"}},[t._v("QR Code configuration parameters")]),e("p",[t._v("Below are the parameters you can configure when creating a QR Code.")]),e("table",{staticClass:"documentation_table"},[e("tr",[e("th",[t._v("Field")]),e("th",[t._v("Description")])]),e("tr",[e("td",[t._v("URL or text")]),e("td",[t._v("The URL or text to encode.")])]),e("tr",[e("td",[t._v("Scale (size)")]),e("td",[t._v("Scale factor. A value of 4 means the black dots will have 4px size (width and height).")])]),e("tr",[e("td",[t._v("Error correction level")]),e("td",[t._v("The error correction level. Possible values are Low, Medium, Quartile and High.")])])])])}],i=n(5665),a=n(8402),s=n(4138),u=n(7e3),l=n(3162),c=n(2592),d={name:"QrCodeGenerator",components:{HeaderOnlineTools:i.Z,FooterComponent:a.Z,IconDownload:u.Z,Breadcrumb:s.Z},data(){return{canvasWidth:400,canvasHeight:300,options:{url:"https://",errorCorrectionLevel:"M",scale:4},qrCodeImageData:null}},mounted(){this.triggerDrawQrCode()},methods:{downloadSvg(){let t={errorCorrectionLevel:this.options.errorCorrectionLevel,type:"svg",margin:4,scale:this.options.scale};c.toString(this.options.url,t).then((t=>{var e=new Blob([t],{type:"image/svg+xml;charset=utf-8"});(0,l.saveAs)(e,"qr-code.svg")})).catch((t=>{console.error(t)}))},downloadPng(){(0,l.saveAs)(this.qrCodeImageData,"qr-code.png")},triggerDrawQrCode(){let t=this,e={errorCorrectionLevel:this.options.errorCorrectionLevel,margin:4,scale:this.options.scale};c.toDataURL(this.options.url,e).then((e=>{t.qrCodeImageData=e})).catch((t=>{console.error(t)}))},drawButton(t){let e=t.getContext("2d");e.clearRect(0,0,this.canvasWidth,this.canvasHeight)},drawText(t,e,n,r,o,i,a,s){let u=t.canvas,l=u.width,c=u.height,d=document.createElement("canvas");d.width=l,d.height=c;let f=d.getContext("2d");f.font=a,f.fillStyle=s,f.textAlign="center",f.textBaseline="middle",f.fillText(e,n,r),o>0&&this.addColorBorderHex(f,o,i),t.drawImage(f.canvas,0,0)},repaint(t){let e=document.createElement("canvas");e.width=t.canvas.width,e.height=t.canvas.height;let n=e.getContext("2d");n.drawImage(t.canvas,0,0),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.drawImage(n.canvas,0,0)}}},f=d,h=n(1001),g=(0,h.Z)(f,r,o,!1,null,null,null),p=g.exports},5117:function(t,e,n){"use strict";var r=n(6330),o=TypeError;t.exports=function(t,e){if(!delete t[e])throw o("Cannot delete property "+r(e)+" of "+r(t))}},541:function(t,e,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),a=n(3658),s=n(5117),u=n(7207),l=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{unshift:function(t){var e=o(this),n=i(e),r=arguments.length;if(r){u(n+r);var l=n;while(l--){var c=l+r;l in e?e[c]=e[l]:s(e,c)}for(var d=0;d<r;d++)e[d]=arguments[d]}return a(e,n+r)}})},5987:function(t){"use strict";var e={single_source_shortest_paths:function(t,n,r){var o={},i={};i[n]=0;var a,s,u,l,c,d,f,h,g,p=e.PriorityQueue.make();p.push(n,0);while(!p.empty())for(u in a=p.pop(),s=a.value,l=a.cost,c=t[s]||{},c)c.hasOwnProperty(u)&&(d=c[u],f=l+d,h=i[u],g="undefined"===typeof i[u],(g||h>f)&&(i[u]=f,p.push(u,f),o[u]=s));if("undefined"!==typeof r&&"undefined"===typeof i[r]){var m=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(m)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],r=e;while(r)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,n,r){var o=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var n,r=e.PriorityQueue,o={};for(n in t=t||{},r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},2378:function(t){"use strict";t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},3162:function(t,e,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function r(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){u(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,e,n){var s=a.URL||a.webkitURL,u=document.createElement("a");e=e||t.name||"download",u.download=e,u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?i(u):o(u.href)?r(t,e,n):i(u,u.target="_blank")):(u.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(u.href)}),4e4),setTimeout((function(){i(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,a){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),n);else if(o(t))r(t,n,a);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){i(s)}))}}:function(t,e,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return r(t,e,n);var i="application/octet-stream"===t.type,u=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&u||s)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},c.readAsDataURL(t)}else{var d=a.URL||a.webkitURL,f=d.createObjectURL(t);o?o.location=f:location.href=f,o=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});a.saveAs=u.saveAs=u,t.exports=u}))},2592:function(t,e,n){const r=n(7138),o=n(5115),i=n(6907),a=n(3776);function s(t,e,n,i,a){const s=[].slice.call(arguments,1),u=s.length,l="function"===typeof s[u-1];if(!l&&!r())throw new Error("Callback required as last argument");if(!l){if(u<1)throw new Error("Too few arguments provided");return 1===u?(n=e,e=i=void 0):2!==u||e.getContext||(i=n,n=e,e=void 0),new Promise((function(r,a){try{const a=o.create(n,i);r(t(a,e,i))}catch(s){a(s)}}))}if(u<2)throw new Error("Too few arguments provided");2===u?(a=n,n=e,e=i=void 0):3===u&&(e.getContext&&"undefined"===typeof a?(a=i,i=void 0):(a=i,i=n,n=e,e=void 0));try{const r=o.create(n,i);a(null,t(r,e,i))}catch(c){a(c)}}e.create=o.create,e.toCanvas=s.bind(null,i.render),e.toDataURL=s.bind(null,i.renderToDataURL),e.toString=s.bind(null,(function(t,e,n){return a.render(t,n)}))},7138:function(t){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},1845:function(t,e,n){const r=n(242).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7];for(let r=1;r<e-1;r++)i[r]=i[r-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)0===e&&0===t||0===e&&t===o-1||e===o-1&&0===t||n.push([r[e],r[t]]);return n}},8260:function(t,e,n){const r=n(6910),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*o.indexOf(this.data[e]);n+=o.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},7245:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},3280:function(t){function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},3424:function(t,e,n){const r=n(2378),o=n(6910);function i(t){this.mode=o.BYTE,"string"===typeof t&&(t=r(t)),this.data=new Uint8Array(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i},5393:function(t,e,n){const r=n(4908),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},4908:function(t,e){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(o){return r}}},6526:function(t,e,n){const r=n(242).getSymbolSize,o=7;e.getPositions=function(t){const e=r(t);return[[0,0],[e-o,0],[0,e-o]]}},1642:function(t,e,n){const r=n(242),o=1335,i=21522,a=r.getBCHDigit(o);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let s=n<<10;while(r.getBCHDigit(s)-a>=0)s^=o<<r.getBCHDigit(s)-a;return(n<<10|s)^i}},9729:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)n[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)n[e]=n[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},5442:function(t,e,n){const r=n(6910),o=n(242);function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=o.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},7126:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};function r(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,i=0,a=null,s=null;for(let u=0;u<e;u++){o=i=0,a=s=null;for(let l=0;l<e;l++){let e=t.get(u,l);e===a?o++:(o>=5&&(r+=n.N1+(o-5)),a=e,o=1),e=t.get(l,u),e===s?i++:(i>=5&&(r+=n.N1+(i-5)),s=e,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n.N2},e.getPenaltyN3=function(t){const e=t.size;let r=0,o=0,i=0;for(let n=0;n<e;n++){o=i=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(n,a),a>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(a,n),a>=10&&(1488===i||93===i)&&r++}return r*n.N3},e.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];const o=Math.abs(Math.ceil(100*e/r/5)-10);return o*n.N4},e.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let a=0;a<r;a++){n(a),e.applyMask(a,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),r<i&&(i=r,o=a)}return o}},6910:function(t,e,n){const r=n(3114),o=n(7007);function i(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return i(t)}catch(r){return n}}},1085:function(t,e,n){const r=n(6910);function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},t.exports=o},6143:function(t,e,n){const r=n(9729);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)n[o+i]^=r.mul(t[o],e[i]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let i=0;i<e.length;i++)n[i]^=r.mul(e[i],t);let o=0;while(o<n.length&&0===n[o])o++;n=n.slice(o)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let o=0;o<t;o++)n=e.mul(n,new Uint8Array([1,r.exp(o)]));return n}},5115:function(t,e,n){const r=n(242),o=n(4908),i=n(7245),a=n(3280),s=n(1845),u=n(6526),l=n(7126),c=n(5393),d=n(2882),f=n(3103),h=n(1642),g=n(6910),p=n(6130);function m(t,e){const n=t.size,r=u.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}function v(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function w(t,e){const n=s.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}function y(t,e){const n=t.size,r=f.getEncodedBits(e);let o,i,a;for(let s=0;s<18;s++)o=Math.floor(s/3),i=s%3+n-8-3,a=1===(r>>s&1),t.set(o,i,a,!0),t.set(i,o,a,!0)}function C(t,e,n){const r=t.size,o=h.getEncodedBits(e,n);let i,a;for(i=0;i<15;i++)a=1===(o>>i&1),i<6?t.set(i,8,a,!0):i<8?t.set(i+1,8,a,!0):t.set(r-15+i,8,a,!0),i<8?t.set(8,r-i-1,a,!0):i<9?t.set(8,15-i-1+1,a,!0):t.set(8,15-i-1,a,!0);t.set(r-8,8,1,!0)}function b(t,e){const n=t.size;let r=-1,o=n-1,i=7,a=0;for(let s=n-1;s>0;s-=2){6===s&&s--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(o,s-n)){let r=!1;a<e.length&&(r=1===(e[a]>>>i&1)),t.set(o,s-n,r),i--,-1===i&&(a++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}}function E(t,e,n){const o=new i;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)}));const a=r.getSymbolTotalCodewords(t),s=c.getTotalCodewordsCount(t,e),u=8*(a-s);o.getLengthInBits()+4<=u&&o.put(0,4);while(o.getLengthInBits()%8!==0)o.putBit(0);const l=(u-o.getLengthInBits())/8;for(let r=0;r<l;r++)o.put(r%2?17:236,8);return _(o,t,e)}function _(t,e,n){const o=r.getSymbolTotalCodewords(e),i=c.getTotalCodewordsCount(e,n),a=o-i,s=c.getBlocksCount(e,n),u=o%s,l=s-u,f=Math.floor(o/s),h=Math.floor(a/s),g=h+1,p=f-h,m=new d(p);let v=0;const w=new Array(s),y=new Array(s);let C=0;const b=new Uint8Array(t.buffer);for(let r=0;r<s;r++){const t=r<l?h:g;w[r]=b.slice(v,v+t),y[r]=m.encode(w[r]),v+=t,C=Math.max(C,t)}const E=new Uint8Array(o);let _,I,A=0;for(_=0;_<C;_++)for(I=0;I<s;I++)_<w[I].length&&(E[A++]=w[I][_]);for(_=0;_<p;_++)for(I=0;I<s;I++)E[A++]=y[I][_];return E}function I(t,e,n,o){let i;if(Array.isArray(t))i=p.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=p.rawSplit(t);r=f.getBestVersionForData(e,n)}i=p.fromString(t,r||40)}}const s=f.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<s)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+s+".\n")}else e=s;const u=E(e,n,i),c=r.getSymbolSize(e),d=new a(c);return m(d,e),v(d),w(d,e),C(d,n,0),e>=7&&y(d,e),b(d,u),isNaN(o)&&(o=l.getBestMask(d,C.bind(null,d,n))),l.applyMask(o,d),C(d,n,o),{modules:d,version:e,errorCorrectionLevel:n,maskPattern:o,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,i,a=o.M;return"undefined"!==typeof e&&(a=o.from(e.errorCorrectionLevel,o.M),n=f.from(e.version),i=l.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),I(t,n,a,i)}},2882:function(t,e,n){const r=n(6143);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n},t.exports=o},7007:function(t,e){const n="[0-9]+",r="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(r,"g");const a=new RegExp("^"+o+"$"),s=new RegExp("^"+n+"$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return a.test(t)},e.testNumeric=function(t){return s.test(t)},e.testAlphanumeric=function(t){return u.test(t)}},6130:function(t,e,n){const r=n(6910),o=n(1085),i=n(8260),a=n(3424),s=n(5442),u=n(7007),l=n(242),c=n(5987);function d(t){return unescape(encodeURIComponent(t)).length}function f(t,e,n){const r=[];let o;while(null!==(o=t.exec(n)))r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function h(t){const e=f(u.NUMERIC,r.NUMERIC,t),n=f(u.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,i;l.isKanjiModeEnabled()?(o=f(u.BYTE,r.BYTE,t),i=f(u.KANJI,r.KANJI,t)):(o=f(u.BYTE_KANJI,r.BYTE,t),i=[]);const a=e.concat(n,o,i);return a.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return s.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function p(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function m(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:d(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:d(o.data)}])}}return e}function v(t,e){const n={},o={start:{}};let i=["start"];for(let a=0;a<t.length;a++){const s=t[a],u=[];for(let t=0;t<s.length;t++){const l=s[t],c=""+a+t;u.push(c),n[c]={node:l,lastCount:0},o[c]={};for(let t=0;t<i.length;t++){const a=i[t];n[a]&&n[a].node.mode===l.mode?(o[a][c]=g(n[a].lastCount+l.length,l.mode)-g(n[a].lastCount,l.mode),n[a].lastCount+=l.length):(n[a]&&(n[a].lastCount=l.length),o[a][c]=g(l.length,l.mode)+4+r.getCharCountIndicator(l.mode,e))}}i=u}for(let r=0;r<i.length;r++)o[i[r]].end=0;return{map:o,table:n}}function w(t,e){let n;const u=r.getBestModeForData(t);if(n=r.from(e,u),n!==r.BYTE&&n.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(u));switch(n!==r.KANJI||l.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new s(t);case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(w(e,null)):e.data&&t.push(w(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const r=h(t,l.isKanjiModeEnabled()),o=m(r),i=v(o,n),a=c.find_path(i.map,"start","end"),s=[];for(let e=1;e<a.length-1;e++)s.push(i.table[a[e]].node);return e.fromArray(p(s))},e.rawSplit=function(t){return e.fromArray(h(t,l.isKanjiModeEnabled()))}},242:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},3114:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},3103:function(t,e,n){const r=n(242),o=n(5393),i=n(4908),a=n(6910),s=n(3114),u=7973,l=r.getBCHDigit(u);function c(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}function d(t,e){return a.getCharCountIndicator(t,e)+4}function f(t,e){let n=0;return t.forEach((function(t){const r=d(t.mode,e);n+=r+t.getBitsLength()})),n}function h(t,n){for(let r=1;r<=40;r++){const o=f(t,r);if(o<=e.getCapacity(r,n,a.MIXED))return r}}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!s.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=a.BYTE);const i=r.getSymbolTotalCodewords(t),u=o.getTotalCodewordsCount(t,e),l=8*(i-u);if(n===a.MIXED)return l;const c=l-d(n,t);switch(n){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,e){let n;const r=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return h(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return c(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(r.getBCHDigit(e)-l>=0)e^=u<<r.getBCHDigit(e)-l;return t<<12|e}},6907:function(t,e,n){const r=n(9653);function o(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let a=n,s=e;"undefined"!==typeof a||e&&e.getContext||(a=e,e=void 0),e||(s=i()),a=r.getOptions(a);const u=r.getImageWidth(t.modules.size,a),l=s.getContext("2d"),c=l.createImageData(u,u);return r.qrToImageData(c.data,t,a),o(l,s,u),l.putImageData(c,0,0),s},e.renderToDataURL=function(t,n,r){let o=r;"undefined"!==typeof o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=e.render(t,n,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}},3776:function(t,e,n){const r=n(9653);function o(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function i(t,e,n){let r=t+e;return"undefined"!==typeof n&&(r+=" "+n),r}function a(t,e,n){let r="",o=0,a=!1,s=0;for(let u=0;u<t.length;u++){const l=Math.floor(u%e),c=Math.floor(u/e);l||a||(a=!0),t[u]?(s++,u>0&&l>0&&t[u-1]||(r+=a?i("M",l+n,.5+c+n):i("m",o,0),o=0,a=!1),l+1<e&&t[u+1]||(r+=i("h",s),s=0)):o++}return r}e.render=function(t,e,n){const i=r.getOptions(e),s=t.modules.size,u=t.modules.data,l=s+2*i.margin,c=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+o(i.color.dark,"stroke")+' d="'+a(u,s,i.margin)+'"/>',f='viewBox="0 0 '+l+" "+l+'"',h=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+h+f+' shape-rendering="crispEdges">'+c+d+"</svg>\n";return"function"===typeof n&&n(null,g),g}},9653:function(t,e){function n(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,i=n.modules.data,a=e.getScale(o,r),s=Math.floor((o+2*r.margin)*a),u=r.margin*a,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let c=4*(e*s+n),d=r.color.light;if(e>=u&&n>=u&&e<s-u&&n<s-u){const t=Math.floor((e-u)/a),r=Math.floor((n-u)/a);d=l[i[t*o+r]?1:0]}t[c++]=d.r,t[c++]=d.g,t[c++]=d.b,t[c]=d.a}}},6286:function(t,e,n){"use strict";t.exports=n.p+"img/image-online-tools.988f9e93.png"}}]);