# Effect-hooks

As per the official docs:

_The Effect Hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects._

- This means that effect hooks are precisely the right tool to use when fetching data from a server.

- Let's remove the fetching of data from `index.js`. Since we're gonna be retrieving the notes from the server, there is no longer a need to pass data as props to the App component. So index.js can be simplified to:

```js
ReactDOM.render(<App />, document.getElementById("root"));
```

- The App component changes as follows:

```js
import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");

  // ...
};
```

- This is printed to the console

```
render 0 notes
effect
promise fulfilled
render 3 notes
```

- First the body of the function defining the component is executed and the component is rendered for the first time. At this point _`render 0 notes`_ is printed, meaning data hasn't been fetched from the server yet.

- The following function, or effect in React parlance:

```js
() => {
  console.log("effect");
  axios.get("http://localhost:3001/notes").then((response) => {
    console.log("promise fulfilled");
    setNotes(response.data);
  });
};
```

- The above piece of code is executed immediately after rendering. The execution of the function results in _`effect`_ being printed to the console, and the commmand `axios.get` initiates the fetching of data from the server as well as registers the following function as an event handler for the operation:

```js
response => {
  console.log('promise fulfilled')
  setNotes(response.data)
})
```

- When data arrives from the server, the JavaScript runtime calls the function registered as the event handler, which prints _`promise fulfilled`_ to the console and stores the notes received from the server into the state using the function `setNotes(response.data)`.

- As always, a call to a state-updating function triggers the re-rendering of the component. As a result, _`render 3 notes`_ is printed to the console, and the notes fetched from the server are rendered to the screen.

- Finally, let's take a look at the definition of the `effect` hook as a whole:

```js
useEffect(() => {
  console.log("effect");
  axios.get("http://localhost:3001/notes").then((response) => {
    console.log("promise fulfilled");
    setNotes(response.data);
  });
}, []);
```

Let's rewrite the code a bit differently:

```js
const hook = () => {
  console.log("effect");
  axios.get("http://localhost:3001/notes").then((response) => {
    console.log("promise fulfilled");
    setNotes(response.data);
  });
};

useEffect(hook, []);
```

- Now we can see more clearly that the function `useEffect` actually takes two parameters. The first is a function, the effect itself. According to the documentation:
  _"By default, effects run after every completed render, but you can choose to fire it only when certain values have changed."_

- So by default the effect is **always** run after the component has been rendered. In our case, however, we only want to execute the effect along with the first render.

- The second parameter of `useEffect` is used to specify how often the effect is run. If the second parameter is an empty array [], then the effect is only run along with the first render of the component.

- There are many possible use cases for an effect hook other than fetching data from the server. However, this use is sufficient for us, for now.

- Note that we could have also written the code of the effect function this way:

```js
useEffect(() => {
  console.log("effect");

  const eventHandler = (response) => {
    console.log("promise fulfilled");
    setNotes(response.data);
  };

  const promise = axios.get("http://localhost:3001/notes");
  promise.then(eventHandler);
}, []);
```

- After rendering the `App` component the `useEffect` is executed.

- `promise` variable stores the promise object returned by the `get` method in `axios`

- If the promise is fulfilled, the `then` method is used to specify the callback function.

- Here the callback function is stored inside the variable `eventHandler`

- It isn't usually necessary to assign functions and promises to variables, and a more compact way of representing things, as seen further above, is sufficient.

**We still have a problem in our application. When adding new notes, they are not stored on the server. Which will be solved in the upcoming module**

### **For reference, check out the effect hook example directory and see how the project is working**
