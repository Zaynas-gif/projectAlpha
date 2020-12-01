/*! For license information please see main-bundled.js.LICENSE.txt */
(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),o=r(26),i=r(372),a=r(327),s=r(97),c=r(109),u=r(985),l=r(61);e.exports=function(e){return new Promise((function(t,r){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+h)}var v=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,r,i),p=null}},p.onabort=function(){p&&(r(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||u(v))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),f||(f=null),p.send(f)}))}},609:(e,t,r)=>{"use strict";var n=r(867),o=r(849),i=r(321),a=r(185);function s(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var c=s(r(655));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=r(263),c.CancelToken=r(972),c.isCancel=r(502),c.all=function(e){return Promise.all(e)},c.spread=r(713),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),o=r(327),i=r(782),a=r(572),s=r(185);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(s(n||{},{method:e,url:t,data:r}))}})),e.exports=c},782:(e,t,r)=>{"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},572:(e,t,r)=>{"use strict";var n=r(867),o=r(527),i=r(502),a=r(655);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(i,u),n.forEach(a,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(s,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var l=o.concat(i).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(f,u),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(867),o=r(16),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=r(448)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(i)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},856:function(e){e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,r=Object.isFrozen,n=Object.freeze,o=Object.seal,i=Object.create,a="undefined"!=typeof Reflect&&Reflect,s=a.apply,c=a.construct;s||(s=function(e,t,r){return e.apply(t,r)}),n||(n=function(e){return e}),o||(o=function(e){return e}),c||(c=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t))))});var u,l=T(Array.prototype.forEach),f=T(Array.prototype.pop),d=T(Array.prototype.push),p=T(String.prototype.toLowerCase),m=T(String.prototype.match),h=T(String.prototype.replace),v=T(String.prototype.indexOf),y=T(String.prototype.trim),g=T(RegExp.prototype.test),b=(u=TypeError,function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return c(u,t)});function T(e){return function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return s(e,t,n)}}function x(e,n){t&&t(e,null);for(var o=n.length;o--;){var i=n[o];if("string"==typeof i){var a=p(i);a!==i&&(r(n)||(n[o]=a),i=a)}e[i]=!0}return e}function A(t){var r=i(null),n=void 0;for(n in t)s(e,t,[n])&&(r[n]=t[n]);return r}var w=n(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),S=n(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),E=n(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=n(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),k=n(["#text"]),R=n(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),O=n(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),N=n(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),D=n(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),C=o(/\{\{[\s\S]*|[\s\S]*\}\}/gm),_=o(/<%[\s\S]*|[\s\S]*%>/gm),M=o(/^data-[\-\w.\u00B7-\uFFFF]/),j=o(/^aria-[\-\w]+$/),F=o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),H=o(/^(?:\w+script|data):/i),U=o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function I(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var q=function(){return"undefined"==typeof window?null:window},B=function(e,t){if("object"!==(void 0===e?"undefined":P(e))||"function"!=typeof e.createPolicy)return null;var r=null,n="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(n)&&(r=t.currentScript.getAttribute(n));var o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q(),r=function(t){return e(t)};if(r.version="2.2.2",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var o=t.document,i=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,c=t.Node,u=t.NodeFilter,T=t.NamedNodeMap,z=void 0===T?t.NamedNodeMap||t.MozNamedAttrMap:T,W=t.Text,G=t.Comment,V=t.DOMParser,X=t.trustedTypes;if("function"==typeof s){var K=i.createElement("template");K.content&&K.content.ownerDocument&&(i=K.content.ownerDocument)}var $=B(X,o),J=$&&Re?$.createHTML(""):"",Y=i,Z=Y.implementation,Q=Y.createNodeIterator,ee=Y.getElementsByTagName,te=Y.createDocumentFragment,re=o.importNode,ne={};try{ne=A(i).documentMode?i.documentMode:{}}catch(e){}var oe={};r.isSupported=Z&&void 0!==Z.createHTMLDocument&&9!==ne;var ie=C,ae=_,se=M,ce=j,ue=H,le=U,fe=F,de=null,pe=x({},[].concat(I(w),I(S),I(E),I(L),I(k))),me=null,he=x({},[].concat(I(R),I(O),I(N),I(D))),ve=null,ye=null,ge=!0,be=!0,Te=!1,xe=!1,Ae=!1,we=!1,Se=!1,Ee=!1,Le=!1,ke=!0,Re=!1,Oe=!0,Ne=!0,De=!1,Ce={},_e=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Me=null,je=x({},["audio","video","img","source","image","track"]),Fe=null,He=x({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ue=null,Pe=i.createElement("form"),Ie=function(e){Ue&&Ue===e||(e&&"object"===(void 0===e?"undefined":P(e))||(e={}),e=A(e),de="ALLOWED_TAGS"in e?x({},e.ALLOWED_TAGS):pe,me="ALLOWED_ATTR"in e?x({},e.ALLOWED_ATTR):he,Fe="ADD_URI_SAFE_ATTR"in e?x(A(He),e.ADD_URI_SAFE_ATTR):He,Me="ADD_DATA_URI_TAGS"in e?x(A(je),e.ADD_DATA_URI_TAGS):je,ve="FORBID_TAGS"in e?x({},e.FORBID_TAGS):{},ye="FORBID_ATTR"in e?x({},e.FORBID_ATTR):{},Ce="USE_PROFILES"in e&&e.USE_PROFILES,ge=!1!==e.ALLOW_ARIA_ATTR,be=!1!==e.ALLOW_DATA_ATTR,Te=e.ALLOW_UNKNOWN_PROTOCOLS||!1,xe=e.SAFE_FOR_TEMPLATES||!1,Ae=e.WHOLE_DOCUMENT||!1,Ee=e.RETURN_DOM||!1,Le=e.RETURN_DOM_FRAGMENT||!1,ke=!1!==e.RETURN_DOM_IMPORT,Re=e.RETURN_TRUSTED_TYPE||!1,Se=e.FORCE_BODY||!1,Oe=!1!==e.SANITIZE_DOM,Ne=!1!==e.KEEP_CONTENT,De=e.IN_PLACE||!1,fe=e.ALLOWED_URI_REGEXP||fe,xe&&(be=!1),Le&&(Ee=!0),Ce&&(de=x({},[].concat(I(k))),me=[],!0===Ce.html&&(x(de,w),x(me,R)),!0===Ce.svg&&(x(de,S),x(me,O),x(me,D)),!0===Ce.svgFilters&&(x(de,E),x(me,O),x(me,D)),!0===Ce.mathMl&&(x(de,L),x(me,N),x(me,D))),e.ADD_TAGS&&(de===pe&&(de=A(de)),x(de,e.ADD_TAGS)),e.ADD_ATTR&&(me===he&&(me=A(me)),x(me,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&x(Fe,e.ADD_URI_SAFE_ATTR),Ne&&(de["#text"]=!0),Ae&&x(de,["html","head","body"]),de.table&&(x(de,["tbody"]),delete ve.tbody),n&&n(e),Ue=e)},qe=function(e){d(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=J}},Be=function(e,t){try{d(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){d(r.removed,{attribute:null,from:t})}t.removeAttribute(e)},ze=function(e){var t=void 0,r=void 0;if(Se)e="<remove></remove>"+e;else{var n=m(e,/^[\r\n\t ]+/);r=n&&n[0]}var o=$?$.createHTML(e):e;try{t=(new V).parseFromString(o,"text/html")}catch(e){}if(!t||!t.documentElement){var a=(t=Z.createHTMLDocument("")).body;a.parentNode.removeChild(a.parentNode.firstElementChild),a.outerHTML=o}return e&&r&&t.body.insertBefore(i.createTextNode(r),t.body.childNodes[0]||null),ee.call(t,Ae?"html":"body")[0]},We=function(e){return Q.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,(function(){return u.FILTER_ACCEPT}),!1)},Ge=function(e){return!(e instanceof W||e instanceof G||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof z&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Ve=function(e){return"object"===(void 0===c?"undefined":P(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":P(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Xe=function(e,t,n){oe[e]&&l(oe[e],(function(e){e.call(r,t,n,Ue)}))},Ke=function(e){var t=void 0;if(Xe("beforeSanitizeElements",e,null),Ge(e))return qe(e),!0;if(m(e.nodeName,/[\u0080-\uFFFF]/))return qe(e),!0;var n=p(e.nodeName);if(Xe("uponSanitizeElement",e,{tagName:n,allowedTags:de}),("svg"===n||"math"===n)&&0!==e.querySelectorAll("p, br, form, table").length)return qe(e),!0;if(!Ve(e.firstElementChild)&&(!Ve(e.content)||!Ve(e.content.firstElementChild))&&g(/<[!/\w]/g,e.innerHTML)&&g(/<[!/\w]/g,e.textContent))return qe(e),!0;if(!de[n]||ve[n]){if(Ne&&!_e[n]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",$?$.createHTML(o):o)}catch(e){}return qe(e),!0}return"noscript"!==n&&"noembed"!==n||!g(/<\/no(script|embed)/i,e.innerHTML)?(xe&&3===e.nodeType&&(t=e.textContent,t=h(t,ie," "),t=h(t,ae," "),e.textContent!==t&&(d(r.removed,{element:e.cloneNode()}),e.textContent=t)),Xe("afterSanitizeElements",e,null),!1):(qe(e),!0)},$e=function(e,t,r){if(Oe&&("id"===t||"name"===t)&&(r in i||r in Pe))return!1;if(be&&g(se,t));else if(ge&&g(ce,t));else{if(!me[t]||ye[t])return!1;if(Fe[t]);else if(g(fe,h(r,le,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(r,"data:")||!Me[e])if(Te&&!g(ue,h(r,le,"")));else if(r)return!1}return!0},Je=function(e){var t=void 0,n=void 0,o=void 0,i=void 0;Xe("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:me};for(i=a.length;i--;){var c=t=a[i],u=c.name,l=c.namespaceURI;if(n=y(t.value),o=p(u),s.attrName=o,s.attrValue=n,s.keepAttr=!0,s.forceKeepAttr=void 0,Xe("uponSanitizeAttribute",e,s),n=s.attrValue,!s.forceKeepAttr&&(Be(u,e),s.keepAttr))if(g(/\/>/i,n))Be(u,e);else{xe&&(n=h(n,ie," "),n=h(n,ae," "));var d=e.nodeName.toLowerCase();if($e(d,o,n))try{l?e.setAttributeNS(l,u,n):e.setAttribute(u,n),f(r.removed)}catch(e){}}}Xe("afterSanitizeAttributes",e,null)}},Ye=function e(t){var r=void 0,n=We(t);for(Xe("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Xe("uponSanitizeShadowNode",r,null),Ke(r)||(r.content instanceof a&&e(r.content),Je(r));Xe("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e,n){var i=void 0,s=void 0,u=void 0,l=void 0,f=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ve(e)){if("function"!=typeof e.toString)throw b("toString is not a function");if("string"!=typeof(e=e.toString()))throw b("dirty is not a string, aborting")}if(!r.isSupported){if("object"===P(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Ve(e))return t.toStaticHTML(e.outerHTML)}return e}if(we||Ie(n),r.removed=[],"string"==typeof e&&(De=!1),De);else if(e instanceof c)1===(s=(i=ze("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?i=s:i.appendChild(s);else{if(!Ee&&!xe&&!Ae&&-1===e.indexOf("<"))return $&&Re?$.createHTML(e):e;if(!(i=ze(e)))return Ee?null:J}i&&Se&&qe(i.firstChild);for(var d=We(De?e:i);u=d.nextNode();)3===u.nodeType&&u===l||Ke(u)||(u.content instanceof a&&Ye(u.content),Je(u),l=u);if(l=null,De)return e;if(Ee){if(Le)for(f=te.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return ke&&(f=re.call(o,f,!0)),f}var p=Ae?i.outerHTML:i.innerHTML;return xe&&(p=h(p,ie," "),p=h(p,ae," ")),$&&Re?$.createHTML(p):p},r.setConfig=function(e){Ie(e),we=!0},r.clearConfig=function(){Ue=null,we=!1},r.isValidAttribute=function(e,t,r){Ue||Ie({});var n=p(e),o=p(t);return $e(n,o,r)},r.addHook=function(e,t){"function"==typeof t&&(oe[e]=oe[e]||[],d(oe[e],t))},r.removeHook=function(e){oe[e]&&f(oe[e])},r.removeHooks=function(e){oe[e]&&(oe[e]=[])},r.removeAllHooks=function(){oe={}},r}()}()}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(669),t=r.n(e),n=r(856),o=r.n(n);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.headerSearchIcon=document.querySelector(".header-search-icon"),this.overlay=document.querySelector(".search-overlay"),this.closeIcon=document.querySelector(".close-live-search"),this.inputField=document.querySelector("#live-search-field"),this.resaultsArea=document.querySelector(".live-search-results"),this.typingWaitTimer,this.previousValue="",this.loaderIcon=document.querySelector(".circle-loader"),this.events()}var r,n;return r=e,(n=[{key:"events",value:function(){var e=this;this.inputField.addEventListener("keyup",(function(){return e.keyPressHandler()})),this.closeIcon.addEventListener("click",(function(){return e.closeOverlay()})),this.headerSearchIcon.addEventListener("click",(function(t){t.preventDefault(),e.openOverlay()}))}},{key:"keyPressHandler",value:function(){var e=this,t=this.inputField.value;""==t&&(clearTimeout(this.typingWaitTimer),this.hideLoaderIcon(),this.hideResaultsArea()),""!=t&&t!=this.previousValue&&(clearTimeout(this.typingWaitTimer),this.showLoaderIcon(),this.hideResaultsArea(),this.typingWaitTimer=setTimeout((function(){return e.sendRequest()}),750)),this.previousValue=t}},{key:"sendRequest",value:function(){var e=this;t().post("/search",{searchTerm:this.inputField.value}).then((function(t){console.log(t.data),e.renderResaultsHTML(t.data)})).catch((function(){alert("Hello, the request failed.")}))}},{key:"renderResaultsHTML",value:function(e){e.length?this.resaultsArea.innerHTML=o().sanitize('<div class="list-group shadow-sm">\n            <div class="list-group-item active"><strong>Search Results</strong> ('.concat(e.length>1?"".concat(e.length," items found"):"1 item found",")</div>\n            ").concat(e.map((function(e){var t=new Date(e.createdDate);return'<a href="/post/'.concat(e._id,'" class="list-group-item list-group-item-action">\n                <img class="avatar-tiny" src="').concat(e.author.avatar,'"> <strong>').concat(e.title,'</strong>\n                <span class="text-muted small">by ').concat(e.author.username," on ").concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear(),"</span>\n              </a>")})).join(""),"\n          </div>")):this.resaultsArea.innerHTML='<p class="alert-danger text-center shadow-sm">Sprry, we could not find any resaults for the search.</p>',this.hideLoaderIcon(),this.showResaultsArea()}},{key:"showLoaderIcon",value:function(){this.loaderIcon.classList.add("circle-loader--visible")}},{key:"hideLoaderIcon",value:function(){this.loaderIcon.classList.remove("circle-loader--visible")}},{key:"showResaultsArea",value:function(){this.resaultsArea.classList.add("live-search-results--visible")}},{key:"hideResaultsArea",value:function(){this.resaultsArea.classList.remove("live-search-results--visible")}},{key:"openOverlay",value:function(){var e=this;this.overlay.classList.add("search-overlay--visible"),setTimeout((function(){return e.inputField.focus()}),50)}},{key:"closeOverlay",value:function(){this.overlay.classList.remove("search-overlay--visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",' <div class="search-overlay">\n        <div class="search-overlay-top shadow-sm">\n          <div class="container container--narrow">\n            <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>\n            <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">\n            <span class="close-live-search"><i class="fas fa-times-circle"></i></span>\n          </div>\n        </div>\n    \n        <div class="search-overlay-bottom">\n          <div class="container container--narrow py-3">\n            <div class="circle-loader"></div>\n            <div class="live-search-results"> </div>\n          </div>\n        </div>\n      </div>')}}])&&i(r.prototype,n),e}();document.querySelector(".header-search-icon")&&new a})()})();