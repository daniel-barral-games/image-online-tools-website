"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[600],{3329:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),t._m(0),t._m(1),e("br"),t.uploadedImage.imageData?t._e():e("div",{staticClass:"home"},[e("h2",[t._v("Select image")]),e("input",{attrs:{type:"file",id:"inputImage"},on:{change:t.onImageUpload}})]),e("img",{staticStyle:{position:"absolute",visibility:"hidden"},attrs:{src:t.uploadedImage.imageData,id:"original_image"},on:{load:t.onImageLoad}}),t.uploadedImage.imageData?e("div",{staticClass:"imageGridLayout"},[e("div"),e("div",{staticClass:"div_image"},[e("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"resultCanvas",width:t.canvasWidth,height:t.canvasHeight}}),e("br"),e("br"),t._m(2),e("div",[t._v("width: "+t._s(t.uploadedImage.width))]),e("div",[t._v("height: "+t._s(t.uploadedImage.height))])]),e("div",{staticClass:"div_options"},[t.readyToDownload?t._e():e("div",[e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(e){return t.trimImage()}}},[t._v("Trim image")])]),t.readyToDownload?e("div",[e("div",[t._v("Image successfully trimmed!")]),e("br"),e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(e){return t.downloadResultImage()}}},[t._v("Download trimmed image")])]):t._e()]),e("div")]):t._e()],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h1",[t._v("Trim transparent pixels")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",[t._v("This free online tool allows you to remove transparent space around images. Trim away transparent borders around an image.")])])},function(){var t=this,e=t._self._c;return e("div",[e("b",[t._v("Original image details:")])])}],o=a(9264),d=a(3162),l=a(9314),s={name:"TrimTransparentPixels",components:{HeaderOnlineTools:o.Z},data(){return{canvasWidth:100,canvasHeight:100,uploadedImage:{imageData:null,width:null,height:null},readyToDownload:!1}},methods:{onImageUpload(t){const e=t.target.files[0];window.file=e;let a=this,i=new FileReader;i.readAsDataURL(e),i.onload=function(){a.uploadedImage.imageData=i.result,a.$forceUpdate()},i.onerror=function(t){console.log("Error: ",t)}},onImageLoad(){let t=document.getElementById("original_image");this.uploadedImage.width=t.naturalWidth,this.uploadedImage.height=t.naturalHeight,this.canvasWidth=t.naturalWidth,this.canvasHeight=t.naturalHeight,this.$nextTick((()=>{this.updateResultCanvas()}))},downloadResultImage(){let t=document.createElement("canvas");t.width=this.canvasWidth,t.height=this.canvasHeight;let e=t.getContext("2d");e.drawImage(document.getElementById("original_image"),0,0);let a=l.Z.crop(t);a.toBlob((function(t){(0,d.saveAs)(t,"Image.png")}))},updateResultCanvas(){let t=document.getElementById("original_image"),e=document.getElementById("resultCanvas"),a=e.getContext("2d");a.drawImage(t,0,0)},trimImage(){let t=document.getElementById("resultCanvas"),e=l.Z.crop(t);t.width=e.width,t.height=e.height;let a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.drawImage(e,0,0),this.readyToDownload=!0}}},r=s,g=a(1001),m=(0,g.Z)(r,i,n,!1,null,null,null),u=m.exports}}]);