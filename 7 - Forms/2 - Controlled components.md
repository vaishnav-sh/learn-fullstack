## Controlled Components

How do we access the data contained in the form's input element?

There are many ways of doing this and in this module we will be looking at **controlled components**

- Let's add a new piece of state called `newNote` for storing the user-submitted input and let's set it as the input element's value attribute:

```jsx
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");

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
        <input value={newNote} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};
```

- here, the input element will have the text that is used to initalize `newNote` but it makes the input element read-only.

<img src="./readonly input.png">

- Since we assigned a piece of the `App` component's state as the value attribute of the input element, the **`App` component now controls the behavior of the input element**.

- In order to enable editing of the input element, we have to register an event handler that synchronizes the changes made to the input with the component's state:

```jsx
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");

  // ...

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
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
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};
```

- We have now registered an event handler to the onChange attribute of the form's input element:

```js
<input value={newNote} onChange={handleNoteChange} />
```

- The event handler is called every time a change occurs in the input element. The event handler function receives the event object as its event parameter:

```js
const handleNoteChange = (event) => {
  console.log(event.target.value);
  setNewNote(event.target.value);
};
```

- The `target` property of the event object now corresponds to the controlled input element and `event.target.value` refers to the input value of that element.
- Here we don't need to call the `preventDefault()` function as there is no default action that occurs on an input submission
- You can directly view how the state changes from the React Devtools tab:

### **MOVING ON**

**Now the App component's newNote state reflects the current value of the input, which means that we can complete the addNote function for creating new notes:**

```js
const addNote = (event) => {
  event.preventDefault();
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length + 1,
  };

  setNotes(notes.concat(noteObject));
  setNewNote("");
};
```

- First we create a new object for the note called `noteObject` that will receive its content from the component's `newNote` state

- The unique identifier id is generated based on the total number of notes.

- This method works for our application since notes are never deleted.

- With the help of the Math.random() function, our note has a 50% chance of being marked as important.

- The new note is added to the list of notes using the concat array method, introduced in part 1:

```js
setNotes(notes.concat(noteObject));
```

- **The method does not mutate the original notes array**, but rather creates a new copy of the array with the new item added to the end. **This is important since we must never mutate state directly in React!**

- The event handler also resets the value of the controlled input element by calling the setNewNote function of the newNote state:

```js
setNewNote("");
```

