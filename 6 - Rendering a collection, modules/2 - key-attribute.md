## Key-Attribute

Even though the application seems to be working, there is a nasty warning in the console:

<img src="./key-attribute error.png">

- As the linked React page in the error message suggests; the list items, i.e. the elements generated by the map method, must each have a unique key value: an attribute called `key`.

- so let's add the keys:

```js
const App = (props) => {
  const { notes } = props;

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

- React uses the key attributes of objects in an array to determine how to update the view generated by a component when the component is re-rendered.
