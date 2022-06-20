## Function that returns a function

- Another way to define an event handler is to use function that returns a function.

> **NOTE:** You probably won't need to use functions that return functions in any of the exercises in this course. If the topic seems particularly confusing, you may skip over this section for now and return to it later.

Now, let's look at an example:

```js
const App = () => {
  const [value, setValue] = useState(10);

  const hello = () => {
    const handler = () => console.log("hello world");
    return handler;
  };

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  );
};
```

- The event handler is now set to a function call:
- Earlier on we stated that an **event handler** may not be a call to a function, and that **it has to be a function or a reference to a function**. Why then does a function call work in this case?

When the component is rendered, the following function gets executed:

```js
const hello = () => {
  const handler = () => console.log("hello world");

  return handler;
};
```

- The return value of the function is another function that is assigned to the handler variable.

When React renders the line:

```html
<button onClick="{hello()}">button</button>
```

- It assigns the return value of hello() to the onClick attribute. Essentially the line gets transformed into:

```html
(<button onClick={() => console.log("hello world")}>
    button</button>);
```

- Since the `hello` function returns a function, the event handler is now a function.

**What's the point of this concept? Let's change the code a tiny bit:**

```js
const App = () => {
  const [value, setValue] = useState(10);

  const hello = (who) => {
    const handler = () => {
      console.log("hello", who);
    };
    return handler;
  };

  return (
    <div>
      {value}
      <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button>
    </div>
  );
};
```

- Now the application has three buttons with event handlers defined by the hello function that accepts a parameter. Here, the first button is defined as:

```html
<button onClick={hello('world')}>button</button>
```

- The event handler is created by executing the function call hello('world'). The function call returns the function:

```js
() => {
  console.log("hello", "world");
};
```

- This remains the same for the 2nd and 3rd button

- All three buttons execute differently based on their parameters

- Functions returning functions can be utilized in defining generic functionality that can be customized with parameters.

- The `hello` function that creates the event handlers can be thought of as a factory that produces customized event handlers meant for greeting users.

**Let's eliminate the helper variables and directly return the created function:**

```js
const hello = (who) => {
  return () => {
    console.log("hello", who);
  };
};
```

- since our funtion has only one `return` statement as its body we can omit it.

```js
const hello = (who) => {
  () => {
    console.log("hello", who);
  };
};
```

- Now let's write all the arrows on the same line and omit curly braces:

```js
const hello = (who) => () => {
  console.log("hello", who);
};
```

### **MOVING ON**

We can use the same trick to define event handlers that set the state of the component to a given value. Let's make the following changes to our code:

```js
const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue); // print the new value to console
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  );
};
```

- When the component is rendered, the thousand button is created:

```js
<button onClick={setToValue(1000)}>thousand</button>
```

- The event handler is set to the return value of setToValue(1000) which is the following function:

```js
() => {
  console.log("value now", 1000);
  setValue(1000);
};
```

### **Next up:**

The increase button is declared as follows:

```html
<button onClick={setToValue(value + 1)}>increment</button>
```

- The event handler is created by the function call `setToValue(value + 1)` which receives as its parameter the current value of the state variable value increased by one.
- If the value of value was 10, then the created event handler would be the function:

```js
() => {
  console.log("value now", 11);
  setValue(11);
};
```

**Using functions that return functions is not required to achieve this functionality. Let's return the `setToValue` function that is responsible for updating state, into a normal function:**

```js
const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>thousand</button>
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button>
    </div>
  );
};
```

- We can now define the event handler as a function that calls the setToValue function with an appropriate parameter. The event handler for resetting the application state would be:

```html
<button onClick={() => setToValue(0)}>reset</button>
```

**_Choosing between the two presented ways of defining your event handlers is mostly a matter of taste._**
