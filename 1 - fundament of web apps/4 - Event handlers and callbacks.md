## Event handlers and Callback functions

```js
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  // code that takes care of the server response
};

xhttp.open("GET", "/data.json", true);
xhttp.send();
```

The structure of the code is bit odd. We send the request at the end of the code but the code to handle the response is further up.

```js
xhttp.onreadystatechange = function () {
```

On this line, an event handler for an event _onreadystatechange_ is defined for the xhttp object doing the request

```js
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // code that takes care of the server response
  }
};
```

- then the code that takes care of the server response is executed if the _readyState_ is equal to **4** (which means the operation is complete) and if the HTTP Status code is of the response is 200 (also means request is fulfilled)
- Event handler functions are called callback functions.
- The code doesn't call the function by itself, the environment / browser invokes the function only when the `event` has occurred.
