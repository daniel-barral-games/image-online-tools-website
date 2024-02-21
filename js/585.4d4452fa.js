"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[585],{4138:function(e,t,o){o.d(t,{Z:function(){return g}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"breadcrumb_div"},[t("div",{staticClass:"div_breadcrumb"},[t("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[t("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(o){return t("li",{key:o.id,class:o.active?"breadcrumb-item active":"breadcrumb-item"},[o.active?e._e():t("a",{attrs:{href:o.url}},[e._v(e._s(o.name))]),o.active?t("span",[e._v(e._s(o.name))]):e._e()])})),0)])])])},a=[],r=(o(7658),o(541),o(3026)),s=o(8273);function i(){let e=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],t=r.Z.listImageEditorTools();for(let a=0;a<t.length;a++){let o=t[a];e.push({id:o.slug,name:o.name,url:"/"+o.slug,parentId:"image-editor-tools"})}let o=r.Z.listImageGeneratorTools();for(let a=0;a<o.length;a++){let t=o[a];e.push({id:t.slug,name:t.name,url:"/"+t.slug,parentId:"image-generator-tools"})}let n=s.Z.listLearnPages();for(let a=0;a<n.length;a++){let t=n[a];e.push({id:t.slug,name:t.name,url:"/"+t.slug,parentId:"learn"})}return e}var l={listMenuItems:i},u={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=l.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(e){for(let t=0;t<this.pages.length;t++){let o=this.pages[t];if(o.id==e)return o}return null},buildItems(){let e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);let o=t.parentId,n=0;while(null!=o||n>=10){let t=this.getPageById(o);e.unshift(t),o=t.parentId,n++}return e}}},m=u,d=o(1001),c=(0,d.Z)(m,n,a,!1,null,"2d127206",null),g=c.exports},8402:function(e,t,o){o.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"footer_1"},[t("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[t("span",{staticClass:"menu-link"},[e._v("Privacy policy")])]),t("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[t("span",{staticClass:"menu-link"},[e._v("Terms of use")])]),t("router-link",{attrs:{tag:"a",to:"/contact-us"}},[t("span",{staticClass:"menu-link"},[e._v("Contact us")])])],1),t("div",{staticClass:"footer_2"},[e._v("Copyright © 2024 ImageOnlineTools")])])},a=[],r={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=r,i=o(1001),l=(0,i.Z)(s,n,a,!1,null,"18b937ff",null),u=l.exports},5665:function(e,t,o){o.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_online_tools"},[t("router-link",{attrs:{to:"/"}},[t("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:o(6286)}})]),t("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[e._v("Image editor tools")]),t("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[e._v("Image generator tools")]),t("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[e._v("Learn")])],1)},a=[],r={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=r,i=o(1001),l=(0,i.Z)(s,n,a,!1,null,"65b41b03",null),u=l.exports},8461:function(e,t,o){o.d(t,{Z:function(){return u}});var n=function(){var e=this;e._self._c;return e._m(0)},a=[function(){var e=this,t=e._self._c;return t("div",[t("h4",[e._v("Suggest a tool")]),t("p",[e._v("Didn't find the tool you were looking for? You can suggest a tool by filling "),t("a",{attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSexnMSE9MPBcF4KyCMf1G7dNMI7-zumK62KvpPTIaIclY2f2w/viewform?usp=sf_link"}},[e._v("this form")]),e._v(".")]),t("p",[e._v("We are frequently adding new tools to the website.")])])}],r={name:"SuggestNewOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=r,i=o(1001),l=(0,i.Z)(s,n,a,!1,null,"188c5b77",null),u=l.exports},7585:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var n=function(){var e=this,t=e._self._c;return t("div",[t("HeaderOnlineTools"),t("Breadcrumb",{attrs:{pageId:"image-editor-tools"}}),t("div",{staticClass:"documentationContent"},[t("h1",[e._v("Image editor tools")]),t("p",[e._v("Image editor tools are tools that you can use to edit photos.")]),t("p",[e._v("You start by uploading an image and then you make adjustments to it, apply filters, add effects, change colors and so on.")]),t("p",[e._v("In the past, you would need to download and install heavy and expensive software, and learn how to use them. But now, with Image Online Tools, you can access an increasing set of image manipulation tools online for free.")]),t("h4",[e._v("All image editor tools")]),t("p",[e._v("Below you can find all image editor tools.")]),e._m(0),t("div",{staticClass:"divOnlineTools"},e._l(e.imageEditorTools,(function(o){return t("a",{key:o.slug,staticClass:"divOnlineTool",attrs:{href:"/"+o.slug}},[t("b",[e._v(e._s(o.name))]),t("p",[e._v(e._s(o.shortDescription))]),null!=o.image?t("img",{staticStyle:{"max-width":"140px","max-height":"70px"},attrs:{alt:o.imageAltText,src:o.image}}):e._e()])})),0),t("br"),t("h4",[e._v("What are image filters?")]),t("p",[e._v("Image filters change the appearance of images by changing the colors of its pixels, following certain rules.")]),t("p",[e._v("The online tools allows you to apply commom filters to images (for example, sepia, blur or grayscale) or experiment with unusual filters and effects.")]),t("h4",[e._v("How image filters work?")]),t("p",[e._v("To understand how image filters works, first you need to understand how images are represented.")]),t("p",[e._v("Each image is composed of pixels and each pixel has a color.")]),t("p",[e._v("A color can be represented in different ways. One of the most common ways to represent a color in the web is the RGB model, in wich the color is represented by 3 components: red, green and blue. Each component (red, green or blue) is represented by a number between 0 and 255.")]),t("p",[e._v("So, basically, any image is represented by a set of numbers in the range between 0 and 255.")]),t("p",[e._v("Image filters works by making changes to these numbers, following some math functions or custom rules depending on the filter.")]),t("p",[e._v("In this website you will find a set of image filters, together with explanations of how they work and how to use the online tool.")]),t("h4",[e._v("Convolution matrix")]),t("p",[e._v("Image filters use different algorithms and math funcions. An important concept to understand is the convolution matrix.")]),e._m(1),t("p",[e._v("Each pixel in the output image is a function of the nearby pixels in the input image, including itself.")]),t("h4",[e._v("See also")]),e._m(2),t("SuggestNewOnlineTools")],1),t("FooterComponent")],1)},a=[function(){var e=this,t=e._self._c;return t("p",[e._v("Our objective is to create an increasing set of image editor tools. Not only the most common tools, but also unique image editor tools to create interesting effects. You can also "),t("a",{attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSexnMSE9MPBcF4KyCMf1G7dNMI7-zumK62KvpPTIaIclY2f2w/viewform?usp=sf_link"}},[e._v("suggest new online tools")]),e._v(" to be included.")])},function(){var e=this,t=e._self._c;return t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Kernel_(image_processing)",target:"_blank"}},[e._v("Convolution matrix")]),e._v(" are frequently used to apply filters to images.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("See also the "),t("a",{attrs:{href:"/image-generator-tools"}},[e._v("image generator tools")]),e._v(".")])}],r=o(5665),s=o(8402),i=o(4138),l=o(8461),u=o(3026),m={name:"ImageEditorTools",components:{HeaderOnlineTools:r.Z,FooterComponent:s.Z,SuggestNewOnlineTools:l.Z,Breadcrumb:i.Z},data(){return{imageEditorTools:[]}},mounted(){this.imageEditorTools=u.Z.listImageEditorTools()},methods:{}},d=m,c=o(1001),g=(0,c.Z)(d,n,a,!1,null,null,null),f=g.exports},5117:function(e,t,o){var n=o(6330),a=TypeError;e.exports=function(e,t){if(!delete e[t])throw a("Cannot delete property "+n(t)+" of "+n(e))}},541:function(e,t,o){var n=o(2109),a=o(7908),r=o(6244),s=o(3658),i=o(5117),l=o(7207),u=1!==[].unshift(0),m=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();n({target:"Array",proto:!0,arity:1,forced:u||m},{unshift:function(e){var t=a(this),o=r(t),n=arguments.length;if(n){l(o+n);var u=o;while(u--){var m=u+n;u in t?t[m]=t[u]:i(t,m)}for(var d=0;d<n;d++)t[d]=arguments[d]}return s(t,o+n)}})},6286:function(e,t,o){e.exports=o.p+"img/image-online-tools.988f9e93.png"}}]);