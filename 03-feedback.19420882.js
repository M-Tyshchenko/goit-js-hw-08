function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var r,i,o,u,f,a,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),l?y(e):u}function h(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=o}function O(){var e=v();if(h(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-a);return d?p(n,o-(e-c)):n}(e))}function S(e){return f=void 0,m&&r?y(e):(r=i=void 0,u)}function w(){var e=v(),n=h(e);if(r=arguments,i=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(O,t),y(a)}return void 0===f&&(f=setTimeout(O,t)),u}return t=g(t)||0,b(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(g(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=a=i=f=void 0},w.flush=function(){return void 0===f?u:S(v())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),j=document.querySelector("textarea"),h=document.querySelector("input");j.setAttribute("required","required"),h.setAttribute("required","required");let O={};function S(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),console.log(e),Object.entries(e).forEach((([e,t])=>{O[e]=t,y.elements[e].value=t})))}S(),y.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),S(),y.reset(),localStorage.removeItem("feedback-form-state"),O={}}));
//# sourceMappingURL=03-feedback.19420882.js.map
