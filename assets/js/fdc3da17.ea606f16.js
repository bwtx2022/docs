"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[235],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={},l="Playing Modpacks",s={unversionedId:"modpacks/playing_modpacks",id:"modpacks/playing_modpacks",isDocsHomePage:!1,title:"Playing Modpacks",description:"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes.",source:"@site/docs/modpacks/playing_modpacks.md",sourceDirName:"modpacks",slug:"/modpacks/playing_modpacks",permalink:"/docs/modpacks/playing_modpacks",editUrl:"https://github.com/modrinth/docs/edit/master/docs/modpacks/playing_modpacks.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Modpacks",permalink:"/docs/modpacks/creating_modpacks"},next:{title:"Modpack Format",permalink:"/docs/modpacks/format_definition"}},d=[{value:"How do I create a modpack?",id:"how-do-i-create-a-modpack",children:[]},{value:"How do I play a modpack?",id:"how-do-i-play-a-modpack",children:[{value:"ATLauncher",id:"atlauncher",children:[]},{value:"MultiMC and PolyMC",id:"multimc-and-polymc",children:[]}]}],p={toc:d};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"playing-modpacks"},"Playing Modpacks"),(0,r.kt)("p",null,"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes."),(0,r.kt)("h2",{id:"how-do-i-create-a-modpack"},"How do I create a modpack?"),(0,r.kt)("p",null,"Please see the guide for ",(0,r.kt)("a",{parentName:"p",href:"/docs/modpacks/creating_modpacks"},"creating modpacks"),"."),(0,r.kt)("h2",{id:"how-do-i-play-a-modpack"},"How do I play a modpack?"),(0,r.kt)("p",null,"Currently, the easiest ways to play a Modrinth modpack are via ",(0,r.kt)("a",{parentName:"p",href:"https://atlauncher.com"},"ATLauncher")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polymc.org"},"PolyMC"),". You can also install Modrinth packs if you switch to the development branch of ",(0,r.kt)("a",{parentName:"p",href:"https://multimc.org"},"MultiMC"),"."),(0,r.kt)("h3",{id:"atlauncher"},"ATLauncher"),(0,r.kt)("p",null,"ATLauncher is a launcher focused on easy integration of modpacks with various different platforms."),(0,r.kt)("p",null,'Modrinth packs can be installed using ATLauncher in as few as three clicks. Go to the "Packs" tab, select Modrinth on the left, and search for the pack you want. Then, play!'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ATLauncher search",src:n(3988).Z})),(0,r.kt)("p",null,'If you just want to insert an ID, slug, or URL directly, you can also do so using the "Add Manually" button by the top-right of the search'),(0,r.kt)("p",null,'If you have a direct link to a Modrinth pack, you also have the option of importing it using the "Import" button in the "Instances" tab.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ATLauncher import",src:n(6354).Z})),(0,r.kt)("h3",{id:"multimc-and-polymc"},"MultiMC and PolyMC"),(0,r.kt)("p",null,"MultiMC and PolyMC are both launchers focused on efficiently managing multiple separate instances, with the latter being a fork of the former. The installation instructions for each are identical."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'When using MultiMC, you must switch to the development branch to install Modrinth packs. To switch to the development version, click the "Settings" button at the top of the window, and change the "Update Channel" to "Development". Then, close the settings and press Update to swap to the development branch.'))),(0,r.kt)("p",null,'Modrinth packs can be installed using the "Add instance" button and clicking "Modrinth" on the left. It\'s as easy as selecting the one you want, and pressing "OK".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MultiMC",src:n(695).Z})),(0,r.kt)("p",null,'If you want to insert a URL directly, you can do so by selecting "Import from zip" instead of "Modrinth".'))}u.isMDXComponent=!0},6354:function(e,t,n){t.Z=n.p+"assets/images/atlauncherImport-ad3ecfc146d2bb72e9813b0d8e14c880.png"},3988:function(e,t,n){t.Z=n.p+"assets/images/atlauncherSearch-d68171dbb61d781b6c4d87e99b4aae64.png"},695:function(e,t,n){t.Z=n.p+"assets/images/multimc-cf2ec668a27142c79cbe3acf922da593.png"}}]);