(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[603],{4138:function(t,e,a){"use strict";a.d(e,{Z:function(){return f}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb_div"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(a){return e("li",{key:a.id,class:a.active?"breadcrumb-item active":"breadcrumb-item"},[a.active?t._e():e("a",{attrs:{href:a.url}},[t._v(t._s(a.name))]),a.active?e("span",[t._v(t._s(a.name))]):t._e()])})),0)])])])},n=[],r=(a(7658),a(541),a(3026)),i=a(8273);function l(){let t=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"animation-generator-tools",name:"Animation generator tools",url:"/animation-generator-tools",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],e=r.Z.listImageEditorTools();for(let r=0;r<e.length;r++){let a=e[r];t.push({id:a.slug,name:a.name,url:"/"+a.slug,parentId:"image-editor-tools"})}let a=r.Z.listImageGeneratorTools();for(let r=0;r<a.length;r++){let e=a[r];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"image-generator-tools"})}let o=r.Z.listAnimationGeneratorTools();for(let r=0;r<o.length;r++){let e=o[r];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"animation-generator-tools"})}let n=i.Z.listLearnPages();for(let r=0;r<n.length;r++){let e=n[r];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"learn"})}return t}var s={listMenuItems:l},u={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=s.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(t){for(let e=0;e<this.pages.length;e++){let a=this.pages[e];if(a.id==t)return a}return null},buildItems(){let t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);let a=e.parentId,o=0;while(null!=a||o>=10){let e=this.getPageById(a);t.unshift(e),a=e.parentId,o++}return t}}},c=u,d=a(1001),g=(0,d.Z)(c,o,n,!1,null,"2d127206",null),f=g.exports},7630:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2025 ImageOnlineTools")])])},n=[],r={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},i=r,l=a(1001),s=(0,l.Z)(i,o,n,!1,null,"045f78c4",null),u=s.exports},8528:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:a(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/animation-generator-tools"}},[t._v("Animation generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},n=[],r={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},i=r,l=a(1001),s=(0,l.Z)(i,o,n,!1,null,"21533314",null),u=s.exports},7e3:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var o=function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFFFFF",height:t.size,width:t.size}},[e("path",{attrs:{fill:t.color,d:"M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"}})])},n=[],r={name:"IconDownload",props:{color:{type:String,default:"#ffffff"},size:{type:Number,default:20}}},i=r,l=a(1001),s=(0,l.Z)(i,o,n,!1,null,"d83b91be",null),u=s.exports},5117:function(t,e,a){"use strict";var o=a(6330),n=TypeError;t.exports=function(t,e){if(!delete t[e])throw n("Cannot delete property "+o(e)+" of "+o(t))}},541:function(t,e,a){"use strict";var o=a(2109),n=a(7908),r=a(6244),i=a(3658),l=a(5117),s=a(7207),u=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();o({target:"Array",proto:!0,arity:1,forced:u||c},{unshift:function(t){var e=n(this),a=r(e),o=arguments.length;if(o){s(a+o);var u=a;while(u--){var c=u+o;u in e?e[c]=e[u]:l(e,c)}for(var d=0;d<o;d++)e[d]=arguments[d]}return i(e,a+o)}})},3162:function(t,e,a){var o,n,r;(function(a,i){n=[],o=i,r="function"===typeof o?o.apply(e,n):o,void 0===r||(t.exports=r)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,a){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){s(o.response,e,a)},o.onerror=function(){console.error("could not download file")},o.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(t,e,a){var l=i.URL||i.webkitURL,s=document.createElement("a");e=e||t.name||"download",s.download=e,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?r(s):n(s.href)?o(t,e,a):r(s,s.target="_blank")):(s.href=l.createObjectURL(t),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),a);else if(n(t))o(t,a,i);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout((function(){r(l)}))}}:function(t,e,a,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,a);var r="application/octet-stream"===t.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||r&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=t:location=t,n=null},c.readAsDataURL(t)}else{var d=i.URL||i.webkitURL,g=d.createObjectURL(t);n?n.location=g:location.href=g,n=null,setTimeout((function(){d.revokeObjectURL(g)}),4e4)}});i.saveAs=s.saveAs=s,t.exports=s}))},9314:function(t,e,a){"use strict";a(7658);let o={pasteClipboardImage(t){if(t.clipboardData){var e=t.clipboardData.items;if(e){for(var a=!1,o=0;o<e.length;o++)if(-1!==e[o].type.indexOf("image")){var n=e[o].getAsFile(),r=window.URL||window.webkitURL,i=r.createObjectURL(n);if(null!=i){var l=new Image;l.onload=function(){window.ctx.drawImage(l,0,0)},l.src=i}a=!0}a&&t.preventDefault()}}},convoluteLayer(t,e,a){let o=t.canvas.width,n=t.canvas.height;const r=t.getImageData(0,0,o,n);let i=this.convolute(r,e,a);t.putImageData(i,0,0)},convolute(t,e,a){for(var o=Math.round(Math.sqrt(e.length)),n=Math.floor(o/2),r=t.data,i=t.width,l=t.height,s=i,u=l,c=document.createElement("canvas").getContext("2d").createImageData(s,u),d=c.data,g=a?1:0,f=0;f<u;f++)for(var m=0;m<s;m++){for(var h=f,p=m,v=4*(f*s+m),b=0,w=0,y=0,I=0,x=0;x<o;x++)for(var _=0;_<o;_++){var k=h+x-n,C=p+_-n;if(k>=0&&k<l&&C>=0&&C<i){var A=4*(k*i+C),M=e[x*o+_];b+=r[A]*M,w+=r[A+1]*M,y+=r[A+2]*M,I+=r[A+3]*M}}d[v]=b,d[v+1]=w,d[v+2]=y,d[v+3]=I+g*(255-I)}return c},rgbToHex(t){return"#"+[t.r,t.g,t.b].map((t=>{const e=t.toString(16);return 1===e.length?"0"+e:e})).join("")},hexToRgb(t){let e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,a,o)=>"#"+e+e+a+a+o+o)).substring(1).match(/.{2}/g).map((t=>parseInt(t,16)));return{r:e[0],g:e[1],b:e[2]}},hexToRgba(t){t.length<9&&(t+="ff");let e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,a,o,n)=>"#"+e+e+a+a+o+o+n+n)).substring(1).match(/.{2}/g).map((t=>parseInt(t,16)));return{r:e[0],g:e[1],b:e[2],a:e[3]/255}},rgbAdd(t,e){return t.r+=e,t.g+=e,t.b+=e,t.r=this.rgbFit(t.r),t.g=this.rgbFit(t.g),t.b=this.rgbFit(t.b),t},rgbFit(t){return t=Math.round(t),Math.max(Math.min(t,255),0)},random256(){return Math.floor(256*Math.random())},cloneCanvas(t){let e=document.createElement("canvas");e.width=600,e.height=400;let a=e.getContext("2d");return a.drawImage(t,0,0),e},getImageDataPosition(t,e,a){let o=t.width,n=4*(a*o+e);return n},cropAt(t,e,a,o,n){let r=t.width,i=t.height,l=t.getContext("2d"),s=l.getImageData(0,0,r,i),u=o-e+1,c=n-a+1,d=document.createElement("canvas");d.width=u,d.height=c;let g=d.getContext("2d");return g.putImageData(s,-e,-a),d},crop(t){let e=t.width,a=t.height,o=t.getContext("2d"),n=o.getImageData(0,0,e,a),r=0,i=0,l=e-1,s=a-1;for(let u=0;u<e;u++){let e=!0;r=u;for(let o=0;o<a;o++){let a=this.getImageDataPosition(t,u,o);if(n.data[a+3]>0){e=!1;break}}if(!e)break}for(let u=e-1;u>=0;u--){let e=!0;l=u;for(let o=0;o<a;o++){let a=this.getImageDataPosition(t,u,o);if(n.data[a+3]>0){e=!1;break}}if(!e)break}for(let u=0;u<a;u++){let a=!0;i=u;for(let o=0;o<e;o++){let e=this.getImageDataPosition(t,o,u);if(n.data[e+3]>0){a=!1;break}}if(!a)break}for(let u=a-1;u>=0;u--){let a=!0;s=u;for(let o=0;o<e;o++){let e=this.getImageDataPosition(t,o,u);if(n.data[e+3]>0){a=!1;break}}if(!a)break}return this.cropAt(t,r,i,l,s)},getColorAtPixel(t,e,a){const{width:o,data:n}=t;return{r:n[4*(o*a+e)+0],g:n[4*(o*a+e)+1],b:n[4*(o*a+e)+2],a:n[4*(o*a+e)+3]}},setColorAtPixel(t,e,a,o){const{width:n,data:r}=t;r[4*(n*o+a)+0]=255&e.r,r[4*(n*o+a)+1]=255&e.g,r[4*(n*o+a)+2]=255&e.b,r[4*(n*o+a)+3]=255&e.a},colorMatch(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a},floodFill(t,e,a,o){let n=t.canvas.width,r=t.canvas.height,i=t.getImageData(0,0,n,r);this.floodFillImageData(i,e,a,o),t.putImageData(i,0,0)},floodFillImageData(t,e,a,o){const{width:n,height:r}=t,i=[],l=this.getColorAtPixel(t,a,o);let s={x:a,y:o};if(!this.colorMatch(l,e)){i.push({x:s.x,y:s.y});while(i.length){s=i.pop();let a=!0,o=!0,u=!1,c=!1;while(o&&s.y>=0)s.y--,o=this.colorMatch(this.getColorAtPixel(t,s.x,s.y),l);while(a&&s.y<r)this.setColorAtPixel(t,e,s.x,s.y),s.x-1>=0&&this.colorMatch(this.getColorAtPixel(t,s.x-1,s.y),l)?u||(u=!0,i.push({x:s.x-1,y:s.y})):u=!1,s.x+1<n&&this.colorMatch(this.getColorAtPixel(t,s.x+1,s.y),l)?c||(i.push({x:s.x+1,y:s.y}),c=!0):c=!1,s.y++,a=this.colorMatch(this.getColorAtPixel(t,s.x,s.y),l)}}}};e["Z"]=o},6286:function(t,e,a){"use strict";t.exports=a.p+"img/image-online-tools.988f9e93.png"}}]);