(function(){var e={6299:function(e,t,n){"use strict";var o=n(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],i=n(1001),s={},l=(0,i.Z)(s,a,r,!1,null,null,null),c=l.exports,m=(n(7658),n(8345)),u=n(3026),g=n(8273);o.ZP.use(m.ZP);const p=[{path:"/",name:"home",meta:{title:"Image Online Tools"},component:()=>n.e(371).then(n.bind(n,1371))},{path:"/image-editor-tools",name:"ImageEditorTools",meta:{title:"Image editor tools"},component:()=>n.e(957).then(n.bind(n,957))},{path:"/image-generator-tools",name:"ImageGeneratorTools",meta:{title:"Image generator tools"},component:()=>n.e(241).then(n.bind(n,9241))},{path:"/animation-generator-tools",name:"AnimationGeneratorTools",meta:{title:"Animation generator tools"},component:()=>n.e(762).then(n.bind(n,2762))},{path:"/privacy-policy",name:"PrivacyPolicy",meta:{title:"Privacy policy"},component:()=>n.e(986).then(n.bind(n,3986))},{path:"/terms-of-use",name:"TermsOfUse",meta:{title:"Terms of use"},component:()=>n.e(154).then(n.bind(n,5154))},{path:"/contact-us",name:"ContactUs",meta:{title:"Contact Us"},component:()=>n.e(655).then(n.bind(n,8655))},{path:"/learn",name:"LearnView",meta:{title:"Learn"},component:()=>n.e(525).then(n.bind(n,4525))},{path:"*",name:"NotFound",meta:{title:"Image Online Tools - Not Found"},component:()=>n.e(458).then(n.bind(n,2458))}],d=u.Z.listAllTools();for(let T=0;T<d.length;T++){let e=d[T];p.push({path:`/${e.slug}`,name:`${e.componentName}`,meta:{title:`${e.name}`},component:()=>n(6255)(`./${e.componentName}.vue`)})}const f=g.Z.listLearnPages();for(let T=0;T<f.length;T++){let e=f[T];p.push({path:`/learn/${e.slug}`,name:`${e.componentName}`,meta:{title:`${e.name}`},component:()=>n(2004)(`./${e.componentName}.vue`)})}const h=new m.ZP({mode:"history",base:"/",routes:p,scrollBehavior(e,t,n){return n||(e.hash?{selector:e.hash}:{x:0,y:0})}});h.beforeEach(((e,t,n)=>{document.title=e.meta.title,n()}));var b=h;o.ZP.config.productionTip=!1,new o.ZP({router:b,render:e=>e(c)}).$mount("#app")},2004:function(e,t,n){var o={"./ConvolutionMatrix.vue":[6587,587],"./HowToCreate3DTextsOnline.vue":[8787,787],"./HowToGenerateButtonImagesOnline.vue":[4728,728]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=2004,e.exports=a},6255:function(e,t,n){var o={"./3DTextGenerator.vue":[4604,603,701,247],"./BlurImage.vue":[558,558],"./ButtonGenerator.vue":[7313,603,701,342],"./ChangeImageColor.vue":[765,765],"./ChangeImageHue.vue":[3052,603,79],"./CheckerboardGenerator.vue":[5266,603,701,888],"./ConcentricCirclesImageGenerator.vue":[8844,603,701,625],"./CreateImagesUsingMathEquations.vue":[8286,286],"./GrayscaleImage.vue":[5706,706],"./HueRotateImage.vue":[553,553],"./ImageCrop.vue":[2311,311],"./ProceduralAnimationGenerator.vue":[3296,603,701,138],"./ProceduralImageGeneratorWithMathEquations.vue":[2924,603,701,175],"./QrCodeGenerator.vue":[7724,724],"./RgbSplitEffect.vue":[9668,668],"./SepiaImage.vue":[2415,415],"./SunburstGenerator.vue":[9061,603,701,883],"./ThreeColorCheckerboardGenerator.vue":[9856,603,701,876],"./TrimTransparentPixels.vue":[5772,603,743]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=6255,e.exports=a},8273:function(e,t){"use strict";let n={listLearnPages(){let e=[{name:"How to create 3D texts online",componentName:"HowToCreate3DTextsOnline",shortDescription:"",slug:"how-to-create-3d-texts-online",image:null,imageAltText:null},{name:"How to generate button images online",componentName:"HowToGenerateButtonImagesOnline",shortDescription:"",slug:"how-to-generate-button-images-online",image:null,imageAltText:null}];return e}};t["Z"]=n},3026:function(e,t){"use strict";let n={listImageEditorTools(){let e=this.listAllTools(),t=e.filter((e=>"IMAGE_EDITOR_TOOL"==e.type));return t},listImageGeneratorTools(){let e=this.listAllTools(),t=e.filter((e=>"IMAGE_GENERATOR_TOOL"==e.type));return t},listAnimationGeneratorTools(){let e=this.listAllTools(),t=e.filter((e=>"ANIMATION_GENERATOR_TOOL"==e.type));return t},listFeaturedTools(){let e=this.listAllTools(),t=e.filter((e=>"button-generator"==e.slug||"3d-text-generator"==e.slug||"create-images-using-math-equations"==e.slug||"procedural-image-generator"==e.slug));return t},listAllTools(){let e=[{name:"Crop image",componentName:"ImageCrop",shortDescription:"Crop images online by defining a rectangle in pixels.",longDescription:"Crop images online by defining a rectangle in pixels.",slug:"crop-image",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Trim transparent pixels",componentName:"TrimTransparentPixels",shortDescription:"Remove transparent space around images. Trim away transparent borders around an image.",longDescription:"Remove transparent space around images. Trim away transparent borders around an image.",slug:"trim-transparent-pixels",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Change image color",componentName:"ChangeImageColor",shortDescription:"Change color of images by changing the red, green and blue components of each pixel of the image.",longDescription:"Change color of images by changing the red, green and blue components of each pixel of the image.",slug:"change-image-color",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Change image hue",componentName:"ChangeImageHue",shortDescription:"Adjust the hue of images. Hue rotate images by specifying an angle around the color circle.",longDescription:"Adjust the hue of images. Hue rotate images by specifying an angle around the color circle.",slug:"change-image-hue",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Grayscale image online",componentName:"GrayscaleImage",shortDescription:"Convert images to grayscale.",longDescription:"Convert images to grayscale.",slug:"grayscale-image-online",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Sepia image online",componentName:"SepiaImage",shortDescription:"Convert images to sepia.",longDescription:"Convert images to sepia.",slug:"sepia-image-online",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Blur image online",componentName:"BlurImage",shortDescription:"Apply Gaussian blur filter to images.",longDescription:"Apply Gaussian blur filter to images.",slug:"blur-image-online",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:null},{name:"Button generator",componentName:"ButtonGenerator",shortDescription:"Easily generate button images with different styles.",longDescription:"Easily generate button images with different styles for websites, games, apps, ads or anything you want. Customize text font, size, colors, outline, border, shadow, emboss and more. Export to PNG.",slug:"button-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/button.png",imageAltText:"button"},{name:"3D Text Generator",componentName:"3DTextGenerator",shortDescription:"Generate 3D texts and export to PNG. Customize font, colors, text geometry, rotation, shadow, bevel, camera position and rotation, lights and more.",longDescription:"Generate 3D texts and export to PNG. Customize font, colors, text geometry, rotation, shadow, bevel, camera position and rotation, lights and more.",slug:"3d-text-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/3D-text.png",imageAltText:"3D text"},{name:"Create images using math equations",componentName:"CreateImagesUsingMathEquations",shortDescription:"Generate images from mathematical formulas.",longDescription:'Generate images from mathematical formulas. Create a math equation for each RGB color channel, based on "x" and "y" position of the pixel in the image.',slug:"create-images-using-math-equations",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/image-created-with-math-equations.png",imageAltText:"Create images using math equations"},{name:"Procedural Image Generator",componentName:"ProceduralImageGeneratorWithMathEquations",shortDescription:"Create images procedurally from basic shapes and mathematical formulas.",longDescription:"Create images procedurally from basic shapes and mathematical formulas, including trigonometric functions and other math functions.",slug:"procedural-image-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/procedural-image-generator.png",imageAltText:"Procedural Image Generator"},{name:"Procedural Animation Generator",componentName:"ProceduralAnimationGenerator",shortDescription:"Create animations from basic shapes and mathematical formulas.",longDescription:"Create animations from basic shapes and mathematical formulas, including trigonometric functions and other math functions.",slug:"procedural-animation-generator",type:"ANIMATION_GENERATOR_TOOL",image:"/images/tools/procedural-animation-generator.png",imageAltText:"Procedural Animation Generator"},{name:"Sunburst Generator",componentName:"SunburstGenerator",shortDescription:"Generate sunburst background images.",longDescription:"Generate sunburst background images.",slug:"sunburst-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/sunburst-background.png",imageAltText:"Sunburst"},{name:"Concentric Circles Generator",componentName:"ConcentricCirclesImageGenerator",shortDescription:"Generate background images with concentric circles.",longDescription:"Generate background images with concentric circles.",slug:"concentric-circles-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/concentric-circles.png",imageAltText:"Concentric circles background"},{name:"Checkerboard Generator",componentName:"CheckerboardGenerator",shortDescription:"Generate checkerboard images.",longDescription:"Generate checkerboard images.",slug:"checkerboard-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/checkerboard.png",imageAltText:"Checkerboard"},{name:"Three Color Checkerboard Generator",componentName:"ThreeColorCheckerboardGenerator",shortDescription:"Generate checkerboard patterns with 3 colors.",longDescription:"Generate checkerboard patterns with 3 colors.",slug:"three-color-checkerboard-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/three-color-checkerboard.png",imageAltText:"Three Color Checkerboard"},{name:"RGB Split Effect",componentName:"RgbSplitEffect",shortDescription:"Transform images by applying RGB split filter. Separate the red, green and blue color channels of images and adjust X and Y offsets, to create glitch-like effects.",longDescription:"Transform images by applying RGB split filter. Separate the red, green and blue color channels of images and adjust X and Y offsets, to create glitch-like effects.",slug:"rgb-split-effect",type:"IMAGE_EDITOR_TOOL",image:null,imageAltText:"RGB Split Effect"},{name:"QR Code Generator",componentName:"QrCodeGenerator",shortDescription:"Generate QR codes and export to PNG or SVG.",longDescription:"Generate QR codes and export to PNG or SVG.",slug:"qr-code-generator",type:"IMAGE_GENERATOR_TOOL",image:"/images/tools/qr-code.png",imageAltText:"QR Code"}];return e}};t["Z"]=n}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(m=0;m<e.length;m++){o=e[m][0],a=e[m][1],r=e[m][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{79:"6bf2374e",138:"a66f3ce4",154:"b17c369d",175:"9a730ec6",241:"9a4b8c16",247:"206bd4d8",286:"bc44ce1c",311:"64230d9a",342:"984d8b99",371:"ab79912f",415:"221f60e1",458:"36e42b18",525:"763cf735",553:"06eb96ca",558:"bb22b6a2",587:"e8b2a8fc",603:"73ea414e",625:"c4ad9cd8",655:"ab55447b",668:"9ba94f86",701:"e1d27351",706:"15fce0ef",724:"f8ffaac0",728:"3bac9f33",743:"3b4ff423",762:"682b8f17",765:"754affc0",787:"65e2171e",876:"e5fdd2db",883:"99833b23",888:"7c089449",957:"7096fde2",986:"6fbfee06"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{79:"d57e3a68",138:"8407695c",154:"079e7b03",175:"11eb742f",241:"1f1b314c",247:"9adafb19",286:"c0de368b",311:"ba4de270",342:"8a6ebf0d",371:"debd5ac2",415:"d57e3a68",458:"d21bfc54",525:"159f702a",553:"cfc64b91",558:"d57e3a68",587:"ac058c9c",625:"dd0b1cae",655:"cc478b8a",668:"885b4cb5",706:"d57e3a68",724:"95a064d3",728:"a8c431bd",743:"f4b8e437",762:"1f1b314c",765:"d57e3a68",787:"e05fe910",876:"dd0b1cae",883:"8a6ebf0d",888:"dd0b1cae",957:"7f0b1e04",986:"ea55652f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="image-online-tools:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var u=c[m];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={79:1,138:1,154:1,175:1,241:1,247:1,286:1,311:1,342:1,371:1,415:1,458:1,525:1,553:1,558:1,587:1,625:1,655:1,668:1,706:1,724:1,728:1,743:1,762:1,765:1,787:1,876:1,883:1,888:1,957:1,986:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var m=l(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},o=self["webpackChunkimage_online_tools"]=self["webpackChunkimage_online_tools"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6299)}));o=n.O(o)})();