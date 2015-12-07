# madlibs
file serving project

For this project, we will be creating a Madlibs application! Each adjective/noun/verb etc will be using a button as a placeholder.

To start, you will need to create an index.html file that contains the Madlib (can be found through a Google search), and replace the blank space with the buttons mentioned above.

We will also need to link up our app.js, stylesheet.css, bootstrap and jquery files.

We will then create a data.json file and create an array of objects. Each object will represent a type of word that is requested in the Mad Lib (adjectives, nouns, verbs, etc). Each object will hold several options for each type of word

The next step is to create a "get" request in our app.js. Each specific "get" request will fire off when a certain type of word's button is clicked.
There will be several "get" requests, one for each type of word....or you could create a function that loops through the options and only hardcore one "get" request with variables.

With the data received from that get request, we can perform a randomization function to grab a random word from the returned object. We will then append that word to the DOM. It should take the place of the button that was clicked.


HARD MODE:
Don't clear out the button, just replace the text, so the user can keep clicking the button to keep changing the word.

PRO MODE: 
Add jQuery animation to the buttons and words.

