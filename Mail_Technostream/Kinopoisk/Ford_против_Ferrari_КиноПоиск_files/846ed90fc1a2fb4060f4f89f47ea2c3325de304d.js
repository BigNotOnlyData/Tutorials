(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2MIm":function(t,e,r){"use strict";var n=r("Y3ZS");e.__esModule=!0,e.default=function(t){function e(e){return o.default.createElement(t,Object.assign({router:(0,a.useRouter)()},e))}e.getInitialProps=t.getInitialProps,e.origGetInitialProps=t.origGetInitialProps,!1;return e};var o=n(r("cDcd")),a=r("7xIC")},"5t7+":function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"7xIC":function(t,e,r){"use strict";var n=r("JiiP");function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r("pONU"),u=r("Y3ZS");e.__esModule=!0,e.useRouter=function(){return c.default.useContext(l.RouterContext)},e.makePublicRouterInstance=function(t){var e,r=t,n={},a=o(h);try{for(a.s();!(e=a.n()).done;){var i=e.value;"object"!==typeof r[i]?n[i]=r[i]:n[i]=Object.assign({},r[i])}}catch(u){a.e(u)}finally{a.f()}return n.events=s.default.events,d.forEach((function(t){n[t]=function(){return r[t].apply(r,arguments)}})),n},e.createRouter=e.withRouter=e.default=void 0;var c=u(r("cDcd")),s=i(r("L9lV"));e.Router=s.default,e.NextRouter=s.NextRouter;var l=r("wsRY"),f=u(r("2MIm"));e.withRouter=f.default;var p={router:null,readyCallbacks:[],ready:function(t){if(this.router)return t();this.readyCallbacks.push(t)}},h=["pathname","route","query","asPath","components","isFallback","basePath"],d=["push","replace","reload","back","prefetch","beforePopState"];function v(){if(!p.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}return p.router}Object.defineProperty(p,"events",{get:function(){return s.default.events}}),h.forEach((function(t){Object.defineProperty(p,t,{get:function(){return v()[t]}})})),d.forEach((function(t){p[t]=function(){var e=v();return e[t].apply(e,arguments)}})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((function(t){p.ready((function(){s.default.events.on(t,(function(){var e="on"+t.charAt(0).toUpperCase()+t.substring(1),r=p;if(r[e])try{r[e].apply(r,arguments)}catch(n){console.error("Error when running the Router event: "+e),console.error(n.message+"\n"+n.stack)}}))}))}));var y=p;e.default=y;e.createRouter=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return p.router=n(s.default,e),p.readyCallbacks.forEach((function(t){return t()})),p.readyCallbacks=[],p.router}},JiiP:function(t,e,r){var n=r("w7mb");function o(e,r,a){return!function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?t.exports=o=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a}:t.exports=o=Reflect.construct,o.apply(null,arguments)}t.exports=o},L9lV:function(t,e,r){"use strict";var n=r("IebI"),o=r("x3oR"),a=r("zQIG"),i=r("8mBC"),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=r("cRaD"),s=u(r("YBsB")),l=r("fvxO"),f=r("Lko9"),p=r("TBBy"),h=r("uChv"),d="";function v(t){return 0!==t.indexOf(d)?d+t:t}function y(t){return 0===t.indexOf(d)?t.substr(d.length)||"/":t}function m(t){return t.replace(/\/$/,"")||"/"}e.addBasePath=v;var g=function(t){return m(t&&"/"!==t?t:"/index")};function _(t,e,r,n){var o=r?3:1;return function r(){return fetch(l.formatWithValidation({pathname:"/_next/data/".concat(__NEXT_DATA__.buildId).concat(t,".json"),query:e}),{credentials:"same-origin"}).then((function(t){if(!t.ok){if(--o>0&&t.status>=500)return r();throw new Error("Failed to load static props")}return t.json()}))}().then((function(t){return n?n(t):t})).catch((function(t){throw r||(t.code="PAGE_LOAD_ERROR"),t}))}var b=function(){function t(e,r,n,o){var i=this,u=o.initialProps,s=o.pageLoader,p=o.App,h=o.wrapApp,v=o.Component,y=o.err,b=o.subscription,w=o.isFallback;a(this,t),this.sdc={},this.onPopState=function(t){if(t.state){if((!t.state||!i.isSsr||t.state.as!==i.asPath||c.parse(t.state.url).pathname!==i.pathname)&&(!i._bps||i._bps(t.state))){var e=t.state,r=e.url,n=e.as,o=e.options;0,i.replace(r,n,o)}}else{var a=i.pathname,u=i.query;i.changeState("replaceState",l.formatWithValidation({pathname:a,query:u}),l.getURL())}},this._getStaticData=function(t){var e=g(c.parse(t).pathname);return i.sdc[e]?Promise.resolve(i.sdc[e]):_(e,null,i.isSsr,(function(t){return i.sdc[e]=t}))},this._getServerData=function(t){var e=c.parse(t,!0),r=e.pathname,n=e.query;return _(r=g(r),n,i.isSsr)},this.route=m(e),this.components={},"/_error"!==e&&(this.components[this.route]={Component:v,props:u,err:y,__N_SSG:u&&u.__N_SSG,__N_SSP:u&&u.__N_SSP}),this.components["/_app"]={Component:p},this.events=t.events,this.pageLoader=s,this.pathname=e,this.query=r,this.asPath=f.isDynamicRoute(e)&&__NEXT_DATA__.autoExport?e:n,this.basePath=d,this.sub=b,this.clc=null,this._wrapApp=h,this.isSsr=!0,this.isFallback=w,this.changeState("replaceState",l.formatWithValidation({pathname:e,query:r}),n),window.addEventListener("popstate",this.onPopState)}return i(t,[{key:"update",value:function(t,e){var r=e.default||e,n=this.components[t];if(!n)throw new Error("Cannot update unavailable route: ".concat(t));var o=Object.assign(Object.assign({},n),{Component:r,__N_SSG:e.__N_SSG,__N_SSP:e.__N_SSP});this.components[t]=o,"/_app"!==t?t===this.route&&this.notify(o):this.notify(this.components[this.route])}},{key:"reload",value:function(){window.location.reload()}},{key:"back",value:function(){window.history.back()}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("pushState",t,e,r)}},{key:"replace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("replaceState",t,e,r)}},{key:"change",value:function(e,r,n,o){var a=this;return new Promise((function(i,u){o._h||(a.isSsr=!1),l.ST&&performance.mark("routeChange");var s="object"===typeof r?l.formatWithValidation(r):r,d="object"===typeof n?l.formatWithValidation(n):n;if(s=v(s),d=v(d),a.abortComponentLoad(d),!o._h&&a.onlyAHashChange(d))return a.asPath=d,t.events.emit("hashChangeStart",d),a.changeState(e,s,d,o),a.scrollToHash(d),t.events.emit("hashChangeComplete",d),i(!0);var y=c.parse(s,!0),g=y.pathname,_=y.query,b=y.protocol;if(!g||b)return i(!1);a.urlIsNew(d)||(e="replaceState");var w=m(g),S=o.shallow,P=void 0!==S&&S;if(f.isDynamicRoute(w)){var C=c.parse(d).pathname,R=h.getRouteRegex(w),k=p.getRouteMatcher(R)(C);if(k)Object.assign(_,k);else if(Object.keys(R.groups).filter((function(t){return!_[t]})).length>0)return u(new Error("The provided `as` value (".concat(C,") is incompatible with the `href` value (").concat(w,"). ")+"Read more: https://err.sh/zeit/next.js/incompatible-href-as"))}t.events.emit("routeChangeStart",d),a.getRouteInfo(w,g,_,d,P).then((function(r){var n=r.error;if(n&&n.cancelled)return i(!1);if(t.events.emit("beforeHistoryChange",d),a.changeState(e,s,d,o),a.set(w,g,_,d,r),n)throw t.events.emit("routeChangeError",n,d),n;return t.events.emit("routeChangeComplete",d),i(!0)}),u)}))}},{key:"changeState",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"pushState"===t&&l.getURL()===r||window.history[t]({url:e,as:r,options:n},"",r)}},{key:"getRouteInfo",value:function(t,e,r,n){var o=this,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=this.components[t];if(a&&i&&this.route===t)return Promise.resolve(i);var u=function t(a,i){return new Promise((function(u){return"PAGE_LOAD_ERROR"===a.code||i?(window.location.href=n,a.cancelled=!0,u({error:a})):a.cancelled?u({error:a}):void u(o.fetchComponent("/_error").then((function(t){var n=t.page,i={Component:n,err:a};return new Promise((function(t){o.getInitialProps(n,{err:a,pathname:e,query:r}).then((function(e){i.props=e,i.error=a,t(i)}),(function(e){console.error("Error in error page `getInitialProps`: ",e),i.error=a,i.props={},t(i)}))}))})).catch((function(e){return t(e,!0)})))}))};return new Promise((function(e,r){if(i)return e(i);o.fetchComponent(t).then((function(t){return e({Component:t.page,__N_SSG:t.mod.__N_SSG,__N_SSP:t.mod.__N_SSP})}),r)})).then((function(a){var i=a.Component,u=a.__N_SSG,c=a.__N_SSP;return o._getData((function(){return u?o._getStaticData(n):c?o._getServerData(n):o.getInitialProps(i,{pathname:e,query:r,asPath:n})})).then((function(e){return a.props=e,o.components[t]=a,a}))})).catch(u)}},{key:"set",value:function(t,e,r,n,o){this.isFallback=!1,this.route=t,this.pathname=e,this.query=r,this.asPath=n,this.notify(o)}},{key:"beforePopState",value:function(t){this._bps=t}},{key:"onlyAHashChange",value:function(t){if(!this.asPath)return!1;var e=this.asPath.split("#"),r=o(e,2),n=r[0],a=r[1],i=t.split("#"),u=o(i,2),c=u[0],s=u[1];return!(!s||n!==c||a!==s)||n===c&&a!==s}},{key:"scrollToHash",value:function(t){var e=t.split("#"),r=o(e,2)[1];if(""!==r){var n=document.getElementById(r);if(n)n.scrollIntoView();else{var a=document.getElementsByName(r)[0];a&&a.scrollIntoView()}}else window.scrollTo(0,0)}},{key:"urlIsNew",value:function(t){return this.asPath!==t}},{key:"prefetch",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,a){var i=c.parse(t),u=i.pathname,s=i.protocol;if(u&&!s){0;var l=y(m(u));Promise.all([e.pageLoader.prefetchData(t,y(r)),e.pageLoader[n.priority?"loadPage":"prefetch"](l)]).then((function(){return o()}),a)}}))}},{key:"fetchComponent",value:function(t){var e,r,o,a;return n.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=!1,r=this.clc=function(){e=!0},t=y(t),i.next=5,n.awrap(this.pageLoader.loadPage(t));case 5:if(o=i.sent,!e){i.next=10;break}throw(a=new Error('Abort fetching component for route: "'.concat(t,'"'))).cancelled=!0,a;case 10:return r===this.clc&&(this.clc=null),i.abrupt("return",o);case 12:case"end":return i.stop()}}),null,this,null,Promise)}},{key:"_getData",value:function(t){var e=this,r=!1,n=function(){r=!0};return this.clc=n,t().then((function(t){if(n===e.clc&&(e.clc=null),r){var o=new Error("Loading initial props cancelled");throw o.cancelled=!0,o}return t}))}},{key:"getInitialProps",value:function(t,e){var r=this.components["/_app"].Component,n=this._wrapApp(r);return e.AppTree=n,l.loadGetInitialProps(r,{AppTree:n,Component:t,router:this,ctx:e})}},{key:"abortComponentLoad",value:function(e){if(this.clc){var r=new Error("Route Cancelled");r.cancelled=!0,t.events.emit("routeChangeError",r,e),this.clc(),this.clc=null}}},{key:"notify",value:function(t){this.sub(t,this.components["/_app"].Component)}}],[{key:"_rewriteUrlForNextExport",value:function(t){return t}}]),t}();e.default=b,b.events=s.default()},Lko9:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=/\/\[[^/]+?\](?=\/|$)/;e.isDynamicRoute=function(t){return n.test(t)}},PoaP:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},TBBy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getRouteMatcher=function(t){var e=t.re,r=t.groups;return function(t){var n=e.exec(t);if(!n)return!1;var o=function(t){try{return decodeURIComponent(t)}catch(r){var e=new Error("failed to decode param");throw e.code="DECODE_FAILED",e}},a={};return Object.keys(r).forEach((function(t){var e=r[t],i=n[e.pos];void 0!==i&&(a[t]=~i.indexOf("/")?i.split("/").map((function(t){return o(t)})):e.repeat?[o(i)]:o(i))})),a}}},URuY:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}},YBsB:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=Object.create(null);return{on:function(e,r){(t[e]||(t[e]=[])).push(r)},off:function(e,r){t[e]&&t[e].splice(t[e].indexOf(r)>>>0,1)},emit:function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(t[e]||[]).slice().map((function(t){t.apply(void 0,n)}))}}}},pONU:function(t,e,r){var n=r("i2RQ");function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!==typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=a?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=t[i]}return r.default=t,e&&e.set(t,r),r}},uChv:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getRouteRegex=function(t){var e=(t.replace(/\/$/,"")||"/").replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&"),r={},n=1,o=e.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g,(function(t,e){var o=/^(\\\.){3}/.test(e);return r[e.replace(/\\([|\\{}()[\]^$+*?.-])/g,"$1").replace(/^\.{3}/,"")]={pos:n++,repeat:o},o?"/(.+?)":"/([^/]+?)"}));return{re:new RegExp("^"+o+"(?:/)?$","i"),groups:r}}},wsRY:function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("cDcd"));e.RouterContext=o.createContext(null)},x3oR:function(t,e,r){var n=r("5t7+"),o=r("URuY"),a=r("PoaP");t.exports=function(t,e){return n(t)||o(t,e)||a()}}}]);
//# sourceMappingURL=https://kinopoisk-frontend-internal.s3.mds.yandex.net/kinopoisk/release/_next/static/chunks/846ed90fc1a2fb4060f4f89f47ea2c3325de304d.ecc9f4f7a9e9ad721ba1.js.map