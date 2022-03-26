# Browser as a runtime environment

Our first task is to fetch the notes data for the React application from the address http://localhost:3001/notes

At the beginning of this course, we looked at how to fetch data from the server using `XmlHttpRequest`, otherwise known as an HTTP request made using a `XHR` object

The use of XHR is no longer recommended, and browsers already widely support the `fetch` method, which is based on so-called promises, instead of the event-driven model used by `XHR`.

As a reminder, let's see how we fetched data using XHR

```js
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);
    // handle the response that is saved in variable data
  }
};

xhttp.open("GET", "/data.json", true);
xhttp.send();
```

- We set a event handler to the xttp object representing the HTTP request, which will be called by the JS runtime whenever the state of the xttp changes

- If the change in state means a response has arrived then that data is handled accordingly.

- It is worth noting that the code in the event handler is defined before the request is sent to the server. Despite this, the code within the event handler will be executed at a later point in time.

- Therefore, the code does not execute synchronously "from top to bottom", but does so **asynchronously**. JavaScript calls the event handler that was registered for the request at some point.

**Let's see how a synchronous way of making requests works in Java with an example.**

```js
HTTPRequest request = new HTTPRequest();

String url = "https://fullstack-exampleapp.herokuapp.com/data.json";
List<Note> notes = request.get(url);

notes.forEach(m => {
  System.out.println(m.content);
});
```

- In java the code executes line by line, waits for the HTTP request which means waiting for the command `request.get(...)` to finish.

- The data returned by the commmand in this case, `notes` is then passed on to a variable and manipulated in the desired manner.

- On the other hand, JavaScript engines or runtime environments follow the asynchronous model. That is, it requires all IO operations (with some exceptions) to execute as non-blocking. Meaning the code execution continues immediately after calling an IO function, without waiting for it to return.

- When an async operation is fulfilled or more specifically at some point after its completion the JavaScript engines run the event handlers registered to the operation.

- Currently JavaScript engines are single threaded, which means they cannot execute code in parallel. Thus it is a requirement in practice to use non-blocking model for executing IO operations. Otherwise the browser can freeze during, for instance, while fetching data from the server.

- Another problem with JS being single-threaded is that if some code takes up a lot of time to execute, the browser will get stuck for the duration of that execution. Let's add this piece of code to the top of app to understand it:

```js
setTimeout(() => {
  console.log("loop..");
  let i = 0;
  while (i < 50000000000) {
    i++;
  }
  console.log("end");
}, 5000);
```

- Here, everything would work normally for the first 5 seconds, but after that 5 seconds is over, the loop starts running which will get the browser to be stuck till the long loop is over. Even the browser tab cannot be closed, atleast not in chrome.

- For the browser to remain responsive, i.e. to be able to continuously react to user operations with sufficient speed, the code logic needs to be such that no single computation can take too long.

- There is a host of additional material on the subject to be found on the internet. One particularly clear presentation of the topic is the keynote by Philip Roberts called [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

- In today's browsers, it is possible to run parallelized code with the help of so-called `web workers`. The event loop of an individual browser window is, however, still only handled by a single thread.
