## Introduction to react

Create a react app named part1 using the following command in the terminal

```
npx create-react-app part1
cd part1
```

The application is run as follows

```
npm start
```

By default this application runs in localhost port 3000 with the address http://localhost:3000

- **Go to the src folder and update the `*index.js*` so that it looks like this:**

```js
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

- **Now update the `app.js` so that it contains this:**

```js
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
);

export default App;
```

- **The files App.css, App.test.js, index.css, logo.svg, setupTests.js and reportWebVitals.js may be deleted as they are not needed in our application right now**
