"use strict";(self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[]).push([[852],{9410:function(t,o,e){e.r(o),e.d(o,{default:function(){return b}});var n=function(){var t=this,o=t._self._c;return o("div",[o("HeaderOnlineTools"),t._m(0),t._m(1),o("br"),o("div",{staticClass:"imageGridLayout"},[o("div"),o("div",{staticClass:"div_options"},[t._m(2),o("br"),o("div",{staticClass:"optionsLayout"},[t._m(3),o("div"),o("div",{staticClass:"div_option"},[t._v("text")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.text,expression:"buttonOptions.text"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.text},on:{keyup:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"text",o.target.value)}}})]),o("div",{staticClass:"div_option"},[t._v("text color")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.textColor,expression:"buttonOptions.textColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.textColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"textColor",o.target.value)}}})]),o("div",{staticClass:"div_option"},[t._v("text size")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.textSize,expression:"buttonOptions.textSize"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.textSize},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"textSize",o.target.value)}}})]),o("div",{staticClass:"div_option"},[t._v("font")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.font,expression:"buttonOptions.font"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.font},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"font",o.target.value)}}})]),t._m(4),o("div"),o("div",{staticClass:"div_option"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.textOutline,expression:"buttonOptions.textOutline"}],attrs:{type:"checkbox",id:"checkbox_text_outline"},domProps:{checked:Array.isArray(t.buttonOptions.textOutline)?t._i(t.buttonOptions.textOutline,null)>-1:t.buttonOptions.textOutline},on:{change:[function(o){var e=t.buttonOptions.textOutline,n=o.target,i=!!n.checked;if(Array.isArray(e)){var s=null,a=t._i(e,s);n.checked?a<0&&t.$set(t.buttonOptions,"textOutline",e.concat([s])):a>-1&&t.$set(t.buttonOptions,"textOutline",e.slice(0,a).concat(e.slice(a+1)))}else t.$set(t.buttonOptions,"textOutline",i)},function(o){return t.triggerDrawButton()}]}}),o("label",{attrs:{for:"checkbox_text_outline"}},[t._v("text outline")])]),o("div"),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.textOutline,expression:"buttonOptions.textOutline"}],staticClass:"div_option"},[t._v("text outline size")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.textOutline,expression:"buttonOptions.textOutline"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.textOutlineSize,expression:"buttonOptions.textOutlineSize"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.textOutlineSize},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"textOutlineSize",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.textOutline,expression:"buttonOptions.textOutline"}],staticClass:"div_option"},[t._v("text outline color")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.textOutline,expression:"buttonOptions.textOutline"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.textOutlineColor,expression:"buttonOptions.textOutlineColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.textOutlineColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"textOutlineColor",o.target.value)}}})]),t._m(5),o("div"),o("div",{staticClass:"div_option"},[t._v("style")]),o("div",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle"}],on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){var o="_value"in t?t._value:t.value;return o}));t.$set(t.buttonOptions,"buttonStyle",o.target.multiple?e:e[0])},function(o){return t.triggerDrawButton()}]}},[o("option",{attrs:{value:"solid_color"}},[t._v("solid color")]),o("option",{attrs:{value:"horizontal_gradient"}},[t._v("horizontal gradient")]),o("option",{attrs:{value:"vertical_gradient"}},[t._v("vertical gradient")])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:"solid_color"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='solid_color'"}],staticClass:"div_option"},[t._v("button color")]),o("div",{directives:[{name:"show",rawName:"v-show",value:"solid_color"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='solid_color'"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.buttonColor,expression:"buttonOptions.buttonColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.buttonColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"buttonColor",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:"vertical_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='vertical_gradient'"}],staticClass:"div_option"},[t._v("top color")]),o("div",{directives:[{name:"show",rawName:"v-show",value:"vertical_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='vertical_gradient'"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.buttonTopColor,expression:"buttonOptions.buttonTopColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.buttonTopColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"buttonTopColor",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:"vertical_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='vertical_gradient'"}],staticClass:"div_option"},[t._v("bottom color")]),o("div",{directives:[{name:"show",rawName:"v-show",value:"vertical_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='vertical_gradient'"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.buttonBottomColor,expression:"buttonOptions.buttonBottomColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.buttonBottomColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"buttonBottomColor",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:"horizontal_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='horizontal_gradient'"}],staticClass:"div_option"},[t._v("left color")]),o("div",{directives:[{name:"show",rawName:"v-show",value:"horizontal_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='horizontal_gradient'"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.buttonLeftColor,expression:"buttonOptions.buttonLeftColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.buttonLeftColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"buttonLeftColor",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:"horizontal_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='horizontal_gradient'"}],staticClass:"div_option"},[t._v("right color")]),o("div",{directives:[{name:"show",rawName:"v-show",value:"horizontal_gradient"==t.buttonOptions.buttonStyle,expression:"buttonOptions.buttonStyle=='horizontal_gradient'"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.buttonRightColor,expression:"buttonOptions.buttonRightColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.buttonRightColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"buttonRightColor",o.target.value)}}})]),o("div",{staticClass:"div_option"},[t._v("button width")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.width,expression:"buttonOptions.width"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.width},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"width",o.target.value)}}})]),o("div",{staticClass:"div_option"},[t._v("button height")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.height,expression:"buttonOptions.height"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.height},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"height",o.target.value)}}})]),o("div",{staticClass:"div_option"},[t._v("border radius")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.borderRadius,expression:"buttonOptions.borderRadius"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.borderRadius},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"borderRadius",o.target.value)}}})]),t._m(6),o("div"),o("div",{staticClass:"div_option"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.buttonBorder,expression:"buttonOptions.buttonBorder"}],attrs:{type:"checkbox",id:"checkbox_button_border"},domProps:{checked:Array.isArray(t.buttonOptions.buttonBorder)?t._i(t.buttonOptions.buttonBorder,null)>-1:t.buttonOptions.buttonBorder},on:{change:[function(o){var e=t.buttonOptions.buttonBorder,n=o.target,i=!!n.checked;if(Array.isArray(e)){var s=null,a=t._i(e,s);n.checked?a<0&&t.$set(t.buttonOptions,"buttonBorder",e.concat([s])):a>-1&&t.$set(t.buttonOptions,"buttonBorder",e.slice(0,a).concat(e.slice(a+1)))}else t.$set(t.buttonOptions,"buttonBorder",i)},function(o){return t.triggerDrawButton()}]}}),o("label",{attrs:{for:"checkbox_button_border"}},[t._v("button border")])]),o("div"),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.buttonBorder,expression:"buttonOptions.buttonBorder"}],staticClass:"div_option"},[t._v("border size")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.buttonBorder,expression:"buttonOptions.buttonBorder"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.borderSize,expression:"buttonOptions.borderSize"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.borderSize},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"borderSize",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.buttonBorder,expression:"buttonOptions.buttonBorder"}],staticClass:"div_option"},[t._v("border color")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.buttonBorder,expression:"buttonOptions.buttonBorder"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.borderColor,expression:"buttonOptions.borderColor"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.borderColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"borderColor",o.target.value)}}})]),t._m(7),o("div"),o("div",{staticClass:"div_option"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],attrs:{type:"checkbox",id:"checkbox_shadow"},domProps:{checked:Array.isArray(t.buttonOptions.shadow)?t._i(t.buttonOptions.shadow,null)>-1:t.buttonOptions.shadow},on:{change:[function(o){var e=t.buttonOptions.shadow,n=o.target,i=!!n.checked;if(Array.isArray(e)){var s=null,a=t._i(e,s);n.checked?a<0&&t.$set(t.buttonOptions,"shadow",e.concat([s])):a>-1&&t.$set(t.buttonOptions,"shadow",e.slice(0,a).concat(e.slice(a+1)))}else t.$set(t.buttonOptions,"shadow",i)},function(o){return t.triggerDrawButton()}]}}),o("label",{attrs:{for:"checkbox_shadow"}},[t._v("shadow")])]),o("div"),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"div_option"},[t._v("shadow blur")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.shadowBlur,expression:"buttonOptions.shadowBlur"},{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.shadowBlur},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"shadowBlur",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"div_option"},[t._v("shadow color")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.shadowColor,expression:"buttonOptions.shadowColor"},{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.shadowColor},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"shadowColor",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"div_option"},[t._v("shadow offset x")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.shadowOffsetX,expression:"buttonOptions.shadowOffsetX"},{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.shadowOffsetX},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"shadowOffsetX",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"div_option"},[t._v("shadow offset y")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.shadowOffsetY,expression:"buttonOptions.shadowOffsetY"},{name:"show",rawName:"v-show",value:t.buttonOptions.shadow,expression:"buttonOptions.shadow"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.shadowOffsetY},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"shadowOffsetY",o.target.value)}}})]),t._m(8),o("div"),o("div",{staticClass:"div_option"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.emboss,expression:"buttonOptions.emboss"}],attrs:{type:"checkbox",id:"checkbox_emboss"},domProps:{checked:Array.isArray(t.buttonOptions.emboss)?t._i(t.buttonOptions.emboss,null)>-1:t.buttonOptions.emboss},on:{change:[function(o){var e=t.buttonOptions.emboss,n=o.target,i=!!n.checked;if(Array.isArray(e)){var s=null,a=t._i(e,s);n.checked?a<0&&t.$set(t.buttonOptions,"emboss",e.concat([s])):a>-1&&t.$set(t.buttonOptions,"emboss",e.slice(0,a).concat(e.slice(a+1)))}else t.$set(t.buttonOptions,"emboss",i)},function(o){return t.triggerDrawButton()}]}}),o("label",{attrs:{for:"checkbox_emboss"}},[t._v("emboss")])]),o("div"),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.emboss,expression:"buttonOptions.emboss"}],staticClass:"div_option"},[t._v("emboss radius")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.emboss,expression:"buttonOptions.emboss"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.embossAmount,expression:"buttonOptions.embossAmount"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.embossAmount},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"embossAmount",o.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.emboss,expression:"buttonOptions.emboss"}],staticClass:"div_option"},[t._v("emboss intensity")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonOptions.emboss,expression:"buttonOptions.emboss"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonOptions.embossColorDiff,expression:"buttonOptions.embossColorDiff"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.buttonOptions.embossColorDiff},on:{change:function(o){return t.triggerDrawButton()},input:function(o){o.target.composing||t.$set(t.buttonOptions,"embossColorDiff",o.target.value)}}})])]),o("br"),o("div",[o("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(o){return t.downloadButtonImage()}}},[t._v("Download button image")])])]),o("div",{staticClass:"div_image"},[o("div",{staticStyle:{position:"sticky",top:"0"}},[o("div",[o("h3",[t._v("Generated button:")]),o("canvas",{attrs:{id:"resultCanvas",width:t.canvasWidth,height:t.canvasHeight}})]),o("br"),o("div",[o("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(o){return t.downloadButtonImage()}}},[t._v("Download button image")])])])]),o("div")]),o("br"),o("br"),o("br"),o("br")],1)},i=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"home"},[o("h1",[t._v("Button generator")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"home"},[o("div",[t._v("This free online tool allows you to generate button images.")])])},function(){var t=this,o=t._self._c;return o("div",[o("h3",[t._v("Button options:")])])},function(){var t=this,o=t._self._c;return o("div",[o("b",[t._v("Text")])])},function(){var t=this,o=t._self._c;return o("div",[o("b",[t._v("Text outline")])])},function(){var t=this,o=t._self._c;return o("div",[o("b",[t._v("Button")])])},function(){var t=this,o=t._self._c;return o("div",[o("b",[t._v("Button border")])])},function(){var t=this,o=t._self._c;return o("div",[o("b",[t._v("Shadow")])])},function(){var t=this,o=t._self._c;return o("div",[o("b",[t._v("Emboss")])])}],s=e(9264),a=e(3162),r=e(9314),u={name:"ButtonGenerator",components:{HeaderOnlineTools:s.Z},data(){return{canvasWidth:400,canvasHeight:300,buttonOptions:{text:"button",textColor:"#ffffff",textOutline:!1,textOutlineSize:2,textOutlineColor:"#000000",buttonColor:"#ff0000",buttonTopColor:"#ff0000",buttonBottomColor:"#ffff00",buttonLeftColor:"#ff0000",buttonRightColor:"#ffff00",textSize:32,font:"Arial",borderRadius:10,buttonBorder:!1,borderSize:2,borderColor:"#000000",width:200,height:50,shadow:!1,shadowBlur:10,shadowColor:"#000000",shadowOffsetX:5,shadowOffsetY:5,buttonStyle:"solid_color",emboss:!1,embossAmount:5,embossColorDiff:3},buttonExamples:[{code:"basic_button",name:"Basic button",shadow:!1,buttonBorder:!1,buttonStyle:"solid_color",textOutline:!1,borderRadius:10},{code:"button_with_rounded_border",name:"Button with rounded border",shadow:!1,buttonBorder:!1,buttonStyle:"solid_color",textOutline:!1,borderRadius:30},{code:"button_with_border",name:"Button with border",shadow:!1,buttonBorder:!0,buttonStyle:"solid_color",textOutline:!1,borderRadius:10},{code:"button_with_shadow",name:"Button with shadow",shadow:!0,buttonBorder:!1,buttonStyle:"solid_color",textOutline:!1,borderRadius:10},{code:"horizontal_gradient_button",name:"Horizontal gradient button",shadow:!1,buttonBorder:!1,buttonStyle:"horizontal_gradient",textOutline:!1,borderRadius:10},{code:"vertical_gradient_button",name:"Vertical gradient button",shadow:!1,buttonBorder:!1,buttonStyle:"vertical_gradient",textOutline:!1,borderRadius:10},{code:"glow_button",name:"Glow button",shadow:!0,buttonBorder:!1,buttonStyle:"solid_color",textOutline:!1,borderRadius:10},{code:"3d_button",name:"3D button",shadow:!0,buttonBorder:!1,buttonStyle:"solid_color",textOutline:!1,borderRadius:10},{code:"button_with_text_outline",name:"Button with text outline",shadow:!1,buttonBorder:!1,buttonStyle:"solid_color",textOutline:!0,borderRadius:10}]}},mounted(){this.triggerDrawButton(),this.$nextTick((()=>{this.drawExampleButtons()}))},methods:{drawExampleButtons(){for(let t=0;t<this.buttonExamples.length;t++){let o=this.buttonExamples[t];this.drawExampleButton(o)}},drawExampleButton(t){let o=document.getElementById("canvas_example_"+t.code),e=JSON.parse(JSON.stringify(this.buttonOptions));e.shadow=t.shadow,e.buttonBorder=t.buttonBorder,e.buttonStyle=t.buttonStyle,e.textOutline=t.textOutline,e.borderRadius=t.borderRadius,this.drawButton(o,e)},downloadButtonImage(){let t=document.getElementById("resultCanvas"),o=r.Z.crop(t);o.toBlob((function(t){(0,a.saveAs)(t,"Image.png")}))},triggerDrawButton(){let t=10,o=Number(this.buttonOptions.width)+2*Math.abs(Number(this.buttonOptions.shadowOffsetX))+2*Math.abs(Number(this.buttonOptions.borderSize))+3*Number(this.buttonOptions.shadowBlur)+t,e=Number(this.buttonOptions.height)+2*Math.abs(Number(this.buttonOptions.shadowOffsetY))+2*Math.abs(Number(this.buttonOptions.borderSize))+3*Number(this.buttonOptions.shadowBlur)+t;this.canvasWidth=o,this.canvasHeight=e,this.$nextTick((()=>{let t=document.getElementById("resultCanvas");this.drawButton(t,this.buttonOptions)}))},drawButton(t,o){let e=t.getContext("2d");e.clearRect(0,0,this.canvasWidth,this.canvasHeight);let n=o.text,i=this.canvasWidth/2,s=this.canvasHeight/2,a=Number(o.height),r=Number(o.width),u=Number(o.borderRadius),l=o.textColor,d=o.buttonColor,p=`${o.textSize}px ${o.font}`;if("solid_color"==o.buttonStyle)e.fillStyle=d;else if("vertical_gradient"==o.buttonStyle){let t=e.createLinearGradient(0,s-a/2,0,s+a/2);t.addColorStop("0.0",this.buttonOptions.buttonTopColor),t.addColorStop("1.0",this.buttonOptions.buttonBottomColor),e.fillStyle=t}else if("horizontal_gradient"==o.buttonStyle){let t=e.createLinearGradient(i-r/2,0,i+r/2,0);t.addColorStop("0.0",this.buttonOptions.buttonLeftColor),t.addColorStop("1.0",this.buttonOptions.buttonRightColor),e.fillStyle=t}this.fillRoundRect(e,i-r/2,s-a/2,r,a,u),e.font=p,e.fillStyle=l,e.textAlign="center",e.textBaseline="middle";let b=o.textOutline?Number(o.textOutlineSize):0,c=o.textOutlineColor;if(this.drawText(e,n,i,s,b,c,p,l),o.emboss){let t=Number(o.embossAmount),n=Number(o.embossColorDiff);this.emboss(e,t,n)}if(o.buttonBorder){let t=Number(o.borderSize);t>0&&this.addColorBorderHex(e,t,o.borderColor)}if(o.shadow){let t=Number(o.shadowBlur),n=o.shadowColor,i=Number(o.shadowOffsetX),s=Number(o.shadowOffsetY);this.addShadow(e,t,n,i,s)}},drawText(t,o,e,n,i,s,a,r){let u=t.canvas,l=u.width,d=u.height,p=document.createElement("canvas");p.width=l,p.height=d;let b=p.getContext("2d");b.font=a,b.fillStyle=r,b.textAlign="center",b.textBaseline="middle",b.fillText(o,e,n),i>0&&this.addColorBorderHex(b,i,s),t.drawImage(b.canvas,0,0)},fillRoundRect(t,o,e,n,i,s){n<2*s&&(s=n/2),i<2*s&&(s=i/2),t.beginPath(),t.moveTo(o+s,e),t.arcTo(o+n,e,o+n,e+i,s),t.arcTo(o+n,e+i,o,e+i,s),t.arcTo(o,e+i,o,e,s),t.arcTo(o,e,o+n,e,s),t.closePath(),t.fill()},addShadow(t,o,e,n,i){let s=t.canvas,a=t.canvas.width,r=t.canvas.height,u=document.createElement("canvas");u.width=a,u.height=r;let l=u.getContext("2d");l.shadowBlur=o,l.shadowColor=e,l.shadowOffsetX=n,l.shadowOffsetY=i,l.drawImage(s,0,0);let d=l.getImageData(0,0,a,r);t.putImageData(d,0,0)},emboss(t,o,e){let n=t.canvas.width,i=t.canvas.height,s=document.createElement("canvas");s.width=n,s.height=i;let a=s.getContext("2d");a.drawImage(t.canvas,0,0);let u=[1,0,0,0,0,0,0,0,-1];const l=a.getImageData(0,0,n,i);let d=r.Z.convolute(l,u,!1);a.putImageData(d,0,0),a.filter="blur("+o+"px)",this.repaint(a),d=a.getImageData(0,0,n,i);let p=document.createElement("canvas");p.width=n,p.height=i;let b=p.getContext("2d");b.drawImage(t.canvas,0,0);let c=[-1,0,0,0,0,0,0,0,1];const v=b.getImageData(0,0,n,i);let m=r.Z.convolute(v,c,!1);b.putImageData(m,0,0),b.filter="blur("+o+"px)",this.repaint(b),m=b.getImageData(0,0,n,i);const h=t.getImageData(0,0,n,i);for(let r=0;r<h.data.length;r+=4)h.data[r+0]-=e*d.data[r+3],h.data[r+1]-=e*d.data[r+3],h.data[r+2]-=e*d.data[r+3],h.data[r+0]+=e*m.data[r+3],h.data[r+1]+=e*m.data[r+3],h.data[r+2]+=e*m.data[r+3];t.putImageData(h,0,0)},repaint(t){let o=document.createElement("canvas");o.width=t.canvas.width,o.height=t.canvas.height;let e=o.getContext("2d");e.drawImage(t.canvas,0,0),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.drawImage(e.canvas,0,0)},addColorBorderHex(t,o,e){let n=t.canvas,i=t.canvas.width,s=t.canvas.height,a=document.createElement("canvas");a.width=i,a.height=s;let r=a.getContext("2d");r.drawImage(n,0,0),this.setImageColorHex(r,e),this.grow(r,o),r.drawImage(n,0,0);let u=r.getImageData(0,0,i,s);t.putImageData(u,0,0)},setImageColorHex(t,o){let e=r.Z.hexToRgb(o),n=t.canvas.width,i=t.canvas.height,s=t.getImageData(0,0,n,i);for(let a=0;a<s.data.length;a+=4)s.data[a]=e.r,s.data[a+1]=e.g,s.data[a+2]=e.b;t.putImageData(s,0,0)},grow(t,o){let e=t.canvas.width,n=t.canvas.height;const i=t.getImageData(0,0,e,n);let s=0,a=0;t.save();for(let r=0;r<i.data.length;r+=4)i.data[r+3]>0&&(t.fillStyle="rgba("+i.data[r]+", "+i.data[r+1]+", "+i.data[r+2]+", "+i.data[r+3]/255+")",t.beginPath(),t.arc(s+.5,a+.5,o,0,2*Math.PI),t.fill()),s++,s>e-1&&(s=0,a++);t.restore()}}},l=u,d=e(1001),p=(0,d.Z)(l,n,i,!1,null,null,null),b=p.exports}}]);