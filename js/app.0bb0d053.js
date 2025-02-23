(function(){var e={6299:function(e,t,n){"use strict";var o=n(144),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=n(1001),s={},l=(0,i.Z)(s,r,a,!1,null,null,null),c=l.exports,u=(n(7658),n(8345)),m=n(3026),g=n(8273);o.ZP.use(u.ZP);const p=[{path:"/",name:"home",meta:{title:"Image Online Tools"},component:()=>n.e(800).then(n.bind(n,6800))},{path:"/image-editor-tools",name:"ImageEditorTools",meta:{title:"Image editor tools"},component:()=>n.e(957).then(n.bind(n,957))},{path:"/image-generator-tools",name:"ImageGeneratorTools",meta:{title:"Image generator tools"},component:()=>n.e(241).then(n.bind(n,9241))},{path:"/privacy-policy",name:"PrivacyPolicy",meta:{title:"Privacy policy"},component:()=>n.e(986).then(n.bind(n,3986))},{path:"/terms-of-use",name:"TermsOfUse",meta:{title:"Terms of use"},component:()=>n.e(154).then(n.bind(n,5154))},{path:"/contact-us",name:"ContactUs",meta:{title:"Contact Us"},component:()=>n.e(655).then(n.bind(n,8655))},{path:"/learn",name:"LearnView",meta:{title:"Learn"},component:()=>n.e(525).then(n.bind(n,4525))},{path:"*",name:"NotFound",meta:{title:"Image Online Tools - Not Found"},component:()=>n.e(458).then(n.bind(n,2458))}],d=m.Z.listAllTools();for(let T=0;T<d.length;T++){let e=d[T];p.push({path:`/${e.slug}`,name:`${e.componentName}`,meta:{title:`${e.name}`},component:()=>n(6255)(`./${e.componentName}.vue`)})}const f=g.Z.listLearnPages();for(let T=0;T<f.length;T++){let e=f[T];p.push({path:`/learn/${e.slug}`,name:`${e.componentName}`,meta:{title:`${e.name}`},component:()=>n(2004)(`./${e.componentName}.vue`)})}const h=new u.ZP({mode:"history",base:"/",routes:p,scrollBehavior(e,t,n){return n||(e.hash?{selector:e.hash}:{x:0,y:0})}});h.beforeEach(((e,t,n)=>{document.title=e.meta.title,n()}));var b=h;o.ZP.config.productionTip=!1,new o.ZP({router:b,render:e=>e(c)}).$mount("#app")},2004:function(e,t,n){var o={"./ConvolutionMatrix.vue":[6587,587],"./HowToCreate3DTextsOnline.vue":[8787,787],"./HowToGenerateButtonImagesOnline.vue":[4728,728]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=2004,e.exports=r},6255:function(e,t,n){var o={"./3DTextGenerator.vue":[4604,758,701,574],"./BlurImage.vue":[558,558],"./ButtonGenerator.vue":[7313,758,701,636],"./ChangeImageColor.vue":[765,765],"./ChangeImageHue.vue":[3052,758,890],"./CheckerboardGenerator.vue":[5266,758,701,981],"./ConcentricCirclesImageGenerator.vue":[8844,758,701,38],"./CreateImagesUsingMathEquations.vue":[4995,995],"./GrayscaleImage.vue":[5706,706],"./HueRotateImage.vue":[553,553],"./ImageCrop.vue":[2311,311],"./ProceduralImageGeneratorWithMathEquations.vue":[1268,758,701,953],"./QrCodeGenerator.vue":[7724,724],"./RgbSplitEffect.vue":[6386,386],"./SepiaImage.vue":[2415,415],"./SunburstGenerator.vue":[9061,758,701,605],"./ThreeColorCheckerboardGenerator.vue":[9856,758,701,130],"./TrimTransparentPixels.vue":[5772,758,592]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=6255,e.exports=r},8273:function(e,t){"use strict";let n={listLearnPages(){let e=[{name:"How to create 3D texts online",componentName:"HowToCreate3DTextsOnline",shortDescription:"",slug:"how-to-create-3d-texts-online",image:null,imageAltText:null},{name:"How to generate button images online",componentName:"HowToGenerateButtonImagesOnline",shortDescription:"",slug:"how-to-generate-button-images-online",image:null,imageAltText:null}];return e}};t["Z"]=n},3026:function(e,t){"use strict";let n={listImageEditorTools(){let e=this.listAllTools(),t=e.filter((e=>"IMAGE_EDITOR_TOOL"==e.type));return t},listImageGeneratorTools(){let e=this.listAllTools(),t=e.filter((e=>"IMAGE_GENERATOR_TOOL"==e.type));return t},listFeaturedTools(){let e=this.listAllTools(),t=e.filter((e=>"button-generator"==e.slug||"3d-text-generator"==e.slug||"create-images-using-math-equations"==e.slug||"procedural-image-generator"==e.slug));return t},listAllTools(){let e=[{name:"Crop image",componentName:"ImageCrop",shortDescription:"Crop images online by defining a rectangle in pixels.",longDescription:"Crop images online by defining a rectangle in pixels.",slug:"crop-image",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Trim transparent pixels",componentName:"TrimTransparentPixels",shortDescription:"Remove transparent space around images. Trim away transparent borders around an image.",longDescription:"Remove transparent space around images. Trim away transparent borders around an image.",slug:"trim-transparent-pixels",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Change image color",componentName:"ChangeImageColor",shortDescription:"Change color of images by changing the red, green and blue components of each pixel of the image.",longDescription:"Change color of images by changing the red, green and blue components of each pixel of the image.",slug:"change-image-color",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Change image hue",componentName:"ChangeImageHue",shortDescription:"Adjust the hue of images. Hue rotate images by specifying an angle around the color circle.",longDescription:"Adjust the hue of images. Hue rotate images by specifying an angle around the color circle.",slug:"change-image-hue",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Grayscale image online",componentName:"GrayscaleImage",shortDescription:"Convert images to grayscale.",longDescription:"Convert images to grayscale.",slug:"grayscale-image-online",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Sepia image online",componentName:"SepiaImage",shortDescription:"Convert images to sepia.",longDescription:"Convert images to sepia.",slug:"sepia-image-online",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Blur image online",componentName:"BlurImage",shortDescription:"Apply Gaussian blur filter to images.",longDescription:"Apply Gaussian blur filter to images.",slug:"blur-image-online",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Button generator",componentName:"ButtonGenerator",shortDescription:"Easily generate button images with different styles.",longDescription:"Easily generate button images with different styles for websites, games, apps, ads or anything you want. Customize text font, size, colors, outline, border, shadow, emboss and more. Export to PNG.",slug:"button-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/button.png",imageAltText:"button"},{name:"3D Text Generator",componentName:"3DTextGenerator",shortDescription:"Generate 3D texts and export to PNG. Customize font, colors, text geometry, rotation, shadow, bevel, camera position and rotation, lights and more.",longDescription:"Generate 3D texts and export to PNG. Customize font, colors, text geometry, rotation, shadow, bevel, camera position and rotation, lights and more.",slug:"3d-text-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/3D-text.png",imageAltText:"3D text"},{name:"Create images using math equations",componentName:"CreateImagesUsingMathEquations",shortDescription:"Generate images from mathematical formulas.",longDescription:'Generate images from mathematical formulas. Create a math equation for each RGB color channel, based on "x" and "y" position of the pixel in the image.',slug:"create-images-using-math-equations",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/image-created-with-math-equations.png",imageAltText:"Create images using math equations"},{name:"Procedural Image Generator",componentName:"ProceduralImageGeneratorWithMathEquations",shortDescription:"Create images procedurally from basic shapes and mathematical formulas.",longDescription:"Create images procedurally from basic shapes and mathematical formulas, including trigonometric functions and other math functions.",slug:"procedural-image-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/procedural-image-generator.png",imageAltText:"Procedural Image Generator"},{name:"Sunburst Generator",componentName:"SunburstGenerator",shortDescription:"Generate sunburst background images.",longDescription:"Generate sunburst background images.",slug:"sunburst-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/sunburst-background.png",imageAltText:"Sunburst"},{name:"Concentric Circles Generator",componentName:"ConcentricCirclesImageGenerator",shortDescription:"Generate background images with concentric circles.",longDescription:"Generate background images with concentric circles.",slug:"concentric-circles-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/concentric-circles.png",imageAltText:"Concentric circles background"},{name:"Checkerboard Generator",componentName:"CheckerboardGenerator",shortDescription:"Generate checkerboard images.",longDescription:"Generate checkerboard images.",slug:"checkerboard-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/checkerboard.png",imageAltText:"Checkerboard"},{name:"Three Color Checkerboard Generator",componentName:"ThreeColorCheckerboardGenerator",shortDescription:"Generate checkerboard patterns with 3 colors.",longDescription:"Generate checkerboard patterns with 3 colors.",slug:"three-color-checkerboard-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/three-color-checkerboard.png",imageAltText:"Three Color Checkerboard"},{name:"RGB Split Effect",componentName:"RgbSplitEffect",shortDescription:"Transform images by applying RGB split filter. Separate the red, green and blue color channels of images and adjust X and Y offsets, to create glitch-like effects.",longDescription:"Transform images by applying RGB split filter. Separate the red, green and blue color channels of images and adjust X and Y offsets, to create glitch-like effects.",slug:"rgb-split-effect",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:"RGB Split Effect"},{name:"QR Code Generator",componentName:"QrCodeGenerator",shortDescription:"Generate QR codes and export to PNG or SVG.",longDescription:"Generate QR codes and export to PNG or SVG.",slug:"qr-code-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/qr-code.png",imageAltText:"QR Code"}];return e}};t["Z"]=n}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{38:"0fb4e0b0",130:"dd740814",154:"358ba493",241:"4194f543",311:"2fdbfb29",386:"5054c3a5",415:"c314761e",458:"6a454f97",525:"13aa891d",553:"9b122db6",558:"3f562331",574:"cb458a89",587:"9f0d092e",592:"09c6dd5c",605:"9e933b87",636:"2ce4898c",655:"6c4d3194",701:"e1d27351",706:"f905bd9c",724:"a20c8bb0",728:"07a99651",758:"f9c2170b",765:"86fd1ebd",787:"586f108e",800:"75ebb11d",890:"6e6cb371",953:"9c077687",957:"403b9113",981:"725c2599",986:"f8013173",995:"bbc0d80f"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{38:"e312e03d",130:"e312e03d",154:"d8fb1518",241:"4d85fbbc",311:"ca597979",386:"34a668dd",415:"34a668dd",458:"03cf9f2c",525:"06135911",553:"6cf38437",558:"34a668dd",574:"cbe6c467",587:"a567570c",592:"99ef7490",605:"47200e22",636:"47200e22",655:"349cfdf0",706:"34a668dd",724:"c22b846d",728:"57e26330",765:"34a668dd",787:"f5b9c0b6",800:"e631385b",890:"34a668dd",953:"3ddc7dd3",957:"93a5e74e",981:"e312e03d",986:"f0a567ba",995:"b0e476a3"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="image-online-tools:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+a){s=m;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={38:1,130:1,154:1,241:1,311:1,386:1,415:1,458:1,525:1,553:1,558:1,574:1,587:1,592:1,605:1,636:1,655:1,706:1,724:1,728:1,765:1,787:1,800:1,890:1,953:1,957:1,981:1,986:1,995:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var u=l(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6299)}));o=n.O(o)})();