"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[158],{9283:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var n=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),t._m(0),t._m(1),e("br"),t.uploadedImage.imageData?t._e():e("div",{staticClass:"home"},[e("h2",[t._v("Select image")]),e("input",{attrs:{type:"file",id:"inputImage"},on:{change:t.onImageUpload}})]),e("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{position:"absolute",visibility:"hidden"},attrs:{src:t.uploadedImage.imageData,id:"original_image"},on:{load:t.onImageLoad}}),t.uploadedImage.imageData?e("div",{staticClass:"imageGridLayout"},[e("div"),e("div",{staticClass:"div_image"},[e("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"resultCanvas",width:t.canvasWidth,height:t.canvasHeight}}),e("br"),e("br"),t._m(2),e("div",[t._v("width: "+t._s(t.uploadedImage.width))]),e("div",[t._v("height: "+t._s(t.uploadedImage.height))])]),e("div",{staticClass:"div_options"},[t._m(3),e("br"),e("div",{staticClass:"optionsLayoutChangeImageColor"},[e("div",{staticClass:"div_option"},[t._v("Angle")]),e("div",{staticClass:"slidecontainer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.angle,expression:"options.angle"}],staticClass:"slider",attrs:{type:"range",min:"-180",max:"180",step:"1",id:"myRange"},domProps:{value:t.options.angle},on:{input:function(e){return t.triggerUpdateImage()},__r:function(e){return t.$set(t.options,"angle",e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.angle,expression:"options.angle"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.angle},on:{input:[function(e){e.target.composing||t.$set(t.options,"angle",e.target.value)},function(e){return t.triggerUpdateImage()}]}})])]),e("br"),e("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:function(e){return t.downloadResultImage()}}},[e("IconDownload",{attrs:{size:24}}),t._v(" Download image")],1)]),e("div")]):t._e(),e("br"),t._m(4),e("FooterComponent")],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h1",[t._v("Change image hue")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",[t._v("This free online tool allows you to adjust the hue of images. Hue rotate images by specifying an angle around the color circle.")])])},function(){var t=this,e=t._self._c;return e("div",[e("b",[t._v("Original image details:")])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Options:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"documentation_div"},[e("h2",[t._v("How to change the hue of an image?")]),e("p",[t._v("With this online tool you can easily adjust hue of images by following these steps:")]),e("ol",[e("li",[t._v("Upload the photo that you want the hue adjusted. The image will load in the canvas.")]),e("li",[t._v("Choose the angle in the options. The hue will be automatically changed in the canvas for you to preview.")]),e("li",[t._v('Once you are satisfied with the result, click button "Download image".')])])])}],o=a(2830),s=a(8402),l=a(7e3),r=a(3162);let d={changeHue(t,e){var a=g(t);return a.h+=e,a.h>360?a.h-=360:a.h<0&&(a.h+=360),h(a)}};var u=d;function g(t){t=t.replace(/^\s*#|\s*$/g,""),3==t.length&&(t=t.replace(/(.)/g,"$1$1"));var e=parseInt(t.substr(0,2),16)/255,a=parseInt(t.substr(2,2),16)/255,n=parseInt(t.substr(4,2),16)/255,i=Math.max(e,a,n),o=Math.min(e,a,n),s=i-o,l=(i+o)/2,r=0,d=0;return r=0==s?0:i==e?(a-n)/s%6*60:i==a?60*((n-e)/s+2):60*((e-a)/s+4),d=0==s?0:s/(1-Math.abs(2*l-1)),{h:r,s:d,l:l}}function h(t){var e,a,n,i=t.h,o=t.s,s=t.l,l=(1-Math.abs(2*s-1))*o,r=l*(1-Math.abs(i/60%2-1)),d=s-l/2;return i<60?(e=l,a=r,n=0):i<120?(e=r,a=l,n=0):i<180?(e=0,a=l,n=r):i<240?(e=0,a=r,n=l):i<300?(e=r,a=0,n=l):(e=l,a=0,n=r),e=c(e,d),a=c(a,d),n=c(n,d),m(e,a,n)}function c(t,e){return t=Math.floor(255*(t+e)),t<0&&(t=0),t}function m(t,e,a){return"#"+((1<<24)+(t<<16)+(e<<8)+a).toString(16).slice(1)}var v=a(9314),p={name:"ChangeImageHue",components:{HeaderOnlineTools:o.Z,FooterComponent:s.Z,IconDownload:l.Z},data(){return{canvasWidth:100,canvasHeight:100,uploadedImage:{imageData:null,width:null,height:null},options:{angle:0}}},methods:{onImageUpload(t){const e=t.target.files[0];window.file=e;let a=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){a.uploadedImage.imageData=n.result,a.$forceUpdate()},n.onerror=function(t){console.log("Error: ",t)}},onImageLoad(){let t=document.getElementById("original_image");this.uploadedImage.width=t.naturalWidth,this.uploadedImage.height=t.naturalHeight,this.canvasWidth=t.naturalWidth,this.canvasHeight=t.naturalHeight,this.$nextTick((()=>{this.updateResultCanvas()}))},downloadResultImage(){let t=document.getElementById("resultCanvas"),e=t.getContext("2d"),a=e.canvas.width,n=e.canvas.height,i=document.createElement("canvas");i.width=a,i.height=n,this.updateCanvas(i,!1),i.toBlob((function(t){(0,r.saveAs)(t,"Image.png")}))},triggerUpdateImage(){this.updateResultCanvas()},updateResultCanvas(){let t=document.getElementById("resultCanvas");this.updateCanvas(t)},updateCanvas(t){let e=t,a=e.getContext("2d"),n=a.canvas.width,i=a.canvas.height,o=document.getElementById("original_image"),s=document.createElement("canvas");s.width=n,s.height=i;let l=s.getContext("2d");l.drawImage(o,0,0);let r=Number(this.options.angle),d=l.getImageData(0,0,n,i),g=l.getImageData(0,0,n,i);for(let h=0;h<d.data.length;h+=4){let t=v.Z.rgbToHex({r:d.data[h],g:d.data[h+1],b:d.data[h+2]}),e=u.changeHue(t,r),a=v.Z.hexToRgb(e);g.data[h]=a.r,g.data[h+1]=a.g,g.data[h+2]=a.b}a.putImageData(g,0,0)}}},_=p,f=a(1001),I=(0,f.Z)(_,n,i,!1,null,null,null),w=I.exports}}]);