(this["webpackJsonpr3f-template"]=this["webpackJsonpr3f-template"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(30),i=n.n(r),c=(n(66),n(67),n(115)),s=n(14),l=n(6),d=n(113),j=n(1),u=n(4),m=window.location.href+"/models/LowPolyJet.glb";d.a.preload(m);n(9),n(46);var f=n(116),h=(n(109),{mouse:[0,0]}),b=window.location.href+"/models/geo.min.glb";d.a.preload(b,!0);var p=window.location.href+"/models/AnimationExperiment.glb";function O(e){var t=Object(o.useRef)(),n=180*Math.random();return Object(o.useEffect)((function(){t.current.position.x=e.animationOffset?e.animationOffset[0]:0,t.current.position.z=e.animationOffset?e.animationOffset[2]:0,t.current.rotation.x=n,t.current.rotation.y=n,t.current.rotation.z=n})),Object(s.e)((function(n){var o=n.clock,a=(1+Math.sin(1.5*o.getElapsedTime()))/2;t.current.position.y=a/3+e.animationOffset?e.animationOffset[1]:0,t.current.rotation.x=t.current.rotation.z+=.009})),Object(u.jsx)("group",Object(l.a)(Object(l.a)({},e),{},{dispose:null,children:Object(u.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,ref:t,children:[Object(u.jsx)("torusKnotBufferGeometry",{args:[.5,.25,128,32]}),Object(u.jsx)(f.a,{color:e.color,smoothShading:!0,roughness:0,metalness:1,distort:.1,speed:1})]})}))}d.a.preload(p);var x=n(110),g=n(62),w=n(49);function v(e){e.sceneIndex;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{makeDefault:!0,position:[0,0,10]}),Object(u.jsx)(o.Suspense,{fallback:null,children:Object(u.jsx)(g.a,{preset:"city",background:!1})})]})}var y=n(111),S=window.location.href+"/models/Robot.glb";d.a.preload(S);var M=window.location.href+"/models/OxygenContainer2.glb";function I(e){var t={clearcoat:1,clearcoatRoughness:0,metalness:.65,roughness:.3,normalMap:Object(y.a)(window.location.href+"/images/flakes.png"),normalScale:[.3,.3],"normalMap-wrapS":j.RepeatWrapping,"normalMap-wrapT":j.RepeatWrapping,"normalMap-repeat":[60,60],"normalMap-anisotropy":16,transmission:.99,transparent:!0,side:j.DoubleSide,opacity:.2,color:"teal"},n=Object(o.useRef)(),a=Object(d.a)(M),r=a.nodes,i=a.materials;return Object(u.jsxs)("group",Object(l.a)(Object(l.a)({ref:n},e),{},{dispose:null,children:[Object(u.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Container.geometry,material:i["Material.003"]}),Object(u.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.GlassDome.geometry,material:i.Glass,children:Object(u.jsx)("meshPhysicalMaterial",Object(l.a)({},t))}),Object(u.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Container001.geometry,material:i["Material.002"],position:[0,.01,0]})]}))}d.a.preload(M);var k=window.location.href+"/models/OxygenContainer2.glb";d.a.preload(k);var C=window.location.href+"/models/OxygenContainer2.glb";function F(e){var t={metalness:0,roughness:0,color:"#6cccf5",normalMap:Object(y.a)(window.location.href+"/images/flakes.png"),normalScale:[.3,.3],reflectivity:.5,"normalMap-wrapS":j.RepeatWrapping,"normalMap-wrapT":j.RepeatWrapping,"normalMap-repeat":[90,90],"normalMap-anisotropy":16,transmission:.9,transparent:!0,opacity:1,exposure:1,envMapIntensity:1},n=Object(o.useRef)(),a=Object(d.a)(C),r=a.nodes,i=a.materials;return Object(u.jsxs)("group",Object(l.a)(Object(l.a)({ref:n},e),{},{dispose:null,children:[Object(u.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Container.geometry,material:i["Material.003"]}),Object(u.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.GlassDome.geometry,material:i.Glass,children:Object(u.jsx)("meshPhysicalMaterial",Object(l.a)({},t))}),Object(u.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Container001.geometry,material:i["Material.002"],position:[0,.01,0]})]}))}d.a.preload(C);var R=window.location.href+"/models/AbstractSphere.glb";function E(e){var t=Object(o.useRef)(),n=Object(d.a)(R).nodes,a=180*Math.random();return Object(o.useEffect)((function(){t.current.position.x=e.animationOffset?e.animationOffset[0]:0,t.current.position.z=e.animationOffset?e.animationOffset[2]:0,t.current.rotation.x=a,t.current.rotation.y=a,t.current.rotation.z=a})),Object(s.e)((function(n){var o=n.clock,a=(1+Math.sin(1.5*o.getElapsedTime()))/2;t.current.position.y=a/3+e.animationOffset?e.animationOffset[1]:0,t.current.rotation.x=t.current.rotation.z+=.005})),Object(u.jsx)("group",Object(l.a)(Object(l.a)({ref:t},e),{},{dispose:null,position:[0,1.2,0],children:Object(u.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,geometry:n.Icosphere003.geometry,material:n.Icosphere003.material,scale:[1.06,1.06,1.06],children:[Object(u.jsx)("mesh",{geometry:n.Icosphere003.geometry,castShadow:!0,receiveShadow:!0,children:Object(u.jsx)(f.a,{color:e.color,flatShading:!0,roughness:1,metalness:.5,factor:15,speed:5})}),Object(u.jsx)("mesh",{geometry:n.Icosphere003.geometry,children:Object(u.jsx)("meshBasicMaterial",{wireframe:!0,color:e.color})})]})}))}d.a.preload(R);var P=n(112),D=n(114);function z(e){e.sceneIndex;var t=Object(w.a)("environment/lighting",{hdri:{hint:"HDRI Lighting",options:["city","sunset","forest"],value:"city"}}).hdri;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{makeDefault:!0,position:[0,4,13]}),Object(u.jsxs)(P.a,{adjustCamera:!1,intensity:.5,contactShadow:!0,shadows:!0,children:[Object(u.jsx)(D.a,{target:[1,1,0]}),Object(u.jsx)(F,{position:[0,0,0]}),Object(u.jsx)(O,{position:[0,2.5,0],rotation:[0,90,0]}),Object(u.jsx)(o.Suspense,{fallback:null,children:Object(u.jsx)(g.a,{preset:t,background:!1})})]})]})}function L(e){e.sceneIndex;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{makeDefault:!0,position:[0,4,13]}),Object(u.jsx)(D.a,{target:[1,1,0]}),Object(u.jsxs)(P.a,{adjustCamera:!1,intensity:.5,contactShadow:!0,shadows:!0,children:[Object(u.jsx)(I,{position:[-6,0,0],rotation:[0,90,0]}),Object(u.jsx)(E,{animationOffset:[-6,2,0],color:"black"}),Object(u.jsx)(E,{scale:[.7,.7,.7],animationOffset:[-6,2,0],color:"black"})]})]})}function T(e){e.sceneIndex;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{makeDefault:!0,position:[0,4,13]}),Object(u.jsx)(D.a,{target:[1,1,0]}),Object(u.jsxs)(P.a,{adjustCamera:!1,intensity:.5,contactShadow:!0,shadows:!0,children:[Object(u.jsx)(F,{rotation:[0,90,0],position:[12,0,0]}),Object(u.jsx)(E,{scale:[.7,.7,.7],animationOffset:[6,2,0],color:"red"})]})]})}var B=n(33),G=Object(B.a)((function(e){return{videoPaths:[window.location.href+"/video/composite/hex_hdri.mp4",window.location.href+"/video/composite/hexagons_forward.mp4"],videoIndex:0,switchVideos:function(){return e((function(e){return{videoIndex:(e.videoIndex+1)%e.videoPaths.length}}))},sceneIndex:0,selectScene0:function(){return e((function(){return{sceneIndex:0}}))},selectScene1:function(){return e((function(){return{sceneIndex:1}}))},selectScene2:function(){return e((function(){return{sceneIndex:2}}))},selectScene3:function(){return e((function(){return{sceneIndex:3}}))},bears:0,increasePopulation:function(){return e((function(e){return{bears:e.bears+1}}))},removeAllBears:function(){return e({bears:0})}}}));function W(){var e=[v,z,L,T],t=G((function(e){return e.sceneIndex}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{colorManagement:!0,invalidateFrameloop:!0,pixelRatio:[1,2],children:Object(u.jsx)(o.Suspense,{fallback:null,children:a.a.createElement(e[t])})}),Object(u.jsx)(c.a,{})]})}n(61);n(88);function A(){var e=G((function(e){return e.videoIndex})),t=G((function(e){return e.videoPaths}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo",children:Object(u.jsx)("source",{src:t[e],type:"video/mp4"})},t[e])})}function H(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(A,{})})}var J=function(){var e=function(e){h.mouse=[e.clientX/window.innerWidth*2-1,e.clientY/window.innerHeight*2-1]},t=G((function(e){return e.switchVideos})),n=G((function(e){return e.videoIndex})),a=G((function(e){return e.videoPaths})),r=function(e){t(),console.log(n),console.log(a)};return r.bind(this),Object(o.useEffect)((function(){console.log("HERE"),document.addEventListener("click",r,!1),document.addEventListener("mousemove",e,!1)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(H,{}),Object(u.jsx)(W,{})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),V()},66:function(e,t,n){},67:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.f3f9b868.chunk.js.map