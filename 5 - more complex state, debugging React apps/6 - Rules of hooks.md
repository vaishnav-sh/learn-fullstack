## Rules of hooks

There are a few limitations and rules we have to follow to ensure that our application uses hook-based state functions correctly

- The useState function (as well as the useEffect function introduced later) _must NOT be called_ from inside of a loop, a conditional expression, or any place that is not a function defining a component.

- This must be done to ensure that the hooks are always called in the same order, and if this isn't the case the application will behave erratically.

- To recap, hooks may only be called from the inside of a function body that defines a React component:

```js
const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```
