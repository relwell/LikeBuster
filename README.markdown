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