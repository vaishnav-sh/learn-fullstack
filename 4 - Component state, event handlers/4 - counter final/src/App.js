import { useState } from 'react'; // imports useState() function from react


const Display = ({ counter }) => <div><p>{counter}</p></div>;

const Button = ({ onClick, text }) => <div><button onClick={onClick}>{text}</button></div>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1)
  const decreasedByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="reset" />
      <Button onClick={decreasedByOne} text="minus" />
    </div>
  )
}

export default App
