"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[235],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=l(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,r(r({ref:e},d),{},{components:a})):n.createElement(m,r({ref:e},d))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2686:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],c={},s="Playing Modpacks",l={unversionedId:"modpacks/playing_modpacks",id:"modpacks/playing_modpacks",title:"Playing Modpacks",description:"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes.",source:"@site/docs/modpacks/playing_modpacks.md",sourceDirName:"modpacks",slug:"/modpacks/playing_modpacks",permalink:"/docs/modpacks/playing_modpacks",draft:!1,editUrl:"https://github.com/modrinth/docs/edit/master/docs/modpacks/playing_modpacks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Modpacks",permalink:"/docs/modpacks/creating_modpacks"},next:{title:"Modpack Format",permalink:"/docs/modpacks/format_definition"}},d={},p=[{value:"How do I create a modpack?",id:"how-do-i-create-a-modpack",level:2},{value:"How do I play a modpack?",id:"how-do-i-play-a-modpack",level:2},{value:"ATLauncher",id:"atlauncher",level:3},{value:"Hello Minecraft! Launcher (HMCL)",id:"hello-minecraft-launcher-hmcl",level:3},{value:"MultiMC and PolyMC",id:"multimc-and-polymc",level:3}],u={toc:p};function h(t){var e=t.components,c=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"playing-modpacks"},"Playing Modpacks"),(0,i.kt)("p",null,"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes."),(0,i.kt)("h2",{id:"how-do-i-create-a-modpack"},"How do I create a modpack?"),(0,i.kt)("p",null,"Please see the guide for ",(0,i.kt)("a",{parentName:"p",href:"/docs/modpacks/creating_modpacks"},"creating modpacks"),"."),(0,i.kt)("h2",{id:"how-do-i-play-a-modpack"},"How do I play a modpack?"),(0,i.kt)("p",null,"Currently, the easiest ways to play a Modrinth modpack are via ",(0,i.kt)("a",{parentName:"p",href:"https://atlauncher.com"},"ATLauncher")," or ",(0,i.kt)("a",{parentName:"p",href:"https://polymc.org"},"PolyMC"),". You can also install Modrinth packs if you switch to the development branch of ",(0,i.kt)("a",{parentName:"p",href:"https://multimc.org"},"MultiMC")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huanghongxun/HMCL"},"Hello Minecraft! Launcher (HMCL)"),"."),(0,i.kt)("h3",{id:"atlauncher"},"ATLauncher"),(0,i.kt)("p",null,"ATLauncher is a launcher focused on easy integration of modpacks with various different platforms."),(0,i.kt)("p",null,'Modrinth packs can be installed using ATLauncher in as few as three clicks. Go to the "Packs" tab, select Modrinth on the left, and search for the pack you want. Then, play!'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ATLauncher search",src:a(8558).Z,width:"1200",height:"700"})),(0,i.kt)("p",null,'If you just want to insert an ID, slug, or URL directly, you can also do so using the "Add Manually" button by the top-right of the search'),(0,i.kt)("p",null,'If you have a direct link to a Modrinth pack, you also have the option of importing it using the "Import" button in the "Instances" tab.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ATLauncher import",src:a(3299).Z,width:"1222",height:"658"})),(0,i.kt)("h3",{id:"hello-minecraft-launcher-hmcl"},"Hello Minecraft! Launcher (HMCL)"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must switch to the beta version of HMCL to install Modrinth packs. To check whether it is in beta version, go to Settings -> General and click Update to check if HMCL is a beta version. Otherwise, you will need to download the latest beta from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huanghongxun/HMCL/releases"},"GitHub releases"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Make sure you&#39;re using a beta version of HMCL",src:a(3351).Z,width:"863",height:"542"})),(0,i.kt)("p",null,"To install Modrinth packs in HMCL, just drag and drop the .mrpack file to the startup page. That's it!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drag and drop files",src:a(4375).Z,width:"1258",height:"542"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Install",src:a(572).Z,width:"863",height:"542"})),(0,i.kt)("h3",{id:"multimc-and-polymc"},"MultiMC and PolyMC"),(0,i.kt)("p",null,"MultiMC and PolyMC are both launchers focused on efficiently managing multiple separate instances, with the latter being a fork of the former. The installation instructions for each are identical."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'When using MultiMC, you must switch to the development branch to install Modrinth packs. To switch to the development version, click the "Settings" button at the top of the window, and change the "Update Channel" to "Development". Then, close the settings and press Update to swap to the development branch.'))),(0,i.kt)("p",null,'Modrinth packs can be installed using the "Add instance" button and clicking "Modrinth" on the left. It\'s as easy as selecting the one you want, and pressing "OK".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MultiMC",src:a(3733).Z,width:"1081",height:"740"})),(0,i.kt)("p",null,'If you want to insert a URL directly, you can do so by selecting "Import from zip" instead of "Modrinth".'))}h.isMDXComponent=!0},3351:function(t,e,a){e.Z=a.p+"assets/images/HMCL1-0cfbec8c99bc33caca4b4a1d80c58f50.png"},4375:function(t,e,a){e.Z=a.p+"assets/images/HMCL2-6237c87f301e721cc5270af285793086.png"},572:function(t,e,a){e.Z=a.p+"assets/images/HMCL3-1d1e8152a62c1e68d4471353b850f6e3.png"},3299:function(t,e,a){e.Z=a.p+"assets/images/atlauncherImport-ad3ecfc146d2bb72e9813b0d8e14c880.png"},8558:function(t,e,a){e.Z=a.p+"assets/images/atlauncherSearch-d68171dbb61d781b6c4d87e99b4aae64.png"},3733:function(t,e,a){e.Z=a.p+"assets/images/multimc-cf2ec668a27142c79cbe3acf922da593.png"}}]);