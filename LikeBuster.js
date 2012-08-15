jQuery(function() {
	setInterval(function() {
		jQuery('h6.uiStreamPassive').each(function(){
			var h6 = jQuery(this);
			var li = h6.closest('li');
			var text = h6.text();

			if (text.match(/ like(s)? [^(a photo)(a status)(a link)]/)
			    || text.match(/ claimed an offer /)) {
			    console.log("Hid some junk: "+text+" -- Did you really want to see that?");
			    li.remove();
			}
		});
	}, 200);
});