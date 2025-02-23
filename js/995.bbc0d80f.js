(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[995],{4138:function(t,e,i){"use strict";i.d(e,{Z:function(){return m}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb_div"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"breadcrumb_nav",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(i){return e("li",{key:i.id,class:i.active?"breadcrumb-item active":"breadcrumb-item"},[i.active?t._e():e("a",{attrs:{href:i.url}},[t._v(t._s(i.name))]),i.active?e("span",[t._v(t._s(i.name))]):t._e()])})),0)])])])},o=[],s=(i(7658),i(541),i(3026)),n=i(8273);function r(){let t=[{id:"home",name:"Home",url:"/",parentId:null},{id:"image-editor-tools",name:"Image editor tools",url:"/image-editor-tools",parentId:"home"},{id:"image-generator-tools",name:"Image generator tools",url:"/image-generator-tools",parentId:"home"},{id:"learn",name:"Learn",url:"/learn",parentId:"home"}],e=s.Z.listImageEditorTools();for(let o=0;o<e.length;o++){let i=e[o];t.push({id:i.slug,name:i.name,url:"/"+i.slug,parentId:"image-editor-tools"})}let i=s.Z.listImageGeneratorTools();for(let o=0;o<i.length;o++){let e=i[o];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"image-generator-tools"})}let a=n.Z.listLearnPages();for(let o=0;o<a.length;o++){let e=a[o];t.push({id:e.slug,name:e.name,url:"/"+e.slug,parentId:"learn"})}return t}var u={listMenuItems:r},l={name:"BreadcrumbView",components:{},props:{pageId:String},data(){return{pages:[]}},mounted(){this.pages=u.listMenuItems()},computed:{items:function(){return this.buildItems()}},methods:{getPageById(t){for(let e=0;e<this.pages.length;e++){let i=this.pages[e];if(i.id==t)return i}return null},buildItems(){let t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);let i=e.parentId,a=0;while(null!=i||a>=10){let e=this.getPageById(i);t.unshift(e),i=e.parentId,a++}return t}}},c=l,h=i(1001),d=(0,h.Z)(c,a,o,!1,null,"2d127206",null),m=d.exports},7630:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer_1"},[e("router-link",{attrs:{tag:"a",to:"/privacy-policy"}},[e("span",{staticClass:"menu-link"},[t._v("Privacy policy")])]),e("router-link",{attrs:{tag:"a",to:"/terms-of-use"}},[e("span",{staticClass:"menu-link"},[t._v("Terms of use")])]),e("router-link",{attrs:{tag:"a",to:"/contact-us"}},[e("span",{staticClass:"menu-link"},[t._v("Contact us")])])],1),e("div",{staticClass:"footer_2"},[t._v("Copyright © 2025 ImageOnlineTools")])])},o=[],s={name:"FooterComponent",components:{},props:{},data(){return{}},mounted(){},methods:{}},n=s,r=i(1001),u=(0,r.Z)(n,a,o,!1,null,"045f78c4",null),l=u.exports},5665:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_online_tools"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"small_logo",attrs:{alt:"Image Online Tools logo",src:i(6286)}})]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-editor-tools"}},[t._v("Image editor tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/image-generator-tools"}},[t._v("Image generator tools")]),e("router-link",{staticClass:"menu_link",attrs:{to:"/learn"}},[t._v("Learn")])],1)},o=[],s={name:"HeaderOnlineTools",components:{},props:{},data(){return{}},mounted(){},methods:{}},n=s,r=i(1001),u=(0,r.Z)(n,a,o,!1,null,"65b41b03",null),l=u.exports},9448:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("svg",{staticStyle:{"margin-top":"-2px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"20px",height:"20px"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{fill:t.color,d:"M3 10h18v4h-18Z"}}),e("path",{attrs:{fill:t.color,d:"M10 3v18h4v-18Z"}})])},o=[],s={name:"IconAdd",props:{color:{type:String,default:"#ffffff"}}},n=s,r=i(1001),u=(0,r.Z)(n,a,o,!1,null,"432b4300",null),l=u.exports},7e3:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFFFFF",height:t.size,width:t.size}},[e("path",{attrs:{fill:t.color,d:"M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"}})])},o=[],s={name:"IconDownload",props:{color:{type:String,default:"#ffffff"},size:{type:Number,default:20}}},n=s,r=i(1001),u=(0,r.Z)(n,a,o,!1,null,"d83b91be",null),l=u.exports},817:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("svg",{staticStyle:{"margin-top":"-2px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"20px",height:"20px"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}})])},o=[],s={name:"IconEdit",props:{color:{type:String,default:"#ffffff"}}},n=s,r=i(1001),u=(0,r.Z)(n,a,o,!1,null,"24e0e6ae",null),l=u.exports},4995:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return x}});var a=function(){var t=this,e=t._self._c;return e("div",[0==t.share?e("HeaderOnlineTools"):t._e(),0==t.share?e("Breadcrumb",{attrs:{pageId:"create-images-using-math-equations"}}):t._e(),0==t.share?e("div",{staticClass:"documentationContent"},[e("h1",[t._v("Create images using math equations")]),e("p",[t._v("This is a free online tool to generate images from mathematical formulas.")]),e("p",[t._v('Each RGB color channel (red, green and blue) have a math equation, to determine the value of the color channel for each pixel in the image, based on "x" and "y" position of the pixel in the image.')]),t._m(0),e("h4",[t._v("How to use this online tool")]),t._m(1)]):t._e(),0==t.share?e("br"):t._e(),e("div",{staticClass:"imageGridLayout"},[e("div"),0==t.share?e("div",{staticClass:"div_options"},[t._m(2),e("div",{staticClass:"optionsLayout"},[e("div",{staticClass:"div_option"},[t._v("Image width")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.imageWidth,expression:"options.imageWidth"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.imageWidth},on:{input:[function(e){e.target.composing||t.$set(t.options,"imageWidth",e.target.value)},function(e){return t.triggerDrawImage()}]}})]),e("div",{staticClass:"div_option"},[t._v("Image height")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.imageHeight,expression:"options.imageHeight"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.imageHeight},on:{input:[function(e){e.target.composing||t.$set(t.options,"imageHeight",e.target.value)},function(e){return t.triggerDrawImage()}]}})])]),t._m(3),e("div",{staticClass:"optionsLayout"},[e("div",{class:t.equations.r.isValid?"div_option":"errorMessage"},[t._v("R = ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.r,expression:"options.r"}],staticClass:"input_option_equation",attrs:{type:"text"},domProps:{value:t.options.r},on:{input:[function(e){e.target.composing||t.$set(t.options,"r",e.target.value)},function(e){return t.triggerUpdateFunctions()}]}})]),0==t.equations.r.isValid?e("div"):t._e(),0==t.equations.r.isValid?e("div",{staticClass:"errorMessage"},[t._v(t._s(t.equations.r.errorMessage))]):t._e(),e("div",{class:t.equations.g.isValid?"div_option":"errorMessage"},[t._v("G = ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.g,expression:"options.g"}],staticClass:"input_option_equation",attrs:{type:"text"},domProps:{value:t.options.g},on:{input:[function(e){e.target.composing||t.$set(t.options,"g",e.target.value)},function(e){return t.triggerUpdateFunctions()}]}})]),0==t.equations.g.isValid?e("div"):t._e(),0==t.equations.g.isValid?e("div",{staticClass:"errorMessage"},[t._v(t._s(t.equations.g.errorMessage))]):t._e(),e("div",{class:t.equations.b.isValid?"div_option":"errorMessage"},[t._v("B = ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.b,expression:"options.b"}],staticClass:"input_option_equation",attrs:{type:"text"},domProps:{value:t.options.b},on:{input:[function(e){e.target.composing||t.$set(t.options,"b",e.target.value)},function(e){return t.triggerUpdateFunctions()}]}})]),0==t.equations.b.isValid?e("div"):t._e(),0==t.equations.b.isValid?e("div",{staticClass:"errorMessage"},[t._v(t._s(t.equations.b.errorMessage))]):t._e()]),t._m(4),e("div",[e("div",{staticClass:"div_option"},[t._v("Behaviour when value is outside range [0-255]")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.behaviourOutsideRange,expression:"options.behaviourOutsideRange"}],attrs:{type:"radio",id:"type_bounce",value:"bounce"},domProps:{checked:t._q(t.options.behaviourOutsideRange,"bounce")},on:{change:[function(e){return t.$set(t.options,"behaviourOutsideRange","bounce")},function(e){return t.triggerDrawImage()}]}}),e("label",{attrs:{for:"type_bounce"}},[t._v("Bounce ")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.behaviourOutsideRange,expression:"options.behaviourOutsideRange"}],attrs:{type:"radio",id:"type_clamp",value:"clamp"},domProps:{checked:t._q(t.options.behaviourOutsideRange,"clamp")},on:{change:[function(e){return t.$set(t.options,"behaviourOutsideRange","clamp")},function(e){return t.triggerDrawImage()}]}}),e("label",{attrs:{for:"type_clamp"}},[t._v("Clamp ")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.behaviourOutsideRange,expression:"options.behaviourOutsideRange"}],attrs:{type:"radio",id:"type_remainder",value:"remainder"},domProps:{checked:t._q(t.options.behaviourOutsideRange,"remainder")},on:{change:[function(e){return t.$set(t.options,"behaviourOutsideRange","remainder")},function(e){return t.triggerDrawImage()}]}}),e("label",{attrs:{for:"type_remainder"}},[t._v("Remainder ")])])]),t._m(5),e("div",{staticClass:"optionsLayout"},[e("div",{staticClass:"div_option"},[t._v("Offset x")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.offsetX,expression:"options.offsetX"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.offsetX},on:{input:[function(e){e.target.composing||t.$set(t.options,"offsetX",e.target.value)},function(e){return t.triggerDrawImage()}]}})]),e("div",{staticClass:"div_option"},[t._v("Offset y")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.offsetY,expression:"options.offsetY"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.offsetY},on:{input:[function(e){e.target.composing||t.$set(t.options,"offsetY",e.target.value)},function(e){return t.triggerDrawImage()}]}})])]),e("div",{staticStyle:{"font-size":"small","max-width":"300px"}},[t._v("Tip: you can also change the offset by clicking and dragging your mouse on the canvas.")]),t._m(6),e("div",{staticClass:"optionsLayout"},[e("div",{staticClass:"div_option"},[t._v("Zoom")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options.zoom,expression:"options.zoom"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.options.zoom},on:{input:[function(e){e.target.composing||t.$set(t.options,"zoom",e.target.value)},function(e){return t.triggerDrawImage()}]}})])]),e("div",{staticStyle:{"font-size":"small","max-width":"300px"}},[t._v("Tip: you can also change zoom by scrolling the mouse wheel on the canvas.")]),e("br"),e("div",[e("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:function(e){return t.downloadImage()}}},[e("IconDownload",{attrs:{size:24}}),t._v(" Download image")],1)])]):t._e(),e("div",{ref:"divImage",staticClass:"div_image"},[e("div",{staticStyle:{position:"sticky",top:"0"}},[e("div",[0==t.share?e("h3",[t._v("Generated image:")]):t._e(),e("canvas",{staticStyle:{border:"1px solid black",cursor:"grab"},attrs:{id:"resultCanvas",width:t.commitedOptions.imageWidth,height:t.commitedOptions.imageHeight},on:{wheel:function(e){return t.canvasMouseWheel(e)},mousemove:function(e){return e.preventDefault(),t.canvasMouseMove(e)},mouseup:function(e){return e.preventDefault(),t.canvasMouseUp(e)},mousedown:function(e){return e.preventDefault(),t.canvasMouseDown(e)}}})]),0==t.share?e("div",[t._v(" Share this image with this link: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.shareURL,expression:"shareURL"}],ref:"inputShareURL",staticStyle:{width:"400px","font-size":"smaller"},attrs:{type:"text"},domProps:{value:t.shareURL},on:{input:function(e){e.target.composing||(t.shareURL=e.target.value)}}}),e("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{"margin-left":"2px","margin-top":"-5px"},attrs:{type:"button"},on:{click:function(e){return t.copyShareURL()}}},[e("IconCopy",{attrs:{size:14}}),t._v(" Copy ")],1)]):t._e(),0==t.share?e("br"):t._e(),0==t.share?e("div",[e("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:function(e){return t.downloadImage()}}},[e("IconDownload",{attrs:{size:24}}),t._v(" Download image")],1)]):t._e()])]),e("div")]),1==t.share?e("div",{staticClass:"shareFooter"},[t._m(7),e("button",{staticClass:"btn btn-sm btn-success",staticStyle:{margin:"2px"},attrs:{type:"button"},on:{click:function(e){return t.downloadImage()}}},[e("IconDownload",{attrs:{size:20}}),t._v(" Download image")],1),e("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{margin:"2px"},attrs:{type:"button"},on:{click:function(e){return t.editSharedImage()}}},[e("IconEdit",{attrs:{size:20}}),t._v(" Edit this image")],1),e("button",{staticClass:"btn btn-sm btn-danger",staticStyle:{margin:"2px"},attrs:{type:"button"},on:{click:function(e){return t.createNewImage()}}},[e("IconAdd",{attrs:{size:20}}),t._v(" Create new image")],1)]):t._e(),e("br"),e("br"),0==t.share?e("div",{staticClass:"documentationContent"},[e("h4",[t._v("Configuration parameters")]),t._m(8),e("br"),e("br"),e("h4",[t._v("Examples")]),e("p",[t._v("Below are some examples of images generated with this online tool, together with the equations used and other parameters.")]),t._m(9),e("br"),e("br"),e("h4",{attrs:{id:"javascript_math_functions"}},[t._v("Useful math functions")]),e("p",[t._v("Below are some examples of useful Javascript mathematical functions that you can use in the equations, for the red (R), green (G) and blue (B) color channels.")]),t._m(10),t._m(11)]):t._e(),0==t.share?e("FooterComponent"):t._e()],1)},o=[function(){var t=this,e=t._self._c;return e("p",[t._v('The math equations can use the variables "x" and "y". The equations can also contain '),e("a",{attrs:{href:"#javascript_math_functions"}},[t._v("Javascript math functions")]),t._v(', like "Math.sin()", "Math.cos()", "Math.sqrt() and "Math.random()".')])},function(){var t=this,e=t._self._c;return e("ol",[e("li",[t._v("Choose the image width and height.")]),e("li",[t._v('In the section "Math equations", type the math equations for the "red", "green" and "blue" color channels. The equations can contain variables "x" and "y" (position of the pixel) and any '),e("a",{attrs:{href:"#javascript_math_functions"}},[t._v("Javascript math function")]),t._v(".")]),e("li",[t._v('Choose the desired behaviour when values are outside the range [0-255]. You can choose "bounce" (recommended), "clamp" or "remainder".')]),e("li",[t._v("Optionally choose the coordinates offset (x and y) and zoom.")]),e("li",[t._v('Click the button "download image" to download the image in PNG format.')])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("Image size:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("Math equations:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("Additional configuration:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("Coordinates offset:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"optionsGroupTitle"},[e("b",[t._v("Zoom:")])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("This image was created using math equations, with "),e("a",{attrs:{href:"https://www.imageonlinetools.com/create-images-using-math-equations"}},[t._v("this online tool")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"documentation_table"},[e("tr",[e("th",[t._v("Field")]),e("th",[t._v("Description")])]),e("tr",[e("td",[t._v("Image width")]),e("td",[t._v("The width of the image, in pixels.")])]),e("tr",[e("td",[t._v("Image height")]),e("td",[t._v("The height of the image, in pixels.")])]),e("tr",[e("td",[t._v("R")]),e("td",[t._v("The equation for the "),e("b",{staticStyle:{color:"red"}},[t._v("red")]),t._v(' color channel. In the equation, you can use variables "x" and "y", for the coordinates. You can also use Javascript math functions, like "Math.sin()", "Math.cos()", "Math.sqrt() and "Math.random()".')])]),e("tr",[e("td",[t._v("G")]),e("td",[t._v("The equation for the "),e("b",{staticStyle:{color:"green"}},[t._v("green")]),t._v(' color channel.In the equation, you can use variables "x" and "y", for the coordinates. You can also use Javascript math functions, like "Math.sin()", "Math.cos()", "Math.sqrt() and "Math.random()".')])]),e("tr",[e("td",[t._v("B")]),e("td",[t._v("The equation for the "),e("b",{staticStyle:{color:"blue"}},[t._v("blue")]),t._v(' color channel.In the equation, you can use variables "x" and "y", for the coordinates. You can also use Javascript math functions, like "Math.sin()", "Math.cos()", "Math.sqrt() and "Math.random()".')])]),e("tr",[e("td",{staticStyle:{"max-width":"200px"}},[t._v("Behaviour when value is outside range [0-255]")]),e("td",[e("p",[t._v("The equations for R (red), G (green) and B (blue) must evaluate to numbers in the range between 0 and 255, for any pixel in the image.")]),e("p",[t._v("For any pixel in the image, if an equation evaluates to a value outside this range, the value will be automatically adjusted to be in that range, based on the selected configuration ("),e("b",[t._v("bounce")]),t._v(", "),e("b",[t._v("clamp")]),t._v(" or "),e("b",[t._v("remainder")]),t._v(").")]),e("p",[t._v("This parameter determines how the values will be adjusted to belong to the range, when needed.")]),e("table",{staticClass:"documentation_table"},[e("tr",[e("th",[t._v("Option")]),e("th",[t._v("Description.")])]),e("tr",[e("td",[e("b",[t._v("Bounce")])]),e("td",[t._v('The value will keep "bouncing" between the min and max values (between 0 and 255).')])]),e("tr",[e("td",[e("b",[t._v("Clamp")])]),e("td",[t._v("If the value is lower than 0, it will be changed to 0 and if the value is greater than 255 it will be changed to 255.")])]),e("tr",[e("td",[e("b",[t._v("Remainder")])]),e("td",[t._v("It will be applied the modulo (division remainder).")])])])])]),e("tr",[e("td",[t._v("Offset x")]),e("td",[t._v('The "x" coordinate offset, in pixels. It determines the horizontal position of the "camera". Adjusting this offset lets you easily shift the view or "move" the camera without changing the math equations (R, G, B).')])]),e("tr",[e("td",[t._v("Offset y")]),e("td",[t._v('The "y" coordinate offset, in pixels. It determines the vertical position of the "camera". Adjusting this offset lets you easily shift the view or "move" the camera without changing the math equations (R, G, B).')])]),e("tr",[e("td",[t._v("Zoom")]),e("td",[t._v('The zoom. Changing this parameter allows you to easily "zoom in" or "zoom out" without changing the math equations (R, G, B).')])])])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"documentation_table"},[e("tr",[e("th",[t._v("Image")]),e("th",[t._v("Parameters")])]),e("tr",[e("td",[e("img",{staticStyle:{margin:"2px"},attrs:{src:i(5245)}})]),e("td",[e("p",[t._v("Image width: 400")]),e("p",[t._v("Image height: 400")]),e("p",[t._v("R = 2*x + 2*y")]),e("p",[t._v("G = 2*x - 2*y")]),e("p",[t._v("B = x*x + y*y")]),e("p",[t._v("Behaviour when value is outside range [0-255]: Bounce")]),e("p",[t._v("Offset x: 0")]),e("p",[t._v("Offset y: 0")]),e("p",[t._v("Zoom: 0.5")])])]),e("tr",[e("td",[e("img",{staticStyle:{margin:"2px"},attrs:{src:i(9405)}})]),e("td",[e("p",[t._v("Image width: 400")]),e("p",[t._v("Image height: 400")]),e("p",[t._v("R = Math.atan2(y, x) * 255")]),e("p",[t._v("G = Math.atan2(x, y) * 255")]),e("p",[t._v("B = Math.atan(x/200) * 255")]),e("p",[t._v("Behaviour when value is outside range [0-255]: Bounce")]),e("p",[t._v("Offset x: -200")]),e("p",[t._v("Offset y: -200")]),e("p",[t._v("Zoom: 1")])])]),e("tr",[e("td",[e("img",{staticStyle:{margin:"2px"},attrs:{src:i(906)}})]),e("td",[e("p",[t._v("Image width: 400")]),e("p",[t._v("Image height: 400")]),e("p",[t._v("R = x + y*y*0.001")]),e("p",[t._v("G = x*y*0.005 - y")]),e("p",[t._v("B = x*x*0.1 - 20*x + y*y*0.1 - 20*y")]),e("p",[t._v("Behaviour when value is outside range [0-255]: Bounce")]),e("p",[t._v("Offset x: 0")]),e("p",[t._v("Offset y: 0")]),e("p",[t._v("Zoom: 0.5")])])]),e("tr",[e("td",[e("img",{staticStyle:{margin:"2px"},attrs:{src:i(5637)}})]),e("td",[e("p",[t._v("Image width: 400")]),e("p",[t._v("Image height: 400")]),e("p",[t._v("R = 255 * Math.cos(0.0666 * y * x)")]),e("p",[t._v("G = 255 * Math.sin(0.1 * y * x)")]),e("p",[t._v("B = 255 * Math.sin(0.2 * y * x)")]),e("p",[t._v("Behaviour when value is outside range [0-255]: Clamp")]),e("p",[t._v("Offset x: 0")]),e("p",[t._v("Offset y: 0")]),e("p",[t._v("Zoom: 1")])])]),e("tr",[e("td",[e("img",{staticStyle:{margin:"2px"},attrs:{src:i(3245)}})]),e("td",[e("p",[t._v("Image width: 400")]),e("p",[t._v("Image height: 400")]),e("p",[t._v("R = x * x * y * y * 0.0005")]),e("p",[t._v("G = 0")]),e("p",[t._v("B = 0")]),e("p",[t._v("Behaviour when value is outside range [0-255]: Bounce")]),e("p",[t._v("Offset x: -200")]),e("p",[t._v("Offset y: -200")]),e("p",[t._v("Zoom: 1")])])]),e("tr",[e("td",[e("img",{staticStyle:{margin:"2px"},attrs:{src:i(132)}})]),e("td",[e("p",[t._v("Image width: 400")]),e("p",[t._v("Image height: 400")]),e("p",[t._v("R = x & y")]),e("p",[t._v("G = x | y")]),e("p",[t._v("B = x ^ y")]),e("p",[t._v("Behaviour when value is outside range [0-255]: Bounce")]),e("p",[t._v("Offset x: 0")]),e("p",[t._v("Offset y: 0")]),e("p",[t._v("Zoom: 0.25")])])]),e("tr",[e("td",[e("img",{staticStyle:{margin:"2px"},attrs:{src:i(3650)}})]),e("td",[e("p",[t._v("Image width: 400")]),e("p",[t._v("Image height: 400")]),e("p",[t._v("R = x & y")]),e("p",[t._v("G = 0")]),e("p",[t._v("B = 0")]),e("p",[t._v("Behaviour when value is outside range [0-255]: Clamp")]),e("p",[t._v("Offset x: 0")]),e("p",[t._v("Offset y: 0")]),e("p",[t._v("Zoom: 0.01")])])])])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"documentation_table"},[e("tr",[e("th",[t._v("Math function")]),e("th",[t._v("Description")]),e("th",[t._v("Usage example")])]),e("tr",[e("td",[t._v("Math.sin()")]),e("td",[t._v("Returns the sine of a number in radians.")]),e("td",[t._v("Math.sin(x/20) * 255")])]),e("tr",[e("td",[t._v("Math.cos()")]),e("td",[t._v("Returns the cosine of a number in radians.")]),e("td",[t._v("Math.cos(0.01 * y) * 255")])]),e("tr",[e("td",[t._v("Math.atan()")]),e("td",[t._v("Inverse tangent, in radians.")]),e("td",[t._v("Math.atan(0.01 * x) * 255")])]),e("tr",[e("td",[t._v("Math.atan2()")]),e("td",[t._v("Returns the angle in the plane (in radians) between the positive x-axis and the ray from (0, 0) to the point (x, y), for Math.atan2(y, x).")]),e("td",[t._v("Math.atan2(y, x) * 255")])]),e("tr",[e("td",[t._v("Math.pow()")]),e("td",[t._v("Returns the value of a base raised to a power.")]),e("td",[t._v("Math.pow(x, y)")])]),e("tr",[e("td",[t._v("Math.random()")]),e("td",[t._v("Returns a pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range.")]),e("td",[t._v("Math.random() * 255")])]),e("tr",[e("td",[t._v("Math.sqrt()")]),e("td",[t._v("Returns the square root of a number.")]),e("td",[t._v("Math.sqrt(x) * 100")])]),e("tr",[e("td",[t._v("Math.tan()")]),e("td",[t._v("Returns the tangent of a number in radians.")]),e("td",[t._v("Math.tan(x*0.01) * 255")])])])},function(){var t=this,e=t._self._c;return e("p",[t._v("For a full list of Javascript mathematical functions, check Javascript documentation "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math",target:"_blank"}},[t._v("here")]),t._v(" and "),e("a",{attrs:{href:"http://www.w3schools.com/Jsref/jsref_obj_math.asp",target:"_blank"}},[t._v("here")]),t._v(".")])}],s=i(5665),n=i(7630),r=i(4138),u=i(7e3),l=i(9448),c=i(817),h=function(){var t=this,e=t._self._c;return e("svg",{staticStyle:{"margin-top":"-2px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:t.color,width:"20px",height:"20px"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}})])},d=[],m={name:"IconCopy",props:{color:{type:String,default:"#ffffff"}}},p=m,v=i(1001),g=(0,v.Z)(p,h,d,!1,null,"1429bc1a",null),f=g.exports,_=i(3162),b={name:"CreateImagesUsingMathEquations",components:{HeaderOnlineTools:s.Z,FooterComponent:n.Z,IconDownload:u.Z,IconAdd:l.Z,IconEdit:c.Z,IconCopy:f,Breadcrumb:r.Z},data(){return{options:{imageWidth:800,imageHeight:600,r:"x + y",g:"x - y",b:"x * x + y * y",behaviourOutsideRange:"bounce",offsetX:0,offsetY:0,zoom:1},commitedOptions:{imageWidth:800,imageHeight:600,r:"x + y",g:"x - y",b:"x * x + y * y",behaviourOutsideRange:"bounce",offsetX:0,offsetY:0,zoom:1},equations:{r:{func:new Function("x","y","return x + y;"),isValid:!0,errorMessage:""},g:{func:new Function("x","y","return x - y;"),isValid:!0,errorMessage:""},b:{func:new Function("x","y","return x * x + y * y;"),isValid:!0,errorMessage:""}},shareURL:"",share:!1,dragStart:null,mouseDownButton:null}},mounted(){let t=this.$route.query;t.s&&(this.share=!0),t.w&&(this.options.imageWidth=Number(t.w)),t.h&&(this.options.imageHeight=Number(t.h)),t.r&&(this.options.r=t.r),t.g&&(this.options.g=t.g),t.r&&(this.options.b=t.b),t.o&&("b"==t.o?this.options.behaviourOutsideRange="bounce":"c"==t.o?this.options.behaviourOutsideRange="clamp":"r"==t.o&&(this.options.behaviourOutsideRange="remainder")),t.ox&&(this.options.offsetX=Number(t.ox)),t.oy&&(this.options.offsetY=Number(t.oy)),t.z&&(this.options.zoom=Number(t.z)),this.triggerUpdateFunctions()},methods:{downloadImage(){let t=document.getElementById("resultCanvas");t.toBlob((function(t){(0,_.saveAs)(t,"imageonlinetools.com-create-images-using-math.png")}))},triggerUpdateFunctions(){this.commitOptions(),this.updateMathFunctions(),this.updateShareURL(),this.equations.r.isValid&&this.equations.g.isValid&&this.equations.b.isValid&&this.$nextTick((()=>{this.drawImage()}))},triggerDrawImage(){this.commitOptions(),this.updateShareURL(),this.$nextTick((()=>{this.drawImage()}))},commitOptions(){this.commitedOptions.imageWidth=Number(this.options.imageWidth),this.commitedOptions.imageHeight=Number(this.options.imageHeight),this.commitedOptions.r=this.options.r,this.commitedOptions.g=this.options.g,this.commitedOptions.b=this.options.b,this.commitedOptions.behaviourOutsideRange=this.options.behaviourOutsideRange,this.commitedOptions.offsetX=Number(this.options.offsetX),this.commitedOptions.offsetY=Number(this.options.offsetY),this.commitedOptions.zoom=Number(this.options.zoom)},drawImage(){let t=document.getElementById("resultCanvas"),e=t.getContext("2d"),i=this.commitedOptions;e.clearRect(0,0,i.imageWidth,i.imageHeight);const a=e.createImageData(i.imageWidth,i.imageHeight);for(let s=0;s<i.imageWidth;s++)for(let t=0;t<i.imageHeight;t++){let e=4*(t*i.imageWidth+s),n=this.adjustCoordinate(s,i.offsetX,i.zoom),r=this.adjustCoordinate(t,i.offsetY,i.zoom),u=0;try{u=this.equations.r.func(n,r),this.equations.r.isValid=!0,this.equations.r.errorMessage=null}catch(o){throw this.equations.r.isValid=!1,this.equations.r.errorMessage="Error: "+o.message,o}let l=0;try{l=this.equations.g.func(n,r),this.equations.g.isValid=!0,this.equations.g.errorMessage=null}catch(o){throw this.equations.g.isValid=!1,this.equations.g.errorMessage="Error: "+o.message,o}let c=0;try{c=this.equations.b.func(n,r),this.equations.b.isValid=!0,this.equations.b.errorMessage=null}catch(o){throw this.equations.b.isValid=!1,this.equations.b.errorMessage="Error: "+o.message,o}"clamp"==this.commitedOptions.behaviourOutsideRange?(u=this.clamp(u,0,255),l=this.clamp(l,0,255),c=this.clamp(c,0,255)):"remainder"==this.commitedOptions.behaviourOutsideRange?(u=this.remainder(u,255),l=this.remainder(l,255),c=this.remainder(c,255)):"bounce"==this.commitedOptions.behaviourOutsideRange&&(u=this.bounceValue(u,0,255),l=this.bounceValue(l,0,255),c=this.bounceValue(c,0,255)),a.data[e]=u,a.data[e+1]=l,a.data[e+2]=c,a.data[e+3]=255}e.putImageData(a,0,0)},adjustCoordinate(t,e,i){return(t+e)/i},updateMathFunctions(){try{this.equations.r.func=new Function("x","y",`return ${this.commitedOptions.r};`),this.equations.r.isValid=!0,this.equations.r.errorMessage=null}catch(t){this.equations.r.isValid=!1,this.equations.r.errorMessage="Error: "+t.message}try{this.equations.g.func=new Function("x","y",`return ${this.commitedOptions.g};`),this.equations.g.isValid=!0,this.equations.g.errorMessage=null}catch(t){this.equations.g.isValid=!1,this.equations.g.errorMessage="Error: "+t.message}try{this.equations.b.func=new Function("x","y",`return ${this.commitedOptions.b};`),this.equations.b.isValid=!0,this.equations.b.errorMessage=null}catch(t){this.equations.b.isValid=!1,this.equations.b.errorMessage="Error: "+t.message}},clamp(t,e,i){return Math.max(e,Math.min(t,i))},remainder(t,e){return(t%e+e)%e},bounceValue(t,e,i){const a=i-e;return t=(t-e)%(2*a),t<0&&(t+=2*a),t>a&&(t=2*a-t),t+e},updateShareURL(){let t="https://www.imageonlinetools.com/",e=t+"create-images-using-math-equations?s=1";e+="&w="+this.commitedOptions.imageWidth,e+="&h="+this.commitedOptions.imageHeight,e+="&ox="+this.commitedOptions.offsetX,e+="&oy="+this.commitedOptions.offsetY,e+="&o="+this.commitedOptions.behaviourOutsideRange.substring(0,1),e+="&z="+this.commitedOptions.zoom,e+="&r="+encodeURIComponent(this.commitedOptions.r),e+="&g="+encodeURIComponent(this.commitedOptions.g),e+="&b="+encodeURIComponent(this.commitedOptions.b),this.shareURL=e},copyShareURL(){const t=this.$refs.inputShareURL;t.select(),navigator.clipboard.writeText(t.value)},canvasMouseWheel(t){if(0==this.share){let e=-2e-4*t.deltaY;this.options.zoom*=1+e,this.triggerDrawImage(),t.preventDefault()}},canvasMouseMove(t){if(0==this.share&&this.dragStart){let e=t.clientX-this.dragStart.x,i=t.clientY-this.dragStart.y;0==this.mouseDownButton?(this.options.offsetX-=e,this.options.offsetY-=i,this.triggerDrawImage()):this.mouseDownButton,this.dragStart={x:t.clientX,y:t.clientY}}},canvasMouseUp(){this.dragStart=null},canvasMouseDown(t){this.mouseDownButton=t.button,this.dragStart={x:t.clientX,y:t.clientY}},editSharedImage(){this.share=!1,this.triggerDrawImage(),this.clearQuerystring(),this.$nextTick((()=>{const t=this.$refs.divImage;t&&t.scrollIntoView({behavior:"smooth"})}))},createNewImage(){this.share=!1,this.resetOptions(),this.triggerUpdateFunctions(),this.clearQuerystring(),window.scrollTo(0,0)},clearQuerystring(){this.$router.replace("/create-images-using-math-equations")},resetOptions(){this.options.imageWidth=800,this.options.imageHeight=600,this.options.behaviourOutsideRange="bounce",this.options.r="x + y",this.options.g="x - y",this.options.b="x * x + y * y",this.options.offsetX=0,this.options.offsetY=0,this.options.zoom=1}}},y=b,w=(0,v.Z)(y,a,o,!1,null,null,null),x=w.exports},5117:function(t,e,i){"use strict";var a=i(6330),o=TypeError;t.exports=function(t,e){if(!delete t[e])throw o("Cannot delete property "+a(e)+" of "+a(t))}},541:function(t,e,i){"use strict";var a=i(2109),o=i(7908),s=i(6244),n=i(3658),r=i(5117),u=i(7207),l=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();a({target:"Array",proto:!0,arity:1,forced:l||c},{unshift:function(t){var e=o(this),i=s(e),a=arguments.length;if(a){u(i+a);var l=i;while(l--){var c=l+a;l in e?e[c]=e[l]:r(e,c)}for(var h=0;h<a;h++)e[h]=arguments[h]}return n(e,i+a)}})},3162:function(t,e,i){var a,o,s;(function(i,n){o=[],a=n,s="function"===typeof a?a.apply(e,o):a,void 0===s||(t.exports=s)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function a(t,e,i){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){u(a.response,e,i)},a.onerror=function(){console.error("could not download file")},a.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i.g&&i.g.global===i.g?i.g:void 0,r=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,i){var r=n.URL||n.webkitURL,u=document.createElement("a");e=e||t.name||"download",u.download=e,u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?s(u):o(u.href)?a(t,e,i):s(u,u.target="_blank")):(u.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(u.href)}),4e4),setTimeout((function(){s(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,n){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,n),i);else if(o(t))a(t,i,n);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){s(r)}))}}:function(t,e,i,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,i);var s="application/octet-stream"===t.type,u=/constructor/i.test(n.HTMLElement)||n.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&u||r)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},c.readAsDataURL(t)}else{var h=n.URL||n.webkitURL,d=h.createObjectURL(t);o?o.location=d:location.href=d,o=null,setTimeout((function(){h.revokeObjectURL(d)}),4e4)}});n.saveAs=u.saveAs=u,t.exports=u}))},6286:function(t,e,i){"use strict";t.exports=i.p+"img/image-online-tools.988f9e93.png"},5245:function(t,e,i){"use strict";t.exports=i.p+"img/image-created-using-math-equations-01.fa282fe6.png"},9405:function(t,e,i){"use strict";t.exports=i.p+"img/image-created-using-math-equations-02.4048a78e.png"},906:function(t,e,i){"use strict";t.exports=i.p+"img/image-created-using-math-equations-03.ad0873ac.png"},5637:function(t,e,i){"use strict";t.exports=i.p+"img/image-created-using-math-equations-04.e31c0e96.png"},3245:function(t,e,i){"use strict";t.exports=i.p+"img/image-created-using-math-equations-05.d65d4f7b.png"},132:function(t,e,i){"use strict";t.exports=i.p+"img/image-created-using-math-equations-06.59bca4e3.png"},3650:function(t,e,i){"use strict";t.exports=i.p+"img/image-created-using-math-equations-07.d981ed57.png"}}]);