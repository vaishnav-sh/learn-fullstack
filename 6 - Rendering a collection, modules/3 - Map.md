## Map

Understanding how the array method, map works is crucial for the rest of the course.

The application contains an array called notes:

```js
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
```

Let's pause for a moment and examine how map works.

If the following code is added to, let's say, the end of the file:

```js
const result = notes.map((note) => note.id);
console.log(result);
```

- `[1, 2, 3]` will be printed to the console. `map` **always creates a new array**, the elements of which have been created from the elements of the original array by mapping: using the function given as a parameter to the map method.
- The function is

```js
(note) => note.id;
```

- Which is an arrow function written in compact form. The full form would be:

```js
(note) => {
  return note.id;
};
```

- The function gets a note object as a parameter, and returns the value of its id field. Changing the command to:

```js
const result = notes.map((note) => note.content);
```

- results in an array containing the contents of the notes.

- This is already pretty close to the React code we used:

```js
notes.map((note) => <li key={note.id}>{note.content}</li>);
```

- which generates an li tag containing the contents of the note from each note object.

- Because the function parameter passed to the map method -

```js
(note) => <li key={note.id}>{note.content}</li>;
```

- above code is used to create and view elements, the value of the variable must be rendered inside of curly braces. Try to see what happens if the braces are removed.

- The use of curly braces will cause some pain in the beginning, but you will get used to them soon enough. The visual feedback from React is immediate.
