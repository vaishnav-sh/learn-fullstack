## Refactoring

In this section we will be refactoring already written code. This will be available in `counter final` file.

### `Display` component

- The component displaying the value of the counter is as follows:

```js
const Display = (props) => {
  return <div>{props.counter}</div>;
};
```

- The component only takes the `counter` field from the object `props` so we can rewrite it as:

```js
const Display = ({ counter }) => <div>{counter}</div>;
```

- In the above code the function defining the component has only the `return` statement so we can omit the keyword `return` to get much more optimized code.

### `Button` component

This is what we have:

```js
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
```

- We can use destrucuring to access only the fields that we want from `props` and use the more compact form of arrow functions.

```js
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
```
