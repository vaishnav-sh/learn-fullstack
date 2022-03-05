import { useState } from 'react'; // imports useState() function from react

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  const HandleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
  };

  const HandleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
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

export default App
