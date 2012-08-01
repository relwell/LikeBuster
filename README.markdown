# LikeBuster #
## Ditch the Like Spam! ##

LikeBuster uses the amazing power of JavaScript and basic regular expression
matching to proactively remove items in your news feed that are only there 
because someone is paying Facebook money to spam you. Most Facebook users 
would agree that this is obnoxious. 

Currently, the extension finds all passive stories (non status updates) that 
include the term "like" in the story header, and removes that story from 
your news feed by deleting that DOM element. It's a greedy approach, and it 
could be improved.

Future iterations of this extension will (possibly) include:
* A blacklist approach tracking a registry of undesirable sources
* Configurable blocking
* Proactive notifications that a story has been blocked

## Installation Instructions ##
*  Download the (zip file)[https://github.com/relwell/LikeBuster/zipball/master] and extract it
*  Put it someplace you don't mind keeping it
*  In Chrome, click on the wrench in the upper right-hand corner, and select "extensions"
*  Make sure "developer mode" is clicked
*  Click "load unpacked extension", and select the folder you unzipped
*  Restart Chrome

To tell that it's working, open Chrome back up and press Ctrl+Shift+i (Apple+Shift+i for Macs). This opens your JavaScript console.

Now, navigate to Facebook and start scrolling. If you run into a like spam ad, something went wrong. 
LikeBuster logs to your JavaScript console every time it removes a spammy story.