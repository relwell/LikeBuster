function logRemove(text)
{
    console.log("Hid some junk: "+text+" -- Did you really want to see that?");
}

jQuery(function() {
	setInterval(function() {
		jQuery('h6.uiStreamPassive').each(function(){
			var h6 = jQuery(this);
			var text = h6.text();

			if (text.match(/ like(s)? [^(a photo)(a status)(a link)]/)
			    || text.match(/ claimed an offer /)) {
			    var li = h6.closest('li');
			    logRemove(text);
			    li.remove();
			}
		});
		jQuery('span.uiStreamAdditionalLogging').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if (text.match(/^Sponsored$/)) {
			    var li = span.closest('li');
			    logRemove(li.find('h6').text());
			    li.remove();
			}
		});
	}, 200);
});