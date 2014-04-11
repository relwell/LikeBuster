function logRemove(text)
{
    console.log("LikeBusted: "+text+" -- Did you really want to see that?");
}

var likeBust = function() {
	setInterval(function() {
		jQuery('.shareFooter').remove();
		jQuery('#pagelet_megaphone').remove();
		jQuery('#pagelet_ego_pane').remove();
		jQuery('#pagelet_trending_tags_and_topics').remove();
		jQuery('div[title="Upcoming Events"],div[title="Upcoming Concerts"]').each(function(){
			var li = jQuery(this).closest('li');
			logRemove(li.text());
			li.remove();
		});
		jQuery("span:contains(Recently Released Albums)").closest("li").remove();
		jQuery('h6.uiStreamPassive,h5.uiStreamPassive').each(function(){
			var h6 = jQuery(this);
			var text = h6.text();
			if (   text.match(/ claimed an offer /)
			    || text.match(/ shared /) 
			    || text.match(/ listened to /)
			    || text.match(/ like(s)? /) ) {
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
			    logRemove(li.text());
			    li.remove();
			}
		});
		jQuery('a.pronoun-link').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if (text.match(/a link/)) {
			    var li = span.closest('li');
			    logRemove(li.text());
			    li.remove();
			}
		});
		jQuery('h6 a[href*=pinterest]').each(function(){
			var span = jQuery(this);
			var text = span.closest('h6').text();
			var li = span.closest('li');
			logRemove(text);
			li.remove();
			});
		jQuery('h5 a[href*=pinterest]').each(function(){
			var span = jQuery(this);
			var text = span.closest('h5').text();
			var li = span.closest('li');
			logRemove(text);
			li.remove();
			});
		jQuery('h5 a[href*=tumblr]').each(function(){
			var span = jQuery(this);
			var text = span.closest('h5').text();
			var li = span.closest('li');
			logRemove(text);
			li.remove();
			});
		jQuery('a.shareText[href*=buzzfeed], a.shareText[href*=upworthy], a.shareText[href*=medium]').each(function() {
			var a = jQuery(this);
			var text = a.find('strong').text();
			logRemove(text);
			console.log(a.closest('li.genericStreamStory'));
			a.closest('li.genericStreamStory').remove();
		    });
		jQuery('div.actorDescription').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if ( text.match(/ via /) || text.match(/ shared /) ) {
			    var li = span.closest('li');
			    logRemove(li.text());
			    li.remove();
			}
		    });
		jQuery('h6.uiHeaderTitle').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if ( text.match(/ You Might Like$/ ) ) {
			    span.closest('.ego_section').remove();
			    logRemove(text);
			}
		    });
		jQuery('div.uiStreamEdgeStoryLine').each(function() {
			var div = jQuery(this);
			var span = div.find('span.uiStreamEdgeStoryLineTx');
			var text = span.text();
			if (span != null && (text.match(/Similar to/) || text.match(/More From/))) {
			    div.closest('div').closest('div').remove();
			    logRemove(text);
			}
		    });
		jQuery('div.userContentWrapper').each(function() {
			var div = jQuery(this);
			var divtext = div.text().toLowerCase();
			if (divtext.match(/coachella/) || divtext.match(/burning man/) || divtext.match(/\bplaya\b/) || divtext.match(/black rock city/)) {
			    div.parent().remove();
			}
		    });
	}, 200);
};


likeBust();