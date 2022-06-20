# Extracting Communication with the Backend into a Separate Module

The App component has become somewhat bloated after adding the code for communicating with the backend server. In the spirit of the [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle), we deem it wise to extract this communication into its own module.

- Let's create a `src/services` directory and add a file there called `notes.js`:

```js
import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
```

- The module returns an object that has three functions (`getAll`, `create`, and `update`) as its properties that deal with notes. The functions directly return the promises returned by the axios methods.

- The App component uses import to get access to the module:

```js
import noteService from './services/notes'

const App = () => {
```

- The functions of the module can be used directly with the imported variable `noteService` as follows:

```js
const App = () => {
  // ...

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
    });
  }, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  // ...
};

export default App;
```

- We could take our implementation a step further. When the `App` component uses the functions, it receives an object that contains the entire response for the HTTP request:

```js
noteService.getAll().then((response) => {
  setNotes(response.data);
});
```

- The App component only uses the response.data property of the response object.

- The module would be much nicer to use if, instead of the entire HTTP response, we would only get the response data. Using the module would then look like this:

```js
noteService.getAll().then((initialNotes) => {
  setNotes(initialNotes);
});
```

- We can achieve this by changing the code in the module as follows (the current code contains some copy-paste, but we will tolerate that for now):

```js
import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
```

- We no longer return the promise returned by axios directly. Instead, we assign the promise to the request variable and call its then method:

```js
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
```

- The modified `getAll` function still returns a promise, as the then method of a promise also returns a promise.

- After defining the parameter of the then method to directly return response.data, we have gotten the getAll function to work like we wanted it to.

- When the HTTP request is successful, the promise returns the data sent back in the response from the backend.

- We have to update the App component to work with the changes made to our module. We have to fix the callback functions given as parameters to the noteService object's methods, so that they use the directly returned response data:

```js
const App = () => {
  // ...

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    });
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  // ...
};
```

- This is all quite complicated and attempting to explain it may just make it harder to understand. The internet is full of material discussing the topic, such as this one.

- The "Async and performance" book from the [You do not know JS](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed) book series explains [the topic](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md) well, but the explanation is many pages long.

- Promises are central to modern JavaScript development and it is highly recommended to invest a reasonable amount of time into understanding them.
