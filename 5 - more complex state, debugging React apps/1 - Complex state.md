## Complex state

In our previous examples with the counter app, the application state was simple as we were dealing with only one integer. What if we our application requires a more complex state ?

In most cases the easiest and best way to accomplish this is by using the `useState` function multiple times to create seperate 'pieces' of state

In the following code, we are creating two pieces of the state namely `left` and `right` that both get the intial value 0

```js
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
    </div>
  );
};
```

- the component gets access to the functions `setLeft` and `setRight` that it can use in order to modify the state
- The component's state or a piece of its state can be of any type. We could implement the same functionality by saving the click count of both the `left` and `right` buttons into a single object:

```js
{
  left: 0,
  right: 0
}
```

```js
const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  const HandleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };

  const HandleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  return (
    <div>
      {clicks.left}
      <button onClick={HandleLeftClick}>left</button>
      <button onClick={HandleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};
```

- when left button is clicked, new value of `left` property is now `left` + 1 (value of `left` from previous state)
- The value of `right` is same as the value of `right` in the previous state
- we can define the new state object more neatly by using the spread operator

```js
const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  const HandleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
  };

  const HandleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  return (
    <div>
      {clicks.left}
      <button onClick={HandleLeftClick}>left</button>
      <button onClick={HandleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};
```

- The syntax may seem complex at first.
- In practice, `{...clicks}` allows us spread the properties of `clicks `and copy them to a new object.
- Here with `{...clicks, right: 1}`, a copy of `left` and `right` properties have been made using object spread `...clicks`. the copied `right` property is then updated to 1 or whatever the updation may be.
- now this means the new object, `newClicks` will contain

> **NOTE:** `...` operator should always be the first property, and then update it if needed.

```js
{
  left: 0,
  right: clicks.right + 1,
}
```

- **creates a copy of the `clicks` object where the value of the `right` property is increased by one.**

### **MOVING ON**

- Assigning the newly created object variable in the event handler is not necessary, we can directly write it as:

```js
const HandleLeftClick = () => {
  setClicks({ ...clicks, left: clicks.left + 1 });
};

const HandleRightClick = () => {
  setClicks({ ...clicks, right: clicks.right + 1 });
};
```

**Some readers might be wondering why we didn't just update the state directly, like this:**

```js
const handleLeftClick = () => {
  clicks.left++;
  setClicks(clicks);
};
```

- The application appears to work. However, it is forbidden in React to mutate state directly, since it can result in unexpected side effects.
- Changing state has to always be done by setting the state to a new object
- If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object, and setting that as the new state.
- Storing all of the state in a single state object is a bad choice for this particular application; there's no apparent benefit and the resulting application is a lot more complex. In this case storing the click counters into separate pieces of state is a far more suitable choice.
