// Copyright 2006-2014 ClickTale Ltd., US Patent Pending
// Generated on: 8/2/2014 4:27:43 PM (UTC 8/2/2014 9:27:43 PM)

if (typeof(ct_dispatcher) == 'undefined')
{
	ct_dispatcher = {
		configName : null,
		cookieName : "ct_configName",
		getParameterByName : function (name)
		{
			 name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			 var regexS = "[\\?&]" + name + "=([^&#]*)";
			 var regex = new RegExp(regexS, "i");
			 var results = regex.exec(window.location.search);
			 if(results == null)
			   return "";
			 else
			   return decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		createCookie: function (name,value,days) 
		{
			if (days) 
			{
				var date = new Date();
				date.setTime(date.getTime( )+( days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString( );
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function (name) 
		{
			var nameEQ = name + "=";
			var ca = document.cookie.split( ';');
			for( var i=0;i < ca.length;i++) 
			{
				var c = ca[i];
				while ( c.charAt( 0)==' ') c = c.substring( 1,c.length);
				if ( c.indexOf( nameEQ) == 0) return c.substring( nameEQ.length,c.length);
			}
			return null;
		}
	};
		
	// Read from querystring
	var ct_pdc_qs_val = ct_dispatcher.getParameterByName(ct_dispatcher.cookieName);
	if (ct_pdc_qs_val)
	{
		// Override/create cookie
		ct_dispatcher.createCookie(ct_dispatcher.cookieName, ct_pdc_qs_val, 14);
		ct_dispatcher.configName = ct_pdc_qs_val;
	}
	else
	{
		// Read from cookie
		ct_dispatcher.configName = ct_dispatcher.readCookie(ct_dispatcher.cookieName);
	}

	
}

	if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	
		var configFoundPTC = false;
	
if (ct_dispatcher.configName == 'Release_17122013')
{
	configFoundPTC = true;
			(function(){
	var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2014 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 8614\r\n\/\/ WR destination: www09\r\n\/\/ WR version: 14.15\r\n\/\/ Recording ratio: 0.025\r\n\/\/ Generated on: 8\/2\/2014 4:27:43 PM (UTC 8\/2\/2014 9:27:43 PM)\r\n\r\n\r\nfunction ClickTaleCDNHTTPSRewrite(u)\r\n{\r\n\ttry\r\n\t{\r\n\t\tvar scripts = document.getElementsByTagName(\u0027script\u0027);\r\n\t\tif(scripts.length)\r\n\t\t{\r\n\t\t\tvar script = scripts[ scripts.length - 1 ], s=\u0027https:\/\/clicktalecdn.sslcs.cdngc.net\/\u0027;\r\n\t\t\tif(script.src \u0026\u0026 script.src.substr(0,s.length)==s )\r\n\t\t\t\treturn u.replace(\u0027https:\/\/cdnssl.clicktale.net\/\u0027,s);\r\n\t\t}\r\n\t}\r\n\tcatch(e)\r\n\t{\r\n\t}\r\n\treturn u;\r\n} \r\n\r\nvar ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\nvar pccScriptElement = ClickTaleCreateDOMElement(\u0027script\u0027);\r\npccScriptElement.type = \"text\/javascript\";\r\npccScriptElement.src = (document.location.protocol==\u0027https:\u0027?\r\nClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www09\/pcc\/f4bac7c1-80d7-4c4a-99b2-7636f1b6fcb5.js?DeploymentConfigName=Release_17122013\u0026Version=1\u0027):\r\n\u0027http:\/\/cdn.clicktale.net\/www09\/pcc\/f4bac7c1-80d7-4c4a-99b2-7636f1b6fcb5.js?DeploymentConfigName=Release_17122013\u0026Version=1\u0027);\r\ndocument.body.appendChild(pccScriptElement);\r\n\t\r\nvar ClickTalePrevOnReady;\r\nif(typeof ClickTaleOnReady == \u0027function\u0027)\r\n{\r\n\tClickTalePrevOnReady=ClickTaleOnReady;\r\n\tClickTaleOnReady=undefined;\r\n}\r\n\r\nif (typeof window.ClickTaleScriptSource == \u0027undefined\u0027)\r\n{\r\n\twindow.ClickTaleScriptSource=(document.location.protocol==\u0027https:\u0027\r\n\t\t?ClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027)\r\n\t\t:\u0027http:\/\/cdn.clicktale.net\/www\/\u0027);\r\n}\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)b\r\nwindow.ClickTaleSettings = window.ClickTaleSettings || {};\r\nwindow.ClickTaleSettings.XHRWrapper = {\r\n    Enable: true,\r\n    MaxResponseSize: 1000000,\r\n    RequestFilter: function (method, url) {\r\n        if (typeof url === \u0027string\u0027 \u0026\u0026 url.search(\/component\\\/load-more\\\/xhr\/gi) != -1) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\n\r\nwindow.ClickTaleSettings.CheckAgentSupport = function (defaultHandler, agent) {\r\n    if (agent.t == agent.IE) {\r\n        \/\/ don\u0027t use XDR but allow ajax\r\n        agent.XDR = false;\r\n        window.ClickTaleSettings.ctBoolAgentXDR = true;\r\n        window.ClickTaleSettings.XHRWrapper.AllowWithGet = true; \/\/ allow over get\r\n    }\r\n    return defaultHandler(agent);\r\n}\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nvar ClickTaleOnReady = function()\r\n{\r\n\tvar PID=8614, \r\n\t\tRatio=0.025, \r\n\t\tPartitionPrefix=\"www09\";\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\tif (window.WRc) {\r\n    window.WRc();\r\n}\r\n\r\nwindow.ClickTaleCookieDomain = \u0027techrepublic.com\u0027;\n\nClickTaleFetchFromWithCookies.setFromCookie(\/^purs_.*\/);\nClickTaleFetchFromWithCookies.setFromCookie(\/^surs_.*\/);\n\nClickTaleFetchFrom = ClickTaleFetchFromWithCookies.constructFetchFromUrl();\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\twindow.ClickTaleSSL=1;\r\n\t\r\n\tClickTale(PID, Ratio, PartitionPrefix);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\/\/set custom id to modal iframes\r\nif (typeof ClickTaleSetCustomElementID === \u0027function\u0027 \u0026\u0026 top != self) {\r\n    jQuery(\u0027.modal-iframe\u0027).map(function (ind, el) {\r\n        var id = \u0027modal-iframe\u0027 + ind;\r\n        ClickTaleSetCustomElementID(el, id);\r\n    });\r\n}\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\tvar externalScript = ClickTaleCreateDOMElement(\"script\");\r\n\tvar src = document.location.protocol==\u0027https:\u0027?\r\n\t  \u0027https:\/\/cdnssl.clicktale.net\/www\/tc\/WRe15.js\u0027:\r\n\t  \u0027http:\/\/cdn.clicktale.net\/www\/tc\/WRe15.js\u0027;\r\n\texternalScript.src = (window.ClickTaleCDNHTTPSRewrite?ClickTaleCDNHTTPSRewrite(src):src);\r\n\texternalScript.type = \u0027text\/javascript\u0027;\r\n\tdocument.body.appendChild(externalScript);\r\n})();\r\n\r\n\r\n\r\n");
	document.body.appendChild(script);	})();
	}
			
	

	// Default configuration
if (!configFoundPTC)
{
			(function(){
	var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2014 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 8614\r\n\/\/ WR destination: www09\r\n\/\/ WR version: 14.15\r\n\/\/ Recording ratio: 0.05\r\n\/\/ Generated on: 8\/2\/2014 4:27:43 PM (UTC 8\/2\/2014 9:27:43 PM)\r\n\r\n\r\nfunction ClickTaleCDNHTTPSRewrite(u)\r\n{\r\n\ttry\r\n\t{\r\n\t\tvar scripts = document.getElementsByTagName(\u0027script\u0027);\r\n\t\tif(scripts.length)\r\n\t\t{\r\n\t\t\tvar script = scripts[ scripts.length - 1 ], s=\u0027https:\/\/clicktalecdn.sslcs.cdngc.net\/\u0027;\r\n\t\t\tif(script.src \u0026\u0026 script.src.substr(0,s.length)==s )\r\n\t\t\t\treturn u.replace(\u0027https:\/\/cdnssl.clicktale.net\/\u0027,s);\r\n\t\t}\r\n\t}\r\n\tcatch(e)\r\n\t{\r\n\t}\r\n\treturn u;\r\n} \r\n\r\nvar ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\nvar pccScriptElement = ClickTaleCreateDOMElement(\u0027script\u0027);\r\npccScriptElement.type = \"text\/javascript\";\r\npccScriptElement.src = (document.location.protocol==\u0027https:\u0027?\r\nClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www09\/pcc\/f4bac7c1-80d7-4c4a-99b2-7636f1b6fcb5.js?DeploymentConfigName=Release_19032014\u0026Version=4\u0027):\r\n\u0027http:\/\/cdn.clicktale.net\/www09\/pcc\/f4bac7c1-80d7-4c4a-99b2-7636f1b6fcb5.js?DeploymentConfigName=Release_19032014\u0026Version=4\u0027);\r\ndocument.body.appendChild(pccScriptElement);\r\n\t\r\nvar ClickTalePrevOnReady;\r\nif(typeof ClickTaleOnReady == \u0027function\u0027)\r\n{\r\n\tClickTalePrevOnReady=ClickTaleOnReady;\r\n\tClickTaleOnReady=undefined;\r\n}\r\n\r\nif (typeof window.ClickTaleScriptSource == \u0027undefined\u0027)\r\n{\r\n\twindow.ClickTaleScriptSource=(document.location.protocol==\u0027https:\u0027\r\n\t\t?ClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027)\r\n\t\t:\u0027http:\/\/cdn.clicktale.net\/www\/\u0027);\r\n}\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)b\r\nwindow.ClickTaleSettings = window.ClickTaleSettings || {};\r\nwindow.ClickTaleSettings.XHRWrapper = {\r\n    Enable: true,\r\n    MaxResponseSize: 1000000,\r\n    RequestFilter: function (method, url) {\r\n        if (typeof url === \u0027string\u0027 \u0026\u0026 url.search(\/component\\\/load-more\\\/xhr\/gi) != -1) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\n\r\nwindow.ClickTaleSettings.CheckAgentSupport = function (defaultHandler, agent) {\r\n    if (agent.t == agent.IE) {\r\n        \/\/ don\u0027t use XDR but allow ajax\r\n        agent.XDR = false;\r\n        window.ClickTaleSettings.ctBoolAgentXDR = true;\r\n        window.ClickTaleSettings.XHRWrapper.AllowWithGet = true; \/\/ allow over get\r\n    }\r\n    return defaultHandler(agent);\r\n}\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nvar ClickTaleOnReady = function()\r\n{\r\n\tvar PID=8614, \r\n\t\tRatio=0.05, \r\n\t\tPartitionPrefix=\"www09\";\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\tif (window.WRc) {\r\n    window.WRc();\r\n}\r\n\r\nwindow.ClickTaleCookieDomain = \u0027techrepublic.com\u0027;\n\nClickTaleFetchFromWithCookies.setFromCookie(\/^purs_.*\/);\nClickTaleFetchFromWithCookies.setFromCookie(\/^surs_.*\/);\n\nClickTaleFetchFrom = ClickTaleFetchFromWithCookies.constructFetchFromUrl();\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\twindow.ClickTaleSSL=1;\r\n\t\r\n\tClickTale(PID, Ratio, PartitionPrefix);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\/\/set custom id to modal iframes\r\nif (typeof ClickTaleSetCustomElementID === \u0027function\u0027 \u0026\u0026 top != self) {\r\n    jQuery(\u0027.modal-iframe\u0027).map(function (ind, el) {\r\n        var id = \u0027modal-iframe\u0027 + ind;\r\n        ClickTaleSetCustomElementID(el, id);\r\n    });\r\n}\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\tvar externalScript = ClickTaleCreateDOMElement(\"script\");\r\n\tvar src = document.location.protocol==\u0027https:\u0027?\r\n\t  \u0027https:\/\/cdnssl.clicktale.net\/www\/tc\/WRe15.js\u0027:\r\n\t  \u0027http:\/\/cdn.clicktale.net\/www\/tc\/WRe15.js\u0027;\r\n\texternalScript.src = (window.ClickTaleCDNHTTPSRewrite?ClickTaleCDNHTTPSRewrite(src):src);\r\n\texternalScript.type = \u0027text\/javascript\u0027;\r\n\tdocument.body.appendChild(externalScript);\r\n})();\r\n\r\n\r\n\r\n");
	document.body.appendChild(script);	})();
	}

