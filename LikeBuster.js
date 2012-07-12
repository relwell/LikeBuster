jQuery(function() {
	setInterval(function() {
		jQuery('h6.uiStreamPassive').each(function(){
			var h6 = jQuery(this);
			var li = h6.closest('li');
			if (h6.text().match(/ likes [^(a photo)(a status)(a link)]/)) {
			    console.log("Hid some junk: "+h6.text()+" -- Did you really want to see that?");
			    li.remove();
			}
		});
	}, 200);
});