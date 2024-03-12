"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[241],{4138:function(t,e,o){o.d(e,{Z:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb_div"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(o){return e("li",{key:o.id,class:o.active?"breadcrumb-item active":"breadcrumb-item"},[o.active?t._e():e("a",{attrs:{href:o.url}},[t._v(t._s(o.name))]),o.active?e("span",[t._v(t._s(o.name))]):t._e()])})),0)])])])},n=[],a=(o(7658),o(541),o(3026)),s=o(8273);function l(){let t=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],e=a.Z.listImageEditorTools();for(let n=0;n<e.length;n++){let o=e[n];t.push({id:o.slug,name:o.name,url:"/"+o.slug,parentId:"image-editor-tools"})}let o=a.Z.listImageGeneratorTools();for(let n=0;n<o.length;n++){let e=o[n];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"image-generator-tools"})}let r=s.Z.listLearnPages();for(let n=0;n<r.length;n++){let e=r[n];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"learn"})}return t}var i={listMenuItems:l},u={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=i.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(t){for(let e=0;e<this.pages.length;e++){let o=this.pages[e];if(o.id==t)return o}return null},buildItems(){let t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);let o=e.parentId,r=0;while(null!=o||r>=10){let e=this.getPageById(o);t.unshift(e),o=e.parentId,r++}return t}}},m=u,g=o(1001),c=(0,g.Z)(m,r,n,!1,null,"2d127206",null),d=c.exports},8402:function(t,e,o){o.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2024 ImageOnlineTools")])])},n=[],a={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=a,l=o(1001),i=(0,l.Z)(s,r,n,!1,null,"18b937ff",null),u=i.exports},5665:function(t,e,o){o.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:o(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},n=[],a={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=a,l=o(1001),i=(0,l.Z)(s,r,n,!1,null,"65b41b03",null),u=i.exports},8461:function(t,e,o){o.d(e,{Z:function(){return u}});var r=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,e=t._self._c;return e("div",[e("h4",[t._v("Suggest a tool")]),e("p",[t._v("Didn't find the tool you were looking for? You can suggest a tool by filling "),e("a",{attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSexnMSE9MPBcF4KyCMf1G7dNMI7-zumK62KvpPTIaIclY2f2w/viewform?usp=sf_link"}},[t._v("this form")]),t._v(".")]),e("p",[t._v("We are frequently adding new tools to the website.")])])}],a={name:"SuggestNewOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=a,l=o(1001),i=(0,l.Z)(s,r,n,!1,null,"188c5b77",null),u=i.exports},9241:function(t,e,o){o.r(e),o.d(e,{default:function(){return f}});var r=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),e("Breadcrumb",{attrs:{pageId:"image-generator-tools"}}),e("div",{staticClass:"documentationContent"},[e("h1",[t._v("Image generator tools")]),e("p",[t._v("Image generator tools are tools used to create images.")]),t._m(0),e("h4",[t._v("All image generator tools")]),e("div",{staticClass:"divOnlineTools"},t._l(t.imageGeneratorTools,(function(o){return e("a",{key:o.slug,staticClass:"divOnlineTool",attrs:{href:"/"+o.slug}},[e("b",[t._v(t._s(o.name))]),e("p",[t._v(t._s(o.shortDescription))]),null!=o.image?e("img",{staticStyle:{"max-width":"140px","max-height":"70px"},attrs:{alt:o.imageAltText,src:o.image}}):t._e()])})),0),e("br"),e("h4",[t._v("See also")]),t._m(1),e("SuggestNewOnlineTools")],1),e("FooterComponent")],1)},n=[function(){var t=this,e=t._self._c;return e("p",[t._v("For example, the "),e("a",{attrs:{href:"/button-generator"}},[t._v("button generator")]),t._v(" is a tool to generate button images for websites, games, apps, advertisements and so on. And the "),e("a",{attrs:{href:"/3d-text-generator"}},[t._v("3D text generator")]),t._v(" is a powerful online tool that you can use to create 3D texts, without a 3D software.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("See also the "),e("a",{attrs:{href:"/image-editor-tools"}},[t._v("image editor tools")]),t._v(", which are tools that you can use to edit photos.")])}],a=o(5665),s=o(8402),l=o(4138),i=o(8461),u=o(3026),m={name:"ImageGeneratorTools",components:{HeaderOnlineTools:a.Z,FooterComponent:s.Z,SuggestNewOnlineTools:i.Z,Breadcrumb:l.Z},data(){return{imageGeneratorTools:[]}},mounted(){this.imageGeneratorTools=u.Z.listImageGeneratorTools()},methods:{}},g=m,c=o(1001),d=(0,c.Z)(g,r,n,!1,null,null,null),f=d.exports},5117:function(t,e,o){var r=o(6330),n=TypeError;t.exports=function(t,e){if(!delete t[e])throw n("Cannot delete property "+r(e)+" of "+r(t))}},541:function(t,e,o){var r=o(2109),n=o(7908),a=o(6244),s=o(3658),l=o(5117),i=o(7207),u=1!==[].unshift(0),m=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||m},{unshift:function(t){var e=n(this),o=a(e),r=arguments.length;if(r){i(o+r);var u=o;while(u--){var m=u+r;u in e?e[m]=e[u]:l(e,m)}for(var g=0;g<r;g++)e[g]=arguments[g]}return s(e,o+r)}})},6286:function(t,e,o){t.exports=o.p+"img/image-online-tools.988f9e93.png"}}]);