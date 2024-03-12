"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[988],{5772:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=function(){var e=this,t=e._self._c;return t("div",[t("HeaderOnlineTools"),t("Breadcrumb",{attrs:{pageId:"trim-transparent-pixels"}}),e._m(0),t("br"),e.uploadedImage.imageData?e._e():t("div",{staticClass:"home"},[t("h2",[e._v("Select image")]),t("input",{attrs:{type:"file",id:"inputImage"},on:{change:e.onImageUpload}})]),t("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{position:"absolute",visibility:"hidden"},attrs:{src:e.uploadedImage.imageData,id:"original_image"},on:{load:e.onImageLoad}}),e.uploadedImage.imageData?t("div",{staticClass:"imageGridLayout"},[t("div"),t("div",{staticClass:"div_image"},[t("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"resultCanvas",width:e.canvasWidth,height:e.canvasHeight}}),t("br"),t("br"),e._m(1),t("div",[e._v("width: "+e._s(e.uploadedImage.width))]),t("div",[e._v("height: "+e._s(e.uploadedImage.height))])]),t("div",{staticClass:"div_options"},[e.readyToDownload?e._e():t("div",[t("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(t){return e.trimImage()}}},[e._v("Trim image")])]),e.readyToDownload?t("div",[t("div",[e._v("Image successfully trimmed!")]),t("br"),t("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:function(t){return e.downloadResultImage()}}},[t("IconDownload",{attrs:{size:24}}),e._v(" Download trimmed image")],1)]):e._e()]),t("div")]):e._e(),t("br"),t("FooterComponent")],1)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"documentationContent"},[t("h1",[e._v("Trim transparent pixels")]),t("p",[e._v("This free online tool allows you to remove transparent space around images. Trim away transparent borders around an image.")]),t("h4",[e._v("How to trim transparent pixels of an image?")]),t("p",[e._v("You can easily cut pictures by following these steps:")]),t("ol",[t("li",[e._v("Upload the photo that you want to trim. The image will load in the canvas.")]),t("li",[e._v('Click button "Trim image". The trimmed image will be show in the canvas.')]),t("li",[e._v('Click button "Download cropped image".')])])])},function(){var e=this,t=e._self._c;return t("div",[t("b",[e._v("Original image details:")])])}],o=a(5665),l=a(8402),s=a(4138),d=a(7e3),r=a(3162),m=a(9314),g={name:"TrimTransparentPixels",components:{HeaderOnlineTools:o.Z,FooterComponent:l.Z,IconDownload:d.Z,Breadcrumb:s.Z},data(){return{canvasWidth:100,canvasHeight:100,uploadedImage:{imageData:null,width:null,height:null},readyToDownload:!1}},methods:{onImageUpload(e){const t=e.target.files[0];window.file=t;let a=this,i=new FileReader;i.readAsDataURL(t),i.onload=function(){a.uploadedImage.imageData=i.result,a.$forceUpdate()},i.onerror=function(e){console.log("Error: ",e)}},onImageLoad(){let e=document.getElementById("original_image");this.uploadedImage.width=e.naturalWidth,this.uploadedImage.height=e.naturalHeight,this.canvasWidth=e.naturalWidth,this.canvasHeight=e.naturalHeight,this.$nextTick((()=>{this.updateResultCanvas()}))},downloadResultImage(){let e=document.createElement("canvas");e.width=this.canvasWidth,e.height=this.canvasHeight;let t=e.getContext("2d");t.drawImage(document.getElementById("original_image"),0,0);let a=m.Z.crop(e);a.toBlob((function(e){(0,r.saveAs)(e,"Image.png")}))},updateResultCanvas(){let e=document.getElementById("original_image"),t=document.getElementById("resultCanvas"),a=t.getContext("2d");a.drawImage(e,0,0)},trimImage(){let e=document.getElementById("resultCanvas"),t=m.Z.crop(e);e.width=t.width,e.height=t.height;let a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),a.drawImage(t,0,0),this.readyToDownload=!0}}},u=g,c=a(1001),h=(0,c.Z)(u,i,n,!1,null,null,null),v=h.exports}}]);