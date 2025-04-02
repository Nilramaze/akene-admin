import{g2 as de}from"./strapi-BXowZxcM.js";var ne={exports:{}},te={exports:{}},d={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var t=typeof Symbol=="function"&&Symbol.for,g=t?Symbol.for("react.element"):60103,y=t?Symbol.for("react.portal"):60106,P=t?Symbol.for("react.fragment"):60107,h=t?Symbol.for("react.strict_mode"):60108,p=t?Symbol.for("react.profiler"):60114,b=t?Symbol.for("react.provider"):60109,_=t?Symbol.for("react.context"):60110,T=t?Symbol.for("react.async_mode"):60111,E=t?Symbol.for("react.concurrent_mode"):60111,S=t?Symbol.for("react.forward_ref"):60112,x=t?Symbol.for("react.suspense"):60113,D=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,j=t?Symbol.for("react.lazy"):60116,U=t?Symbol.for("react.block"):60121,W=t?Symbol.for("react.fundamental"):60117,z=t?Symbol.for("react.responder"):60118,q=t?Symbol.for("react.scope"):60119;function B(n){return typeof n=="string"||typeof n=="function"||n===P||n===E||n===p||n===h||n===x||n===D||typeof n=="object"&&n!==null&&(n.$$typeof===j||n.$$typeof===I||n.$$typeof===b||n.$$typeof===_||n.$$typeof===S||n.$$typeof===W||n.$$typeof===z||n.$$typeof===q||n.$$typeof===U)}function O(n){if(typeof n=="object"&&n!==null){var K=n.$$typeof;switch(K){case g:var L=n.type;switch(L){case T:case E:case P:case p:case h:case x:return L;default:var N=L&&L.$$typeof;switch(N){case _:case S:case j:case I:case b:return N;default:return K}}case y:return K}}}var F=T,J=E,M=_,X=b,C=g,A=S,G=P,H=j,e=I,r=y,u=p,f=h,a=x,s=!1;function i(n){return s||(s=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(n)||O(n)===T}function o(n){return O(n)===E}function c(n){return O(n)===_}function v(n){return O(n)===b}function l(n){return typeof n=="object"&&n!==null&&n.$$typeof===g}function R(n){return O(n)===S}function m(n){return O(n)===P}function w(n){return O(n)===j}function ue(n){return O(n)===I}function se(n){return O(n)===y}function ce(n){return O(n)===p}function le(n){return O(n)===h}function ve(n){return O(n)===x}d.AsyncMode=F,d.ConcurrentMode=J,d.ContextConsumer=M,d.ContextProvider=X,d.Element=C,d.ForwardRef=A,d.Fragment=G,d.Lazy=H,d.Memo=e,d.Portal=r,d.Profiler=u,d.StrictMode=f,d.Suspense=a,d.isAsyncMode=i,d.isConcurrentMode=o,d.isContextConsumer=c,d.isContextProvider=v,d.isElement=l,d.isForwardRef=R,d.isFragment=m,d.isLazy=w,d.isMemo=ue,d.isPortal=se,d.isProfiler=ce,d.isStrictMode=le,d.isSuspense=ve,d.isValidElementType=B,d.typeOf=O})();te.exports=d;var ae=te.exports;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ee=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;function Te(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function be(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var g={},y=0;y<10;y++)g["_"+String.fromCharCode(y)]=y;var P=Object.getOwnPropertyNames(g).map(function(p){return g[p]});if(P.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(p){h[p]=p}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ee=be()?Object.assign:function(t,g){for(var y,P=Te(t),h,p=1;p<arguments.length;p++){y=Object(arguments[p]);for(var b in y)ye.call(y,b)&&(P[b]=y[b]);if(ee){h=ee(y);for(var _=0;_<h.length;_++)pe.call(y,h[_])&&(P[h[_]]=y[h[_]])}}return P},ge="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ie=ge,oe=Function.call.bind(Object.prototype.hasOwnProperty),Q=function(){};{var he=ie,V={},Pe=oe;Q=function(t){var g="Warning: "+t;typeof console<"u"&&console.error(g);try{throw new Error(g)}catch{}}}function fe(t,g,y,P,h){for(var p in t)if(Pe(t,p)){var b;try{if(typeof t[p]!="function"){var _=Error((P||"React class")+": "+y+" type `"+p+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[p]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}b=t[p](g,p,P,y,null,he)}catch(E){b=E}if(b&&!(b instanceof Error)&&Q((P||"React class")+": type specification of "+y+" `"+p+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof b+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),b instanceof Error&&!(b.message in V)){V[b.message]=!0;var T=h?h():"";Q("Failed "+y+" type: "+b.message+(T??""))}}}fe.resetWarningCache=function(){V={}};var Oe=fe,me=ae,_e=Ee,Y=ie,Z=oe,re=Oe,$=function(){};$=function(t){var g="Warning: "+t;typeof console<"u"&&console.error(g);try{throw new Error(g)}catch{}};function k(){return null}var Re=function(t,g){var y=typeof Symbol=="function"&&Symbol.iterator,P="@@iterator";function h(e){var r=e&&(y&&e[y]||e[P]);if(typeof r=="function")return r}var p="<<anonymous>>",b={array:S("array"),bigint:S("bigint"),bool:S("boolean"),func:S("function"),number:S("number"),object:S("object"),string:S("string"),symbol:S("symbol"),any:x(),arrayOf:D,element:I(),elementType:j(),instanceOf:U,node:B(),objectOf:z,oneOf:W,oneOfType:q,shape:F,exact:J};function _(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r}function T(e,r){this.message=e,this.data=r&&typeof r=="object"?r:{},this.stack=""}T.prototype=Error.prototype;function E(e){var r={},u=0;function f(s,i,o,c,v,l,R){if(c=c||p,l=l||o,R!==Y){if(g){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}else if(typeof console<"u"){var w=c+":"+o;!r[w]&&u<3&&($("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[w]=!0,u++)}}return i[o]==null?s?i[o]===null?new T("The "+v+" `"+l+"` is marked as required "+("in `"+c+"`, but its value is `null`.")):new T("The "+v+" `"+l+"` is marked as required in "+("`"+c+"`, but its value is `undefined`.")):null:e(i,o,c,v,l)}var a=f.bind(null,!1);return a.isRequired=f.bind(null,!0),a}function S(e){function r(u,f,a,s,i,o){var c=u[f],v=C(c);if(v!==e){var l=A(c);return new T("Invalid "+s+" `"+i+"` of type "+("`"+l+"` supplied to `"+a+"`, expected ")+("`"+e+"`."),{expectedType:e})}return null}return E(r)}function x(){return E(k)}function D(e){function r(u,f,a,s,i){if(typeof e!="function")return new T("Property `"+i+"` of component `"+a+"` has invalid PropType notation inside arrayOf.");var o=u[f];if(!Array.isArray(o)){var c=C(o);return new T("Invalid "+s+" `"+i+"` of type "+("`"+c+"` supplied to `"+a+"`, expected an array."))}for(var v=0;v<o.length;v++){var l=e(o,v,a,s,i+"["+v+"]",Y);if(l instanceof Error)return l}return null}return E(r)}function I(){function e(r,u,f,a,s){var i=r[u];if(!t(i)){var o=C(i);return new T("Invalid "+a+" `"+s+"` of type "+("`"+o+"` supplied to `"+f+"`, expected a single ReactElement."))}return null}return E(e)}function j(){function e(r,u,f,a,s){var i=r[u];if(!me.isValidElementType(i)){var o=C(i);return new T("Invalid "+a+" `"+s+"` of type "+("`"+o+"` supplied to `"+f+"`, expected a single ReactElement type."))}return null}return E(e)}function U(e){function r(u,f,a,s,i){if(!(u[f]instanceof e)){var o=e.name||p,c=H(u[f]);return new T("Invalid "+s+" `"+i+"` of type "+("`"+c+"` supplied to `"+a+"`, expected ")+("instance of `"+o+"`."))}return null}return E(r)}function W(e){if(!Array.isArray(e))return arguments.length>1?$("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):$("Invalid argument supplied to oneOf, expected an array."),k;function r(u,f,a,s,i){for(var o=u[f],c=0;c<e.length;c++)if(_(o,e[c]))return null;var v=JSON.stringify(e,function(R,m){var w=A(m);return w==="symbol"?String(m):m});return new T("Invalid "+s+" `"+i+"` of value `"+String(o)+"` "+("supplied to `"+a+"`, expected one of "+v+"."))}return E(r)}function z(e){function r(u,f,a,s,i){if(typeof e!="function")return new T("Property `"+i+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var o=u[f],c=C(o);if(c!=="object")return new T("Invalid "+s+" `"+i+"` of type "+("`"+c+"` supplied to `"+a+"`, expected an object."));for(var v in o)if(Z(o,v)){var l=e(o,v,a,s,i+"."+v,Y);if(l instanceof Error)return l}return null}return E(r)}function q(e){if(!Array.isArray(e))return $("Invalid argument supplied to oneOfType, expected an instance of array."),k;for(var r=0;r<e.length;r++){var u=e[r];if(typeof u!="function")return $("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+G(u)+" at index "+r+"."),k}function f(a,s,i,o,c){for(var v=[],l=0;l<e.length;l++){var R=e[l],m=R(a,s,i,o,c,Y);if(m==null)return null;m.data&&Z(m.data,"expectedType")&&v.push(m.data.expectedType)}var w=v.length>0?", expected one of type ["+v.join(", ")+"]":"";return new T("Invalid "+o+" `"+c+"` supplied to "+("`"+i+"`"+w+"."))}return E(f)}function B(){function e(r,u,f,a,s){return M(r[u])?null:new T("Invalid "+a+" `"+s+"` supplied to "+("`"+f+"`, expected a ReactNode."))}return E(e)}function O(e,r,u,f,a){return new T((e||"React class")+": "+r+" type `"+u+"."+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function F(e){function r(u,f,a,s,i){var o=u[f],c=C(o);if(c!=="object")return new T("Invalid "+s+" `"+i+"` of type `"+c+"` "+("supplied to `"+a+"`, expected `object`."));for(var v in e){var l=e[v];if(typeof l!="function")return O(a,s,i,v,A(l));var R=l(o,v,a,s,i+"."+v,Y);if(R)return R}return null}return E(r)}function J(e){function r(u,f,a,s,i){var o=u[f],c=C(o);if(c!=="object")return new T("Invalid "+s+" `"+i+"` of type `"+c+"` "+("supplied to `"+a+"`, expected `object`."));var v=_e({},u[f],e);for(var l in v){var R=e[l];if(Z(e,l)&&typeof R!="function")return O(a,s,i,l,A(R));if(!R)return new T("Invalid "+s+" `"+i+"` key `"+l+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(u[f],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(e),null,"  "));var m=R(o,l,a,s,i+"."+l,Y);if(m)return m}return null}return E(r)}function M(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(M);if(e===null||t(e))return!0;var r=h(e);if(r){var u=r.call(e),f;if(r!==e.entries){for(;!(f=u.next()).done;)if(!M(f.value))return!1}else for(;!(f=u.next()).done;){var a=f.value;if(a&&!M(a[1]))return!1}}else return!1;return!0;default:return!1}}function X(e,r){return e==="symbol"?!0:r?r["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&r instanceof Symbol:!1}function C(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":X(r,e)?"symbol":r}function A(e){if(typeof e>"u"||e===null)return""+e;var r=C(e);if(r==="object"){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function G(e){var r=A(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}function H(e){return!e.constructor||!e.constructor.name?p:e.constructor.name}return b.checkPropTypes=re,b.resetWarningCache=re.resetWarningCache,b.PropTypes=b,b};{var Se=ae,Ce=!0;ne.exports=Re(Se.isElement,Ce)}var we=ne.exports;const xe=de(we);export{xe as P};
