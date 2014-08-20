// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 18
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var m=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},ea=function(a,b,c){ea=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:da;return ea.apply(null,arguments)},fa=null;Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return ea.apply(null,c)}return ea(this,a)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ha=function(a){if(null==a)return String(a);var b=ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ka=function(a){if(!a||"object"!=ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ia(a,"constructor")&&!ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return void 0===
c||ia(a,c)},la=function(a,b){var c=b||("array"==ha(a)?[]:{}),d;for(d in a)if(ia(a,d)){var e=a[d];"array"==ha(e)?("array"!=ha(c[d])&&(c[d]=[]),c[d]=la(e,c[d])):ka(e)?(ka(c[d])||(c[d]={}),c[d]=la(e,c[d])):c[d]=e}return c};var ma=function(){},w=function(a){return"function"==typeof a},x=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},na=function(a){return"number"==ha(a)&&!isNaN(a)},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},pa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},C=function(a){return Math.round(Number(a))||0},qa=function(a){var b=[];if(x(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));
return b},E=function(){return new Date},ra=function(a,b){if(!na(a)||!na(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},sa=function(){this.prefix="gtm.";this.ra={}};sa.prototype.set=function(a,b){this.ra[this.prefix+a]=b};sa.prototype.get=function(a){return this.ra[this.prefix+a]};sa.prototype.contains=function(a){return void 0!==this.get(a)};
var ta=function(a,b,c){try{return a["20"](a,b||ma,c||ma)}catch(d){}return!1},va=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=pa(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},wa=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},xa=function(a){for(var b=0;b<a.length;b++)a[b]()},ya=E().getTime(),za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Aa=function(a,
b,c){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=c};var F=window,I=document,Ba=navigator,K=function(a,b,c){var d=F[a],e="var "+a+";";if(m.execScript)m.execScript(e,"JavaScript");else if(m.eval)if(null==fa&&(m.eval("var _et_ = 1;"),"undefined"!=typeof m._et_?(delete m._et_,fa=!0):fa=!1),fa)m.eval(e);else{var f=m.document,g=f.createElement("script");g.type="text/javascript";g.defer=!1;g.appendChild(f.createTextNode(e));f.body.appendChild(g);f.body.removeChild(g)}else throw Error("goog.globalEval not available");F[a]=void 0===d||c?b:d;return F[a]},L=
function(a,b,c,d){return(d||"http:"!=F.location.protocol?a:b)+c},Ca=function(a){var b=I.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},Da=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},M=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Da(d,b);c&&(d.onerror=c);Ca(d)},Ea=function(a,b){var c=I.createElement("iframe");c.height="0";c.width=
"0";c.style.display="none";c.style.visibility="hidden";Ca(c);Da(c,b);void 0!==a&&(c.src=a);return c},k=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},N=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},O=function(a){F.setTimeout(a,0)},Ha=!1,Ia=[],Ja=function(a){if(!Ha){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=
a.type||c||!b&&d){Ha=!0;for(var e=0;e<Ia.length;e++)Ia[e]()}}},La=0,Ma=function(){if(!Ha&&140>La){La++;try{I.documentElement.doScroll("left"),Ja()}catch(a){F.setTimeout(Ma,50)}}},Na=function(a){var b=I.getElementById(a);if(b&&R(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(R(document.all[a][c],"id")==a)return document.all[a][c];return b},R=function(a,b){return a&&b&&a.attributes[b]?a.attributes[b].value:null},Oa=function(a){return a.target||a.srcElement||{}},Pa=function(a,b){for(var c={},
d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},Qa=!1,Ra=[],Sa=function(){if(!Qa){Qa=!0;for(var a=0;a<Ra.length;a++)Ra[a]()}},Ta=function(a){a=a||F;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)};var Ua=null,Va=null;var Wa=new sa,Xa={},Ya=ma,Za=[],$a=!1,bb={set:function(a,b){la(ab(a,b),Xa)},get:function(a){return S(a,2)}},cb=function(a){var b=!1;return function(){!b&&w(a)&&O(a);b=!0}},nb=function(){for(var a=!1;!$a&&0<Za.length;){$a=!0;var b=Za.shift();if(w(b))try{b.call(bb)}catch(c){}else if(x(b))e:{var d=b;if("string"==ha(d[0])){for(var e=d[0].split("."),f=e.pop(),g=d.slice(1),h=Xa,n=0;n<e.length;n++){if(void 0===h[e[n]])break e;h=h[e[n]]}try{h[f].apply(h,g)}catch(q){}}}else{var l=b,p=void 0;for(p in l)if(l.hasOwnProperty(p)){var r=
p,s=l[p];Wa.set(r,s);la(ab(r,s),Xa)}var H=!1,J=l.event;if(J){Va=J;var v=cb(l.eventCallback),U=l.eventTimeout;U&&F.setTimeout(v,Number(U));H=Ya(J,v)}if(!Ua&&(Ua=l["gtm.start"])){}Va=null;a=H||a}var P=b,Q=Xa;kb();$a=!1}return!a},S=function(a,b){if(2==b){for(var c=Xa,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return Wa.get(a)},ab=function(a,b){for(var c={},d=c,e=a.split("."),
f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var ob={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},pb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],
nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},qb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},fb=function(){var a=S("gtm.whitelist"),b=a&&qb(qa(a),ob),c=S("gtm.blacklist")||S("tagTypeBlacklist"),d=c&&qb(qa(c),pb),e={};return function(f){var g=f&&f["20"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)e:{if(0>oa(b,g.a))if(g.b&&0<g.b.length)for(var n=0;n<g.b.length;n++){if(0>
oa(b,g.b[n])){h=!1;break e}}else{h=!1;break e}h=!0}var q=!1;if(c){var l;if(!(l=0<=oa(d,g.a)))e:{for(var p=g.b||[],r=new sa,s=0;s<d.length;s++)r.set(d[s],!0);for(s=0;s<p.length;s++)if(r.get(p[s])){l=!0;break e}l=!1}q=l}return e[g.a]=!h||q}};var _k=function(a){for(var b=String(S("gtm.cookie")||I.cookie).split(";"),c=0;c<b.length;c++){var d=b[c].split("="),e=pa(d[0]);if(e&&e==a["27"])return pa(d.slice(1).join("="))}};_k.a="k";_k.b=[];var vb=function(a,b,c,d,e){var f=a.hash?a.href.replace(a.hash,""):a.href,g=(a.protocol.replace(":","")||F.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||F.location.hostname).split(":")[0].toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:F.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":var f="/"==a.pathname.substr(0,1)?a.pathname:"/"+
a.pathname,n=f.split("/");0<=oa(d||[],n[n.length-1])&&(n[n.length-1]="");f=n.join("/");break;case "query":f=a.search.replace("?","");if(e)e:{for(var q=f.split("&"),l=0;l<q.length;l++){var p=q[l].split("=");if(decodeURIComponent(p[0]).replace("+"," ")==e){f=decodeURIComponent(p.slice(1).join("=")).replace("+"," ");break e}}f=void 0}break;case "fragment":f=a.hash.replace("#","")}return f},wb=function(a){var b=I.createElement("a");b.href=a;return b};var _eu=function(a){var b=String(S("gtm.elementUrl")||a[""]||""),c=wb(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Va};_e.a="e";_e.b=["google"];var _v=function(a){var b=S(a["27"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(S("gtm.referrer")||I.referrer),c=wb(b);return b};_f.a="f";_f.b=["google"];var xb=function(a){var b=F.location,c=b.hash?b.href.replace(b.hash,""):b.href,d;if(d=a[""]?a[""]:S("gtm.url"))c=String(d),b=wb(c);var e,f,g;
a["8"]&&(c=vb(b,a["8"],e,f,g));return c},_u=xb;_u.a="u";_u.b=["google"];var _cn=function(a){return 0<=String(a["4"]).indexOf(String(a["5"]))};_cn.a="cn";_cn.b=["google"];var _eq=function(a){return String(a["4"])==String(a["5"])};_eq.a="eq";_eq.b=["google"];var _re=function(a){return(new RegExp(a["5"],a[""]?"i":void 0)).test(a["4"])};_re.a="re";_re.b=["google"];var _sw=function(a){return 0==String(a["4"]).indexOf(String(a["5"]))};_sw.a="sw";_sw.b=["google"];
var _asp=function(a,b,c){F.adroll_adv_id=a["11"];F.adroll_pix_id=a["28"];F.adroll_custom_data=a["10"];F.__adroll_loaded=!0;M(L("https://s","http://a",".adroll.com/j/roundtrip.js"),b,c)};_asp.a="asp";_asp.b=["nonGoogleScripts"];var Cb=/(Firefox\D28\D)/g.test(Ba.userAgent),Fb=function(a,b,c,d){return function(e){e=e||F.event;var f=Oa(e),g=!1;if(3!==e.which||"CLICK"!=a&&"LINK_CLICK"!=a)if(2!==e.which&&(null!=e.which||4!=e.button)||"LINK_CLICK"!=a)if("LINK_CLICK"==a&&(f=Pa(f,["a","area"]),g=!f||!f.href||e.ctrlKey||e.shiftKey||e.altKey||!0===e.metaKey),e.defaultPrevented||!1===e.returnValue||e.R&&e.R()){if(!c&&f){var h={simulateDefault:!1};Db(a,f,h,d)}}else{if(f){var h={},n=Db(a,f,h,d),g=g||n||"LINK_CLICK"==a&&Cb;h.simulateDefault=
!n&&b&&!g;h.simulateDefault&&(g=Eb(f,h)||g,!g&&e.preventDefault&&e.preventDefault());e.returnValue=n||!b||g;return e.returnValue}return!0}}},Db=function(a,b,c,d){var e=d||2E3,f={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||R(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":f.event="gtm.linkClick";f["gtm.elementUrl"]=b.href;f.eventTimeout=e;f.eventCallback=Gb(b,c);break;case "FORM_SUBMIT":f.event="gtm.formSubmit";var g=b.action;g&&
g.tagName&&(g=b.cloneNode(!1).action);f["gtm.elementUrl"]=g;f.eventTimeout=e;f.eventCallback=Hb(b,c);break;case "CLICK":f.event="gtm.click";f["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return F["dataLayer"].push(f)},Ib=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Eb=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(Ba.userAgent),e=Ib(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;
f=(e||"_self").substring(1);b.targetWindow=F.frames&&F.frames[f]||F[f];break;case "_blank":d?(b.simulateDefault=!1,c=!0):(b.targetWindowName="gtm_autoEvent_"+E().getTime(),b.targetWindow=F.open("",b.targetWindowName));break;default:d&&!F.frames[e]?(b.simulateDefault=!1,c=!0):(F.frames[e]||(b.targetWindowName=e),b.targetWindow=F.frames[e]||F.open("",e))}return c},Gb=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||E().getTime(),500>E().getTime()-
c&&F.setTimeout(Gb(a,b,c),25)))}},Hb=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);I.gtmSubmitFormNow=!0;Jb(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||E().getTime(),500>E().getTime()-c&&F.setTimeout(Hb(a,b,c),25)}},Kb=function(a,b,c,d){var e,f;switch(a){case "CLICK":if(I.gtmHasClickListenerTag)return;I.gtmHasClickListenerTag=!0;e="click";f=function(a){var b=Oa(a);b&&Db("CLICK",b,{},d);return!0};
break;case "LINK_CLICK":if(I.gtmHasLinkClickListenerTag)return;I.gtmHasLinkClickListenerTag=!0;e="click";f=Fb(a,b||!1,c||!1,d);break;case "FORM_SUBMIT":if(I.gtmHasFormSubmitListenerTag)return;I.gtmHasFormSubmitListenerTag=!0;e="submit";f=Fb(a,b||!1,c||!1,d);break;default:return}N(I,e,f,!1)},Jb=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;I.gtmFormElementSubmitter||(I.gtmFormElementSubmitter=
I.createElement("form"));return I.gtmFormElementSubmitter.submit.call?I.gtmFormElementSubmitter.submit:a.submit};var Nb=function(a,b){return a<b?-1:a>b?1:0};var Ob;e:{var Pb=m.navigator;if(Pb){var Qb=Pb.userAgent;if(Qb){Ob=Qb;break e}}Ob=""}var Rb=function(a){return-1!=Ob.indexOf(a)};var Sb=Rb("Opera")||Rb("OPR"),X=Rb("Trident")||Rb("MSIE"),Tb=Rb("Gecko")&&-1==Ob.toLowerCase().indexOf("webkit")&&!(Rb("Trident")||Rb("MSIE")),Ub=-1!=Ob.toLowerCase().indexOf("webkit"),Vb=function(){var a=m.document;return a?a.documentMode:void 0},Xb=function(){var a="",b;if(Sb&&m.opera){var c=m.opera.version;return"function"==aa(c)?c():c}Tb?b=/rv\:([^\);]+)(\)|;)/:X?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Ub&&(b=/WebKit\/(\S+)/);if(b)var d=b.exec(Ob),a=d?d[1]:"";if(X){var e=Vb();if(e>parseFloat(a))return String(e)}return a}(),
Yb={},Zb=function(a){var b;if(!(b=Yb[a])){for(var c=0,d=String(Xb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",n=e[g]||"",q=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var p=q.exec(h)||["","",""],r=l.exec(n)||["","",""];if(0==p[0].length&&0==r[0].length)break;c=Nb(0==p[1].length?0:parseInt(p[1],10),0==r[1].length?0:parseInt(r[1],10))||Nb(0==p[2].length,0==
r[2].length)||Nb(p[2],r[2])}while(0==c)}b=Yb[a]=0<=c}return b},$b=m.document,ac=$b&&X?Vb()||("CSS1Compat"==$b.compatMode?parseInt(Xb,10):5):void 0;var bc;if(!(bc=!Tb&&!X)){var cc;if(cc=X)cc=X&&9<=ac;bc=cc}bc||Tb&&Zb("1.9.1");X&&Zb("9");var dc=function(a){dc[" "](a);return a};dc[" "]=function(){};var ic=function(a,b){var c="";X&&!ec(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(fc)a.srcdoc=d;else if(gc){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else hc(a,d)},fc=Ub&&"srcdoc"in document.createElement("iframe"),gc=Tb||Ub||X&&Zb(11),hc=function(a,b){X&&Zb(7)&&!Zb(10)&&6>jc()&&kc(b)&&(b=lc(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};X&&!ec(a)?mc(a,c):c()},jc=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},ec=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)t:{try{dc(c.foo);d=!0;break t}catch(e){}d=!1}b=d}catch(f){b=!1}return b}catch(g){return!1}},nc=0,mc=function(a,b){var c="goog_rendering_callback"+nc++;window[c]=b;X&&Zb(6)&&!Zb(7)?a.src="javascript:'<script>window.onload = function() { document.write(\\'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation()})()<\\\\/script>\\');document.close();};\x3c/script>'":a.src="javascript:'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},kc=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},lc=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),
d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2013 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var oc,pc=function(){};(function(){function a(a,g){a=a||"";g=g||{};for(var q in b)b.hasOwnProperty(q)&&(g.sa&&(g["fix_"+q]=!0),g.fa=g.fa||g["fix_"+q]);var l={ea:/^\x3c!--/,D:/^<\//,ca:/^<\s*(script|style|noscript|iframe|textarea)[\s>]/i,u:/^</,da:/^[^<]/},p={ea:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},D:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},ca:function(){var b=p.u();if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+
b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,g:b.g,content:d[1],length:d[0].length+b.length}}}},u:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,g){var p=c||e||g||f.test(b)&&b||null;d[b]=p});return{tagName:b[1],g:d,n:!!b[3],length:b[0].length}}},da:function(){var b=a.indexOf("<");return{length:0<=b?b:a.length}}},r=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||
b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};g.fa&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.ga=function(){return this[this.length-1]};d.P=function(a){var b=this.ga();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Ka=function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.n=b.test(a.tagName)||
a.n);return a},f=r,p=function(){a="</"+d.pop().tagName+">"+a},l={u:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.P("TABLE")?(a="<TBODY>"+a,q()):g.jb&&c.test(e)&&d.Ka(e)?d.P(e)?p():(a="</"+b.tagName+">"+a,q()):b.n||d.push(b)},D:function(a){d.ga()?g.La&&!d.P(a.tagName)?p():d.pop():g.La&&(f(),q())}},q=function(){var b=a,c=e(f());a=b;if(c&&l[c.type])l[c.type](c)};r=function(){q();return e(f())}}();return{append:function(b){a+=b},ta:r,kb:function(a){for(var b;(b=r())&&(!a[b.type]||!1!==a[b.type](b)););
},clear:function(){var b=a;a="";return b},lb:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.nb="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.mb=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.ob=function(a){var b={ea:function(a){return"<--"+a.content+"--\x3e"},D:function(a){return"</"+a.tagName+">"},ca:function(a){return b.u(a)+a.content+b.D(a)},u:function(a){var b="<"+a.tagName,c;for(c in a.g)var d=a.g[c],b=b+(" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"');return b+(a.n?"/>":">")},da:function(a){return a.text}};return b[a.type](a)};a.ib=function(a){var b=
{},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var g in b)a.Ja=a.Ja||!b[g]&&g;oc=a})();(function(){function a(){}function b(a,b){var c,d=a&&a.length||0;for(c=0;c<d;c++)b.call(void 0,a[c],c)}function c(a,b){for(var c in a)a.hasOwnProperty(c)&&b.call(void 0,c,a[c])}function d(a,b){c(b,function(b,c){a[b]=c});return a}function e(a,b){a=a||{};c(b,function(b,c){null==a[b]&&(a[b]=c)});return a}function f(a){try{return h.call(a)}catch(c){var d=[];b(a,function(a){d.push(a)});
return d}}var g=this;if(!g.Y){var h=Array.prototype.slice,n=function(){function a(b,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=b.getAttribute(e);return null==f?f:String(f)}null!=d&&""!==d?b.setAttribute(e,d):b.removeAttribute(e)}function e(b,c){var f=b.ownerDocument;d(this,{root:b,options:c,p:f.defaultView||f.parentWindow,G:f,J:oc("",{sa:!0}),F:[b],K:"",L:f.createElement(b.nodeName),o:[],j:[]});a(this.L,"proxyof",0)}e.prototype.write=function(){[].push.apply(this.j,arguments);for(var a;!this.A&&
this.j.length;)a=this.j.shift(),"function"===typeof a?this.ya(a):this.Z(a)};e.prototype.ya=function(a){var b={type:"function",value:a.name||a.toString()};this.I(b);a.call(this.p,this.G);this.X(b)};e.prototype.Z=function(a){this.J.append(a);for(var b,c=[];(b=this.J.ta())&&!/^script$/i.test(b.tagName);)c.push(b);this.Ha(c);b&&this.za(b)};e.prototype.Ha=function(a){var b=this.wa(a);b.W&&(b.Aa=this.K+b.W,this.K+=b.Da,this.L.innerHTML=b.Aa,this.Fa())};e.prototype.wa=function(a){var c=this.F.length,d=[],
e=[],f=[];b(a,function(a){d.push(a.text);if(a.g){if(!/^noscript$/i.test(a.tagName)){var b=c++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+b+" $1"));"ps-script"!==a.g.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+b+(a.n?"/>":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{i:a,hb:d.join(""),W:e.join(""),Da:f.join("")}};e.prototype.Fa=function(){for(var b,c=[this.L];null!=(b=c.shift());){var d=1===b.nodeType;if(!d||!a(b,"proxyof")){d&&(this.F[a(b,"id")]=
b,a(b,"id",null));var e=b.parentNode&&a(b.parentNode,"proxyof");e&&this.F[e].appendChild(b)}c.unshift.apply(c,f(b.childNodes))}};e.prototype.za=function(a){var b=this.J.clear();b&&this.j.unshift(b);a.src=a.g.src||a.g.bb;a.src&&this.o.length?this.A=a:this.I(a);var c=this;this.Ga(a,function(){c.X(a)})};e.prototype.I=function(a){a.Ca=this.j;this.j=[];this.o.unshift(a)};e.prototype.X=function(a){a!==this.o[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.o.shift(),
this.write.apply(this,a.Ca),!this.o.length&&this.A&&(this.I(this.A),this.A=null))};e.prototype.Ga=function(a,b){var c=this.xa(a);a.src&&(c.src=a.src,this.Ea(c,b));try{this.Ba(c),a.src||b()}catch(d){this.options.error(d),b()}};e.prototype.xa=function(a){var b=this.G.createElement(a.tagName);c(a.g,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};e.prototype.Ba=function(a){this.Z('<span id="ps-script"/>');var b=this.G.getElementById("ps-script");b.parentNode.replaceChild(a,
b)};e.prototype.Ea=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null;b()}var e=this.options.error;d(a,{onload:function(){c()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&c()},onerror:function(){e({message:"remote script failed "+a.src});c()}})};return e}();pc=function(){function b(){var a=r.shift();a&&(a.stream=c.apply(null,a))}function c(e,g,l){function r(a){a=l.va(a);s.write(a);l.ua(a)}s=new n(e,l);s.id=h++;s.name=l.name||s.id;var A=e.ownerDocument,
B={write:A.write,writeln:A.writeln};d(A,{write:function(){return r(f(arguments).join(""))},writeln:function(a){return r(f(arguments).join("")+"\n")}});var t=s.p.onerror||a;s.p.onerror=function(a,b,c){l.error({fb:a+" - "+b+":"+c});t.apply(s.p,arguments)};s.write(g,function(){d(A,B);s.p.onerror=t;l.H();s=null;b()});return s}var h=0,r=[],s=null;return d(function(c,d,f){"function"===typeof f&&(f={H:f});f=e(f,{H:a,error:function(a){throw a;},va:function(a){return a},ua:a});c=/^#/.test(c)?g.document.getElementById(c.substr(1)):
c.eb?c[0]:c;var h=[c,d,f];c.Y={cancel:function(){h.stream?h.stream.abort():h[1]=a}};r.push(h);s||b();return c.Y},{gb:r,cb:n})}()}})();
var qc=function(a,b,c,d){return function(){try{if(0<b.length){var e=b.shift(),f=qc(a,b,c,d);if("SCRIPT"==e.nodeName&&"text/gtmscript"==e.type){var g=I.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,Da(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var n=[];e.firstChild;)n.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);qc(e,n,f,d)()}else a.insertBefore(e,null),f()}else c()}catch(q){O(d)}}},rc=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var sc=function(a,b,c){var d=function(){var d={H:b},f=I.createElement("div");f.style.display="none";f.style.visibility="hidden";I.body.appendChild(f);try{pc(f,a["21"],d)}catch(g){O(c)}};
Ha?d():Ia.push(d)};var tc=function(a,b,c){if(I.body)if(a[""])try{ic(Ea(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+a["21"]),O(b)}catch(d){O(c)}else a["32"]?sc(a,b,c):qc(I.body,rc(a["21"]),b,c)();else F.setTimeout(function(){tc(a,b,c)},200)},_html=tc;_html.a="html";_html.b=["customScripts"];var wc,xc;
var Hc=function(a){return function(){}},Ic=function(a){return function(){}};
var Kc=!1,Lc=!1,_ga=function(a,b,c){function d(a){var b=[].slice.call(arguments,0);b[0]=H+b[0];r.push(b)}function e(b,c){void 0!==a[c]&&d(b,a[c])}function f(b,c){void 0!==a[c]&&d(b,Number(a[c]))}function g(a,b){if(b)for(var c=0;c<b.length;c++){var e=[a];x(b[c])?e.push.apply(e,b[c]):e.push(b[c]);"_setCustomVar"==e[0]&&void 0===e[3]||d.apply(this,e)}}function h(b,c){void 0!==a[c]&&d("_set",b,a[c])}function n(a,b){return void 0===b?b:a(b)}function q(b,c){void 0!==a[c]&&(J+="&"+b+"="+a[c])}function l(a,
b){J+="&"+a+"="+b}function p(a,b){return a.charAt(0)==b?a.substring(1):a}var r=K("_gaq",[],!1),s=!1,H="";void 0==a[""]?H="gtm"+ya++ +".":""!==a[""]&&(H=a[""]+".");e("_setAccount","0");


var J="";
if(""!==J){var v=new sa,U=p(F.location.search,"?"),A=p(F.location.hash,"#");U&&va(v,U);A&&a[""]&&va(v,A);v.contains("gclid")&&l("gclid",wa(v.get("gclid")));v.contains("gclsrc")&&l("gclsrc",wa(v.get("gclsrc")));v.contains("dclid")&&l("dclid",wa(v.get("dclid")));d("_set","campaignParams",J)}
a["25"]&&d("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");g("_setPageGroup",a["9"]);

e("_setCampaignTrack","6");
e("_setClientInfo","7");e("_setDetectFlash","14");e("_setDetectTitle","15");void 0!==a["19"]&&a["19"]&&(r.push(["_gat._forceSSL"]),s=!!a["19"]);
d("_set","hitCallback",function(){if(w(a[""]))a[""]();b()});if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else d("_trackPageview");
var z=function(){F._gat||c()};if(a["17"])Lc||(Lc=!0,M(L("https","http","://stats.g.doubleclick.net/dc.js",s),z,c));else if(!Kc){var ca=a["12"]?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";Kc=!0;M(L("https://ssl","http://www",ca,s),z,c)}};_ga.a="ga";_ga.b=["google"];var Uc=function(a){var b=F||m,c=b.onerror,d=!1;Ub&&!Zb("535.3")&&(d=!d);b.onerror=function(b,f,g,h,n){c&&c(b,f,g,h,n);a({message:b,fileName:f,Wa:g,pb:h,error:n});return d}};var _sp=function(a,b,c){M("//www.googleadservices.com/pagead/conversion_async.js",function(){var d=F.google_trackConversion;w(d)?d({google_conversion_id:a["22"],google_conversion_label:a["24"],google_custom_params:a["10"]||{},google_remarketing_only:!0,onload_callback:b})||c():c()},c)};_sp.a="sp";_sp.b=["google"];
var Xc=!1,_ua=function(a,b,c){function d(a){var b=[].slice.call(arguments,0);b[0]=r+b[0];F[l()].apply(window,b)}function e(b,c){void 0!==a[c]&&d("set",b,a[c])}function f(a,b){return void 0===b?b:a(b)}function g(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&d("set",a+c,b[c])}function h(a,b,c){}function n(){}function q(a,b,c){var d=0;if(void 0!==a)for(var e in a)a.hasOwnProperty(e)&&(c&&J[e]||!c&&void 0===J[e])&&(b[e]=a[e],d++);return d}K("GoogleAnalyticsObject",a["27"]||"ga",!1);var l=function(){return F.GoogleAnalyticsObject},p=K(l(),function(){var a=F[l()];a.q=a.q||[];a.q.push(arguments)},!1),r="",s=p.l="";void 0==
a[""]?(s=p.l="gtm"+ya++,r=s+"."):""!==a[""]&&(s=p.l=a[""],r=s+".");var H=!1;var J={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0};var v={name:s};
void 0!==a["1"]&&(v.allowLinker=a["1"]);q(a["18"],v,!0);p("create",a["0"],
v);void 0!==a["3"]&&d("set","anonymizeIp",a["3"]||void 0);
g("contentGroup",
a["9"]);g("dimension",a["16"]);g("metric",a["26"]);var U={};q(a["18"],U,!1)&&d("set",U);
a["25"]&&d("require","linkid","linkid.js");d("set","hitCallback",function(){if(w(a[""]))a[""]();else{var c=a["18"],d=c&&
c.hitCallback;w(d)&&d()}b()});if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else{a[""]&&(d("require","ec","ec.js"),n());
d("send","pageview");}if(!Xc){var z=a["12"]?"u/analytics_debug.js":"analytics.js";Xc=!0;M(L("https:","http:","//www.google-analytics.com/"+z,
H),function(){F[l()].loaded||c()},c)}};_ua.a="ua";_ua.b=["google"];var rd=function(){this.f=[]};rd.prototype.set=function(a,b){this.f.push([a,b]);return this};rd.prototype.resolve=function(a,b){for(var c={},d=0;d<this.f.length;d++){var e=sd(this.f[d][0],a,b),f=sd(this.f[d][1],a,b);c[e]=f}return c};var td=function(a){this.index=a};td.prototype.resolve=function(a,b){var c=gb[this.index];if(c&&!b(c)){var d=c["23"];if(a){if(a.get(d))return;a.set(d,!0)}c=sd(c,a,b);a&&a.set(d,!1);return ta(c)}};
for(var _M=function(a){return new td(a)},vd=function(a){this.resolve=function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(sd(ud[a[e]],b,c));return d.join("")}},_T=function(a){return new vd(arguments)},wd=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=function(c,d){if(a[0]instanceof td&&b(8)&&b(16))return'google_tag_manager["GTM-5VPRQF"].macro('+a[0].index+")";for(var e=String(sd(a[0],c,d)),f=1;f<a.length;f++)e=Z[a[f]](e);return e}},_E=function(a,b){return new wd(arguments)},jb=function(a,b){return sd(a,new sa,b)},sd=function(a,b,c){var d=a;if(a instanceof td||a instanceof rd||a instanceof vd||
a instanceof wd)return a.resolve(b,c);if(x(a))for(var d=[],e=0;e<a.length;e++)d[e]=sd(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=sd(a[f],b,c))}return d},xd=function(a,b){var c=b[a],d=c;if(c instanceof td||c instanceof wd||c instanceof vd)d=c;else if(x(c))for(var d=[],e=0;e<c.length;e++)d[e]=xd(c[e],b);else if("object"==typeof c){var d=new rd,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],xd(c[f],b))}return d},Ad=function(a,b){for(var c=b?b.split(","):[],
d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=ud[e[1]]);if(1==a)for(var f=yd(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=zd[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=yd(e[g])}return c},yd=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<Bd;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},
Bd=107,Cd=[_re,_u,'url',_M(0),'.*',_eq,_e,'_event',_M(1),'gtm.js',_asp,'AdRoll','H7SU6JSWKRDG7PS65AKDEB','OOND5KNCMFEKXNJYPDV5CE',{},12,_html,'FaceBook WCA','\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(){var a\x3dwindow._fbq||(window._fbq\x3d[]);if(!a.loaded){var b\x3ddocument.createElement(\x22script\x22);b.async\x3d!0;b.src\x3d\x22//connect.facebook.net/en_US/fbds.js\x22;var c\x3ddocument.getElementsByTagName(\x22script\x22)[0];c.parentNode.insertBefore(b,c);a.loaded\x3d!0}a.push([\x22addPixelId\x22,\x22282241658615849\x22])})();window._fbq\x3dwindow._fbq||[];window._fbq.push([\x22track\x22,\x22PixelInitialized\x22,{}]);\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 border\x3d\x220\x22 alt\x3d\x22\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d282241658615849\x26amp;ev\x3dNoScript\x22\x3e\x3c/noscript\x3e',11,_sw,'http://www.freshbooks.com/blog/',_sp,'AdWords Remarketing - Blog','1031357696','','eMrZCJSdywEQgIrl6wM',14,_cn,'index.php','AdWords Remarketing - Homepage','j2bHCO6dywEQgIrl6wM',13,'Optimizely','\x3cscript src\x3d\x22//cdn.optimizely.com/js/128069571.js\x22\x3e\x3c/script\x3e',true,16,'http://www.freshbooks.com/tour.php','AdWords Remarketing - iPad LinkedIn Workflow Tour','TUN5CMieywEQgIrl6wM',15,'url hostname','host',_M(2),'community.freshbooks.com','developers.freshbooks.com',_ua,'GA - Universal - www','UA-3907864-11',false,'\x26tid','\x26aip',{50:48,51:49},1,_ga,'GA - Classic - www','UA-3907864-1',[],2,'Qualaroo','\n\x3cscript type\x3d\x22text/javascript\x22\x3evar _kiq\x3d_kiq||[];(function(){setTimeout(function(){var a\x3ddocument,b\x3da.getElementsByTagName(\x22script\x22)[0],a\x3da.createElement(\x22script\x22);a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.src\x3d\x22//s3.amazonaws.com/j.kissinsights.com/u/5516/8b1f7bb953e5eae12e347d7d73fee9aefa93b655.js\x22;b.parentNode.insertBefore(a,b)},1)})();\x3c/script\x3e\n',3,'https://secure.freshbooks.com/external/subscribe/prices','http://www.freshbooks.com/signup','http://www.freshbooks.com/home','CrazyEgg','\x3cscript type\x3d\x22text/gtmscript\x22\x3esetTimeout(function(){var a\x3ddocument.createElement(\x22script\x22),b\x3ddocument.getElementsByTagName(\x22script\x22)[0];a.src\x3ddocument.location.protocol+\x22//dnn506yrbagrg.cloudfront.net/pages/scripts/0006/7212.js?\x22+Math.floor((new Date).getTime()/36E5);a.async\x3d!0;a.type\x3d\x22text/javascript\x22;b.parentNode.insertBefore(a,b)},1);\x3c/script\x3e',5,'GA - Classic - developers','UA-3907864-3',10,'GA  - Classic - community','UA-3907864-2',9,_k,'visitor-id','fb_visitor_id',_f,'referrer','url path','path',_v,'element url','gtm.elementUrl','event','element id','gtm.elementId','element','gtm.element','element classes','gtm.elementClasses','element target','gtm.elementTarget'],Dd=[],Ed=0;Ed<Cd.length;Ed++)Dd[Ed]=xd(Ed,Cd);var ud=Dd,zd=Ad(0,"20:0,20:1,23:2,4:3,5:4,20:5,20:6,23:7,4:8,5:9,20:10,23:11,11:12,28:13,10:14,30:15,20:16,23:17,21:18,30:19,20:20,5:21,20:22,23:23,22:24,10:25,24:26,30:27,20:28,5:29,23:30,24:31,30:32,23:33,21:34,32:35,30:36,5:37,23:38,24:39,30:40,23:41,8:42,4:43,5:44,5:45,20:46,23:47,0:48,3:49,9:14,16:14,26:14,31:49,18:14,12:49,13:49,2:52,25:49,1:49,30:53,20:54,23:55,0:56,17:35,9:57,6:35,7:35,14:35,15:35,29:35,19:49,30:58,23:59,21:60,30:61,5:62,5:63,5:64,23:65,21:66,30:67,23:68,0:69,30:70,23:71,0:72,30:73,20:74,23:75,27:76,20:77,23:78,23:79,8:80,20:81,23:82,27:83,23:84,23:85,27:86,23:87,27:88,23:89,27:90,23:91,27:92"),gb=Ad(1,"G,AD,CAAAAAgB,AAAAAAAAAAAAAAwB,AAAAAAAAAAAAAAAG,CAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAgD,ABAAAAAAAAAAAAAAE,AAAAAAAAAAAAAAAgY,AAAAAAAAAAAAAAAggB,AAAAAAAAAAAAAAAgAG,AAAAAAAAAAAAAAAgAY"),Fd=Ad(1,"Z,gM,IAAM,IAAAw,oAAAAAC,AAAAQAAG,AAAAQAAK,oAAAAAAAAAAAQ,oAAAAAAAAAAAg,IAAEAAAAAAAAAB"),$=Ad(1,"AwP,AAwD,AAAwP,AAAQDH,AAQAA4B,AAAQDAc,AAAAAAAw__B,AAAAAAAAAS-_B,AAQAAgAAAAAAO,AAQAAAAAAAAAAO,AAAAAAAAASy_AwB,AAAAAAAAASy_AAO"),Gd=Ad(2,"D:DG::,G:U::,K:I::,S:g::,C:AB:gB:,CC:AI::,CE:AI::,CI:AI::,CB:AQ::,i:Ag::");
var kb=function(){};var Td=function(){var a=this;this.v=!1;this.B=[];this.M=[];this.la=function(){a.v||xa(a.B);a.v=!0};this.ka=function(){a.v||xa(a.M);a.v=!0};this.N=ma},Ud=function(){this.k=[];this.aa={};this.O=[];this.r=0};Ud.prototype.addListener=function(a){this.O.push(a)};var Vd=function(a,b,c,d){if(!c.v){a.k[b]=c;void 0!==d&&(a.aa[b]=d);a.r++;var e=function(){0<a.r&&a.r--;0<a.r||xa(a.O)};c.B.push(e);c.M.push(e)}};var Wd=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Fd[b]&&jb(Fd[b],c);a[b]=[d&&ta(d),d]}return a[b]}},Xd=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.d(c[d],a.c)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.d(e[d],a.c)[0])return!1;return!0},Yd=function(a,b){return function(){a["33"]=b.la;a["34"]=b.ka;ta(a,b.la,b.ka)}},Ya=function(a,b){S("tagTypeBlacklist");for(var c={name:a,Ia:b||ma,s:yd(),t:yd(),d:Wd(),c:fb()},d=0;d<Gd.length;d++)if(Xd(c,
Gd[d])){for(var e=c,f=Gd[d],g=f[1],h=0;h<g.length;h++)e.s[g[h]]=!0;for(var n=f[3],h=0;h<n.length;h++)e.t[n[h]]=!0}var q=[];for(var l=0;l<Bd;l++)if(c.s[l]&&!c.t[l])if(c.c($[l])){}else{q[l]=jb($[l],c.c);}c.C=q;for(var p=
new Ud,r=0;r<Bd;r++)if(c.s[r]&&!c.t[r]&&!c.c($[r])){var s=c.C[r],H=new Td;H.B.push(Hc(s));H.M.push(Ic(s));H.N=Yd(s,H);Vd(p,r,H,s[""])}p.addListener(c.Ia);for(var J=[],v=0;v<p.k.length;v++){var U=p.k[v];if(U){var A=p.aa[v];void 0!==A?A!=v&&p.k[A]&&p.k[A].B.push(U.N):J.push(v)}}for(v=0;v<J.length;v++)p.k[J[v]].N();0<p.r||xa(p.O);return 0<c.C.length};var Zd={macro:function(a){return gb[a]&&jb(_M(a),fb())}};Zd.dataLayer=bb;Zd.Xa=function(){var a=F.google_tag_manager;a||(a=F.google_tag_manager={});a["GTM-5VPRQF"]||(a["GTM-5VPRQF"]=Zd)};Zd.Xa();
(function(){var a=K("dataLayer",[],!1),b=K("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};Ia.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ra.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Za.push.apply(Za,b);300<this.length;)this.shift();return nb()};Za.push.apply(Za,a.slice(0));O(nb)})();
if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)Ja();else{N(I,"DOMContentLoaded",Ja);N(I,"readystatechange",Ja);if(I.createEventObject&&I.documentElement.doScroll){var $d=!0;try{$d=!F.frameElement}catch(be){}$d&&Ma()}N(F,"load",Ja)}"complete"===I.readyState?Sa():N(F,"load",Sa);var _vs="res_ts:1404769214493000,srv_cl:70499235,ds:live,cv:18";
})()
