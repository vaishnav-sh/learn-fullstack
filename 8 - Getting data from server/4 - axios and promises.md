# Axios and promises

Now we are ready to use axios. Going forward, json-server is assumed to be running on port 3001.

> **NOTE** : To run json-server and your react app simultaneously, you may need to use two terminal windows. One to keep json-server running and the other to run react-app.

- The library can be brought into use the same way other libraries, e.g. React, are, i.e. by using an appropriate `import` statement.

- Add the following to the file index.js:

```js
import axios from "axios";

const promise = axios.get("http://localhost:3001/notes");
console.log(promise);

const promise2 = axios.get("http://localhost:3001/foobar");
console.log(promise2);
```

This will be the in the console for http://localhost:3000

<img src="./axios one.png">

> **Note**: when the content of the file `index.js` changes, **React does not always notice that automatically** so you might need to refresh the browser to see your changes! **A simple workaround to make React notice the change automatically, is to create a file named .env in the root directory of the project and add this line FAST_REFRESH=false.** Restart the app for the applied changes to take effect.

- Axios' method `get` returns a promise.
- The documentation on Mozilla's site states the following about promises:

**A Promise is an object representing the eventual completion or failure of an asynchronous operation.**

In other words, a promise is an object that represents an asynchronous operation. A promise can have three distinct states:

- The promise is pending: It means that the final value (one of the following two) is not available yet.
- The promise is fulfilled: It means that the operation has completed and the final value is available, which generally is a successful operation. This state is sometimes also called resolved.
- The promise is rejected: It means that an error prevented the final value from being determined, which generally represents a failed operation.

## **MOVING ON**

- The first promise in our example is fulfilled representing a successful `axios.get('http://localhost:3001/notes')` request.

- The second one, however, is rejected, and the console tells us the reason. It looks like we were trying to make an HTTP GET request to a non-existent address.

- If, and when, we want to access the result of the operation represented by the promise, we must register an event handler to the promise. This is achieved using the method `then`:

```js
const promise = axios.get("http://localhost:3001/notes");

promise.then((response) => {
  console.log(response);
});
```

- The JavaScript runtime environment calls the callback function registered by the `then` method providing it with a response object as a parameter.

- The response object contains all the essential data related to the response of an HTTP GET request, which would include the returned data, status code, and headers.

- Storing the promise object in a variable is generally unnecessary, and it's instead common to chain the `then` method call to the axios method call, so that it follows it directly:

```js
axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  console.log(notes);
});
```

<img src="./axios response.png">

- The callback function now takes the data contained within the response, stores it in a variable and prints the notes to the console.

- The data returned by the server is plain text, basically just one long string. The axios library is still able to parse the data into a JavaScript array, since the server has specified that the data format is application/json; charset=utf-8 using the content-type header. [see previous image]

- We can finally begin using the data fetched from the server.

- Let's try and request the notes from our local server and render them, initially as the `App` component. Please note that this approach has many issues, as we're rendering the entire `App` component only when we successfully retrieve a response:

```js
import ReactDOM from "react-dom";
import App from "./App";

import axios from "axios";

axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
});
```

- This method could be acceptable in some circumstances, but it's somewhat problematic. Let's instead move the fetching of the data into the App component.

- What's not immediately obvious, however, is where the command axios.get should be placed within the component.
