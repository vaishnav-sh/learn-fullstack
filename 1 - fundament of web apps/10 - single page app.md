## Single page app

- In most SPAs, there exists only 1 page in the app that loads data dynamically from the server
- The notes page of our og example is similar to SPA but it is not quite there yet
- Even though the logic for rendering the notes is run on the browser, the page still uses the traditional way of adding new notes.
- The data is sent to the server with form submit, and the server instructs the browser to reload the Notes page with a redirect.

The single page app version of our example application can be found [here](https://studies.cs.helsinki.fi/exampleapp/spa)

- the html looks exactly the same in this one, only difference is js file (spa.js) and the form attributes
  <img src="Notes SPA - 1.PNG">
- The form has no `action` and `method` attributes to define how and where to send the data

### **MOVING ON**

- open dev tools and network tab and don't reload. Instead add a new note
- You will see only one request that browser sends to the server
- The POST request to the address new_note_spa contains the new note as JSON-data containing both the content of the note (content) and the timestamp (date):

```js
{
  content: "single page app does not reload the whole page",
  date: "2019-05-25T15:15:59.905Z"
}
```

- The Content-Type header of the request tells the server that the included data is represented in the JSON format.
- Without this, the server will not know how to correctly parse this data
- The server responds with status code 202.
- 202 -> _the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet._
- This time the server doesn't ask for a redirect, the browser stays on the same page and it sends no further HTTP Requests.
- The SPA version of the app does not send the form data in the traditional way, but instead uses the JavaScript code it fetched from the server

### **Let's dive into the code**

```js
var form = document.getElementById("notes_form");
form.onsubmit = function (e) {
  e.preventDefault();

  var note = {
    content: e.target.elements[0].value,
    date: new Date(),
  };

  notes.push(note);
  e.target.elements[0].value = "";
  redrawNotes();
  sendToServer(note);
};
```

- `document.getElementById('notes_form')` instructs the code to fetch the form-element from the page, and to register an event handler to handle the form submit event.
- the event handler immediately calls `e.preventDefault()` to prevent the default handling of form submit.
- The default method would send the data to the server and cause a new GET request, which we don't want to happen.
- Then the event handler creates a new note, adds it to the notes list (empty array in js code) with the command `notes.push(note)`, rerenders the note list on the page and sends the new note to the server.
- The code for sending the note to the server is as follows:

```js
var sendToServer = function (note) {
  var xhttpForPost = new XMLHttpRequest();
  // ...

  xhttpForPost.open("POST", "/new_note_spa", true); // the data is to be sent with an HTTP POST request
  xhttpForPost.setRequestHeader("Content-type", "application/json"); // sets the requestHeader so that server will know it is in JSON Format
  xhttpForPost.send(JSON.stringify(note)); // data is sent as JSON-string.
};
```
