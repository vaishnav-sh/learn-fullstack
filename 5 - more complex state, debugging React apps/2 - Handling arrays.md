## Handling arrays

Let's add a piece of state to our application containing an array `allClicks` that remembers all the clicks that has occured in the application

```js
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
    </div>
  );
};
```

- Every click is stored in a piece of state called `allClicks` which is initialized as an empty array

```js
const [allClicks, setAll] = useState([]);
```

- When the right button is clicked we add letter 'R' to the array `allClicks` and letter 'L' when left is clicked.

```js
const handleLeftClick = () => {
  setAll(allClicks.concat("L"));
  setLeft(left + 1);
};

const handleRightClick = () => {
  setAll(allClicks.concat("R"));
  setRight(right + 1);
};
```

- Adding the new item to the array is accomplished with the `concat` method
- `concat` method does not mutate the existing array but rather returns a new copy of the array with the item added to it.
- adding new items can also be done with the `push` method but in React its use is not adviced.
- Because the state of React components like `allClicks` must not be mutated directly. Even if mutating state appears to work in some cases, it can lead to problems that are very hard to debug.

**Refer `counter handles arrays` example in the same directory**
