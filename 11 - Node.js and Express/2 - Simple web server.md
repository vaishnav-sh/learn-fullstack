# Simple web server

Let's change the application into a web server by editing the `index.js` files as follow:

```js
const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```

then run the your project using:

```
npm start
```

- Once the application is running, the following message is printed in the console:

```
Server running on port 3001
```

- You can view your running project at http://localhost:3001

<img src="./server hello world.png" alt="hello world"> 

- Here, the server will work regardless of the latter part of URL. For example, http://localhost:3001/something/here will work the same and show **hello world** on the page.

>**Note**: if the port 3001 is already in use by some other application, then starting the server will result in the ?following error message:

```
➜  hello npm start

> hello@1.0.0 start /Users/mluukkai/opetus/_2019fullstack-code/part3/hello
> node index.js

Server running on port 3001
events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3001
    at Server.setupListenHandle [as _listen2] (net.js:1330:14)
    at listenInCluster (net.js:1378:12)
```

- You have two options: 
    - shut down the application using the port 3001 (the json-server in the last part of the material was using the port 3001)
    - use a different port for this application.


## Moving on
Let's take a closer look at the first line of the code:

```js
const http = require('http')
```

- In the first row, the application imports Node's built-in web server module. This is practically what we have already been doing in our browser-side code, but with a slightly different syntax:

```js
import http from 'http'
```

- These days, code that runs in the browser uses ES6 modules. Modules are defined with an [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) and taken into use with an [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

- However, Node.js uses so-called [CommonJS modules](https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules).

- The reason for this is that the Node ecosystem had a need for modules long before JavaScript supported them in the language specification

- Node supports now also the use of [ES6 modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules), but since the support is yet not quite perfect we'll stick to CommonJS modules.

- The next chunk in our code looks like this: 
```js
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})
```
- The code uses the `createServer` method of the `http` module to create a new web server. An event handler is registered to the server that is called every time an HTTP request is made to the server's address http://localhost:3001.

- The request is responded to with the status code 200, with the `Content-Type header` set to `text/plain`, and the content of the site to be returned set to **Hello World**.

- The last rows bind the http server assigned to the app variable, to listen to HTTP requests sent to the port 3001:

```js
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```

- The primary purpose of the backend server in this course is to offer raw data in the JSON format to the frontend. For this reason, let's immediately change our server to return a hardcoded list of notes in the JSON format:

```js
const http = require('http')

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```
- restart the server again
    - stop the server by `CTRL + C` in the terminal
    - npm start
    - refresh the browser

- The *application/json* value in the Content-Type header informs the receiver that the data is in the JSON format. The notes array gets transformed into JSON with the `JSON.stringify(notes)` method.

- When we open the browser, the displayed format is exactly the same as in part 2 where we used json-server to serve the list of notes:

<img src="./server json.png" alt="server showing data like json-server">
