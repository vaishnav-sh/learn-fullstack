# Serving static files from the backend

One possibility to take the frontend into production is to copy the production code, i.e. the directory build to the root of the backend's repository and define the backend to display the main page of the frontend as its main page , i.e. the file `build/index.html` .

- Let's start by copying the production code of the frontend under the backend, at the root of the project. On my own computer, copying is done from the frontend directory with a command

```
cp -r build ../notes-backend
```

- The directory containing the backend should now look like this:

<img src="./copy with cmd.png" alt="build folder copied through terminal"> 

- In order to make Express display static content , i.e. the page index.html and the JavaScript it loads, etc., we need the <a href="https://expressjs.com/en/starter/static-files.html" target="_blank">Static</a> middleware built into Express.

- When we add the following to the definition of other middlewares

```js
app.use(express.static('build'))
```

- in connection with HTTP requests of the Express GET type, first checks whether there is a file with the name corresponding to the path of the request in the directory build . If found, returns the Express file.

- Now an HTTP GET request to the address` www.svärvenosoite.com/index.html` or `www.svärvenosoite.com` shows the frontend made with React. A GET request to e.g. the address `www.svärvenosoite.com/api/notes` is handled by the backend code.

- Since in this case both frontend and backend work at the same address, the baseUrl of the server in the React application, i.e. the frontend code, can be defined as a relative URL, i.e. without the part that identifies the server:

```js
import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// ...
```

- After the change, a new production build must be created from
the frontend and copied to the root of the backend repository.

- The application can now be used from the backend address http://localhost:3001 :

<img src="./frontend deployed.png" alt="frontend test on local">

- The operation of our application now fully corresponds to the operation of the example application reviewed in chapter 0 <a href="https://fullstackopen.com/osa0/web_sovelluksen_toimintaperiaatteita#single-page-app" target="_blank">Single page app</a>.

- When we go to the address http://localhost:3001 with the browser, the server returns the file index.html in the build directory , the content of which, a little condensed, is as follows:

```html
<head>
  <meta charset="utf-8"/>
  <title>React App</title>
  <link href="/static/css/main.f9a47af2.chunk.css" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
  <script src="/static/js/1.578f4ea1.chunk.js"></script>
  <script src="/static/js/main.104ca08d.chunk.js"></script>
</body>
</html>
```

- The page contains instructions to download the CSS file that defines the styles of the application, as well as two script tags, thanks to which the browser loads the JavaScript code of the application, i.e. the actual React application.

- The React code retrieves the notes from the server at http://localhost:3001/api/notes and renders them on the screen. Communication between the browser and the server can be found, as usual, from the Network tab of the console :

<img src="./network tab local.png" alt="requests seen on network tab local">

- So the execution environment made for production looks like this:

<img src="./prod env.png" alt="production environment">