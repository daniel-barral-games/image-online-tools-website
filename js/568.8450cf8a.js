"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[568],{4138:function(t,e,a){a.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb_div"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(a){return e("li",{key:a.id,class:a.active?"breadcrumb-item active":"breadcrumb-item"},[a.active?t._e():e("a",{attrs:{href:a.url}},[t._v(t._s(a.name))]),a.active?e("span",[t._v(t._s(a.name))]):t._e()])})),0)])])])},o=[],r=(a(7658),a(541),a(3026)),s=a(8273);function l(){let t=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"animation-generator-tools",name:"Animation generator tools",url:"/animation-generator-tools",parentId:"home"},{id:"tags",name:"Tags",url:"/tags",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],e=r.Z.listImageEditorTools();for(let r=0;r<e.length;r++){let a=e[r];t.push({id:a.slug,name:a.name,url:"/"+a.slug,parentId:"image-editor-tools"})}let a=r.Z.listImageGeneratorTools();for(let r=0;r<a.length;r++){let e=a[r];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"image-generator-tools"})}let n=r.Z.listAnimationGeneratorTools();for(let r=0;r<n.length;r++){let e=n[r];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"animation-generator-tools"})}let o=r.Z.listAllTags();for(let r=0;r<o.length;r++){let e=o[r];t.push({id:"tag_"+e.slug,name:e.name,url:"/tags/"+e.slug,parentId:"tags"})}let l=s.Z.listLearnPages();for(let r=0;r<l.length;r++){let e=l[r];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"learn"})}return t}var i={listMenuItems:l},u={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=i.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(t){for(let e=0;e<this.pages.length;e++){let a=this.pages[e];if(a.id==t)return a}return null},buildItems(){let t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);let a=e.parentId,n=0;while(null!=a||n>=10){let e=this.getPageById(a);t.unshift(e),a=e.parentId,n++}return t}}},g=u,m=a(1001),d=(0,m.Z)(g,n,o,!1,null,"2d127206",null),c=d.exports},7630:function(t,e,a){a.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2025 ImageOnlineTools")])])},o=[],r={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,"045f78c4",null),u=i.exports},8528:function(t,e,a){a.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:a(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/animation-generator-tools"}},[t._v("Animation generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},o=[],r={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,"21533314",null),u=i.exports},1568:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",[e("HeaderOnlineTools"),e("Breadcrumb",{attrs:{pageId:"tag_"+t.tagSlug}}),e("div",{staticClass:"documentationContent"},[e("h1",[t._v(t._s(t.tagInfo.name))]),e("p",[t._v("Below you can find all "),e("b",[t._v("online tools")]),t._v(" with the tag: "),e("b",[t._v(t._s(t.tagInfo.name))])]),e("div",{staticClass:"divOnlineTools"},t._l(t.toolsByTag,(function(a){return e("a",{key:a.slug,staticClass:"divOnlineTool",attrs:{href:"/"+a.slug}},[e("b",[t._v(t._s(a.name))]),e("p",[t._v(t._s(a.shortDescription))]),null!=a.image?e("img",{staticStyle:{"max-width":"140px","max-height":"70px"},attrs:{alt:a.imageAltText,src:a.image}}):t._e()])})),0)]),e("FooterComponent")],1)},o=[],r=a(8528),s=a(7630),l=a(4138),i=a(3026),u={name:"ToolsByTag",components:{HeaderOnlineTools:r.Z,FooterComponent:s.Z,Breadcrumb:l.Z},data(){return{tagSlug:"",tagInfo:"",toolsByTag:[]}},mounted(){this.tagSlug=this.getTagSlug(),this.tagInfo=i.Z.getTagByTagSlug(this.tagSlug),this.toolsByTag=i.Z.listToolsByTag(this.tagSlug)},computed:{},methods:{getTagSlug(){let t=this.$route.path,e=t.split("/");return""!=e[0]||"tags"!=e[1]?null:e[2]}}},g=u,m=a(1001),d=(0,m.Z)(g,n,o,!1,null,null,null),c=d.exports},5117:function(t,e,a){var n=a(6330),o=TypeError;t.exports=function(t,e){if(!delete t[e])throw o("Cannot delete property "+n(e)+" of "+n(t))}},541:function(t,e,a){var n=a(2109),o=a(7908),r=a(6244),s=a(3658),l=a(5117),i=a(7207),u=1!==[].unshift(0),g=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();n({target:"Array",proto:!0,arity:1,forced:u||g},{unshift:function(t){var e=o(this),a=r(e),n=arguments.length;if(n){i(a+n);var u=a;while(u--){var g=u+n;u in e?e[g]=e[u]:l(e,g)}for(var m=0;m<n;m++)e[m]=arguments[m]}return s(e,a+n)}})},6286:function(t,e,a){t.exports=a.p+"img/image-online-tools.988f9e93.png"}}]);