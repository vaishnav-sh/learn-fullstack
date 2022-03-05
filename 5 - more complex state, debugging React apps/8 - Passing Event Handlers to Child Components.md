## Passing Event Handlers to Child Components

Let's extract the button into its own component:

```js
const Button = (props) => {
  <button onClick={props.handleClick}>{props.text}</button>;
};
```

- The component gets the event handler function from the handleClick prop, and the text of the button from the text prop.

- Using the Button component is simple, although we have to make sure that we use the correct attribute names when passing props to the component.

<img src="./correct property.png">
