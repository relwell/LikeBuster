jQuery(function() {
	alert('loading');
	setInterval(function() {
		jQuery('h6.uiStreamPassive').each(function(){
			jQuery(this).closest('li').hide();
		});
	}, 200);
});