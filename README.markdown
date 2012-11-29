# LikeBuster #
## Ditch the Like Spam! ##

LikeBuster uses the amazing power of JavaScript and basic regular expression
matching to proactively remove items in your news feed that are only there 
because someone is paying Facebook money to spam you. Most Facebook users 
would agree that this is obnoxious. 

LikeBuster is in continuous release, but currently experimental. 

The extension originally just found all passive stories (non status updates) that 
include the term "like" in the story header, and removes that story from 
your news feed by deleting that DOM element. It's a greedy approach, and it 
could be improved. Improvements are listed in the release notes below.

Future iterations of this extension will (possibly) include:
* A blacklist approach tracking a registry of undesirable sources
* Configurable blocking
* Proactive notifications that a story has been blocked

## Chrome Installation Instructions ##
*  Download the [zip file](https://github.com/relwell/LikeBuster/zipball/master) and extract it
*  Put it someplace you don't mind keeping it
*  In Chrome, click on the wrench in the upper right-hand corner, and select "extensions"
*  Make sure "developer mode" is clicked
*  Click "load unpacked extension", and select the folder you unzipped
*  Restart Chrome

To tell that it's working, open Chrome back up and press Ctrl+Shift+i (Apple+Shift+i for Macs). This opens your JavaScript console.

Now, navigate to Facebook and start scrolling. If you run into a like spam ad or a sponsored story, something went wrong. 
LikeBuster logs to your JavaScript console every time it removes a spammy story.

## Firefox Installation Instructions ##
You can skip this process by going to the [add-on page](https://addons.mozilla.org/en-US/firefox/addon/likebuster-for-firefox/).
It's highly likely Firefox's version will be out of date faster, since it's slightly less accommodating towards experimental extensions.
* Download the [zip file](https://github.com/relwell/LikeBuster/zipball/master) and extract it
* Drag the likebuster-for-firefox.xpi onto an open Firefox browser window. This should automatically cause the add-on to install.

To tell that it's working, go to Tools > Web Developer > Web Console or type Ctrl+Alt+K. This opens your JavaScript console.

Now, navigate to Facebook and start scrolling. If you run into a like spam ad or a sponsored story, something went wrong. 
LikeBuster logs to your JavaScript console every time it removes a spammy story.


## Release Notes ##
### Release 20121128 ###
* Now hiding all things other people like, since spammier likes get pushed into your news feed more often than informative likes.
* Improved logging in console

### Release 20121127 ###
* Now hiding "suggested events". Who wanted that in the first place?

### Release 20120918 ###
* Fixed bug where "claimed an offer" text was also found in h5.uiStreamPassive

### Release 20120916 ###
* Removing Pinterest spam
* Calling LikeBuster only on Facebook.com domain for improved performance
**The next version of the Firefox extension rev 20 contains both this release and the prior**

### Release 20120906 ###
* Now removing Spotify spam
* Now removing all "shared" stories 
(please contact the author if you have a problem with this; eventually we will 
be able to customize this kind of stuff a lot better)
* Now removing "re-blogging" stories (e.g. So-and-so via such-and-such: (link))
* Now removing new kind of spam, alerting you that something you like added a link to their timeline.
NOTE: These features will be added to Firefox in a later release.

### Release 20120828 ###
* Included license, added in Firefox add-on.

### Release 20120827 ###
* Added support for passive stories tagged as sponsored campaigns with variable predicates

### Release 20120815 ###
* Added support for hiding claimed offers

### Release 20120712 ###
* Updated regex to leave sharing and liking of non-sponsored info alone

### Release 20120710 ###
* Initial release