## Conditional rendering

Let's modify our application so that the rendering of the clicking history is handled by a new History component:

```js
const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App = () => {
  // ...

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};
```

- Now the behaviour of the component depends on whether or not the button has been clicked
- If no button has been clicked that is, `allClicks` array is empty then the component renders a div with some instructions

```js
<div>the app is used by pressing the buttons</div>
```

- And if any button is clicked or has been clicked then the component renders:

```js
<div>button press history: {props.allClicks.join(" ")}</div>
```

- The `History` component renders completely different React elements depending on the state of the application and this is called _conditional rendering_
- React offers a variety of ways to perform conditional rendering and we will cover that in the coming lessons
- **We are going to make a slight modification to the code by adding a button component**

**Refer `counter conditional` example in the same directory**
