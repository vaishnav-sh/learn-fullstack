# Changing the importance of notes

Let's add a button to every note that can be used for toggling its importance. Make the following changes in `Note` component:

```js
const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};
```

- We add a button to the component and assign its event handler as the `toggleImportance` function passed in the component's props.

- The App component defines an initial version of the toggleImportanceOf event handler function and passes it to every Note component:

```js
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // ...

  const toggleImportanceOf = (id) => {
    console.log("importance of " + id + " needs to be toggled");
  };

  // ...

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      // ...
    </div>
  );
};
```

- Notice how every note receives its own unique event handler function, since the id of every note is unique.

- E.g., if note.id is 3, the event handler function returned by `toggleImportance(note.id)` will be:

```js
() => {
  console.log("importance of 3 needs to be toggled");
};
```

- The template string syntax added in ES6 can be used to write similar strings in a much nicer way:

```js
console.log(`importance of ${id} needs to be toggled`);
```

## **MOVING ON**

- Individual notes stored in the json-server backend can be modified in two different ways by making HTTP requests to the note's unique URL. We can either replace the entire note with an HTTP PUT request, or only change some of the note's properties with an HTTP PATCH request.

- The final form of the event handler function is the following:

```js
const toggleImportanceOf = (id) => {
  const url = `http://localhost:3001/notes/${id}`;
  const note = notes.find((n) => n.id === id);
  const changedNote = { ...note, important: !note.important };

  axios.put(url, changedNote).then((response) => {
    setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
  });
};
```

- The first line defines the unique url for each note resource based on its `id`.

- The array find method is used to find the note we want to modify, and we then assign it to the note variable.

- After this we create a new object, `changedNote` that is an exact copy of the old note, apart from the _`important`_ property.

- There's a few things to point out. Why did we make a copy of the note object we wanted to modify, when the following code also appears to work?

```js
const note = notes.find(n => n.id === id)
note.important = !note.important

axios.put(url, note).then(response => {
  // ...
```

- This is not recommended because the variable note is a reference to an item in the notes array in the component's state, and as we recall we must never mutate state directly in React.

- It's also worth noting that the new object changedNote is only a so-called shallow copy, meaning that the values of the new object are the same as the values of the old object.

- If the values of the old object were objects themselves, then the copied values in the new object would reference the same objects that were in the old object. In other words, changing one object will affect the other.

- The new note is then sent with a PUT request to the backend where it will replace the old object.

- The callback function sets the component's notes state to a new array that contains all the items from the previous notes array, except for the old note which is replaced by the updated version of it returned by the server:

```js
axios.put(url, changedNote).then((response) => {
  setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
});
```

This is accomplished with the map method:

```js
notes.map((note) => (note.id !== id ? note : response.data));
```

- The map method creates a new array by mapping every item from the old array into an item in the new array.

- In our example, the new array is created conditionally so that if note.id !== id is true; we simply copy the item from the old array into the new array.

- If the condition is false, then the note object returned by the server is added to the array instead.

**For referance, check out `notes change imp` file in the same directory**
