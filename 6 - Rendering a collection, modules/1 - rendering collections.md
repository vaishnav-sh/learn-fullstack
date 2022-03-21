## Rendering collections

In this module we will do the front-end, that is browser-side application logic.

Let's start with the following `App.js` file

```js
const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  );
};

export default App;
```

The `index.js` file should look like this:

```js
import ReactDOM from "react-dom";
import App from "./App";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
```

- Every note contains its textual content, a timestamp, a boolean value for marking whether the note has been categorized as important or not, and also a unique id.
- The above code works due to the fact that there are exactly three notes in the array
- A single note is rendered by accessing objects in the array by referring to a hard-coded index number:

```html
<li>{notes[1].content}</li>
```

- This is, of course, not practical. We can improve on this by generating React elements from the array objects using the map function.

```html
notes.map(note =>
<li>{note.content}</li>
)
```

- The result is an array of elements:

```js
[
  <li>HTML is easy</li>,
  <li>Browser can execute only JavaScript</li>,
  <li>GET and POST are the most important methods of HTTP protocol</li>,
];
```

- Which can then be placed inside ul tags:

```js
const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};
```

- Because the code generating the li tags is JavaScript, it must be wrapped in curly braces in a JSX template just like all other JavaScript code.
