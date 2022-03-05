## Event handler is a function

> **NOTE:** For reference use the `counter with event handler` example to make sense of this.

What if we tried to define the event handlers in a simpler form?

```html
<button onClick="{setCounter(counter" + 1)}>plus</button>
```

this would completely wreck our application:

<img src="./Event handler error.png">

## **What's going on?**

**An event handler is supposed to be either a function or a function reference, and when we write:**

```html
<button onClick="{setCounter(counter" + 1)}></button>
```

- **Here, the event handler is actually a function call**
- This means that the function doesn't wait for an event to occur, it will just call by itself.
- In the beginning the value of the `counter` variable is 0. When React renders the component for the first time, it executes the function call `setCounter(0+1)`
- This function call changes the value of the component's state to 1.
- This will cause the component to be re-rendered, React will execute the `setCounter` function call again, and the state will change leading to another rerender...
- Now let's define the event handler as we did before:

```html
<button onClick={() => setCounter(counter + 1)}>
  plus
</button>
```

- Now the button's attribute defines what to do when the button is clicked
- _`onClick`_ has the value `() => setCounter(counter + 1)`
- The `setCounter` function is only called when the user clicks the button
- Usually defining event handlers within JSX-templates is not a good idea. However in this example, it is acceptable because our event handlers are pretty simple.
- Let's see the right way to do it:

```js
const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};
```

**Here the event handlers have been defined correctly. The value of the `onClick` attribute is a variable containing a reference to a function**
