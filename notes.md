# Dev Environment
## How To Use Clasp
### "clasp push" Command
Deploy the code to the Apps Script repository.

### "clasp push -w" Command
The "-w" stands for watch so that any time you make a change, that change is 
deployed to the Apps Script repository. This way, you don't have to use "clasp
push" every time you make a change. 

### The .claspignore File
This file is used to ignore the prototypes we made when developing the MVP.

## Tasks - Jonas
(1hr) Finish implementing the do-not-capitalize-prepositions rule. The list of
prepositions that I have is not comprehensive: there are more prepositions in
the english language. A list of the 150 prepositions used in the English
language can be found [here](https://7esl.com/list-of-prepositions/). It is
important to note that prepositions can also be made up of multiple words.

(1hr) Implement the do-not-capitalize-the-to-in-infinitives rule. In MLA full 
infinitives (infinitives that have a "to" in front of them) mean that the "to"
must be lower case. In order to implement this, I will need to determine if a 
verb follows an infinitive. For this, I will use a dictionary API to search
for each word that follows a "to" to determine if it is a verb.

(1hr) "Do not capitalize the word that follows a hyphenated prefix if the prefix combined with the word is listed without a hyphen in a dictionary (e.g., “Anti-tumor,” but “Anti-Intellectual”)" I can implement this rule by using the same dictionary API.

(1/2hr) Do not capitalize the i in "i.e." 

(1/2hr) Do not reduce acronyms to lower case.

(2hr) Create a CD/CD pipeline.

TOTAL TIME TO COMPLETION: 6hr