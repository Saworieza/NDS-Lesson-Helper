"function"!=typeof DIL&&(DIL=function(e,t){var n=[],r,i;e!==Object(e)&&(e={});var s,o,u,a,f,l,c,h,p,d,v;s=e.partner,o=e.containerNSID,u=e.iframeAttachmentDelay,a=!!e.disableDestinationPublishingIframe,f=e.iframeAkamaiHTTPS,l=e.mappings,c=e.uuidCookie,h=!0===e.enableErrorReporting,p=e.visitorService,d=e.declaredId,v=!0===e.removeFinishedScriptsAndCallbacks;var m,g,y;m=!0===e.disableScriptAttachment,g=!0===e.disableDefaultRequest,y=e.afterResultForDefaultRequest,h&&DIL.errorModule.activate();var b=!0===window._dil_unit_tests;(r=t)&&n.push(r+"");if(!s||"string"!=typeof s)return r="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:r,filename:"dil.js"}),Error(r);r="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(o||"number"==typeof o)o=parseInt(o,10),!isNaN(o)&&0<=o&&(r="");r&&(o=0,n.push(r),r=""),i=DIL.getDil(s,o);if(i instanceof DIL&&i.api.getPartner()==s&&i.api.getContainerNSID()==o)return i;if(!(this instanceof DIL))return new DIL(e,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+s+" and containerNSID = "+o);DIL.registerDil(this,s,o);var w={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},E={stuffed:{}},S={},x={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2e3,calledBack:!1,uuid:null,noVisitorAPI:!1,instance:null,releaseType:"no VisitorAPI",admsProcessingStarted:!1,process:function(e){try{if(!this.admsProcessingStarted){var t=this,n,r,i,s,o;if("function"==typeof e&&"function"==typeof e.getInstance){if(p!==Object(p)||!(n=p.namespace)||"string"!=typeof n){this.releaseType="no namespace",this.releaseRequests();return}r=e.getInstance(n);if(r===Object(r)&&"function"==typeof r.isAllowed&&"function"==typeof r.getGlobalVisitorID){if(!r.isAllowed()){this.releaseType="VisitorAPI not allowed",this.releaseRequests();return}this.instance=r,this.admsProcessingStarted=!0,i=function(e){"VisitorAPI"!=t.releaseType&&(t.uuid=e,t.releaseType="VisitorAPI",t.releaseRequests())},b&&(s=p.server)&&"string"==typeof s&&(r.server=s),o=r.getGlobalVisitorID(i);if("string"==typeof o&&o.length){i(o);return}setTimeout(function(){"VisitorAPI"!=t.releaseType&&(t.releaseType="timeout",t.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(u){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0,x.registerRequest()},getGlobalVisitorID:function(){return this.instance?this.instance.getGlobalVisitorID():null}},declaredId:{uuid:null,declaredId:{init:null,request:null},declaredIdCombos:{},dIdAlwaysOn:!1,dIdInRequest:!1,setDeclaredId:function(e,t){var n=k.isPopulatedString,r=encodeURIComponent;if(e===Object(e)&&n(t)){var i=e.dpid,s=e.dpuuid,o=null;if(n(i)&&n(s))return o=r(i)+"$"+r(s),!0===this.declaredIdCombos[o]?"setDeclaredId: combo exists for type '"+t+"'":(this.declaredIdCombos[o]=!0,this.declaredId[t]={dpid:i,dpuuid:s},"init"==t?this.dIdAlwaysOn=!0:"request"==t&&(this.dIdInRequest=!0),"setDeclaredId: succeeded for type '"+t+"'")}return"setDeclaredId: failed for type '"+t+"'"},getDeclaredIdQueryString:function(){var e=this.declaredId.request,t=this.declaredId.init,n="";return null!==e?n="&d_dpid="+e.dpid+"&d_dpuuid="+e.dpuuid:null!==t&&(n="&d_dpid="+t.dpid+"&d_dpuuid="+t.dpuuid),n},getUUIDQueryString:function(){var e=x.adms,t=k.isPopulatedString,n=!1,r=x.adms.getGlobalVisitorID();t(this.uuid)?t(r)&&this.uuid!=r&&(this.uuid=r):this.uuid=r||e.uuid;if(this.dIdAlwaysOn||this.dIdInRequest)n=!0,this.dIdInRequest=!1;return t(this.uuid)&&n?"d_uuid="+this.uuid+"&":""}},registerRequest:function(e){var t=this.firingQueue;e===Object(e)&&t.push(e);if(!this.firing&&t.length)if(this.adms.calledBack){if(e=t.shift(),e.src=e.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.declaredId.getUUIDQueryString()+"d_nsid="),C.fireRequest(e),!this.firstRequestHasFired&&"script"==e.tag)this.firstRequestHasFired=!0}else this.processVisitorAPI()},processVisitorAPI:function(){this.adms.process(window.Visitor)},requestRemoval:function(e){if(!v)return"removeFinishedScriptsAndCallbacks is not boolean true";var t=this.toRemove,n,r;e===Object(e)&&(n=e.script,r=e.callbackName,(n===Object(n)&&"SCRIPT"==n.nodeName||"no script created"==n)&&"string"==typeof r&&r.length&&t.push(e));if(this.readyToRemove&&t.length){r=t.shift(),n=r.script,r=r.callbackName,"no script created"!=n?(e=n.src,n.parentNode.removeChild(n)):e=n,window[r]=null;try{delete window[r]}catch(i){}return this.removed.push({scriptSrc:e,callbackName:r}),DIL.variables.scriptsRemoved.push(e),DIL.variables.callbacksRemoved.push(r),this.requestRemoval()}return"requestRemoval() processed"}};i=function(){var e="http://fast.";return w.IS_HTTPS&&(e=!0===f?"https://fast.":"https://"),e+s+".demdex.net/dest4.html?d_nsid="+o+"#"+encodeURIComponent(document.location.href)};var T={THROTTLE_START:3e4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+s+"_"+o,url:i(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:w.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var e=this,t=document.createElement("iframe");t.id=this.id,t.style.cssText="display: none; width: 0; height: 0;",t.src=this.url,L.addListener(t,"load",function(){e.iframeHasLoaded=!0,e.requestToProcess()}),document.body.appendChild(t),this.iframe=t},requestToProcess:function(e,t){var n=this;e&&!k.isEmptyObject(e)&&this.process(e,t),this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){n.messageSendingInterval=w.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(e,t){var n=encodeURIComponent,r,i,s,o,u,a;t===Object(t)&&(a=L.encodeAndBuildRequest([x.declaredId.uuid||"",t.dpid||"",t.dpuuid||""],","));if((r=e.dests)&&r instanceof Array&&(i=r.length))for(s=0;s<i;s++)o=r[s],o=[n("dests"),n(o.id||""),n(o.y||""),n(o.c||"")],this.addMessage(o.join("|"));if((r=e.ibs)&&r instanceof Array&&(i=r.length))for(s=0;s<i;s++)o=r[s],o=[n("ibs"),n(o.id||""),n(o.tag||""),L.encodeAndBuildRequest(o.url||[],","),n(o.ttl||""),"",a],this.addMessage(o.join("|"));if((r=e.dpcalls)&&r instanceof Array&&(i=r.length))for(s=0;s<i;s++)o=r[s],u=o.callback||{},u=[u.obj||"",u.fn||"",u.key||"",u.tag||"",u.url||""],o=[n("dpm"),n(o.id||""),n(o.tag||""),L.encodeAndBuildRequest(o.url||[],","),n(o.ttl||""),L.encodeAndBuildRequest(u,","),a],this.addMessage(o.join("|"));this.jsonProcessed.push(e)},addMessage:function(e){var t=encodeURIComponent;this.messages.push((h?t("---destpub-debug---"):t("---destpub---"))+e)},sendMessages:function(){var e=this,t;this.messages.length?(t=this.messages.shift(),DIL.xd.postMessage(t,this.url,this.iframe.contentWindow),this.messagesPosted.push(t),setTimeout(function(){e.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},N={traits:function(e){return k.isValidPdata(e)&&(S.sids instanceof Array||(S.sids=[]),L.extendArray(S.sids,e)),this},pixels:function(e){return k.isValidPdata(e)&&(S.pdata instanceof Array||(S.pdata=[]),L.extendArray(S.pdata,e)),this},logs:function(e){return k.isValidLogdata(e)&&(S.logdata!==Object(S.logdata)&&(S.logdata={}),L.extendObject(S.logdata,e)),this},customQueryParams:function(e){return k.isEmptyObject(e)||L.extendObject(S,e,x.reservedKeys),this},signals:function(e,t){var n,r=e;if(!k.isEmptyObject(r)){if(t&&"string"==typeof t)for(n in r={},e)e.hasOwnProperty(n)&&(r[t+n]=e[n]);L.extendObject(S,r,x.reservedKeys)}return this},declaredId:function(e){return x.declaredId.setDeclaredId(e,"request"),this},result:function(e){return"function"==typeof e&&(S.callback=e),this},afterResult:function(e){return"function"==typeof e&&(S.postCallbackFn=e),this},useImageRequest:function(){return S.useImageRequest=!0,this},clearData:function(){return S={},this},submit:function(e){return C.submitRequest(S,e),S={},this},getPartner:function(){return s},getContainerNSID:function(){return o},getEventLog:function(){return n},getState:function(){var e={},t={};return L.extendObject(e,x,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0}),L.extendObject(t,T,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0}),{pendingRequest:S,otherRequestInfo:e,destinationPublishingInfo:t}},idSync:function(e){if(e!==Object(e)||"string"!=typeof e.dpid||!e.dpid.length)return"Error: config or config.dpid is empty";if("string"!=typeof e.url||!e.url.length)return"Error: config.url is empty";var t=e.url,n=e.minutesToLive,r=encodeURIComponent,i=x.declaredId,t=t.replace(/^https:/,"").replace(/^http:/,"");if("undefined"==typeof n)n=20160;else if(n=parseInt(n,10),isNaN(n)||0>=n)return"Error: config.minutesToLive needs to be a positive number";return i=L.encodeAndBuildRequest([x.adms.getGlobalVisitorID()||i.uuid||"",e.dpid,e.dpuuid||""],","),e=["ibs",r(e.dpid),"img",r(t),n,"",i],T.addMessage(e.join("|")),x.firstRequestHasFired&&T.requestToProcess(),"Successfully queued"},aamIdSync:function(e){return e!==Object(e)||"string"!=typeof e.dpuuid||!e.dpuuid.length?"Error: config or config.dpuuid is empty":(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,this.idSync(e))},passData:function(e){return k.isEmptyObject(e)?"Error: json is empty or not an object":(C.defaultCallback(e),"json submitted for processing")}},C={submitRequest:function(e,t){return x.registerRequest(C.createQueuedRequest(e,t)),!0},createQueuedRequest:function(e,t){var n=x,r,i=e.callback,u="img";if(!k.isEmptyObject(l)){var a,f,c;for(a in l)l.hasOwnProperty(a)&&(f=l[a],null!=f&&""!==f&&a in e&&!(f in e)&&!(f in x.reservedKeys))&&(c=e[a],null==c||""===c||(e[f]=c))}k.isValidPdata(e.sids)||(e.sids=[]),k.isValidPdata(e.pdata)||(e.pdata=[]),k.isValidLogdata(e.logdata)||(e.logdata={}),e.logdataArray=L.convertObjectToKeyValuePairs(e.logdata,"=",!0),e.logdataArray.push("_ts="+(new Date).getTime()),"function"!=typeof i&&(i=this.defaultCallback);if(n.useJSONP=!e.useImageRequest||"boolean"!=typeof e.useImageRequest)u="script",r=n.callbackPrefix+"_"+s+"_"+o+"_"+(new Date).getTime();return{tag:u,src:C.makeRequestSrc(e,r),internalCallbackName:r,callbackFn:i,postCallbackFn:e.postCallbackFn,useImageRequest:e.useImageRequest,requestData:e,useDocWrite:t===Object(t)&&!0===t.useDocumentWrite}},defaultCallback:function(e,t){var n,r,i,s,o,u,f,l,h;if((n=e.stuff)&&n instanceof Array&&(r=n.length))for(i=0;i<r;i++)if((s=n[i])&&s===Object(s)){o=s.cn,u=s.cv,f=s.ttl;if("undefined"==typeof f||""===f)f=Math.floor(L.getMaxCookieExpiresInMinutes()/60/24);l=s.dmn||"."+document.domain.replace(/^www\./,""),h=s.type,o&&(u||"number"==typeof u)&&("var"!=h&&(f=parseInt(f,10))&&!isNaN(f)&&L.setCookie(o,u,1440*f,"/",l,!1),E.stuffed[o]=u)}n=e.uuid,r=x.declaredId,i=k.isPopulatedString;if(i(n)){i(r.uuid)||(r.uuid=n);if(!k.isEmptyObject(c)){r=c.path;if("string"!=typeof r||!r.length)r="/";i=parseInt(c.days,10),isNaN(i)&&(i=100),L.setCookie(c.name||"aam_did",n,1440*i,r,c.domain||"."+document.domain.replace(/^www\./,""),!0===c.secure)}}!a&&!x.abortRequests&&T.requestToProcess(e,t)},makeRequestSrc:function(e,t){e.sids=k.removeEmptyArrayValues(e.sids||[]),e.pdata=k.removeEmptyArrayValues(e.pdata||[]);var n=x,r=L.encodeAndBuildRequest(e.sids,","),i=L.encodeAndBuildRequest(e.pdata,","),u=(e.logdataArray||[]).join("&");delete e.logdataArray;var a=w.IS_HTTPS?"https://":"http://",f=n.declaredId.getDeclaredIdQueryString(),l;l=[];var c,h,p,d;for(c in e)if(!(c in n.reservedKeys)&&e.hasOwnProperty(c))if(h=e[c],c=encodeURIComponent(c),h instanceof Array)for(p=0,d=h.length;p<d;p++)l.push(c+"="+encodeURIComponent(h[p]));else l.push(c+"="+encodeURIComponent(h));return l=l.length?"&"+l.join("&"):"",a+s+".demdex.net/event?d_nsid="+o+f+(r.length?"&d_sid="+r:"")+(i.length?"&d_px="+i:"")+(u.length?"&d_ld="+encodeURIComponent(u):"")+l+(n.useJSONP?"&d_rtbd=json&d_jsonv="+DIL.jsonVersion+"&d_dst=1&d_cts=1&d_cb="+(t||""):"")},fireRequest:function(e){if("img"==e.tag)this.fireImage(e);else if("script"==e.tag){var t=x.declaredId,t=t.declaredId.request||t.declaredId.init||{};this.fireScript(e,{dpid:t.dpid||"",dpuuid:t.dpuuid||""})}},fireImage:function(e){var t=x,i,s;t.abortRequests||(t.firing=!0,i=new Image(0,0),t.sent.push(e),i.onload=function(){t.firing=!1,t.fired.push(e),t.num_of_img_responses++,t.registerRequest()},s=function(i){r="imgAbortOrErrorHandler received the event of type "+i.type,n.push(r),t.abortRequests=!0,t.firing=!1,t.errored.push(e),t.num_of_img_errors++,t.registerRequest()},i.addEventListener?(i.addEventListener("error",s,!1),i.addEventListener("abort",s,!1)):i.attachEvent&&(i.attachEvent("onerror",s),i.attachEvent("onabort",s)),i.src=e.src)},fireScript:function(e,t){var i=this,o=x,u,a,f=e.src,l=e.postCallbackFn,c="function"==typeof l,h=e.internalCallbackName;u=e.useDocWrite;if(!o.abortRequests){o.firing=!0,window[h]=function(i){try{i!==Object(i)&&(i={});var u=e.callbackFn;o.firing=!1,o.fired.push(e),o.num_of_jsonp_responses++,u(i,t),c&&l(i,t)}catch(f){f.message="DIL jsonp callback caught error with message "+f.message,r=f.message,n.push(r),f.filename=f.filename||"dil.js",f.partner=s,DIL.errorModule.handleError(f);try{u({error:f.name+"|"+f.message}),c&&l({error:f.name+"|"+f.message})}catch(p){}}finally{o.requestRemoval({script:a,callbackName:h}),o.registerRequest()}};var p=function(){o.firing=!1,o.requestRemoval({script:"no script created",callbackName:h})};m?p():u?DIL.windowLoaded||"complete"==document.readyState||"loaded"==document.readyState?(e.useDocWriteSuccessful=!1,p()):(document.write('<script type="text/javascript" src="'+f+'" id="'+h+'"></script>'),a=document.getElementById(h),e.useDocWriteSuccessful=!0):(a=document.createElement("script"),a.addEventListener&&a.addEventListener("error",function(t){o.requestRemoval({script:a,callbackName:h}),r="jsonp script tag error listener received the event of type "+t.type+" with src "+f,i.handleScriptError(r,e)},!1),a.type="text/javascript",a.src=f,u=DIL.variables.scriptNodeList[0],u.parentNode.insertBefore(a,u)),o.sent.push(e),o.declaredId.declaredId.request=null}},handleScriptError:function(e,t){var r=x;n.push(e),r.abortRequests=!0,r.firing=!1,r.errored.push(t),r.num_of_jsonp_errors++,r.registerRequest()}},k={isValidPdata:function(e){return e instanceof Array&&this.removeEmptyArrayValues(e).length?!0:!1},isValidLogdata:function(e){return!this.isEmptyObject(e)},isEmptyObject:function(e){if(e!==Object(e))return!0;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},removeEmptyArrayValues:function(e){for(var t=0,n=e.length,r,i=[],t=0;t<n;t++)r=e[t],"undefined"!=typeof r&&null!=r&&i.push(r);return i},isPopulatedString:function(e){return"string"==typeof e&&e.length}},L={addListener:function(){if(document.addEventListener)return function(e,t,n){e.addEventListener(t,function(e){"function"==typeof n&&n(e)},!1)};if(document.attachEvent)return function(e,t,n){e.attachEvent("on"+t,function(e){"function"==typeof n&&n(e)})}}(),convertObjectToKeyValuePairs:function(e,t,n){var r=[],t=t||"=",i,s;for(i in e)s=e[i],"undefined"!=typeof s&&null!=s&&r.push(i+t+(n?encodeURIComponent(s):s));return r},encodeAndBuildRequest:function(e,t){return this.map(e,function(e){return encodeURIComponent(e)}).join(t)},map:function(e,t){if(Array.prototype.map)return e.map(t);if(void 0===e||null===e)throw new TypeError;var n=Object(e),r=n.length>>>0;if("function"!=typeof t)throw new TypeError;for(var i=Array(r),s=0;s<r;s++)s in n&&(i[s]=t.call(t,n[s],s,n));return i},filter:function(e,t){if(!Array.prototype.filter){if(void 0===e||null===e)throw new TypeError;var n=Object(e),r=n.length>>>0;if("function"!=typeof t)throw new TypeError;for(var i=[],s=0;s<r;s++)if(s in n){var o=n[s];t.call(t,o,s,n)&&i.push(o)}return i}return e.filter(t)},getCookie:function(e){var e=e+"=",t=document.cookie.split(";"),n,r,i;for(n=0,r=t.length;n<r;n++){for(i=t[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(e))return decodeURIComponent(i.substring(e.length,i.length))}return null},setCookie:function(e,t,n,r,i,s){var o=new Date;n&&(n*=6e4),document.cookie=e+"="+encodeURIComponent(t)+(n?";expires="+(new Date(o.getTime()+n)).toUTCString():"")+(r?";path="+r:"")+(i?";domain="+i:"")+(s?";secure":"")},extendArray:function(e,t){return e instanceof Array&&t instanceof Array?(Array.prototype.push.apply(e,t),!0):!1},extendObject:function(e,t,n){var r;if(e===Object(e)&&t===Object(t)){for(r in t)t.hasOwnProperty(r)&&(k.isEmptyObject(n)||!(r in n))&&(e[r]=t[r]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(w.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1e3/60}};"error"==s&&0==o&&L.addListener(window,"load",function(){DIL.windowLoaded=!0});var A=function(){O(),!a&&!x.abortRequests&&T.attachIframe(),x.readyToRemove=!0,x.requestRemoval()},O=function(){a||setTimeout(function(){!g&&!x.firstRequestHasFired&&!x.adms.admsProcessingStarted&&!x.adms.calledBack&&("function"==typeof y?N.afterResult(y).submit():N.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},M=document;"error"!=s&&(DIL.windowLoaded?A():"complete"!=M.readyState&&"loaded"!=M.readyState?L.addListener(window,"load",A):DIL.isAddedPostWindowLoadWasCalled?L.addListener(window,"load",A):(u="number"==typeof u?parseInt(u,10):0,0>u&&(u=0),setTimeout(A,u||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT))),x.declaredId.setDeclaredId(d,"init"),this.api=N,this.getStuffedVariable=function(e){var t=E.stuffed[e];return!t&&"number"!=typeof t&&(t=L.getCookie(e),!t&&"number"!=typeof t&&(t="")),t},this.validators=k,this.helpers=L,this.constants=w,this.log=n,b&&(this.pendingRequest=S,this.requestController=x,this.setDestinationPublishingUrl=i,this.destinationPublishing=T,this.requestProcs=C,this.variables=E)},function(){var e=document,t;null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",t=function(){e.removeEventListener("DOMContentLoaded",t,!1),e.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(e){var t;if(e===Object(e))for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},DIL.extendStaticPropertiesAndMethods({version:"4.4",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(e){this.isAddedPostWindowLoadWasCalled=!0,this.windowLoaded="function"==typeof e?!!e():"boolean"==typeof e?e:!0},create:function(e){try{return new DIL(e)}catch(t){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(e,t,n){t=t+"$"+n,t in this.dils||(this.dils[t]=e)},getDil:function(e,t){var n;return"string"!=typeof e&&(e=""),t||(t=0),n=e+"$"+t,n in this.dils?this.dils[n]:Error("The DIL instance with partner = "+e+" and containerNSID = "+t+" was not found")},dexGetQSVars:function(e,t,n){return t=this.getDil(t,n),t instanceof this?t.getStuffedVariable(e):""},xd:{postMessage:function(e,t,n){var r=1;t&&(window.postMessage?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +(new Date)+r++ +"&"+e))}}}),DIL.errorModule=function(){var e=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),t={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},n=!1;return{activate:function(){n=!0},handleError:function(r){if(!n)return"DIL error module has not been activated";r!==Object(r)&&(r={});var i=r.name?(new String(r.name)).toLowerCase():"",s=[],r={name:i,filename:r.filename?r.filename+"":"",partner:r.partner?r.partner+"":"no_partner",site:r.site?r.site+"":document.location.href,message:r.message?r.message+"":""};return s.push(i in t?t[i]:t.noerrortypedefined),e.api.pixels(s).logs(r).useImageRequest().submit(),"DIL error report sent"},pixelMap:t}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(e,t,n){var r="",t=t||"Error caught in DIL module/submodule: ";return e===Object(e)?r=t+(e.message||"err has no message"):(r=t+"err is not a valid object",e={}),e.message=r,n instanceof DIL&&(e.partner=n.api.getPartner()),DIL.errorModule.handleError(e),this.errorMessage=r}}}),DIL.tools.getSearchReferrer=function(e,t){var n=DIL.getDil("error"),r=DIL.tools.decomposeURI(e||document.referrer),i="",s="",o={queryParam:"q"},i=n.helpers.filter([t===Object(t)?t:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(e){return!!e.hasOwnProperty("hostPattern")&&!!r.hostname.match(e.hostPattern)}).shift();return i?{valid:!0,name:r.hostname,keywords:(n.helpers.extendObject(o,i),s=o.queryPattern?(i=(""+r.search).match(o.queryPattern))?i[1]:"":r.uriParams[o.queryParam],decodeURIComponent(s||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}},DIL.tools.decomposeURI=function(e){var t=DIL.getDil("error"),n=document.createElement("a");return n.href=e||document.referrer,{hash:n.hash,host:n.host.split(":").shift(),hostname:n.hostname,href:n.href,pathname:n.pathname.replace(/^\//,""),protocol:n.protocol,search:n.search,uriParams:function(e,n){return t.helpers.map(n.split("&"),function(t){t=t.split("="),e[t.shift()]=t.shift()}),e}({},n.search.replace(/^(\/|\?)?|\/$/g,""))}},DIL.tools.getMetaTags=function(){var e={},t=document.getElementsByTagName("meta"),n,r,i,s,o;for(n=0,i=arguments.length;n<i;n++)if(s=arguments[n],null!==s)for(r=0;r<t.length;r++)if(o=t[r],o.name==s){e[s]=o.content;break}return e},DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(e,t,n){try{var r=this,i={name:"DIL Site Catalyst Module Error"},s=function(e){return i.message=e,DIL.errorModule.handleError(i),e};this.dil=null;if(!(t instanceof DIL))return s("dilInstance is not a valid instance of DIL");this.dil=t,i.partner=t.api.getPartner();if(e!==Object(e))return s("siteCatalystReportingSuite is not an object");if("function"!=typeof e.m_i||"function"!=typeof e.loadModule)return s("s.m_i is not a function or s.loadModule is not a function");e.m_DIL=function(e){e=e.m_i("DIL");if(e!==Object(e))return s("m is not an object");e.trackVars=r.constructTrackVars(n),e.d=0,e._t=function(){var e,t,n=","+this.trackVars+",",r=this.s,i,o=[];i=[];var u={},a=!1;if(!(r===Object(r)&&r.va_t instanceof Array))return s("Error in m._t function: s is not an object or s.va_t is not an array");if(this.d){if(r.lightProfileID)(e=r.lightTrackVars)&&(e=","+e+","+r.vl_mr+",");else if(r.pe||r.linkType)e=r.linkTrackVars,r.pe&&(t=r.pe.substring(0,1).toUpperCase()+r.pe.substring(1),r[t])&&(e=r[t].trackVars),e&&(e=","+e+","+r.vl_l+","+r.vl_l2+",");if(e){for(t=0,o=e.split(",");t<o.length;t++)0<=n.indexOf(","+o[t]+",")&&i.push(o[t]);i.length&&(n=","+i.join(",")+",")}for(i=0,t=r.va_t.length;i<t;i++)e=r.va_t[i],0<=n.indexOf(","+e+",")&&null!=r[e]&&""!==r[e]&&(u[e]=r[e],a=!0);a&&this.d.api.signals(u,"c_").submit()}},e.setup=function(){this.d=t}},e.loadModule("DIL");if(e.DIL!==Object(e.DIL)||"function"!=typeof e.DIL.setup)return s("s.DIL is not an object or s.DIL.setup is not a function");e.DIL.setup();if(i.message)return i.message}catch(o){return this.handle(o,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(e){var t=[],n,r,i,s,o;if(e===Object(e)){n=e.names;if(n instanceof Array&&(i=n.length))for(r=0;r<i;r++)s=n[r],"string"==typeof s&&s.length&&t.push(s);e=e.iteratedNames;if(e instanceof Array&&(i=e.length))for(r=0;r<i;r++)if(n=e[r],n===Object(n)&&(s=n.name,o=parseInt(n.maxIndex,10),"string"==typeof s&&s.length&&!isNaN(o)&&0<=o))for(n=0;n<=o;n++)t.push(s+n);if(t.length)return t.join(",")}return this.constructTrackVars({names:"pageName,channel,campaign,products,events,pe,pev1,pev2,pev3".split(","),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:75}]})}},DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(e,t,n){try{this.tv=this.arr=this.dil=null,this.errorMessage="",this.signals={},this.hasSignals=!1;var r={name:"DIL GA Module Error"},i="";t instanceof DIL?(this.dil=t,r.partner=this.dil.api.getPartner()):(i="dilInstance is not a valid instance of DIL",r.message=i,DIL.errorModule.handleError(r)),e instanceof Array&&!!e.length?this.arr=e:(i="gaArray is not an array or is empty",r.message=i,DIL.errorModule.handleError(r)),this.tv=this.constructTrackVars(n),this.errorMessage=i}catch(s){this.handle(s,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(e){var t=[],n,r,i,s;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){i=this.defaultTrackVars,s={};for(n=0,r=i.length;n<r;n++)s[i[n]]=!0;this.defaultTrackVarsObj=s}else s=this.defaultTrackVarsObj;if(e===Object(e)){e=e.names;if(e instanceof Array&&(r=e.length))for(n=0;n<r;n++)i=e[n],"string"==typeof i&&i.length&&i in s&&t.push(i);if(t.length)return t}return this.defaultTrackVars},constructGAObj:function(e){var t={},e=e instanceof Array?e:this.arr,n,r,i,s;for(n=0,r=e.length;n<r;n++)i=e[n],i instanceof Array&&i.length&&(i=[],s=e[n],i instanceof Array&&s instanceof Array&&Array.prototype.push.apply(i,s),s=i.shift(),"string"==typeof s&&s.length&&(t[s]instanceof Array||(t[s]=[]),t[s].push(i)));return t},addToSignals:function(e,t){return"string"!=typeof e||""===e||null==t||""===t?!1:(this.signals[e]instanceof Array||(this.signals[e]=[]),this.signals[e].push(t),this.hasSignals=!0)},constructSignals:function(){var e=this.constructGAObj(),t={_setAccount:function(e){this.addToSignals("c_accountId",e)},_setCustomVar:function(e,t,n){"string"==typeof t&&t.length&&this.addToSignals("c_"+t,n)},_addItem:function(e,t,n,r,i,s){this.addToSignals("c_itemOrderId",e),this.addToSignals("c_itemSku",t),this.addToSignals("c_itemName",n),this.addToSignals("c_itemCategory",r),this.addToSignals("c_itemPrice",i),this.addToSignals("c_itemQuantity",s)},_addTrans:function(e,t,n,r,i,s,o,u){this.addToSignals("c_transOrderId",e),this.addToSignals("c_transAffiliation",t),this.addToSignals("c_transTotal",n),this.addToSignals("c_transTax",r),this.addToSignals("c_transShipping",i),this.addToSignals("c_transCity",s),this.addToSignals("c_transState",o),this.addToSignals("c_transCountry",u)},_trackSocial:function(e,t,n,r){this.addToSignals("c_socialNetwork",e),this.addToSignals("c_socialAction",t),this.addToSignals("c_socialTarget",n),this.addToSignals("c_socialPagePath",r)}},n=this.tv,r,i,s,o,u,a;for(r=0,i=n.length;r<i;r++)if(s=n[r],e.hasOwnProperty(s)&&t.hasOwnProperty(s)&&(a=e[s],a instanceof Array))for(o=0,u=a.length;o<u;o++)t[s].apply(this,a[o])},submit:function(){try{return""!==this.errorMessage?this.errorMessage:(this.constructSignals(),this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present")}catch(e){return this.handle(e,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(e,t,n){try{this.callback=this.dil=null,this.errorMessage="",e instanceof DIL?(this.dil=e,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(t)?t:"aam_ga",this.delimiter=this.v(n)?n:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(r){this.handle(r,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(e){var t,n,r,i,s,o;o=!1;var u=1;if(e===Object(e)&&(t=e.stuff)&&t instanceof Array&&(n=t.length))for(e=0;e<n;e++)if((r=t[e])&&r===Object(r))if(i=r.cn,s=r.cv,i==this.cookieName&&this.v(s)){o=!0;break}if(o){t=s.split(this.delimiter),"undefined"==typeof window._gaq&&(window._gaq=[]),r=window._gaq;for(e=0,n=t.length;e<n&&!(o=t[e].split("="),s=o[0],o=o[1],this.v(s)&&this.v(o)&&r.push(["_setCustomVar",u++,s,o,1]),u>this.LIMIT);e++);this.errorMessage=1<u?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"==typeof this.callback)return this.callback()},submit:function(){try{var e=this;return""!==this.errorMessage?this.errorMessage:(this.dil.api.afterResult(function(t){e.process(t)}).submit(),"DIL.modules.GA.Stuffer.submit() successful")}catch(t){return this.handle(t,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}},DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(e,t,n){try{this.dil=null,this.errorMessage="",this.calledBack=!1,this.optionals=n===Object(n)?n:{};var n={name:"DIL Peer39 Module Error"},r=[],i="";this.isSecurePageButNotEnabled(document.location.protocol)&&(i="Module has not been enabled for a secure page",r.push(i),n.message=i,DIL.errorModule.handleError(n)),t instanceof DIL?(this.dil=t,n.partner=this.dil.api.getPartner()):(i="dilInstance is not a valid instance of DIL",r.push(i),n.message=i,DIL.errorModule.handleError(n)),"string"!=typeof e||!e.length?(i="aid is not a string or is empty",r.push(i),n.message=i,DIL.errorModule.handleError(n)):this.aid=e,this.errorMessage=r.join("\n")}catch(s){this.handle(s,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(e){return"https:"==e&&!0!==this.optionals.enableHTTPS?!0:!1},constructSignals:function(){var e=this,t=this.constructScript(),n=DIL.variables.scriptNodeList[0];return window["afterFinished_"+this.aid]=function(){try{var t=e.processData(p39_KVP_Short("c_p","|").split("|"));t.hasSignals&&e.dil.api.signals(t.signals).submit()}catch(n){}finally{e.calledBack=!0,"function"==typeof e.optionals.afterResult&&e.optionals.afterResult()}},n.parentNode.insertBefore(t,n),this.scriptsSent.push(t),"Request sent to Peer39"},processData:function(e){var t,n,r,i,s={},o=!1;this.returnedData.push(e);if(e instanceof Array)for(t=0,n=e.length;t<n;t++)r=e[t].split("="),i=r[0],r=r[1],i&&isFinite(r)&&!isNaN(parseInt(r,10))&&(s[i]instanceof Array||(s[i]=[]),s[i].push(r),o=!0);return{hasSignals:o,signals:s}},constructScript:function(){var e=document.createElement("script"),t=this.optionals,n=t.scriptId,r=t.scriptSrc,t=t.scriptParams;return e.id="string"==typeof n&&n.length?n:"peer39ScriptLoader",e.type="text/javascript","string"==typeof r&&r.length?e.src=r:(e.src=(this.dil.constants.IS_HTTPS?"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"==typeof t&&t.length&&(e.src+="?"+t)),e},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(e){return this.handle(e,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};var account=null;document.domain=="www.techrepublic.com"||document.domain=="techrepublic.com"||document.domain=="secure.techrepublic.com"?account="cbsitechrepublicsite,cbsicbsiall":account="cnettechrepublicsite-dev,cnetcbsiall-dev";var _scDilObj=s_gi(account),cbsiDil=DIL.create({partner:"cbsi",uuidCookie:{name:"aam_uuid",days:30}});DIL.modules.siteCatalyst.init(_scDilObj,cbsiDil,{names:["pageName","channel","campaign","products","events","pe","referrer","server","purchaseID","zip","state"],iteratedNames:[{name:"eVar",maxIndex:75},{name:"prop",maxIndex:75},{name:"pev",maxIndex:3},{name:"hier",maxIndex:4},{name:"list",maxIndex:3}]})