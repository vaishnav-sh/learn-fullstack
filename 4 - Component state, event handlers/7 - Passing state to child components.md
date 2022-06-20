## Passing state to child components

- It is recommended to write small React components so that it can be reusable across the app even even across projects
- We are going to refactor the entire app so that it has three components
- One for the counter, and 2 for plus and reset buttons

### **First we make a `Display` component**

This will be used to display the value of the counter.

> **NOTE:**
>
> - It is recommended react that you **lift the state up** in the component heirarchy. The docs say:
> - **"Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor."**

Using the component is straightforward, as we only need to pass the state of the counter to it:

```js
const Display = (props) => {
  return <div>{props.counter}</div>;
};
```

```js
const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} /> {/*here*/}
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};
```

### **Moving on**

- We are gonna make a `Button` component for the buttons of our application.
- We have to pass the event handler as well as the title of the button through the component's props:

```js
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
```

```js
const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} /> {/*here*/}
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="reset" />
      <Button onClick={setToZero} text="reset" />
      <Button onClick={decreaseByOne} text="reset" />
    </div>
  );
};
```

- Since we now have an easily reusable `Button` component, we've also implemented new functionality into our application by adding a button that can be used to decrement the counter.
- Here the event handler is passed with the help of a variable (which has a reference to the event handler function) to the `Button` component with prop name `onClick`.
