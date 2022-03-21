## Forms

Let's continue expanding our application by allowing users to add new notes. You can find the code for our current application [here](https://github.com/fullstack-hy2020/part2-notes/tree/part2-1).

Also let's import `useState` function and use it to define a piece of state. This will get initialized with the `notes` array passed in the `props` (from `index.js`).

```js
import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
```

- If we wanted to start with an empty list of notes then we would have called `useState` function with an empty array and since we don't need what's inside `props` anymore. We can omit that as well:

```js
const App = () => {
  const [notes, setNotes] = useState([]);

  // ...
};
```

- Let's work with the initial value passed into `props` for the time being.
- Next, let's add an HTML form to the component that will be used for adding new notes.

```js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>
    </div>
  );
};
```

- We have added the `addNote` event handler that will be triggered when the form is submitted.
- The event parameter is the event that triggers the call to the event handler function:
- The statement `event.preventDefault()` will prevent the default behaviour of form submission to a particular URL. This allows us to stop any reloads and work with the submitted data on the client-side.
- The target of the event stored in `event.target` is logged to the console:

**For reference check the part2-notes file in the same directory**
