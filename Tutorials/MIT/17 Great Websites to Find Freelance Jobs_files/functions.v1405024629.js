function openNewWin(page, width, height) {

  topPos = (screen.height - height) / 2;
  leftPos = (screen.width - width) / 2;

  window.open(page, '_blank', 'width=' + width + ', height=' + height + ', top=' + topPos +', left=' + leftPos);

}

function validateEmail(myForm) {
	if (myForm.email.value == "") {
		alert("Please enter your email address");
		return false;
	}
	if ((myForm.email.value.indexOf('@')==-1) || (myForm.email1.value.indexOf('.')==-1)) {
	  alert("Please enter a valid email address");
	  return false;
	}
	return true;
}

function validate(myForm) {
	if (myForm.name.value == "") {
		alert("Please enter your name");
		return false;
	}
	if (myForm.email.value == "") {
		alert("Please enter your email address");
		return false;
	}
	if ((myForm.email.value.indexOf('@')==-1) || (myForm.email.value.indexOf('.')==-1)) {
	  alert("Please enter a valid email address");
	  return false;
	}
	if (myForm.desc.value == "") {
		alert("Please enter your comment");
		return false;
	}
	if (myForm.verf.value == "") {
		alert("Please enter verification code");
		return false;
	}
	return true;
}

function formFocus(theForm, theField) {
	document.form.email.focus();
}

function validate2(myForm) {
	if (myForm.name.value == "") {
		alert("Please enter your name");
		return false;
	}
	if (myForm.email1.value == "") {
		alert("Please enter at least one email address");
		return false;
	}
	if ((myForm.email1.value.indexOf('@')==-1) || (myForm.email1.value.indexOf('.')==-1)) {
	  alert("Please enter at least one valid e-mail address");
	  return false;
	}
	return true;
}


// Image preload
jQuery.preloadImages = function() {
	for(var i = 0; i<arguments.length; i++) {
		jQuery("<img>").attr("src", arguments[i]);
	}
}
$.preloadImages(
	'/images/freshbooks2-on.gif'
);


$(function(){

	// header logo rollover
	$('#freshbooks_logo').mouseover(function() {
		$(this).attr('src', '/images/freshbooks2-on.gif')
	}).mouseout(function() {
		$(this).attr('src', '/images/freshbooks2.gif')
	});


	// Fixes IE float problems [AA]
	$(".post").find(".floatleft:not(:first)").before("<div style='float: left; height: 0;'></div>");
	$(".post").find(".floatright:not(:first)").before("<div style='float: right; height: 0;'></div>");

	// initiates tooltips for report cards pages
	$('#benchmarks label').tooltip({
		showBody: " - "
	});

	$('a:has(img)').mouseover(function() {
		$(this).css('background-color', 'transparent');
	})
	
});

