import { useState } from 'react'; // imports useState() function from react

const App = () => {
  const [counter, setCounter] = useState(0)

  // const handleClick = () => {      *****BASIC******
  //   console.log("clicked!");
  // } 
  // event handler

  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const setToZero = () => {
    setCounter(0)
  }

  return (
    <div>
      <div>{counter}</div>
      {/*  here we see that it can be written directly in the onClick attribute of the button */}

      {/* <button onClick={handleClick}>plus</button>      ****BASIC******  */}
      {/* 
      <button onClick={() => setCounter(counter + 1)}> plus</button>
      <button onClick={() => setCounter(0)}>reset</button> *****reset add*****
      */}



      <button onClick={increaseByOne}> plus</button>
      <button onClick={setToZero}>reset</button>

    </div >




    // button that executes handleClick() on mouse click. 
    // the value of counter is increased by one and the component gets re-rendered on calling setCounter.
    // Now lets add a button to reset the counter ***reset add***
  )
}
export default App
