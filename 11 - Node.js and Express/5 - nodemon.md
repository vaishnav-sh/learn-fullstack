# nodemon

If we make changes to the application's code we have to restart the application in order to see the changes. 

We restart the application by first shutting it down by typing Ctrl+C and then restarting the application. 

Compared to the convenient workflow in React where the browser automatically reloaded after changes were made, this feels slightly cumbersome.

The solution to this problem is nodemon:

- *nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.*

- Let's install nodemon by defining it as a development dependency with the command:

```
npm install --save-dev nodemon
```

- The contents of package.json have also changed:

```json
{
  //...
  "dependencies": {
    "express": "^4.17.2",
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

- If you accidentally used the wrong command and the nodemon dependency was added under "dependencies" instead of "devDependencies", then manually change the contents of package.json to match what is shown above.

- By development dependencies, we are referring to tools that are needed only during the development of the application, e.g. for testing or automatically restarting the application, like nodemon.

- These development dependencies are not needed when the application is run in production mode on the production server (e.g. Heroku).

- We can start our application with nodemon like this:

```
node_modules/.bin/nodemon index.js
```

- Changes to the application code now cause the server to restart automatically. It's worth noting that even though the backend server restarts automatically

- The browser still has to be manually refreshed. This is because unlike when working in React, we don't have the <a href="https://gaearon.github.io/react-hot-loader/getstarted/" target="_blank">hot reload</a> functionality needed to automatically reload the browser.

- The command is long and quite unpleasant, so let's define a dedicated *npm script* for it in the `package.json` file:

```json
{
  // ..
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ..
}
```

- In the script there is no need to specify the `node_modules/.bin/nodemon` path to **nodemon**, because *npm* automatically knows to search for the file from that directory.

- We can now start the server in the development mode with the command:

```
npm run dev
```

- Unlike with the *start* and *test* scripts, we also have to add **run** to the command.