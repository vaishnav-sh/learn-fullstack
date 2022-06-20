# Sending data to the server

Let's make the following changes to the event handler responsible for creating a new note:

```js
addNote = (event) => {
  event.preventDefault();
  const noteObject = {
    content: newNote,
    date: new Date(),
    important: Math.random() < 0.5,
  };

  axios.post("http://localhost:3001/notes", noteObject).then((response) => {
    console.log(response);
  });
};
```

- We create a new object for the note but omit the id property, since it's better to let the server generate ids for our resources!

- The object is sent to the server using the axios post method. The registered event handler logs the response that is sent back from the server to the console.

- When we try to create a new note, the following output pops up in the console:

<img src="./new note to server.png" />

- The newly created note resource is stored in the value of the data property of the response object.

- Sometimes it can be useful to inspect HTTP requests in the Network tab of Chrome developer tools, which was used heavily at the beginning of `part 0`:

<img src="./network tab.png">

- We can use the inspector to check that the headers sent in the POST request are what we expected them to be, and that their values are correct.

- Since the data we sent in the POST request was a JavaScript object, axios automatically knew to set the appropriate application/json value for the Content-Type header.

- The new note is not rendered to the screen yet. This is because we did not update the state of the App component when we created the new note. Let's fix this:

```js
addNote = (event) => {
  event.preventDefault();
  const noteObject = {
    content: newNote,
    date: new Date(),
    important: Math.random() > 0.5,
  };

  axios.post("http://localhost:3001/notes", noteObject).then((response) => {
    setNotes(notes.concat(response.data));
    setNewNote("");
  });
};
```

- The new note returned by the backend server is added to the list of notes in our application's state in the customary way of using the setNotes function and then resetting the note creation form.

- An important detail to remember is that the concat method does not change the component's original state, but instead creates a new copy of the list.

- Once the data returned by the server starts to have an effect on the behavior of our web applications, we are immediately faced with a whole new set of challenges arising from, for instance, the asynchronicity of communication.

- This necessitates new debugging strategies, console logging and other means of debugging become increasingly more important. We must also develop a sufficient understanding of the principles of both the JavaScript runtime and React components. Guessing won't be enough.

- It's beneficial to inspect the state of the backend server, e.g. through the browser:

```
http://localhost:3001/notes
```

- This makes it possible to verify that all the data we intended to send was actually received by the server.

- In the next part of the course we will learn to implement our own logic in the backend. We will then take a closer look at tools like **Postman** that helps us to debug our server applications.

- However, inspecting the state of the `json-server` through the browser is sufficient for our current needs.

> In the current version of our application, the browser adds the creation date property to the note. Since the clock of the machine running the browser can be wrongly configured, it's much wiser to let the backend server generate this timestamp for us. This is in fact what we will do in the next part of the course.

**For referance, checkout `notes advanced` folder in the same directory**
