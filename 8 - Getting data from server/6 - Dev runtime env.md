# The development runtime environment

The configuration for the whole application has steadily grown more complex. Let's review what happens and where. The following image describes the makeup of the application

<img src="./dev env.png">

- The JavaScript code making up our React application is run in the browser.

- The browser gets the JavaScript from the **React dev server**, which is the application that runs after running the command `npm start`.

- The **dev-server** transforms the JavaScript into a format understood by the browser. Among other things, it stitches together JavaScript from different files into one file.

- The React application running in the browser fetches the JSON formatted data from json-server running on port 3001 on the machine.

- The server we query the data from - `json-server` - gets its data from the file db.json.

- At this point in development, all the parts of the application happen to reside on the software developer's machine, otherwise known as localhost. The situation changes when the application is deployed to the internet.
