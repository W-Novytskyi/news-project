function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register("jQ7WT",(function(t,o){e(t.exports,"disableBodyScroll",(function(){return y})),e(t.exports,"clearAllBodyScrollLocks",(function(){return g})),e(t.exports,"enableBodyScroll",(function(){return w}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),d=[],l=!1,u=-1,c=void 0,a=void 0,s=void 0,m=function(e){return d.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!m(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},v=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)},p=function(){if(void 0!==a){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(t,e),a=void 0}},y=function(e,t){if(e){if(!d.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};d=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d),[o]),i?window.requestAnimationFrame((function(){if(void 0===a){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-u;!m(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?f(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",f,n?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},g=function(){i&&(d.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),l=!1),u=-1),i?p():v(),d=[]},w=function(e){e?(d=d.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,l&&0===d.length&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),l=!1)),i?p():v()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),(()=>{const e=r("jQ7WT"),t=document.querySelector(".menu-container"),o=document.querySelector(".menu__button"),n=document.querySelector(".header");o.addEventListener("click",(()=>{const r="true"===o.getAttribute("aria-expanded")||!1;t.classList.toggle("menu-container--open"),o.classList.toggle("menu__button--open"),n.classList.toggle("header--menu-open"),o.setAttribute("aria-expanded",!r);e[r?"enableBodyScroll":"disableBodyScroll"](document.body),window.matchMedia("(min-width: 768px)").addEventListener("change",(r=>{r.matches&&(t.classList.remove("menu-container--open"),n.classList.remove("header--menu-open"),o.classList.remove("menu__button--open"),o.setAttribute("aria-expanded",!1),e.enableBodyScroll(document.body))}))}))})();
//# sourceMappingURL=read.ffbc6442.js.map
