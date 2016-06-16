/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-userselect-setclasses !*/
!function(e,n,t){function r(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?C.className.baseVal=n:C.className=n)}function s(e,n){return typeof e===n}function o(){var e,n,t,r,o,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=s(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?Modernizr[l[0]]=r:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=r),g.push((r?"":"no-")+l.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var o in e)if(e[o]in n)return t===!1?e[o]:(r=n[e[o]],s(r,"function")?f(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function c(e,t,r,s){var o,l,a,f,u="modernizr",p=i("div"),c=d();if(parseInt(r,10))for(;r--;)a=i("div"),a.id=s?s[r]:u+(r+1),p.appendChild(a);return o=i("style"),o.type="text/css",o.id="s"+u,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),l=t(p,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=f,C.offsetHeight):p.parentNode.removeChild(p),!!l}function m(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(n[s])+":"+r+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,o){function f(){p&&(delete j.style,delete j.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var u=m(e,r);if(!s(u,"undefined"))return u}for(var p,d,c,h,v,y=["modernizr","tspan","samp"];!j.style&&y.length;)p=!0,j.modElem=i(y.shift()),j.style=j.modElem.style;for(c=e.length,d=0;c>d;d++)if(h=e[d],v=j.style[h],l(h,"-")&&(h=a(h)),j.style[h]!==t){if(o||s(r,"undefined"))return f(),"pfx"==n?h:!0;try{j.style[h]=r}catch(g){}if(j.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+z.join(i+" ")+i).split(" ");return s(n,"string")||s(n,"undefined")?h(l,n,r,o):(l=(e+" "+E.join(i+" ")+i).split(" "),u(l,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=n.documentElement,S="svg"===C.nodeName.toLowerCase(),w=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var x=_._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];_._prefixes=x;var b="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",b||P);var T="Moz O ms Webkit",z=_._config.usePrefixes?T.split(" "):[];_._cssomPrefixes=z;var E=_._config.usePrefixes?T.toLowerCase().split(" "):[];_._domPrefixes=E;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var j={style:N.elem.style};Modernizr._q.unshift(function(){delete j.style}),_.testAllProps=v,_.testAllProps=y,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=i("a");return e.style.cssText=x.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===t||n.documentMode>9)}),Modernizr.addTest("userselect",y("userSelect","none",!0)),o(),r(g),delete _.addTest,delete _.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);