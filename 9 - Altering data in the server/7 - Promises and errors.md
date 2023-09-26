# Promises and errors

If our application allowed users to delete notes, we could end up in a situation where a user tries to change the importance of a note that has already been deleted from the system.

- Let's simulate this situation by making the `getAll` function of the note service return a "hardcoded" note that does not actually exist on the backend server:

```js
const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};
```

- When we try to change the importance of the hardcoded note, we see the following error message in the console. The error says that the backend server responded to our HTTP PUT request with a status code 404 not found.

<img src="./promise error.png" >

- The application should be able to handle these types of error situations gracefully. Users won't be able to tell that an error has actually occurred unless they happen to have their console open. The only way the error can be seen in the application is that clicking the button has no effect on the importance of the note.

- We had previously mentioned that a promise can be in one of three different states. When an HTTP request fails, the associated promise is rejected. Our current code does not handle this rejection in any way.

- The rejection of a promise is handled by providing the `then` method with a second callback function, which is called in the situation where the promise is rejected.

- The more common way of adding a handler for rejected promises is to use the catch method.

- In practice, the error handler for rejected promises is defined like this:

```js
axios
  .get("http://example.com/probably_will_fail")
  .then((response) => {
    console.log("success!");
  })
  .catch((error) => {
    console.log("fail");
  });
```

- If the request fails, the event handler registered with the `catch` method gets called.

- The `catch` method is often utilized by placing it deeper within the promise chain.

- When our application makes an HTTP request, we are in fact creating a promise chain:

```js
axios
  .put(`${baseUrl}/${id}`, newObject)
  .then((response) => response.data)
  .then((changedNote) => {
    // ...
  });
```

- The `catch` method can be used to define a handler function at the end of a promise chain, which is called once any promise in the chain throws an error and the promise becomes _rejected_.

```js
axios
  .put(`${baseUrl}/${id}`, newObject)
  .then((response) => response.data)
  .then((changedNote) => {
    // ...
  })
  .catch((error) => {
    console.log("fail");
  });
```

- Let's use this feature and register an error handler in the App component:

```js
const toggleImportanceOf = (id) => {
  const note = notes.find((n) => n.id === id);
  const changedNote = { ...note, important: !note.important };

  noteService
    .update(id, changedNote)
    .then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    })
    .catch((error) => {
      alert(`the note '${note.content}' was already deleted from server`);
      setNotes(notes.filter((n) => n.id !== id));
    });
};
```

- The error message is displayed to the user with the trusty old alert dialog popup, and the deleted note gets filtered out from the state.

- Removing an already deleted note from the application's state is done with the array filter method, which returns a new array comprising only of the items from the list for which the function that was passed as a parameter returns true for:

```js
notes.filter((n) => n.id !== id);
```

- It's probably not a good idea to use alert in more serious React applications. We will soon learn a more advanced way of displaying messages and notifications to users. There are situations, however, where a simple, battle-tested method like alert can function as a starting point. A more advanced method could always be added in later, given that there's time and energy for it

**For reference, check out `notes finished` file in the same directory**
