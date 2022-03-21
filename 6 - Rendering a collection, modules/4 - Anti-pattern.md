## Anti-pattern: Array Indexes as Keys

We could have made the **error message** on our `console` disappear by using the array indexes as keys. The **indexes** can be retrieved by passing a second parameter to the callback function of the map method:

```js
notes((note, i) => something);
```

- When called like this, i is assigned the value of the index of the position in the array where the note resides.
- As such, one way to define the row generation without getting errors is:

```jsx
<ul>
  {notes.map((note, i) => {
    <li key={i}>{note.content}</li>;
  })}
</ul>
```

- This is; however, **not recommended** and can create undesired problems even if it seems to be working just fine.

- Using index as key is an anti-pattern in React.

- Read more about this in this [article](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318).
