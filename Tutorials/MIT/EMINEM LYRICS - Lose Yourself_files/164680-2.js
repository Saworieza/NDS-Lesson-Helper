rubicon_cb = Math.random(); rubicon_rurl = document.referrer; if(top.location==document.location){rubicon_rurl = document.location;} rubicon_rurl = escape(rubicon_rurl);
window.rubicon_ad = "3647100" + "." + "js"; window.rubicon_creative = "3852948" + "." + "js";  rubicon_tag_code = "<script>\ncf.vars.cancel_impression[500088289] = true;\n<\/script>"; rubicon_tag_code = rubicon_tag_code.replace(/##RUBICON_CB##/g,rubicon_cb); document.write(rubicon_tag_code); document.write("<script>\nvar _comscore = _comscore || [];\n(function() {\n var rp_cats = \"IAB1-6\";\n var rp_cat = 24*1000;\n if (rp_cats) {\n	rp_cats = rp_cats.replace(/IAB/g,\"\").split(\",\");\n	if (rp_cats.length > 0 && rp_cats[0] && rp_cats[0].length > 0) {\n		rp_cat = rp_cats[0].split(\"-\")[0];\n		rp_cat = rp_cat * 1000;\n	}\n }\n var _comscore_switch = \"ke\";  _comscore.push({ c1: \"8\", c2: \"6135404\", c3: rp_cat, c4: \"39738\", c10: \"3852948\" }); if ( _comscore_switch == \"us\" )  {  (function() { var s = document.createElement(\"script\"), el = document.getElementsByTagName(\"script\")[0]; s.async = true; s.src = (document.location.protocol == \"https:\" ? \"https://sb\" : \"http://b\") + \".scorecardresearch.com/beacon.js\"; el.parentNode.insertBefore(s, el); })(); } \n})();\n<\/script>");