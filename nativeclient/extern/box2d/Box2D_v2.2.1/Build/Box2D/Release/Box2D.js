var g=void 0,i=!0,j=null,k=!1;try{this.Module=Module,Module.test}catch(aa){this.Module=Module={}}var l="object"===typeof process&&"function"===typeof require,m="object"===typeof window,n="function"===typeof importScripts,ba=!m&&!l&&!n;"object"===typeof module&&(module.l=Module);
if(l){Module.print=function(a){process.stdout.write(a+"\n")};Module.printErr=function(a){process.stderr.write(a+"\n")};var ca=require("fs"),da=require("path");Module.read=function(a,b){var a=da.normalize(a),c=ca.readFileSync(a);!c&&a!=da.resolve(a)&&(a=path.join(__dirname,"..","src",a),c=ca.readFileSync(a));c&&!b&&(c=c.toString());return c};Module.readBinary=function(a){return Module.read(a,i)};Module.load=function(a){ea(read(a))};Module.arguments||(Module.arguments=process.argv.slice(2))}
ba&&(Module.print=print,"undefined"!=typeof printErr&&(Module.printErr=printErr),Module.read=read,Module.readBinary=function(a){return read(a,"binary")},Module.arguments||("undefined"!=typeof scriptArgs?Module.arguments=scriptArgs:"undefined"!=typeof arguments&&(Module.arguments=arguments)));m&&!n&&(Module.print||(Module.print=function(a){console.log(a)}),Module.printErr||(Module.printErr=function(a){console.log(a)}));
if(m||n)Module.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,k);b.send(j);return b.responseText},Module.arguments||"undefined"!=typeof arguments&&(Module.arguments=arguments);n&&(Module.print||(Module.print=function(){}),Module.load=importScripts);if(!n&&!m&&!l&&!ba)throw"Unknown runtime environment. Where are we?";function ea(a){eval.call(j,a)}"undefined"==!Module.load&&Module.read&&(Module.load=function(a){ea(Module.read(a))});Module.print||(Module.print=function(){});
Module.printErr||(Module.printErr=Module.print);Module.arguments||(Module.arguments=[]);Module.print=Module.print;Module.b=Module.printErr;Module.preRun||(Module.preRun=[]);Module.postRun||(Module.postRun=[]);function p(){return q}function fa(a){q=a}function ga(a,b,c){c&&c.length?(c.splice||(c=Array.prototype.slice.call(c)),c.splice(0,0,b),Module["dynCall_"+a].apply(j,c)):Module["dynCall_"+a].call(j,b)}
function ha(){var a=[],b=0;this.g=function(c){c&=255;b&&(a.push(c),b--);if(0==a.length){if(128>c)return String.fromCharCode(c);a.push(c);b=191<c&&224>c?1:2;return""}if(0<b)return"";var c=a[0],e=a[1],f=a[2],c=191<c&&224>c?String.fromCharCode((c&31)<<6|e&63):String.fromCharCode((c&15)<<12|(e&63)<<6|f&63);a.length=0;return c};this.h=function(a){for(var a=unescape(encodeURIComponent(a)),b=[],f=0;f<a.length;f++)b.push(a.charCodeAt(f));return b}}function r(a){var b=q;q=q+a|0;q=q+7>>3<<3;return b}
function ia(a){var b=t;t=t+a|0;t=t+7>>3<<3;return b}function v(a){var b=w;w=w+a|0;w=w+7>>3<<3;w>=x&&y("Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value, or (2) set Module.TOTAL_MEMORY before the program runs.");return b}function z(a,b){return Math.ceil(a/(b?b:8))*(b?b:8)}var A=4,ja={},B=k,C;function y(a){Module.print(a+":\n"+Error().stack);B=i;throw"Assertion: "+a;}function D(a,b){a||y("Assertion failed: "+b)}var ka=this;
Module.ccall=function(a,b,c,e){return la(ma(a),b,c,e)};function ma(a){try{var b=ka.Module["_"+a];b||(b=eval("_"+a))}catch(c){}D(b,"Cannot call unknown function "+a+" (perhaps LLVM optimizations or closure removed it?)");return b}
function la(a,b,c,e){function f(a,b){if("string"==b){if(a===j||a===g||0===a)return 0;h||(h=p());var c=r(a.length+1);na(a,c);return c}return"array"==b?(h||(h=p()),c=r(a.length),oa(a,c),c):a}var h=0,s=0,e=e?e.map(function(a){return f(a,c[s++])}):[];a=a.apply(j,e);"string"==b?b=pa(a):(D("array"!=b),b=a);h&&fa(h);return b}Module.cwrap=function(a,b,c){var e=ma(a);return function(){return la(e,b,c,Array.prototype.slice.call(arguments))}};
function ra(a,b,c){c=c||"i8";"*"===c.charAt(c.length-1)&&(c="i32");switch(c){case "i1":E[a]=b;break;case "i8":E[a]=b;break;case "i16":F[a>>1]=b;break;case "i32":G[a>>2]=b;break;case "i64":C=[b>>>0,Math.min(Math.floor(b/4294967296),4294967295)>>>0];G[a>>2]=C[0];G[a+4>>2]=C[1];break;case "float":H[a>>2]=b;break;case "double":I[a>>3]=b;break;default:y("invalid type for setValue: "+c)}}Module.setValue=ra;
Module.getValue=function(a,b){b=b||"i8";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return E[a];case "i8":return E[a];case "i16":return F[a>>1];case "i32":return G[a>>2];case "i64":return G[a>>2];case "float":return H[a>>2];case "double":return I[a>>3];default:y("invalid type for setValue: "+b)}return j};var K=2,sa=4;Module.ALLOC_NORMAL=0;Module.ALLOC_STACK=1;Module.ALLOC_STATIC=K;Module.ALLOC_DYNAMIC=3;Module.ALLOC_NONE=sa;
function L(a,b,c,e){var f,h;"number"===typeof a?(f=i,h=a):(f=k,h=a.length);var s="string"===typeof b?b:j,c=c==sa?e:[ta,r,ia,v][c===g?K:c](Math.max(h,s?1:b.length));if(f){e=c;D(0==(c&3));for(a=c+(h&-4);e<a;e+=4)G[e>>2]=0;for(a=c+h;e<a;)E[e++|0]=0;return c}if("i8"===s)return a.subarray||a.slice?M.set(a,c):M.set(new Uint8Array(a),c),c;for(var e=0,u,qa;e<h;){var J=a[e];"function"===typeof J&&(J=ja.n(J));f=s||b[e];0===f?e++:("i64"==f&&(f="i32"),ra(c+e,J,f),qa!==f&&(1==A?u=1:(u={"%i1":1,"%i8":1,"%i16":2,
"%i32":4,"%i64":8,"%float":4,"%double":8}["%"+f],u||("*"==f.charAt(f.length-1)?u=A:"i"==f[0]&&(u=parseInt(f.substr(1)),D(0==u%8),u/=8))),qa=f),e+=u)}return c}Module.allocate=L;function pa(a,b){for(var c=k,e,f=0;;){e=M[a+f|0];if(128<=e)c=i;else if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);var h="";if(!c){for(;0<b;)e=String.fromCharCode.apply(String,M.subarray(a,a+Math.min(b,1024))),h=h?h+e:e,a+=1024,b-=1024;return h}c=new ha;for(f=0;f<b;f++)e=M[a+f|0],h+=c.g(e);return h}
Module.Pointer_stringify=pa;var E,M,F,ua,G,N,H,I,va=0,t=0,wa=0,q=0,xa=0,ya=0,w=0,x=Module.TOTAL_MEMORY||16777216;D(!!Int32Array&&!!Float64Array&&!!(new Int32Array(1)).subarray&&!!(new Int32Array(1)).set,"Cannot fallback to non-typed array case: Code is too specialized");var O=new ArrayBuffer(x);E=new Int8Array(O);F=new Int16Array(O);G=new Int32Array(O);M=new Uint8Array(O);ua=new Uint16Array(O);N=new Uint32Array(O);H=new Float32Array(O);I=new Float64Array(O);G[0]=255;D(255===M[0]&&0===M[3],"Typed arrays 2 must be run on a little-endian system");
Module.HEAP=g;Module.HEAP8=E;Module.HEAP16=F;Module.HEAP32=G;Module.HEAPU8=M;Module.HEAPU16=ua;Module.HEAPU32=N;Module.HEAPF32=H;Module.HEAPF64=I;function P(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.m;"number"===typeof c?b.a===g?ga("v",c):ga("vi",c,[b.a]):c(b.a===g?j:b.a)}}}var Q=[],za=[],Aa=[],R=k;function S(a,b,c){a=(new ha).h(a);c&&(a.length=c);b||a.push(0);return a}Module.intArrayFromString=S;
Module.intArrayToString=function(a){for(var b=[],c=0;c<a.length;c++){var e=a[c];255<e&&(e&=255);b.push(String.fromCharCode(e))}return b.join("")};function na(a,b,c){a=S(a,c);for(c=0;c<a.length;)E[b+c|0]=a[c],c+=1}Module.writeStringToMemory=na;function oa(a,b){for(var c=0;c<a.length;c++)E[b+c|0]=a[c]}Module.writeArrayToMemory=oa;Math.imul||(Math.imul=function(a,b){var c=a&65535,e=b&65535;return c*e+((a>>>16)*e+c*(b>>>16)<<16)|0});var T=0,U={},Ba=k,Ca=j;
Module.addRunDependency=function(a){T++;Module.monitorRunDependencies&&Module.monitorRunDependencies(T);a?(D(!U[a]),U[a]=1):Module.b("warning: run dependency added without ID")};Module.removeRunDependency=function(a){T--;Module.monitorRunDependencies&&Module.monitorRunDependencies(T);a?(D(U[a]),delete U[a]):Module.b("warning: run dependency removed without ID");0==T&&(Ca!==j&&(clearInterval(Ca),Ca=j),!Ba&&Da&&Ea())};Module.preloadedImages={};Module.preloadedAudios={};va=8;t=va+496;Q=Q.concat([]);
L([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",sa,
8);var V=z(L(12,"i8",K),8);D(0==V%8);Module._memcpy=Fa;var W=0;function Ga(a){return G[W>>2]=a}function X(a){X.f||(w=w+4095>>12<<12,X.f=i,D(v),X.e=v,v=function(){y("cannot dynamically allocate, sbrk now has control")});var b=w;0!=a&&X.e(a);return b}Module._memset=Ha;Module._strlen=Ia;var Ja=k,Ka=k,La=k,Y=g,Z=g,Ma=[];function Na(){var a=Module.canvas;Ma.forEach(function(b){b(a.width,a.height)})}
function Oa(){var a=Module.canvas;this.k=a.width;this.j=a.height;a.width=screen.width;a.height=screen.height;a=N[SDL.screen+0*A>>2];G[SDL.screen+0*A>>2]=a|8388608;Na()}function Pa(){var a=Module.canvas;a.width=this.k;a.height=this.j;a=N[SDL.screen+0*A>>2];G[SDL.screen+0*A>>2]=a&-8388609;Na()}W=ia(4);G[W>>2]=0;
Module.requestFullScreen=function(a,b){function c(){Ka=k;(document.webkitFullScreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.fullScreenElement||document.fullscreenElement)===e?(e.c=document.cancelFullScreen||document.mozCancelFullScreen||document.webkitCancelFullScreen,e.c=e.c.bind(document),Y&&e.o(),Ka=i,Z&&Oa()):Z&&Pa();if(Module.onFullScreen)Module.onFullScreen(Ka)}Y=a;Z=b;"undefined"===typeof Y&&(Y=i);"undefined"===typeof Z&&
(Z=k);var e=Module.canvas;La||(La=i,document.addEventListener("fullscreenchange",c,k),document.addEventListener("mozfullscreenchange",c,k),document.addEventListener("webkitfullscreenchange",c,k));e.i=e.requestFullScreen||e.mozRequestFullScreen||(e.webkitRequestFullScreen?function(){e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:j);e.i()};
Module.requestAnimationFrame=function(a){window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout);window.requestAnimationFrame(a)};Module.pauseMainLoop=function(){};Module.resumeMainLoop=function(){Ja&&(Ja=k,j())};Module.getUserMedia=function(){window.d||(window.d=navigator.getUserMedia||navigator.mozGetUserMedia);window.d(g)};
wa=q=z(t);xa=wa+5242880;ya=w=z(xa);D(ya<x);var Qa=Math.min;
var $=(function(global,env,buffer) {
// EMSCRIPTEN_START_ASM
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=+env.NaN;var n=+env.Infinity;var o=0;var p=0;var q=0;var r=0;var s=0,t=0,u=0,v=0,w=0.0,x=0,y=0,z=0,A=0.0;var B=0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=global.Math.floor;var M=global.Math.abs;var N=global.Math.sqrt;var O=global.Math.pow;var P=global.Math.cos;var Q=global.Math.sin;var R=global.Math.tan;var S=global.Math.acos;var T=global.Math.asin;var U=global.Math.atan;var V=global.Math.atan2;var W=global.Math.exp;var X=global.Math.log;var Y=global.Math.ceil;var Z=global.Math.imul;var _=env.abort;var $=env.assert;var aa=env.asmPrintInt;var ab=env.asmPrintFloat;var ac=env.copyTempDouble;var ad=env.copyTempFloat;var ae=env.min;var af=env.invoke_ii;var ag=env.invoke_v;var ah=env.invoke_iii;var ai=env.invoke_vi;var aj=env._sbrk;var ak=env._sysconf;var al=env.___setErrNo;var am=env.___errno_location;var an=env._free;var ao=env._abort;var ap=env._time;
// EMSCRIPTEN_START_FUNCS
function au(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7>>3<<3;return b|0}function av(){return i|0}function aw(a){a=a|0;i=a}function ax(a,b){a=a|0;b=b|0;if((o|0)==0){o=a;p=b}}function ay(a){a=a|0;B=a}function az(a){a=a|0;C=a}function aA(a){a=a|0;D=a}function aB(a){a=a|0;E=a}function aC(a){a=a|0;F=a}function aD(a){a=a|0;G=a}function aE(a){a=a|0;H=a}function aF(a){a=a|0;I=a}function aG(a){a=a|0;J=a}function aH(a){a=a|0;K=a}function aI(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ab=0,ac=0,ad=0,ae=0,af=0,ag=0,ah=0,ai=0,al=0,an=0,aq=0,ar=0,as=0,at=0,au=0,av=0,aw=0,ax=0,ay=0,az=0,aA=0,aB=0,aC=0,aD=0,aE=0,aF=0,aG=0,aH=0,aI=0,aJ=0,aK=0,aL=0;do{if(a>>>0<245){if(a>>>0<11){b=16}else{b=a+11&-8}d=b>>>3;e=c[8]|0;f=e>>>(d>>>0);if((f&3|0)!=0){g=(f&1^1)+d|0;h=g<<1;i=72+(h<<2)|0;j=72+(h+2<<2)|0;h=c[j>>2]|0;k=h+8|0;l=c[k>>2]|0;do{if((i|0)==(l|0)){c[8]=e&(1<<g^-1)}else{if(l>>>0<(c[12]|0)>>>0){ao();return 0;return 0}m=l+12|0;if((c[m>>2]|0)==(h|0)){c[m>>2]=i;c[j>>2]=l;break}else{ao();return 0;return 0}}}while(0);l=g<<3;c[h+4>>2]=l|3;j=h+(l|4)|0;c[j>>2]=c[j>>2]|1;n=k;return n|0}if(b>>>0<=(c[10]|0)>>>0){o=b;break}if((f|0)!=0){j=2<<d;l=f<<d&(j|-j);j=(l&-l)-1|0;l=j>>>12&16;i=j>>>(l>>>0);j=i>>>5&8;m=i>>>(j>>>0);i=m>>>2&4;p=m>>>(i>>>0);m=p>>>1&2;q=p>>>(m>>>0);p=q>>>1&1;r=(j|l|i|m|p)+(q>>>(p>>>0))|0;p=r<<1;q=72+(p<<2)|0;m=72+(p+2<<2)|0;p=c[m>>2]|0;i=p+8|0;l=c[i>>2]|0;do{if((q|0)==(l|0)){c[8]=e&(1<<r^-1)}else{if(l>>>0<(c[12]|0)>>>0){ao();return 0;return 0}j=l+12|0;if((c[j>>2]|0)==(p|0)){c[j>>2]=q;c[m>>2]=l;break}else{ao();return 0;return 0}}}while(0);l=r<<3;m=l-b|0;c[p+4>>2]=b|3;q=p;e=q+b|0;c[q+(b|4)>>2]=m|1;c[q+l>>2]=m;l=c[10]|0;if((l|0)!=0){q=c[13]|0;d=l>>>3;l=d<<1;f=72+(l<<2)|0;k=c[8]|0;h=1<<d;do{if((k&h|0)==0){c[8]=k|h;s=f;t=72+(l+2<<2)|0}else{d=72+(l+2<<2)|0;g=c[d>>2]|0;if(g>>>0>=(c[12]|0)>>>0){s=g;t=d;break}ao();return 0;return 0}}while(0);c[t>>2]=q;c[s+12>>2]=q;c[q+8>>2]=s;c[q+12>>2]=f}c[10]=m;c[13]=e;n=i;return n|0}l=c[9]|0;if((l|0)==0){o=b;break}h=(l&-l)-1|0;l=h>>>12&16;k=h>>>(l>>>0);h=k>>>5&8;p=k>>>(h>>>0);k=p>>>2&4;r=p>>>(k>>>0);p=r>>>1&2;d=r>>>(p>>>0);r=d>>>1&1;g=c[336+((h|l|k|p|r)+(d>>>(r>>>0))<<2)>>2]|0;r=g;d=g;p=(c[g+4>>2]&-8)-b|0;while(1){g=c[r+16>>2]|0;if((g|0)==0){k=c[r+20>>2]|0;if((k|0)==0){break}else{u=k}}else{u=g}g=(c[u+4>>2]&-8)-b|0;k=g>>>0<p>>>0;r=u;d=k?u:d;p=k?g:p}r=d;i=c[12]|0;if(r>>>0<i>>>0){ao();return 0;return 0}e=r+b|0;m=e;if(r>>>0>=e>>>0){ao();return 0;return 0}e=c[d+24>>2]|0;f=c[d+12>>2]|0;do{if((f|0)==(d|0)){q=d+20|0;g=c[q>>2]|0;if((g|0)==0){k=d+16|0;l=c[k>>2]|0;if((l|0)==0){v=0;break}else{w=l;x=k}}else{w=g;x=q}while(1){q=w+20|0;g=c[q>>2]|0;if((g|0)!=0){w=g;x=q;continue}q=w+16|0;g=c[q>>2]|0;if((g|0)==0){break}else{w=g;x=q}}if(x>>>0<i>>>0){ao();return 0;return 0}else{c[x>>2]=0;v=w;break}}else{q=c[d+8>>2]|0;if(q>>>0<i>>>0){ao();return 0;return 0}g=q+12|0;if((c[g>>2]|0)!=(d|0)){ao();return 0;return 0}k=f+8|0;if((c[k>>2]|0)==(d|0)){c[g>>2]=f;c[k>>2]=q;v=f;break}else{ao();return 0;return 0}}}while(0);L78:do{if((e|0)!=0){f=d+28|0;i=336+(c[f>>2]<<2)|0;do{if((d|0)==(c[i>>2]|0)){c[i>>2]=v;if((v|0)!=0){break}c[9]=c[9]&(1<<c[f>>2]^-1);break L78}else{if(e>>>0<(c[12]|0)>>>0){ao();return 0;return 0}q=e+16|0;if((c[q>>2]|0)==(d|0)){c[q>>2]=v}else{c[e+20>>2]=v}if((v|0)==0){break L78}}}while(0);if(v>>>0<(c[12]|0)>>>0){ao();return 0;return 0}c[v+24>>2]=e;f=c[d+16>>2]|0;do{if((f|0)!=0){if(f>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[v+16>>2]=f;c[f+24>>2]=v;break}}}while(0);f=c[d+20>>2]|0;if((f|0)==0){break}if(f>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[v+20>>2]=f;c[f+24>>2]=v;break}}}while(0);if(p>>>0<16){e=p+b|0;c[d+4>>2]=e|3;f=r+(e+4|0)|0;c[f>>2]=c[f>>2]|1}else{c[d+4>>2]=b|3;c[r+(b|4)>>2]=p|1;c[r+(p+b|0)>>2]=p;f=c[10]|0;if((f|0)!=0){e=c[13]|0;i=f>>>3;f=i<<1;q=72+(f<<2)|0;k=c[8]|0;g=1<<i;do{if((k&g|0)==0){c[8]=k|g;y=q;z=72+(f+2<<2)|0}else{i=72+(f+2<<2)|0;l=c[i>>2]|0;if(l>>>0>=(c[12]|0)>>>0){y=l;z=i;break}ao();return 0;return 0}}while(0);c[z>>2]=e;c[y+12>>2]=e;c[e+8>>2]=y;c[e+12>>2]=q}c[10]=p;c[13]=m}f=d+8|0;if((f|0)==0){o=b;break}else{n=f}return n|0}else{if(a>>>0>4294967231){o=-1;break}f=a+11|0;g=f&-8;k=c[9]|0;if((k|0)==0){o=g;break}r=-g|0;i=f>>>8;do{if((i|0)==0){A=0}else{if(g>>>0>16777215){A=31;break}f=(i+1048320|0)>>>16&8;l=i<<f;h=(l+520192|0)>>>16&4;j=l<<h;l=(j+245760|0)>>>16&2;B=(14-(h|f|l)|0)+(j<<l>>>15)|0;A=g>>>((B+7|0)>>>0)&1|B<<1}}while(0);i=c[336+(A<<2)>>2]|0;L126:do{if((i|0)==0){C=0;D=r;E=0}else{if((A|0)==31){F=0}else{F=25-(A>>>1)|0}d=0;m=r;p=i;q=g<<F;e=0;while(1){B=c[p+4>>2]&-8;l=B-g|0;if(l>>>0<m>>>0){if((B|0)==(g|0)){C=p;D=l;E=p;break L126}else{G=p;H=l}}else{G=d;H=m}l=c[p+20>>2]|0;B=c[p+16+(q>>>31<<2)>>2]|0;j=(l|0)==0|(l|0)==(B|0)?e:l;if((B|0)==0){C=G;D=H;E=j;break}else{d=G;m=H;p=B;q=q<<1;e=j}}}}while(0);if((E|0)==0&(C|0)==0){i=2<<A;r=k&(i|-i);if((r|0)==0){o=g;break}i=(r&-r)-1|0;r=i>>>12&16;e=i>>>(r>>>0);i=e>>>5&8;q=e>>>(i>>>0);e=q>>>2&4;p=q>>>(e>>>0);q=p>>>1&2;m=p>>>(q>>>0);p=m>>>1&1;I=c[336+((i|r|e|q|p)+(m>>>(p>>>0))<<2)>>2]|0}else{I=E}if((I|0)==0){J=D;K=C}else{p=I;m=D;q=C;while(1){e=(c[p+4>>2]&-8)-g|0;r=e>>>0<m>>>0;i=r?e:m;e=r?p:q;r=c[p+16>>2]|0;if((r|0)!=0){p=r;m=i;q=e;continue}r=c[p+20>>2]|0;if((r|0)==0){J=i;K=e;break}else{p=r;m=i;q=e}}}if((K|0)==0){o=g;break}if(J>>>0>=((c[10]|0)-g|0)>>>0){o=g;break}q=K;m=c[12]|0;if(q>>>0<m>>>0){ao();return 0;return 0}p=q+g|0;k=p;if(q>>>0>=p>>>0){ao();return 0;return 0}e=c[K+24>>2]|0;i=c[K+12>>2]|0;do{if((i|0)==(K|0)){r=K+20|0;d=c[r>>2]|0;if((d|0)==0){j=K+16|0;B=c[j>>2]|0;if((B|0)==0){L=0;break}else{M=B;N=j}}else{M=d;N=r}while(1){r=M+20|0;d=c[r>>2]|0;if((d|0)!=0){M=d;N=r;continue}r=M+16|0;d=c[r>>2]|0;if((d|0)==0){break}else{M=d;N=r}}if(N>>>0<m>>>0){ao();return 0;return 0}else{c[N>>2]=0;L=M;break}}else{r=c[K+8>>2]|0;if(r>>>0<m>>>0){ao();return 0;return 0}d=r+12|0;if((c[d>>2]|0)!=(K|0)){ao();return 0;return 0}j=i+8|0;if((c[j>>2]|0)==(K|0)){c[d>>2]=i;c[j>>2]=r;L=i;break}else{ao();return 0;return 0}}}while(0);L176:do{if((e|0)!=0){i=K+28|0;m=336+(c[i>>2]<<2)|0;do{if((K|0)==(c[m>>2]|0)){c[m>>2]=L;if((L|0)!=0){break}c[9]=c[9]&(1<<c[i>>2]^-1);break L176}else{if(e>>>0<(c[12]|0)>>>0){ao();return 0;return 0}r=e+16|0;if((c[r>>2]|0)==(K|0)){c[r>>2]=L}else{c[e+20>>2]=L}if((L|0)==0){break L176}}}while(0);if(L>>>0<(c[12]|0)>>>0){ao();return 0;return 0}c[L+24>>2]=e;i=c[K+16>>2]|0;do{if((i|0)!=0){if(i>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[L+16>>2]=i;c[i+24>>2]=L;break}}}while(0);i=c[K+20>>2]|0;if((i|0)==0){break}if(i>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[L+20>>2]=i;c[i+24>>2]=L;break}}}while(0);do{if(J>>>0<16){e=J+g|0;c[K+4>>2]=e|3;i=q+(e+4|0)|0;c[i>>2]=c[i>>2]|1}else{c[K+4>>2]=g|3;c[q+(g|4)>>2]=J|1;c[q+(J+g|0)>>2]=J;i=J>>>3;if(J>>>0<256){e=i<<1;m=72+(e<<2)|0;r=c[8]|0;j=1<<i;do{if((r&j|0)==0){c[8]=r|j;O=m;P=72+(e+2<<2)|0}else{i=72+(e+2<<2)|0;d=c[i>>2]|0;if(d>>>0>=(c[12]|0)>>>0){O=d;P=i;break}ao();return 0;return 0}}while(0);c[P>>2]=k;c[O+12>>2]=k;c[q+(g+8|0)>>2]=O;c[q+(g+12|0)>>2]=m;break}e=p;j=J>>>8;do{if((j|0)==0){Q=0}else{if(J>>>0>16777215){Q=31;break}r=(j+1048320|0)>>>16&8;i=j<<r;d=(i+520192|0)>>>16&4;B=i<<d;i=(B+245760|0)>>>16&2;l=(14-(d|r|i)|0)+(B<<i>>>15)|0;Q=J>>>((l+7|0)>>>0)&1|l<<1}}while(0);j=336+(Q<<2)|0;c[q+(g+28|0)>>2]=Q;c[q+(g+20|0)>>2]=0;c[q+(g+16|0)>>2]=0;m=c[9]|0;l=1<<Q;if((m&l|0)==0){c[9]=m|l;c[j>>2]=e;c[q+(g+24|0)>>2]=j;c[q+(g+12|0)>>2]=e;c[q+(g+8|0)>>2]=e;break}if((Q|0)==31){R=0}else{R=25-(Q>>>1)|0}l=J<<R;m=c[j>>2]|0;while(1){if((c[m+4>>2]&-8|0)==(J|0)){break}S=m+16+(l>>>31<<2)|0;j=c[S>>2]|0;if((j|0)==0){T=151;break}else{l=l<<1;m=j}}if((T|0)==151){if(S>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[S>>2]=e;c[q+(g+24|0)>>2]=m;c[q+(g+12|0)>>2]=e;c[q+(g+8|0)>>2]=e;break}}l=m+8|0;j=c[l>>2]|0;i=c[12]|0;if(m>>>0<i>>>0){ao();return 0;return 0}if(j>>>0<i>>>0){ao();return 0;return 0}else{c[j+12>>2]=e;c[l>>2]=e;c[q+(g+8|0)>>2]=j;c[q+(g+12|0)>>2]=m;c[q+(g+24|0)>>2]=0;break}}}while(0);q=K+8|0;if((q|0)==0){o=g;break}else{n=q}return n|0}}while(0);K=c[10]|0;if(o>>>0<=K>>>0){S=K-o|0;J=c[13]|0;if(S>>>0>15){R=J;c[13]=R+o;c[10]=S;c[R+(o+4|0)>>2]=S|1;c[R+K>>2]=S;c[J+4>>2]=o|3}else{c[10]=0;c[13]=0;c[J+4>>2]=K|3;S=J+(K+4|0)|0;c[S>>2]=c[S>>2]|1}n=J+8|0;return n|0}J=c[11]|0;if(o>>>0<J>>>0){S=J-o|0;c[11]=S;J=c[14]|0;K=J;c[14]=K+o;c[K+(o+4|0)>>2]=S|1;c[J+4>>2]=o|3;n=J+8|0;return n|0}do{if((c[2]|0)==0){J=ak(8)|0;if((J-1&J|0)==0){c[4]=J;c[3]=J;c[5]=-1;c[6]=2097152;c[7]=0;c[119]=0;c[2]=ap(0)&-16^1431655768;break}else{ao();return 0;return 0}}}while(0);J=o+48|0;S=c[4]|0;K=o+47|0;R=S+K|0;Q=-S|0;S=R&Q;if(S>>>0<=o>>>0){n=0;return n|0}O=c[118]|0;do{if((O|0)!=0){P=c[116]|0;L=P+S|0;if(L>>>0<=P>>>0|L>>>0>O>>>0){n=0}else{break}return n|0}}while(0);L268:do{if((c[119]&4|0)==0){O=c[14]|0;L270:do{if((O|0)==0){T=181}else{L=O;P=480;while(1){U=P|0;M=c[U>>2]|0;if(M>>>0<=L>>>0){V=P+4|0;if((M+(c[V>>2]|0)|0)>>>0>L>>>0){break}}M=c[P+8>>2]|0;if((M|0)==0){T=181;break L270}else{P=M}}if((P|0)==0){T=181;break}L=R-(c[11]|0)&Q;if(L>>>0>=2147483647){W=0;break}m=aj(L|0)|0;e=(m|0)==((c[U>>2]|0)+(c[V>>2]|0)|0);X=e?m:-1;Y=e?L:0;Z=m;_=L;T=190}}while(0);do{if((T|0)==181){O=aj(0)|0;if((O|0)==-1){W=0;break}g=O;L=c[3]|0;m=L-1|0;if((m&g|0)==0){$=S}else{$=(S-g|0)+(m+g&-L)|0}L=c[116]|0;g=L+$|0;if(!($>>>0>o>>>0&$>>>0<2147483647)){W=0;break}m=c[118]|0;if((m|0)!=0){if(g>>>0<=L>>>0|g>>>0>m>>>0){W=0;break}}m=aj($|0)|0;g=(m|0)==(O|0);X=g?O:-1;Y=g?$:0;Z=m;_=$;T=190}}while(0);L290:do{if((T|0)==190){m=-_|0;if((X|0)!=-1){aa=Y;ab=X;T=201;break L268}do{if((Z|0)!=-1&_>>>0<2147483647&_>>>0<J>>>0){g=c[4]|0;O=(K-_|0)+g&-g;if(O>>>0>=2147483647){ac=_;break}if((aj(O|0)|0)==-1){aj(m|0);W=Y;break L290}else{ac=O+_|0;break}}else{ac=_}}while(0);if((Z|0)==-1){W=Y}else{aa=ac;ab=Z;T=201;break L268}}}while(0);c[119]=c[119]|4;ad=W;T=198}else{ad=0;T=198}}while(0);do{if((T|0)==198){if(S>>>0>=2147483647){break}W=aj(S|0)|0;Z=aj(0)|0;if(!((Z|0)!=-1&(W|0)!=-1&W>>>0<Z>>>0)){break}ac=Z-W|0;Z=ac>>>0>(o+40|0)>>>0;Y=Z?W:-1;if((Y|0)!=-1){aa=Z?ac:ad;ab=Y;T=201}}}while(0);do{if((T|0)==201){ad=(c[116]|0)+aa|0;c[116]=ad;if(ad>>>0>(c[117]|0)>>>0){c[117]=ad}ad=c[14]|0;L310:do{if((ad|0)==0){S=c[12]|0;if((S|0)==0|ab>>>0<S>>>0){c[12]=ab}c[120]=ab;c[121]=aa;c[123]=0;c[17]=c[2];c[16]=-1;S=0;do{Y=S<<1;ac=72+(Y<<2)|0;c[72+(Y+3<<2)>>2]=ac;c[72+(Y+2<<2)>>2]=ac;S=S+1|0;}while(S>>>0<32);S=ab+8|0;if((S&7|0)==0){ae=0}else{ae=-S&7}S=(aa-40|0)-ae|0;c[14]=ab+ae;c[11]=S;c[ab+(ae+4|0)>>2]=S|1;c[ab+(aa-36|0)>>2]=40;c[15]=c[6]}else{S=480;while(1){af=c[S>>2]|0;ag=S+4|0;ah=c[ag>>2]|0;if((ab|0)==(af+ah|0)){T=213;break}ac=c[S+8>>2]|0;if((ac|0)==0){break}else{S=ac}}do{if((T|0)==213){if((c[S+12>>2]&8|0)!=0){break}ac=ad;if(!(ac>>>0>=af>>>0&ac>>>0<ab>>>0)){break}c[ag>>2]=ah+aa;ac=c[14]|0;Y=(c[11]|0)+aa|0;Z=ac;W=ac+8|0;if((W&7|0)==0){ai=0}else{ai=-W&7}W=Y-ai|0;c[14]=Z+ai;c[11]=W;c[Z+(ai+4|0)>>2]=W|1;c[Z+(Y+4|0)>>2]=40;c[15]=c[6];break L310}}while(0);if(ab>>>0<(c[12]|0)>>>0){c[12]=ab}S=ab+aa|0;Y=480;while(1){al=Y|0;if((c[al>>2]|0)==(S|0)){T=223;break}Z=c[Y+8>>2]|0;if((Z|0)==0){break}else{Y=Z}}do{if((T|0)==223){if((c[Y+12>>2]&8|0)!=0){break}c[al>>2]=ab;S=Y+4|0;c[S>>2]=(c[S>>2]|0)+aa;S=ab+8|0;if((S&7|0)==0){an=0}else{an=-S&7}S=ab+(aa+8|0)|0;if((S&7|0)==0){aq=0}else{aq=-S&7}S=ab+(aq+aa|0)|0;Z=S;W=an+o|0;ac=ab+W|0;_=ac;K=(S-(ab+an|0)|0)-o|0;c[ab+(an+4|0)>>2]=o|3;do{if((Z|0)==(c[14]|0)){J=(c[11]|0)+K|0;c[11]=J;c[14]=_;c[ab+(W+4|0)>>2]=J|1}else{if((Z|0)==(c[13]|0)){J=(c[10]|0)+K|0;c[10]=J;c[13]=_;c[ab+(W+4|0)>>2]=J|1;c[ab+(J+W|0)>>2]=J;break}J=aa+4|0;X=c[ab+(J+aq|0)>>2]|0;if((X&3|0)==1){$=X&-8;V=X>>>3;L355:do{if(X>>>0<256){U=c[ab+((aq|8)+aa|0)>>2]|0;Q=c[ab+((aa+12|0)+aq|0)>>2]|0;R=72+(V<<1<<2)|0;do{if((U|0)!=(R|0)){if(U>>>0<(c[12]|0)>>>0){ao();return 0;return 0}if((c[U+12>>2]|0)==(Z|0)){break}ao();return 0;return 0}}while(0);if((Q|0)==(U|0)){c[8]=c[8]&(1<<V^-1);break}do{if((Q|0)==(R|0)){ar=Q+8|0}else{if(Q>>>0<(c[12]|0)>>>0){ao();return 0;return 0}m=Q+8|0;if((c[m>>2]|0)==(Z|0)){ar=m;break}ao();return 0;return 0}}while(0);c[U+12>>2]=Q;c[ar>>2]=U}else{R=S;m=c[ab+((aq|24)+aa|0)>>2]|0;P=c[ab+((aa+12|0)+aq|0)>>2]|0;do{if((P|0)==(R|0)){O=aq|16;g=ab+(J+O|0)|0;L=c[g>>2]|0;if((L|0)==0){e=ab+(O+aa|0)|0;O=c[e>>2]|0;if((O|0)==0){as=0;break}else{at=O;au=e}}else{at=L;au=g}while(1){g=at+20|0;L=c[g>>2]|0;if((L|0)!=0){at=L;au=g;continue}g=at+16|0;L=c[g>>2]|0;if((L|0)==0){break}else{at=L;au=g}}if(au>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[au>>2]=0;as=at;break}}else{g=c[ab+((aq|8)+aa|0)>>2]|0;if(g>>>0<(c[12]|0)>>>0){ao();return 0;return 0}L=g+12|0;if((c[L>>2]|0)!=(R|0)){ao();return 0;return 0}e=P+8|0;if((c[e>>2]|0)==(R|0)){c[L>>2]=P;c[e>>2]=g;as=P;break}else{ao();return 0;return 0}}}while(0);if((m|0)==0){break}P=ab+((aa+28|0)+aq|0)|0;U=336+(c[P>>2]<<2)|0;do{if((R|0)==(c[U>>2]|0)){c[U>>2]=as;if((as|0)!=0){break}c[9]=c[9]&(1<<c[P>>2]^-1);break L355}else{if(m>>>0<(c[12]|0)>>>0){ao();return 0;return 0}Q=m+16|0;if((c[Q>>2]|0)==(R|0)){c[Q>>2]=as}else{c[m+20>>2]=as}if((as|0)==0){break L355}}}while(0);if(as>>>0<(c[12]|0)>>>0){ao();return 0;return 0}c[as+24>>2]=m;R=aq|16;P=c[ab+(R+aa|0)>>2]|0;do{if((P|0)!=0){if(P>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[as+16>>2]=P;c[P+24>>2]=as;break}}}while(0);P=c[ab+(J+R|0)>>2]|0;if((P|0)==0){break}if(P>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[as+20>>2]=P;c[P+24>>2]=as;break}}}while(0);av=ab+(($|aq)+aa|0)|0;aw=$+K|0}else{av=Z;aw=K}J=av+4|0;c[J>>2]=c[J>>2]&-2;c[ab+(W+4|0)>>2]=aw|1;c[ab+(aw+W|0)>>2]=aw;J=aw>>>3;if(aw>>>0<256){V=J<<1;X=72+(V<<2)|0;P=c[8]|0;m=1<<J;do{if((P&m|0)==0){c[8]=P|m;ax=X;ay=72+(V+2<<2)|0}else{J=72+(V+2<<2)|0;U=c[J>>2]|0;if(U>>>0>=(c[12]|0)>>>0){ax=U;ay=J;break}ao();return 0;return 0}}while(0);c[ay>>2]=_;c[ax+12>>2]=_;c[ab+(W+8|0)>>2]=ax;c[ab+(W+12|0)>>2]=X;break}V=ac;m=aw>>>8;do{if((m|0)==0){az=0}else{if(aw>>>0>16777215){az=31;break}P=(m+1048320|0)>>>16&8;$=m<<P;J=($+520192|0)>>>16&4;U=$<<J;$=(U+245760|0)>>>16&2;Q=(14-(J|P|$)|0)+(U<<$>>>15)|0;az=aw>>>((Q+7|0)>>>0)&1|Q<<1}}while(0);m=336+(az<<2)|0;c[ab+(W+28|0)>>2]=az;c[ab+(W+20|0)>>2]=0;c[ab+(W+16|0)>>2]=0;X=c[9]|0;Q=1<<az;if((X&Q|0)==0){c[9]=X|Q;c[m>>2]=V;c[ab+(W+24|0)>>2]=m;c[ab+(W+12|0)>>2]=V;c[ab+(W+8|0)>>2]=V;break}if((az|0)==31){aA=0}else{aA=25-(az>>>1)|0}Q=aw<<aA;X=c[m>>2]|0;while(1){if((c[X+4>>2]&-8|0)==(aw|0)){break}aB=X+16+(Q>>>31<<2)|0;m=c[aB>>2]|0;if((m|0)==0){T=296;break}else{Q=Q<<1;X=m}}if((T|0)==296){if(aB>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[aB>>2]=V;c[ab+(W+24|0)>>2]=X;c[ab+(W+12|0)>>2]=V;c[ab+(W+8|0)>>2]=V;break}}Q=X+8|0;m=c[Q>>2]|0;$=c[12]|0;if(X>>>0<$>>>0){ao();return 0;return 0}if(m>>>0<$>>>0){ao();return 0;return 0}else{c[m+12>>2]=V;c[Q>>2]=V;c[ab+(W+8|0)>>2]=m;c[ab+(W+12|0)>>2]=X;c[ab+(W+24|0)>>2]=0;break}}}while(0);n=ab+(an|8)|0;return n|0}}while(0);Y=ad;W=480;while(1){aC=c[W>>2]|0;if(aC>>>0<=Y>>>0){aD=c[W+4>>2]|0;aE=aC+aD|0;if(aE>>>0>Y>>>0){break}}W=c[W+8>>2]|0}W=aC+(aD-39|0)|0;if((W&7|0)==0){aF=0}else{aF=-W&7}W=aC+((aD-47|0)+aF|0)|0;ac=W>>>0<(ad+16|0)>>>0?Y:W;W=ac+8|0;_=ab+8|0;if((_&7|0)==0){aG=0}else{aG=-_&7}_=(aa-40|0)-aG|0;c[14]=ab+aG;c[11]=_;c[ab+(aG+4|0)>>2]=_|1;c[ab+(aa-36|0)>>2]=40;c[15]=c[6];c[ac+4>>2]=27;c[W>>2]=c[120];c[W+4>>2]=c[484>>2];c[W+8>>2]=c[488>>2];c[W+12>>2]=c[492>>2];c[120]=ab;c[121]=aa;c[123]=0;c[122]=W;W=ac+28|0;c[W>>2]=7;if((ac+32|0)>>>0<aE>>>0){_=W;while(1){W=_+4|0;c[W>>2]=7;if((_+8|0)>>>0<aE>>>0){_=W}else{break}}}if((ac|0)==(Y|0)){break}_=ac-ad|0;W=Y+(_+4|0)|0;c[W>>2]=c[W>>2]&-2;c[ad+4>>2]=_|1;c[Y+_>>2]=_;W=_>>>3;if(_>>>0<256){K=W<<1;Z=72+(K<<2)|0;S=c[8]|0;m=1<<W;do{if((S&m|0)==0){c[8]=S|m;aH=Z;aI=72+(K+2<<2)|0}else{W=72+(K+2<<2)|0;Q=c[W>>2]|0;if(Q>>>0>=(c[12]|0)>>>0){aH=Q;aI=W;break}ao();return 0;return 0}}while(0);c[aI>>2]=ad;c[aH+12>>2]=ad;c[ad+8>>2]=aH;c[ad+12>>2]=Z;break}K=ad;m=_>>>8;do{if((m|0)==0){aJ=0}else{if(_>>>0>16777215){aJ=31;break}S=(m+1048320|0)>>>16&8;Y=m<<S;ac=(Y+520192|0)>>>16&4;W=Y<<ac;Y=(W+245760|0)>>>16&2;Q=(14-(ac|S|Y)|0)+(W<<Y>>>15)|0;aJ=_>>>((Q+7|0)>>>0)&1|Q<<1}}while(0);m=336+(aJ<<2)|0;c[ad+28>>2]=aJ;c[ad+20>>2]=0;c[ad+16>>2]=0;Z=c[9]|0;Q=1<<aJ;if((Z&Q|0)==0){c[9]=Z|Q;c[m>>2]=K;c[ad+24>>2]=m;c[ad+12>>2]=ad;c[ad+8>>2]=ad;break}if((aJ|0)==31){aK=0}else{aK=25-(aJ>>>1)|0}Q=_<<aK;Z=c[m>>2]|0;while(1){if((c[Z+4>>2]&-8|0)==(_|0)){break}aL=Z+16+(Q>>>31<<2)|0;m=c[aL>>2]|0;if((m|0)==0){T=331;break}else{Q=Q<<1;Z=m}}if((T|0)==331){if(aL>>>0<(c[12]|0)>>>0){ao();return 0;return 0}else{c[aL>>2]=K;c[ad+24>>2]=Z;c[ad+12>>2]=ad;c[ad+8>>2]=ad;break}}Q=Z+8|0;_=c[Q>>2]|0;m=c[12]|0;if(Z>>>0<m>>>0){ao();return 0;return 0}if(_>>>0<m>>>0){ao();return 0;return 0}else{c[_+12>>2]=K;c[Q>>2]=K;c[ad+8>>2]=_;c[ad+12>>2]=Z;c[ad+24>>2]=0;break}}}while(0);ad=c[11]|0;if(ad>>>0<=o>>>0){break}_=ad-o|0;c[11]=_;ad=c[14]|0;Q=ad;c[14]=Q+o;c[Q+(o+4|0)>>2]=_|1;c[ad+4>>2]=o|3;n=ad+8|0;return n|0}}while(0);c[am()>>2]=12;n=0;return n|0}function aJ(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=b|0;if((b&3)==(d&3)){while(b&3){if((e|0)==0)return f|0;a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function aK(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=b+e|0;if((e|0)>=20){d=d&255;e=b&3;g=d|d<<8|d<<16|d<<24;h=f&~3;if(e){e=b+4-e|0;while((b|0)<(e|0)){a[b]=d;b=b+1|0}}while((b|0)<(h|0)){c[b>>2]=g;b=b+4|0}}while((b|0)<(f|0)){a[b]=d;b=b+1|0}}function aL(b){b=b|0;var c=0;c=b;while(a[c]|0){c=c+1|0}return c-b|0}function aM(a,b){a=a|0;b=b|0;return aq[a&1](b|0)|0}function aN(a){a=a|0;ar[a&1]()}function aO(a,b,c){a=a|0;b=b|0;c=c|0;return as[a&1](b|0,c|0)|0}function aP(a,b){a=a|0;b=b|0;at[a&1](b|0)}function aQ(a){a=a|0;_(0);return 0}function aR(){_(1)}function aS(a,b){a=a|0;b=b|0;_(2);return 0}function aT(a){a=a|0;_(3)}
// EMSCRIPTEN_END_FUNCS
var aq=[aQ,aQ];var ar=[aR,aR];var as=[aS,aS];var at=[aT,aT];return{_malloc:aI,_strlen:aL,_memcpy:aJ,_memset:aK,stackAlloc:au,stackSave:av,stackRestore:aw,setThrew:ax,setTempRet0:ay,setTempRet1:az,setTempRet2:aA,setTempRet3:aB,setTempRet4:aC,setTempRet5:aD,setTempRet6:aE,setTempRet7:aF,setTempRet8:aG,setTempRet9:aH,dynCall_ii:aM,dynCall_v:aN,dynCall_iii:aO,dynCall_vi:aP}
// EMSCRIPTEN_END_ASM
})({Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array},{abort:y,assert:D,asmPrintInt:function(a,b){Module.print("int "+a+","+b)},asmPrintFloat:function(a,b){Module.print("float "+a+","+b)},copyTempDouble:function(a){E[V]=E[a];E[V+1]=E[a+1];E[V+2]=E[a+2];E[V+3]=E[a+3];E[V+4]=E[a+4];E[V+5]=E[a+5];E[V+6]=E[a+6];E[V+7]=E[a+
7]},copyTempFloat:function(a){E[V]=E[a];E[V+1]=E[a+1];E[V+2]=E[a+2];E[V+3]=E[a+3]},min:Qa,invoke_ii:function(a,b){try{return Module.dynCall_ii(a,b)}catch(c){if("number"!==typeof c&&"longjmp"!==c)throw c;$.setThrew(1,0)}},invoke_v:function(a){try{Module.dynCall_v(a)}catch(b){if("number"!==typeof b&&"longjmp"!==b)throw b;$.setThrew(1,0)}},invoke_iii:function(a,b,c){try{return Module.dynCall_iii(a,b,c)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;$.setThrew(1,0)}},invoke_vi:function(a,b){try{Module.dynCall_vi(a,
b)}catch(c){if("number"!==typeof c&&"longjmp"!==c)throw c;$.setThrew(1,0)}},_sbrk:X,_sysconf:function(a){switch(a){case 8:return 4096;case 54:case 56:case 21:case 61:case 63:case 22:case 67:case 23:case 24:case 25:case 26:case 27:case 69:case 28:case 101:case 70:case 71:case 29:case 30:case 199:case 75:case 76:case 32:case 43:case 44:case 80:case 46:case 47:case 45:case 48:case 49:case 42:case 82:case 33:case 7:case 108:case 109:case 107:case 112:case 119:case 121:return 200809;case 13:case 104:case 94:case 95:case 34:case 35:case 77:case 81:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 91:case 94:case 95:case 110:case 111:case 113:case 114:case 115:case 116:case 117:case 118:case 120:case 40:case 16:case 79:case 19:return-1;
case 92:case 93:case 5:case 72:case 6:case 74:case 92:case 93:case 96:case 97:case 98:case 99:case 102:case 103:case 105:return 1;case 38:case 66:case 50:case 51:case 4:return 1024;case 15:case 64:case 41:return 32;case 55:case 37:case 17:return 2147483647;case 18:case 1:return 47839;case 59:case 57:return 99;case 68:case 58:return 2048;case 0:return 2097152;case 3:return 65536;case 14:return 32768;case 73:return 32767;case 39:return 16384;case 60:return 1E3;case 106:return 700;case 52:return 256;
case 62:return 255;case 2:return 100;case 65:return 64;case 36:return 20;case 100:return 16;case 20:return 6;case 53:return 4;case 10:return 1}Ga(22);return-1},___setErrNo:Ga,___errno_location:function(){return W},_free:function(){},_abort:function(){B=i;throw"abort() at "+Error().stack;},_time:function(a){var b=Math.floor(Date.now()/1E3);a&&(G[a>>2]=b);return b},STACKTOP:q,STACK_MAX:xa,tempDoublePtr:V,ABORT:B,NaN:NaN,Infinity:Infinity},O),ta=Module._malloc=$._malloc,Ia=Module._strlen=$._strlen,Fa=
Module._memcpy=$._memcpy,Ha=Module._memset=$._memset;Module.dynCall_ii=$.dynCall_ii;Module.dynCall_v=$.dynCall_v;Module.dynCall_iii=$.dynCall_iii;Module.dynCall_vi=$.dynCall_vi;r=function(a){return $.stackAlloc(a)};p=function(){return $.stackSave()};fa=function(a){$.stackRestore(a)};
Module.callMain=function(a){function b(){for(var a=0;3>a;a++)e.push(0)}D(0==T,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");D(!Module.preRun||0==Module.preRun.length,"cannot call main when preRun functions remain to be called");a=a||[];R||(R=i,P(Q));var c=a.length+1,e=[L(S("/bin/this.program"),"i8",0)];b();for(var f=0;f<c-1;f+=1)e.push(L(S(a[f]),"i8",0)),b();e.push(0);var e=L(e,"i32",0),h,a=q;try{h=Module._main(c,e,0)}catch(s){if("ExitStatus"==s.name)return s.status;if("SimulateInfiniteLoop"==
s)Module.noExitRuntime=i;else throw s;}finally{q=a}return h};
function Ea(a){function b(){R||(R=i,P(Q));P(za);var b=0;Ba=i;Module._main&&Da&&(b=Module.callMain(a),Module.noExitRuntime||P(Aa));if(Module.postRun)for("function"==typeof Module.postRun&&(Module.postRun=[Module.postRun]);0<Module.postRun.length;)Module.postRun.pop()();return b}a=a||Module.arguments;if(0<T)return Module.b("run() called, but dependencies remain, so not running"),0;if(Module.preRun){"function"==typeof Module.preRun&&(Module.preRun=[Module.preRun]);var c=Module.preRun;Module.preRun=[];
for(var e=c.length-1;0<=e;e--)c[e]();if(0<T)return 0}return Module.setStatus?(Module.setStatus("Running..."),setTimeout(function(){setTimeout(function(){Module.setStatus("")},1);B||b()},1),0):b()}Module.run=Module.p=Ea;if(Module.preInit)for("function"==typeof Module.preInit&&(Module.preInit=[Module.preInit]);0<Module.preInit.length;)Module.preInit.pop()();var Da=i;Module.noInitialRun&&(Da=k);Ea();