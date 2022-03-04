## Loading a page containing JavaScript - review

<img src="./Loading a page containing JavaScript - review.png">

Here's how it works in short

- The browser sends a request to the server using HTTP GET for the HTML Document that defines the content of the web page.
- The links in the HTML document fetches the styles from `main.css` and applies it to the selected elements
- and the JavaScript code from main.js
- The browser starts executing the JS code, makes a HTTP GET request to `https://studies.cs.helsinki.fi/exampleapp/data.json` that returns the note as JSON data.
- Once the data has been fetched, the browser executes the appropriate event handler to display the notes/data onto the webpage using DOM API
