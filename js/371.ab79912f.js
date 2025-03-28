"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[371],{7630:function(t,e,o){o.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2025 ImageOnlineTools")])])},n=[],s={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},i=s,l=o(1001),r=(0,l.Z)(i,a,n,!1,null,"045f78c4",null),u=r.exports},8528:function(t,e,o){o.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:o(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/animation-generator-tools"}},[t._v("Animation generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},n=[],s={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},i=s,l=o(1001),r=(0,l.Z)(i,a,n,!1,null,"21533314",null),u=r.exports},8461:function(t,e,o){o.d(e,{Z:function(){return u}});var a=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,e=t._self._c;return e("div",[e("h4",[t._v("Suggest a tool")]),e("p",[t._v("Didn't find the tool you were looking for? You can suggest a tool by filling "),e("a",{attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSexnMSE9MPBcF4KyCMf1G7dNMI7-zumK62KvpPTIaIclY2f2w/viewform?usp=sf_link"}},[t._v("this form")]),t._v(".")]),e("p",[t._v("We are frequently adding new tools to the website.")])])}],s={name:"SuggestNewOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},i=s,l=o(1001),r=(0,l.Z)(i,a,n,!1,null,"188c5b77",null),u=r.exports},1371:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),e("div",{staticClass:"documentationContent"},[e("h1",[t._v("Image Online Tools")]),e("p",[t._v("Image Online Tools is a collection of easy to use online tools to create and edit images.")]),e("p",[t._v("To use the online tools you don't need to download any software. You also don't need to create an account.")]),e("h4",[t._v("Why use image online tools?")]),t._m(0),e("h4",[t._v("Featured tools")]),e("div",{staticClass:"divOnlineTools"},t._l(t.featuredTools,(function(o){return e("a",{key:o.slug,staticClass:"featuredOnlineTool",attrs:{href:"/"+o.slug}},[e("b",{staticStyle:{"font-size":"larger"}},[t._v(t._s(o.name))]),e("p",[t._v(t._s(o.longDescription))]),null!=o.image?e("img",{staticStyle:{"max-width":"280px","max-height":"140px"},attrs:{alt:o.imageAltText,src:o.image}}):t._e()])})),0),e("h4",[t._v("Categories")]),e("p",[t._v("At the moment we have "+t._s(t.imageEditorTools.length+t.imageGeneratorTools.length+t.animationGeneratorTools.length)+" tools, organized in three categories:")]),e("p",[t._m(1),e("br"),t._v("If you have an image you want to edit ("+t._s(t.imageEditorTools.length)+" tools). ")]),e("p",[t._m(2),e("br"),t._v("If you want to create new images ("+t._s(t.imageGeneratorTools.length)+" tools). ")]),e("p",[t._m(3),e("br"),t._v("If you want to create new animations ("+t._s(t.animationGeneratorTools.length)+" tools). ")]),e("h4",[t._v("Image generator tools")]),e("div",{staticClass:"divOnlineTools"},t._l(t.imageGeneratorTools,(function(o){return e("a",{key:o.slug,staticClass:"divOnlineTool",attrs:{href:"/"+o.slug}},[e("b",[t._v(t._s(o.name))]),e("p",[t._v(t._s(o.shortDescription))]),null!=o.image?e("img",{staticStyle:{"max-width":"140px","max-height":"70px"},attrs:{alt:o.imageAltText,src:o.image}}):t._e()])})),0),e("h4",[t._v("Animation generator tools")]),e("div",{staticClass:"divOnlineTools"},t._l(t.animationGeneratorTools,(function(o){return e("a",{key:o.slug,staticClass:"divOnlineTool",attrs:{href:"/"+o.slug}},[e("b",[t._v(t._s(o.name))]),e("p",[t._v(t._s(o.shortDescription))]),null!=o.image?e("img",{staticStyle:{"max-width":"140px","max-height":"70px"},attrs:{alt:o.imageAltText,src:o.image}}):t._e()])})),0),e("h4",[t._v("Image editor tools")]),e("div",{staticClass:"divOnlineTools"},t._l(t.imageEditorTools,(function(o){return e("a",{key:o.slug,staticClass:"divOnlineTool",attrs:{href:"/"+o.slug}},[e("b",[t._v(t._s(o.name))]),e("p",[t._v(t._s(o.shortDescription))]),null!=o.image?e("img",{staticStyle:{"max-width":"140px","max-height":"70px"},attrs:{alt:o.imageAltText,src:o.image}}):t._e()])})),0),e("h4",[t._v("Learn")]),e("p",[t._v("Most tools are intuitive and easy to use, so that you will probably learn by yourself.")]),e("p",[t._v("For some advanced tools, like the 3D text generator, you may want to read some tutorials and see examples of use.")]),e("div",t._l(t.learnPages,(function(o){return e("a",{key:o.slug,attrs:{href:"/learn/"+o.slug}},[e("b",[t._v(t._s(o.name))]),e("p",[t._v(t._s(o.shortDescription))]),null!=o.image?e("img",{staticStyle:{"max-width":"140px","max-height":"70px"},attrs:{alt:o.imageAltText,src:o.image}}):t._e()])})),0),e("h4",[t._v("License")]),e("p",[t._v("All tools are free of charge and you can use them as much as you want. You can publish the images generated with our tools, even for commercial purposes, all without asking permission. Attribution is not required.")]),e("SuggestNewOnlineTools")],1),e("br"),e("FooterComponent")],1)},n=[function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("It's free")]),e("li",[t._v("It's easy to use")]),e("li",[t._v("You don't need to download any software")]),e("li",[t._v("You don't need to create an account")])])},function(){var t=this,e=t._self._c;return e("b",[e("a",{attrs:{href:"/image-editor-tools"}},[t._v("Image editor tools")])])},function(){var t=this,e=t._self._c;return e("b",[e("a",{attrs:{href:"/image-generator-tools"}},[t._v("Image generator tools")])])},function(){var t=this,e=t._self._c;return e("b",[e("a",{attrs:{href:"/animation-generator-tools"}},[t._v("Animation generator tools")])])}],s=o(8528),i=o(7630),l=o(8461),r=o(3026),u=o(8273),m={name:"OnlineTools",components:{HeaderOnlineTools:s.Z,FooterComponent:i.Z,SuggestNewOnlineTools:l.Z},data(){return{imageEditorTools:[],imageGeneratorTools:[],animationGeneratorTools:[],featuredTools:[],learnPages:[]}},mounted(){this.imageEditorTools=r.Z.listImageEditorTools(),this.imageGeneratorTools=r.Z.listImageGeneratorTools(),this.animationGeneratorTools=r.Z.listAnimationGeneratorTools(),this.featuredTools=r.Z.listFeaturedTools(),this.learnPages=u.Z.listLearnPages()},methods:{}},g=m,c=o(1001),_=(0,c.Z)(g,a,n,!1,null,null,null),d=_.exports},6286:function(t,e,o){t.exports=o.p+"img/image-online-tools.988f9e93.png"}}]);