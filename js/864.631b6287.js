(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[864],{4138:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb_div"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(n){return e("li",{key:n.id,class:n.active?"breadcrumb-item active":"breadcrumb-item"},[n.active?t._e():e("a",{attrs:{href:n.url}},[t._v(t._s(n.name))]),n.active?e("span",[t._v(t._s(n.name))]):t._e()])})),0)])])])},o=[],i=(n(7658),n(541),n(3026)),r=n(8273);function s(){let t=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],e=i.Z.listImageEditorTools();for(let o=0;o<e.length;o++){let n=e[o];t.push({id:n.slug,name:n.name,url:"/"+n.slug,parentId:"image-editor-tools"})}let n=i.Z.listImageGeneratorTools();for(let o=0;o<n.length;o++){let e=n[o];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"image-generator-tools"})}let a=r.Z.listLearnPages();for(let o=0;o<a.length;o++){let e=a[o];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"learn"})}return t}var l={listMenuItems:s},u={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=l.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(t){for(let e=0;e<this.pages.length;e++){let n=this.pages[e];if(n.id==t)return n}return null},buildItems(){let t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);let n=e.parentId,a=0;while(null!=n||a>=10){let e=this.getPageById(n);t.unshift(e),n=e.parentId,a++}return t}}},d=u,c=n(1001),m=(0,c.Z)(d,a,o,!1,null,"2d127206",null),g=m.exports},8402:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2024 ImageOnlineTools")])])},o=[],i={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},r=i,s=n(1001),l=(0,s.Z)(r,a,o,!1,null,"18b937ff",null),u=l.exports},5665:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:n(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},o=[],i={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},r=i,s=n(1001),l=(0,s.Z)(r,a,o,!1,null,"65b41b03",null),u=l.exports},7e3:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFFFFF",height:t.size,width:t.size}},[e("path",{attrs:{fill:t.color,d:"M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"}})])},o=[],i={name:"IconDownload",props:{color:{type:String,default:"#ffffff"},size:{type:Number,default:20}}},r=i,s=n(1001),l=(0,s.Z)(r,a,o,!1,null,"d83b91be",null),u=l.exports},3864:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),e("Breadcrumb",{attrs:{pageId:"change-image-color"}}),t._m(0),e("br"),t.uploadedImage.imageData?t._e():e("div",{staticClass:"home"},[e("h2",[t._v("Select image")]),e("input",{attrs:{type:"file",id:"inputImage"},on:{change:t.onImageUpload}})]),e("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{position:"absolute",visibility:"hidden"},attrs:{src:t.uploadedImage.imageData,id:"original_image"},on:{load:t.onImageLoad}}),t.uploadedImage.imageData?e("div",{staticClass:"imageGridLayout"},[e("div"),e("div",{staticClass:"div_image"},[e("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"resultCanvas",width:t.canvasWidth,height:t.canvasHeight}}),e("br"),e("br"),t._m(1),e("div",[t._v("width: "+t._s(t.uploadedImage.width))]),e("div",[t._v("height: "+t._s(t.uploadedImage.height))])]),e("div",{staticClass:"div_options"},[t._m(2),e("br"),e("div",{staticClass:"optionsLayoutChangeImageColor"},[e("div",{staticClass:"div_option"},[t._v("Red")]),e("div",{staticClass:"slidecontainer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.red,expression:"options.red"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"2",step:"0.01",id:"myRange"},domProps:{value:t.options.red},on:{input:function(e){return t.triggerUpdateImage()},__r:function(e){return t.$set(t.options,"red",e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.red,expression:"options.red"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.red},on:{input:[function(e){e.target.composing||t.$set(t.options,"red",e.target.value)},function(e){return t.triggerUpdateImage()}]}})]),e("div",{staticClass:"div_option"},[t._v("Green")]),e("div",{staticClass:"slidecontainer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.green,expression:"options.green"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"2",step:"0.01",id:"myRange"},domProps:{value:t.options.green},on:{input:function(e){return t.triggerUpdateImage()},__r:function(e){return t.$set(t.options,"green",e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.green,expression:"options.green"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.green},on:{input:[function(e){e.target.composing||t.$set(t.options,"green",e.target.value)},function(e){return t.triggerUpdateImage()}]}})]),e("div",{staticClass:"div_option"},[t._v("Blue")]),e("div",{staticClass:"slidecontainer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.blue,expression:"options.blue"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"2",step:"0.01",id:"myRange"},domProps:{value:t.options.blue},on:{input:function(e){return t.triggerUpdateImage()},__r:function(e){return t.$set(t.options,"blue",e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.blue,expression:"options.blue"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.blue},on:{input:[function(e){e.target.composing||t.$set(t.options,"blue",e.target.value)},function(e){return t.triggerUpdateImage()}]}})])]),e("br"),e("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:function(e){return t.downloadResultImage()}}},[e("IconDownload",{attrs:{size:24}}),t._v(" Download image")],1)]),e("div")]):t._e(),e("br"),e("FooterComponent")],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"documentationContent"},[e("h1",[t._v("Change image color")]),e("div",[t._v("This free online tool allows you to change color of images.")])])},function(){var t=this,e=t._self._c;return e("div",[e("b",[t._v("Original image details:")])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Options:")])])}],i=n(5665),r=n(8402),s=n(4138),l=n(7e3),u=n(3162),d={name:"ChangeImageColor",components:{HeaderOnlineTools:i.Z,FooterComponent:r.Z,IconDownload:l.Z,Breadcrumb:s.Z},data(){return{canvasWidth:100,canvasHeight:100,uploadedImage:{imageData:null,width:null,height:null},options:{red:1,green:1,blue:1}}},methods:{onImageUpload(t){const e=t.target.files[0];window.file=e;let n=this,a=new FileReader;a.readAsDataURL(e),a.onload=function(){n.uploadedImage.imageData=a.result,n.$forceUpdate()},a.onerror=function(t){console.log("Error: ",t)}},onImageLoad(){let t=document.getElementById("original_image");this.uploadedImage.width=t.naturalWidth,this.uploadedImage.height=t.naturalHeight,this.canvasWidth=t.naturalWidth,this.canvasHeight=t.naturalHeight,this.$nextTick((()=>{this.updateResultCanvas()}))},downloadResultImage(){let t=document.getElementById("resultCanvas"),e=t.getContext("2d"),n=e.canvas.width,a=e.canvas.height,o=document.createElement("canvas");o.width=n,o.height=a,this.updateCanvas(o,!1),o.toBlob((function(t){(0,u.saveAs)(t,"Image.png")}))},triggerUpdateImage(){this.updateResultCanvas()},updateResultCanvas(){let t=document.getElementById("resultCanvas");this.updateCanvas(t,!0)},updateCanvas(t,e){let n=document.getElementById("original_image"),a=t,o=a.getContext("2d"),i=o.canvas.width,r=o.canvas.height,s=document.createElement("canvas");s.width=i,s.height=r;let l=s.getContext("2d");l.drawImage(n,0,0);let u=Number(this.options.red),d=Number(this.options.green),c=Number(this.options.blue),m=l.getImageData(0,0,i,r);for(let g=0;g<m.data.length;g+=4)m.data[g]=m.data[g]*u,m.data[g+1]=m.data[g+1]*d,m.data[g+2]=m.data[g+2]*c;l.putImageData(m,0,0),o.clearRect(0,0,i,r),e&&this.drawBackground(o),o.drawImage(s,0,0)},drawBackground(t){t.save();let e=t.canvas.width,n=t.canvas.height,a=10,o=10,i=n/o,r=e/a,s="#CCCCCC",l="#EEEEEE",u=0,d=0;for(let c=0;c<i;c++)for(let e=0;e<r;e++){let n=(c+e)%2==0,i=n?s:l;t.fillStyle=i,t.fillRect(e*a+u,c*o+d,a,o)}t.restore()}}},c=d,m=n(1001),g=(0,m.Z)(c,a,o,!1,null,null,null),p=g.exports},5117:function(t,e,n){"use strict";var a=n(6330),o=TypeError;t.exports=function(t,e){if(!delete t[e])throw o("Cannot delete property "+a(e)+" of "+a(t))}},541:function(t,e,n){"use strict";var a=n(2109),o=n(7908),i=n(6244),r=n(3658),s=n(5117),l=n(7207),u=1!==[].unshift(0),d=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();a({target:"Array",proto:!0,arity:1,forced:u||d},{unshift:function(t){var e=o(this),n=i(e),a=arguments.length;if(a){l(n+a);var u=n;while(u--){var d=u+a;u in e?e[d]=e[u]:s(e,d)}for(var c=0;c<a;c++)e[c]=arguments[c]}return r(e,n+a)}})},3162:function(t,e,n){var a,o,i;(function(n,r){o=[],a=r,i="function"===typeof a?a.apply(e,o):a,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function a(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){l(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,e,n){var s=r.URL||r.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?i(l):o(l.href)?a(t,e,n):i(l,l.target="_blank")):(l.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,r){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),n);else if(o(t))a(t,n,r);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){i(s)}))}}:function(t,e,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,n);var i="application/octet-stream"===t.type,l=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&l||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},d.readAsDataURL(t)}else{var c=r.URL||r.webkitURL,m=c.createObjectURL(t);o?o.location=m:location.href=m,o=null,setTimeout((function(){c.revokeObjectURL(m)}),4e4)}});r.saveAs=l.saveAs=l,t.exports=l}))},6286:function(t,e,n){"use strict";t.exports=n.p+"img/image-online-tools.988f9e93.png"}}]);