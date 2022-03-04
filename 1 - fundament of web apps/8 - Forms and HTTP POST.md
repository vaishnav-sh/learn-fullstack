## Forms and HTTP POST

- The notes page contains a form element that allows us to add a new item to the notes list
- When the button on the form is clicked, the browser will send the user input to the server. Let's open the Network tab and see what submitting the form looks like:
- Surprisingly, submitting the form causes no less than five HTTP requests. The first one is the form submit event. Let's zoom into it:

**Let's dive more into it**

- Submitting the form is an HTTP POST request to the server
  <img src="./Forms and HTTP POST 1.png">

- The server responds with a HTTP Status code: 302.
- This is a URL redirect, with which the server asks the browser to do a new HTTP GET request to the address defined in the header's Location - the address `notes`.
- This generally means it reloads the entire web page and here 3 requests are happening

  - fetching styles from main.css
  - getting JS code from main.js
  - and raw data of notes from data.json

**The Form tag has attributes action and method, which define that submitting the form is done as an HTTP POST request to the address new_note.**

<img src="./Forms and HTTP POST 2.PNG">

### **Backend code**

```js
app.post("/new_note", (req, res) => {
  notes.push({
    content: req.body.note,
    date: new Date(),
  });

  return res.redirect("/notes");
});
```

Here,

- Data is sent as the body of the POST-request.
- The server can access the data by accessing the req.body field of the request object req.
- The server creates a new note object, and adds it to an array called notes.

```js
notes.push({
  content: req.body.note,
  date: new Date(),
});
```

- The Note objects have two fields: content containing the actual content of the note, and date containing the date and time the note was created.
- The server does not save new notes to a database, so new notes disappear when the server is restarted.
