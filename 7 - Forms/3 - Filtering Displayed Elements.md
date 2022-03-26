## Filtering Displayed Elements

Let's add some new functionality to our application that allows us to only view the important notes.

We will add a piece of state to the `App` component that keeps track of which notes should be displayed:

```js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // ...
};
```

- Let's change the component so that it stores a list of all the notes to be displayed in the `notesToShow` variable. The items of the list depend on the state of the component:

```js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // ...

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      // ...
    </div>
  );
};
```

- `notesToShow` is defined by using `conditional/ternary operator`. More on this [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

- If the value of `showAll` is false, the `notesToShow` variable will be assigned to a list that only contains notes that have the `important` property set to true. Filtering is done with the help of the array filter method:

```js
notes.filter((note) => note.important === true);
```

- The comparison operator is in fact redundant, since the value of note.important is either true or false which means that we can simply write:

```js
notes.filter((note) => note.important);
```

- The reason we showed the comparison operator first was to emphasize an important detail: in JavaScript `val1 == val2` does not work as expected in all situations
- it's safer to use `val1 === val2` exclusively in comparisons. You can read more about the topic [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### **MOVING ON**

Next let's add functionality that enables users to toggle the showAll state of the application from the user interface.

```js
import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

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
          <Note key={note.id} note={note} />
        ))}
      </ul>
      // ...
    </div>
  );
};
```

Let's dive deep into the code:

- The event handler switches the value of showAll from true to false and vice versa:

```js
() => setShowAll(!showAll);
```

- The text of the button depends on the value of the showAll state:

```js
show {showAll ? 'important' : 'all'}
```

**For referance check the `part2-notes` file in the same directory**
