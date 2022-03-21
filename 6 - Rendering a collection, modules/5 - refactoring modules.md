## Refactoring Modules

Let's tidy the code up a bit. We are only interested in the field notes of the props, so let's retrieve that directly using destructuring:

```js
const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};
```

- We'll separate displaying a single note into its own component Note:

```js
const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

const App = ({ notes }) => {
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
```

- The `key` attribute now should be defined for the `Note` component and not _`li`_ tag like before.

### **MOVING ON**

A whole React application can be written in a single file. Although that is, of course, not very practical. Common practice is to declare each component in their own file as an ES6-module.

- We have been using modules for a while in the `index.js`

```js
import ReactDOM from "react-dom";
import App from "./App";
```

- Here we are importing two modules.
- The module **_react-dom_** is placed in the variable ReactDOM
- the module that defines the main component of the app is placed into the variable `App`

Let's place the `Note` component in it's own file.

- In smaller applications, components are usually placed in a directory called `components`, which is in turn placed within the `src` directory.
- The convention is to name the file after the component.

**Now, we'll create a directory called components for our application and place a file named Note.js inside. The contents of the Note.js file are as follows:**

```js
import React from "react";

const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

export default Note;
```

- The last line of the module **exports** the declared module, the variable Note.
- Now the file that is using the component - **App.js** - can **import** the module:

```js
import Note from "./components/Note";

const App = ({ notes }) => {
  // ...
};
```

- The component exported by the module is now available for use in the variable `Note`, just as it was earlier.

- Note that when importing our own components, their location must be given in relation to the importing file:

```
'./components/Note'
```

- Here the filename extension .js can be omitted.
- Modules have other uses too rather than declaring components in their own files

**Refer `Notes app` folder to find the source for the entire project**
