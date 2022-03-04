import ReactDOM from 'react-dom';
import App from './App';

let counter = 1; // suppose we want to update this every 1 second but it wont be displayed as the component won't re-render
// we can get the component to rerender by calling the ReactDOM.render method a second time

/*
ReactDOM.render(
  <App counter={counter} />,
  document.getElementById('root')
) 

** WE ARE RE-WRITING THIS SO THAT THE APP COMPONENT WILL BE RE-RENDERED WHEN counter += 1**

*/

const refresh = () => {
  ReactDOM.render(
    <App counter={counter} />,
    document.getElementById('root')
  )
};

/*  The component APP will render 3 times here but it's really quick so we will add a setInterval function so that it keeps rendering every 1s
refresh();
counter += 1;
refresh();
counter += 1;
refresh();  */

setInterval(() => {
  refresh();
  counter += 1;
}, 1000);