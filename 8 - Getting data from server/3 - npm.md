# npm

Let's get back to the topic of fetching data from the server.

We could use the previously mentioned promise-based function `fetch` to pull data from the server. Fetch is a great tool and is supported across all browsers (even in IE).

That being said, we will be using the `axios` library instead for communication between the browser and server. It functions like fetch, but is somewhat more pleasant to use. Another good reason to use axios is our getting familiar with adding external libraries, so-called `npm` packages, to React projects.

Nowdays, practically all JavaScript projects are defined using node package manager, that is `npm`. The projects created with `create-react-app` also follows the `npm` format. A clear indicator that a project uses npm is the package.json file located at the root of the project:

```json
{
  "name": "notes",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

- At this point the _dependencies_ part is of most interest to us as it defines what dependencies, or external libraries, the project has.
- We now want to use axios. Theoretically, we could define the library directly in the package.json file, but it is better to install it from the command line.

```
npm install axios
```

**NB npm-commands should always be run in the project root directory, which is where the package.json file can be found.**

- axios is now included among other dependencies:

```json
{
  "name": "notes",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.24.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.3"
  }
  // ...
}
```

- In addition to adding axios to the dependencies, the `npm install` command also downloaded the library code. As with other dependencies, the code can be found in the **node_modules** directory located in the root. As one might have noticed, node_modules contains a fair amount of interesting stuff.
- Let's make another addition. Install `json-server` as a development dependency (only used during development) by executing the command:

```
npm install json-server --save-dev
```

- and making a small addition to the scripts part of the package.json file manually:

```json
{
  // ...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -p3001 --watch db.json"
  }
}
```

- We can now conveniently, without parameter definitions, start the json-server from the project root directory with the command:

```
npm run server
```

- **The previously started json-server must be terminated before starting a new one, otherwise there will be trouble:**

<img src="./json-server error.png">

- The red print in the error message informs us about the issue:

- Cannot bind to the port 3001. Please specify another port number either through --port argument or through the json-server.json configuration file

- As we can see, the application is not able to bind itself to the port. The reason being that port 3001 is already occupied by the previously started json-server.

- We used the command npm install twice, but with slight differences:

```
npm install axios
npm install json-server --save-dev
```

- There is a fine difference in the parameters.

- `axios` is installed as a runtime dependency of the application, because the execution of the program requires the existence of the library.

- On the other hand, `json-server` was installed as a development dependency (--save-dev), since the program itself doesn't require it. It is used for assistance during software development.
