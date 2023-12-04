(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[869],{4023:function(t,i,o){"use strict";o.d(i,{Z:function(){return p}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"footer"},[i("div",{staticClass:"footer_1"},[i("router-link",{attrs:{tag:"a",to:"/privacy-policy",target:t.linkTarget}},[i("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),i("router-link",{attrs:{tag:"a",to:"/terms-of-use",target:t.linkTarget}},[i("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),i("router-link",{attrs:{tag:"a",to:"/contact-us",target:t.linkTarget}},[i("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),i("div",{staticClass:"footer_2"},[t._v("Copyright © 2023 ImageOnlineTools")])])},s=[],n={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},a=n,r=o(1001),h=(0,r.Z)(a,e,s,!1,null,"d9960666",null),p=h.exports},5626:function(t,i,o){"use strict";o.d(i,{Z:function(){return p}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"header_online_tools"},[i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:o(6286)}})]),i("router-link",{staticClass:"menu_link",attrs:{to:"/"}},[t._v("All online tools")]),i("router-link",{staticClass:"menu_link",attrs:{to:"/crop-image"}},[t._v("Crop image")]),i("router-link",{staticClass:"menu_link",attrs:{to:"/trim-transparent-pixels"}},[t._v("Trim transparent pixels")]),i("router-link",{staticClass:"menu_link",attrs:{to:"/button-generator"}},[t._v("Button generator")]),i("router-link",{staticClass:"menu_link",attrs:{to:"/3d-text-generator"}},[t._v("3D text generator")]),i("router-link",{staticClass:"menu_link",attrs:{to:"/change-image-color"}},[t._v("Change image color")])],1)},s=[],n={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},a=n,r=o(1001),h=(0,r.Z)(a,e,s,!1,null,"90555648",null),p=h.exports},869:function(t,i,o){"use strict";o.r(i),o.d(i,{default:function(){return l}});var e=function(){var t=this,i=t._self._c;return i("div",[i("HeaderOnlineTools"),t.uploadedImage.imageData?t._e():i("div",{staticClass:"home"},[i("h1",[t._v("Crop image online")])]),t.uploadedImage.imageData?t._e():i("div",{staticClass:"home"},[i("div",[t._v("This online tool allows you to crop images.")]),i("br")]),t.uploadedImage.imageData?t._e():i("div",{staticClass:"home"},[i("h2",[t._v("Select image")]),i("input",{attrs:{type:"file",id:"inputImage"},on:{change:t.onImageUpload}}),i("br"),i("br")]),i("img",{staticStyle:{position:"absolute",visibility:"hidden"},attrs:{src:t.uploadedImage.imageData,id:"original_image"},on:{load:t.onImageLoad}}),t.uploadedImage.imageData?i("div",{staticClass:"imageGridLayout"},[i("div"),i("div",{staticClass:"div_image"},[i("canvas",{attrs:{id:"resultCanvas",width:t.canvasWidth,height:t.canvasHeight}}),i("br"),i("div",{staticStyle:{"margin-left":"30px"}},[t._m(0),i("div",[t._v("width: "+t._s(t.uploadedImage.width))]),i("div",[t._v("height: "+t._s(t.uploadedImage.height))])])]),i("div",{staticClass:"div_options"},[t._m(1),i("br"),i("div",{staticClass:"optionsLayout"},[i("div",{staticClass:"div_option"},[t._v("Position x (px)")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.x,expression:"cropOptions.x"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.x},on:{change:function(i){return t.updateResultCanvas()},input:function(i){i.target.composing||t.$set(t.cropOptions,"x",i.target.value)}}})]),i("div",{staticClass:"div_option"},[t._v("Position y (px)")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.y,expression:"cropOptions.y"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.y},on:{change:function(i){return t.updateResultCanvas()},input:function(i){i.target.composing||t.$set(t.cropOptions,"y",i.target.value)}}})]),i("div",{staticClass:"div_option"},[t._v("Width (px)")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.width,expression:"cropOptions.width"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.width},on:{change:function(i){return t.updateResultCanvas()},input:function(i){i.target.composing||t.$set(t.cropOptions,"width",i.target.value)}}})]),i("div",{staticClass:"div_option"},[t._v("Height (px)")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.height,expression:"cropOptions.height"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.height},on:{change:function(i){return t.updateResultCanvas()},input:function(i){i.target.composing||t.$set(t.cropOptions,"height",i.target.value)}}})])]),i("br"),i("div",[i("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(i){return t.downloadCroppedImage()}}},[t._v("Download cropped image")])])]),i("div")]):t._e(),t._m(2),i("FooterComponent")],1)},s=[function(){var t=this,i=t._self._c;return i("div",[i("b",[t._v("Original image details:")])])},function(){var t=this,i=t._self._c;return i("div",[i("h3",[t._v("Crop options:")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"documentation_div"},[i("h2",[t._v("How to crop an image online?")]),i("p",[t._v("With this online image cropping tool you can easily cut pictures by following these steps:")]),i("ol",[i("li",[t._v("Upload the photo that you want to crop. The image will load in the canvas.")]),i("li",[t._v("Choose the crop options: x, y, width and height.")]),i("li",[t._v('Click button "Download cropped image".')])])])}],n=o(5626),a=o(4023),r=o(3162),h={name:"ImageCrop",components:{HeaderOnlineTools:n.Z,FooterComponent:a.Z},data(){return{canvasMargin:30,canvasWidth:100,canvasHeight:100,uploadedImage:{imageData:null,width:null,height:null},baseImage:null,cropOptions:{x:0,y:0,width:1,height:1},mouseAction:"none",mousePosition:{x:0,y:0},previousMousePosition:{x:0,y:0},mouseDownPosition:{x:0,y:0}}},mounted(){},methods:{onImageUpload(t){const i=t.target.files[0];window.file=i;let o=this,e=new FileReader;e.readAsDataURL(i),e.onload=function(){o.uploadedImage.imageData=e.result,o.$forceUpdate()},e.onerror=function(t){console.log("Error: ",t)}},onImageLoad(){let t=document.getElementById("original_image");this.uploadedImage.width=t.naturalWidth,this.uploadedImage.height=t.naturalHeight,this.cropOptions.x=Math.round(.1*t.naturalWidth),this.cropOptions.y=Math.round(.1*t.naturalHeight),this.cropOptions.width=Math.round(.8*t.naturalWidth),this.cropOptions.height=Math.round(.8*t.naturalHeight),this.canvasWidth=t.naturalWidth+2*this.canvasMargin,this.canvasHeight=t.naturalHeight+2*this.canvasMargin,this.$nextTick((()=>{this.buildBaseImage(),this.updateResultCanvas(),document.getElementById("resultCanvas").addEventListener("mousemove",this.onCanvasMouseMove),document.getElementById("resultCanvas").addEventListener("mouseup",this.onCanvasMouseUp),document.getElementById("resultCanvas").addEventListener("mousedown",this.onCanvasMouseDown),document.getElementById("resultCanvas").addEventListener("mouseleave",this.onCanvasMouseLeave)}))},downloadCroppedImage(){let t=document.createElement("canvas");t.width=this.cropOptions.width,t.height=this.cropOptions.height;let i=t.getContext("2d");i.drawImage(document.getElementById("original_image"),-this.cropOptions.x,-this.cropOptions.y),t.toBlob((function(t){(0,r.saveAs)(t,"Image.png")}))},buildBaseImage(){let t=document.getElementById("original_image"),i=document.createElement("canvas");i.width=t.naturalWidth,i.height=t.naturalHeight;let o=i.getContext("2d");this.drawBackground(o),o.drawImage(t,0,0),this.baseImage=i},updateResultCanvas(){this.validateCropOptions();let t=document.getElementById("resultCanvas"),i=t.getContext("2d");i.save(),i.clearRect(0,0,this.canvasWidth,this.canvasHeight),i.filter="brightness(50%)",i.drawImage(this.baseImage,this.canvasMargin,this.canvasMargin),i.restore(),i.save(),i.drawImage(this.baseImage,this.cropOptions.x,this.cropOptions.y,this.cropOptions.width,this.cropOptions.height,this.cropOptions.x+this.canvasMargin,this.cropOptions.y+this.canvasMargin,this.cropOptions.width,this.cropOptions.height),this.drawBorder(i),this.drawRect(i),this.drawCircles(i)},validateCropOptions(){this.cropOptions.width=Number(this.cropOptions.width),this.cropOptions.height=Number(this.cropOptions.height),this.cropOptions.x=Number(this.cropOptions.x),this.cropOptions.y=Number(this.cropOptions.y),this.cropOptions.width<0&&(this.cropOptions.width=-this.cropOptions.width,this.cropOptions.x-=this.cropOptions.width,"moveTopRight"==this.mouseAction?this.mouseAction="moveTopLeft":"moveBottomRight"==this.mouseAction?this.mouseAction="moveBottomLeft":"moveTopLeft"==this.mouseAction?this.mouseAction="moveTopRight":"moveBottomLeft"==this.mouseAction&&(this.mouseAction="moveBottomRight")),this.cropOptions.height<0&&(this.cropOptions.height=-this.cropOptions.height,this.cropOptions.y-=this.cropOptions.height,"moveBottomLeft"==this.mouseAction?this.mouseAction="moveTopLeft":"moveBottomRight"==this.mouseAction?this.mouseAction="moveTopRight":"moveTopLeft"==this.mouseAction?this.mouseAction="moveBottomLeft":"moveTopRight"==this.mouseAction&&(this.mouseAction="moveBottomRight")),this.cropOptions.x<0&&(this.cropOptions.x=0),this.cropOptions.y<0&&(this.cropOptions.y=0);let t=this.canvasWidth-2*this.canvasMargin;if(this.cropOptions.x+this.cropOptions.width>t){let i=this.cropOptions.x+this.cropOptions.width-t;this.cropOptions.x-=i}let i=this.canvasHeight-2*this.canvasMargin;if(this.cropOptions.y+this.cropOptions.height>i){let t=this.cropOptions.y+this.cropOptions.height-i;this.cropOptions.y-=t}},drawBackground(t){t.save();let i=document.getElementById("original_image"),o=10,e=10,s=i.naturalHeight/e,n=i.naturalWidth/o,a="#CCCCCC",r="#EEEEEE",h=0,p=0;for(let c=0;c<s;c++)for(let i=0;i<n;i++){let s=(c+i)%2==0,n=s?a:r;t.fillStyle=n,t.fillRect(i*o+h,c*e+p,o,e)}t.restore()},drawBorder(t){t.save();let i=document.getElementById("original_image"),o=this.getRatio();t.lineWidth=1*o,t.strokeStyle="#000000",t.beginPath(),t.rect(this.canvasMargin-.5,this.canvasMargin-.5,i.naturalWidth+1,i.naturalHeight+1),t.stroke(),t.restore()},drawRect(t){let i=this.getRatio();t.lineWidth=1*i,t.strokeStyle="#ffffff",t.setLineDash([10*i,5*i]),t.beginPath(),t.rect(this.cropOptions.x+this.canvasMargin-.5,this.cropOptions.y+this.canvasMargin-.5,this.cropOptions.width+1,this.cropOptions.height+1),t.stroke(),t.restore()},drawCircles(t){this.drawCircle(t,this.cropOptions.x,this.cropOptions.y),this.drawCircle(t,this.cropOptions.x,this.cropOptions.y+this.cropOptions.height),this.drawCircle(t,this.cropOptions.x+this.cropOptions.width,this.cropOptions.y),this.drawCircle(t,this.cropOptions.x+this.cropOptions.width,this.cropOptions.y+this.cropOptions.height)},drawCircle(t,i,o){t.fillStyle="#ffffff",t.strokeStyle="#000000",t.lineWidth=2*this.getRatio();let e=5*this.getRatio();t.beginPath(),t.arc(i+this.canvasMargin,o+this.canvasMargin,e,0,2*Math.PI),t.fill(),t.stroke()},getRatio(){return 1/this.getZoom()},getZoom(){let t=document.getElementById("original_image"),i=document.getElementById("resultCanvas"),o=i.getBoundingClientRect().width-2*this.canvasMargin;return o/t.naturalWidth},onCanvasMouseLeave(){document.body.style.cursor="default"},onCanvasMouseMove(t){this.updateMousePosition(t);let i=Math.min(this.mousePosition.x,this.canvasWidth-2*this.canvasMargin),o=Math.min(this.mousePosition.y,this.canvasHeight-2*this.canvasMargin);if(i=Math.max(0,i),o=Math.max(0,o),"moveTopLeft"==this.mouseAction){let t=Math.round(i-this.cropOptions.x),e=Math.round(o-this.cropOptions.y);this.cropOptions.x+=t,this.cropOptions.y+=e,this.cropOptions.width-=t,this.cropOptions.height-=e,this.updateResultCanvas()}else if("moveTopRight"==this.mouseAction){let t=Math.round(i-(this.cropOptions.x+this.cropOptions.width)),e=Math.round(o-this.cropOptions.y);this.cropOptions.y+=e,this.cropOptions.width+=t,this.cropOptions.height-=e,this.updateResultCanvas()}else if("moveBottomLeft"==this.mouseAction){let t=Math.round(i-this.cropOptions.x),e=Math.round(o-(this.cropOptions.y+this.cropOptions.height));this.cropOptions.x+=t,this.cropOptions.width-=t,this.cropOptions.height+=e,this.updateResultCanvas()}else if("moveBottomRight"==this.mouseAction){let t=Math.round(i-(this.cropOptions.x+this.cropOptions.width)),e=Math.round(o-(this.cropOptions.y+this.cropOptions.height));this.cropOptions.width+=t,this.cropOptions.height+=e,this.updateResultCanvas()}else if("dragRect"==this.mouseAction){let t=Math.round(this.mousePosition.x-this.previousMousePosition.x),i=Math.round(this.mousePosition.y-this.previousMousePosition.y);this.cropOptions.x+=t,this.cropOptions.y+=i,this.updateResultCanvas()}else"createRect"==this.mouseAction?(this.cropOptions.x=Math.round(i),this.cropOptions.y=Math.round(o),this.cropOptions.width=0,this.cropOptions.height=0,this.mouseAction="moveBottomRight",this.updateResultCanvas()):"none"==this.mouseAction&&(this.isMouseTopLeft()?document.body.style.cursor="nw-resize":this.isMouseTopRight()?document.body.style.cursor="ne-resize":this.isMouseBottomLeft()?document.body.style.cursor="sw-resize":this.isMouseBottomRight()?document.body.style.cursor="se-resize":this.isMouseInsideRect()?document.body.style.cursor="move":document.body.style.cursor="crosshair")},onCanvasMouseUp(){this.mouseAction="none"},onCanvasMouseDown(){this.isMouseTopLeft()?this.mouseAction="moveTopLeft":this.isMouseTopRight()?this.mouseAction="moveTopRight":this.isMouseBottomLeft()?this.mouseAction="moveBottomLeft":this.isMouseBottomRight()?this.mouseAction="moveBottomRight":this.isMouseInsideRect()?this.mouseAction="dragRect":this.mouseAction="createRect"},isMouseTopLeft(){let t=this.getRatio(),i=10*t;return this.distanceMouse(this.cropOptions.x,this.cropOptions.y)<i},isMouseTopRight(){let t=this.getRatio(),i=10*t;return this.distanceMouse(this.cropOptions.x+this.cropOptions.width,this.cropOptions.y)<i},isMouseBottomLeft(){let t=this.getRatio(),i=10*t;return this.distanceMouse(this.cropOptions.x,this.cropOptions.y+this.cropOptions.height)<i},isMouseBottomRight(){let t=this.getRatio(),i=10*t;return this.distanceMouse(this.cropOptions.x+this.cropOptions.width,this.cropOptions.y+this.cropOptions.height)<i},isMouseInsideRect(){return this.mousePosition.x>this.cropOptions.x&&this.mousePosition.y>this.cropOptions.y&&this.mousePosition.x<this.cropOptions.x+this.cropOptions.width&&this.mousePosition.y<this.cropOptions.y+this.cropOptions.height},updateMousePosition(t){let i=this.getRatio(),o=document.getElementById("resultCanvas");this.previousMousePosition.x=this.mousePosition.x,this.previousMousePosition.y=this.mousePosition.y,this.mousePosition.x=(t.clientX-o.offsetLeft+window.scrollX-this.canvasMargin)*i,this.mousePosition.y=(t.clientY-o.offsetTop+window.scrollY-this.canvasMargin)*i},distance(t,i,o,e){let s=o-t,n=e-i;return Math.sqrt(s*s+n*n)},distanceMouse(t,i){return this.distance(t,i,this.mousePosition.x,this.mousePosition.y)}}},p=h,c=o(1001),u=(0,c.Z)(p,e,s,!1,null,null,null),l=u.exports},3162:function(t,i,o){var e,s,n;(function(o,a){s=[],e=a,n="function"===typeof e?e.apply(i,s):e,void 0===n||(t.exports=n)})(0,(function(){"use strict";function i(t,i){return"undefined"==typeof i?i={autoBom:!1}:"object"!=typeof i&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function e(t,i,o){var e=new XMLHttpRequest;e.open("GET",t),e.responseType="blob",e.onload=function(){h(e.response,i,o)},e.onerror=function(){console.error("could not download file")},e.send()}function s(t){var i=new XMLHttpRequest;i.open("HEAD",t,!1);try{i.send()}catch(t){}return 200<=i.status&&299>=i.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(i)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,r=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,i,o){var r=a.URL||a.webkitURL,h=document.createElement("a");i=i||t.name||"download",h.download=i,h.rel="noopener","string"==typeof t?(h.href=t,h.origin===location.origin?n(h):s(h.href)?e(t,i,o):n(h,h.target="_blank")):(h.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(h.href)}),4e4),setTimeout((function(){n(h)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,a){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(i(t,a),o);else if(s(t))e(t,o,a);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){n(r)}))}}:function(t,i,o,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return e(t,i,o);var n="application/octet-stream"===t.type,h=/constructor/i.test(a.HTMLElement)||a.safari,p=/CriOS\/[\d]+/.test(navigator.userAgent);if((p||n&&h||r)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=p?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null},c.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,l=u.createObjectURL(t);s?s.location=l:location.href=l,s=null,setTimeout((function(){u.revokeObjectURL(l)}),4e4)}});a.saveAs=h.saveAs=h,t.exports=h}))},6286:function(t,i,o){"use strict";t.exports=o.p+"img/image-online-tools.988f9e93.png"}}]);