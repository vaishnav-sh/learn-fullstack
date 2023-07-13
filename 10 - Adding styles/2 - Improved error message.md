# Improved error message

We previously implemented the error message that was displayed when the user tried to toggle the importance of a deleted note with the `alert` method. Let's implement the error message as its own React component.

- The component is quite simple:

```js
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};
```

- If the value of the `message` prop is `null`, then nothing is rendered to the screen, and in other cases the message gets rendered inside of a div element.

- Let's add a new piece of state called `errorMessage` to the `App` component. Let's initialize it with some error message so that we can immediately test our component:

```js
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("some error happened...");

  // ...

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      // ...
    </div>
  );
};
```

- Then let's add a style rule that suits an error message:

```css
.error {
  color: red;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
```

- Now we are ready to add the logic for displaying the error message. Let's change the toggleImportanceOf function in the following way:

```js
const toggleImportanceOf = (id) => {
  const note = notes.find((n) => n.id === id);
  const changedNote = { ...note, important: !note.important };

  noteService
    .update(changedNote)
    .then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    })
    .catch((error) => {
      setErrorMessage(`Note '${note.content}' was already removed from server`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      setNotes(notes.filter((n) => n.id !== id));
    });
};
```

- When the error occurs we add a descriptive error message to the `errorMessage` state. At the same time, we start a timer, that will set the `errorMessage` state to null after five seconds.

- The result looks like this -

<img src="./notes styled.png">
