import { useState } from 'react'; // imports useState() function from react

const App = () => {
  console.log(useState(0));
  const [counter, setCounter] = useState(0)
  //useState(0) function call adds state to the component and renders it initalized with a value of 0
  // This function returns an array with two items, which we then assign to variables 'counter' and 'setCounter' using destructuring
  // The counter variable will hold the the intial value of the state which is 0
  // the setCounter variable will hold a function that will be used to modify the state
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  // The function setCounter() passed as parameter to setTimeout will execute after one second
  // When the state modifying function setCounter is called, React re-renders the component which means that the function body of the component function gets re-executed:
  // The second time the component function is executed it calls the useState function and returns the new value of the state: 1
  // executing the function body again means setTimeout will be executed again which waits for a second and increases the counter by one
  // here incrementing the value by one is the same as an expression setting the value of counter to 2

  // Everytime setCounter modifies the state it cause the component to re-render 
  // the value will keep incrementing until the application is stopped
  // If the component doesn't render at the expected time you can debug it by console.log()-ing the values of the component's variables.

  // console.log("rendering... " + counter);

  return (
    <div>{counter}</div>
  )
}
export default App
