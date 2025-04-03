(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[706],{4138:function(t,e,a){"use strict";a.d(e,{Z:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb_div"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(a){return e("li",{key:a.id,class:a.active?"breadcrumb-item active":"breadcrumb-item"},[a.active?t._e():e("a",{attrs:{href:a.url}},[t._v(t._s(a.name))]),a.active?e("span",[t._v(t._s(a.name))]):t._e()])})),0)])])])},o=[],i=(a(7658),a(541),a(3026)),r=a(8273);function s(){let t=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"animation-generator-tools",name:"Animation generator tools",url:"/animation-generator-tools",parentId:"home"},{id:"tags",name:"Tags",url:"/tags",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],e=i.Z.listImageEditorTools();for(let i=0;i<e.length;i++){let a=e[i];t.push({id:a.slug,name:a.name,url:"/"+a.slug,parentId:"image-editor-tools"})}let a=i.Z.listImageGeneratorTools();for(let i=0;i<a.length;i++){let e=a[i];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"image-generator-tools"})}let n=i.Z.listAnimationGeneratorTools();for(let i=0;i<n.length;i++){let e=n[i];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"animation-generator-tools"})}let o=i.Z.listAllTags();for(let i=0;i<o.length;i++){let e=o[i];t.push({id:"tag_"+e.slug,name:e.name,url:"/tags/"+e.slug,parentId:"tags"})}let s=r.Z.listLearnPages();for(let i=0;i<s.length;i++){let e=s[i];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"learn"})}return t}var l={listMenuItems:s},u={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=l.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(t){for(let e=0;e<this.pages.length;e++){let a=this.pages[e];if(a.id==t)return a}return null},buildItems(){let t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);let a=e.parentId,n=0;while(null!=a||n>=10){let e=this.getPageById(a);t.unshift(e),a=e.parentId,n++}return t}}},d=u,c=a(1001),g=(0,c.Z)(d,n,o,!1,null,"2d127206",null),m=g.exports},7630:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2025 ImageOnlineTools")])])},o=[],i={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},r=i,s=a(1001),l=(0,s.Z)(r,n,o,!1,null,"045f78c4",null),u=l.exports},8528:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:a(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/animation-generator-tools"}},[t._v("Animation generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},o=[],i={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},r=i,s=a(1001),l=(0,s.Z)(r,n,o,!1,null,"21533314",null),u=l.exports},7e3:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFFFFF",height:t.size,width:t.size}},[e("path",{attrs:{fill:t.color,d:"M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"}})])},o=[],i={name:"IconDownload",props:{color:{type:String,default:"#ffffff"},size:{type:Number,default:20}}},r=i,s=a(1001),l=(0,s.Z)(r,n,o,!1,null,"d83b91be",null),u=l.exports},5706:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return p}});var n=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),e("Breadcrumb",{attrs:{pageId:"grayscale-image-online"}}),t._m(0),e("br"),t.uploadedImage.imageData?t._e():e("div",{staticClass:"home"},[e("h2",[t._v("Select image")]),e("input",{attrs:{type:"file",id:"inputImage"},on:{change:t.onImageUpload}})]),e("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{position:"absolute",visibility:"hidden"},attrs:{src:t.uploadedImage.imageData,id:"original_image"},on:{load:t.onImageLoad}}),t.uploadedImage.imageData?e("div",{staticClass:"imageGridLayout"},[e("div"),e("div",{staticClass:"div_image"},[e("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"resultCanvas",width:t.canvasWidth,height:t.canvasHeight}}),e("br"),e("br"),t._m(1),e("div",[t._v("width: "+t._s(t.uploadedImage.width))]),e("div",[t._v("height: "+t._s(t.uploadedImage.height))])]),e("div",{staticClass:"div_options"},[t.readyToDownload?t._e():e("div",[e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(e){return t.triggerUpdateImage()}}},[t._v("Convert to grayscale")])]),t.readyToDownload?e("div",[e("div",[t._v("Image successfully converted to grayscale")]),e("br"),e("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:function(e){return t.downloadResultImage()}}},[e("IconDownload",{attrs:{size:24}}),t._v(" Download image")],1)]):t._e()]),e("div")]):t._e(),e("br"),e("FooterComponent")],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"documentationContent"},[e("h1",[t._v("Grayscale image online")]),e("p",[t._v("This free online tool allows you to convert images to grayscale.")]),e("h2",[t._v("How to convert an image to grayscale?")]),e("p",[t._v("You can easily convert an image to grayscale by following these steps:")]),e("ol",[e("li",[t._v("Upload the photo that you want to convert to grayscale. The image will load in the canvas.")]),e("li",[t._v('Click button "Convert to grayscale".')]),e("li",[t._v('Click button "Download image".')])])])},function(){var t=this,e=t._self._c;return e("div",[e("b",[t._v("Original image details:")])])}],i=a(8528),r=a(7630),s=a(4138),l=a(7e3),u=a(3162),d={name:"GrayscaleImage",components:{HeaderOnlineTools:i.Z,FooterComponent:r.Z,IconDownload:l.Z,Breadcrumb:s.Z},data(){return{canvasWidth:100,canvasHeight:100,uploadedImage:{imageData:null,width:null,height:null},options:{angle:0},applyConvertToGrayscale:!1,readyToDownload:!1}},methods:{onImageUpload(t){const e=t.target.files[0];window.file=e;let a=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){a.uploadedImage.imageData=n.result,a.$forceUpdate()},n.onerror=function(t){console.log("Error: ",t)}},onImageLoad(){let t=document.getElementById("original_image");this.uploadedImage.width=t.naturalWidth,this.uploadedImage.height=t.naturalHeight,this.canvasWidth=t.naturalWidth,this.canvasHeight=t.naturalHeight,this.$nextTick((()=>{this.updateResultCanvas()}))},downloadResultImage(){let t=document.getElementById("resultCanvas"),e=t.getContext("2d"),a=e.canvas.width,n=e.canvas.height,o=document.createElement("canvas");o.width=a,o.height=n,this.updateCanvas(o,!1),o.toBlob((function(t){(0,u.saveAs)(t,"Image.png")}))},triggerUpdateImage(){this.applyConvertToGrayscale=!0,this.updateResultCanvas(),this.readyToDownload=!0},updateResultCanvas(){let t=document.getElementById("resultCanvas");this.updateCanvas(t,!0)},updateCanvas(t,e){let a=t,n=a.getContext("2d"),o=n.canvas.width,i=n.canvas.height,r=document.getElementById("original_image"),s=document.createElement("canvas");s.width=o,s.height=i;let l=s.getContext("2d");l.drawImage(r,0,0);let u=l.getImageData(0,0,o,i),d=l.getImageData(0,0,o,i);if(this.applyConvertToGrayscale)for(let c=0;c<u.data.length;c+=4){let t=u.data[c],e=u.data[c+1],a=u.data[c+2],n=(t+e+a)/3;n=Math.round(n),d.data[c]=n,d.data[c+1]=n,d.data[c+2]=n}n.clearRect(0,0,o,i),e&&this.drawBackground(n),n.putImageData(d,0,0)},drawBackground(t){t.save();let e=t.canvas.width,a=t.canvas.height,n=10,o=10,i=a/o,r=e/n,s="#CCCCCC",l="#EEEEEE",u=0,d=0;for(let c=0;c<i;c++)for(let e=0;e<r;e++){let a=(c+e)%2==0,i=a?s:l;t.fillStyle=i,t.fillRect(e*n+u,c*o+d,n,o)}t.restore()}}},c=d,g=a(1001),m=(0,g.Z)(c,n,o,!1,null,null,null),p=m.exports},5117:function(t,e,a){"use strict";var n=a(6330),o=TypeError;t.exports=function(t,e){if(!delete t[e])throw o("Cannot delete property "+n(e)+" of "+n(t))}},541:function(t,e,a){"use strict";var n=a(2109),o=a(7908),i=a(6244),r=a(3658),s=a(5117),l=a(7207),u=1!==[].unshift(0),d=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();n({target:"Array",proto:!0,arity:1,forced:u||d},{unshift:function(t){var e=o(this),a=i(e),n=arguments.length;if(n){l(a+n);var u=a;while(u--){var d=u+n;u in e?e[d]=e[u]:s(e,d)}for(var c=0;c<n;c++)e[c]=arguments[c]}return r(e,a+n)}})},3162:function(t,e,a){var n,o,i;(function(a,r){o=[],n=r,i="function"===typeof n?n.apply(e,o):n,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,e,a){var s=r.URL||r.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?i(l):o(l.href)?n(t,e,a):i(l,l.target="_blank")):(l.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,r){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),a);else if(o(t))n(t,a,r);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){i(s)}))}}:function(t,e,a,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var i="application/octet-stream"===t.type,l=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&l||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},d.readAsDataURL(t)}else{var c=r.URL||r.webkitURL,g=c.createObjectURL(t);o?o.location=g:location.href=g,o=null,setTimeout((function(){c.revokeObjectURL(g)}),4e4)}});r.saveAs=l.saveAs=l,t.exports=l}))},6286:function(t,e,a){"use strict";t.exports=a.p+"img/image-online-tools.988f9e93.png"}}]);