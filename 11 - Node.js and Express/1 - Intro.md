# Introduction
In this part our focus shifts towards the backend: that is, towards implementing functionality on the server side of the stack.

We will be building our backend on top of NodeJS, which is a JavaScript runtime based on Google's Chrome V8 JavaScript engine.

As mentioned in part 1, browsers don't yet support the newest features of JavaScript, and that is why the code running in the browser must be transpiled with e.g. babel. 

The situation with JavaScript running in the backend is different. The newest version of Node supports a large majority of the latest features of JavaScript, so we can use the latest features without having to transpile our code.

Our goal is to implement a backend that will work with the notes application from **part 2**. However, let's start with the basics by implementing a classic "hello world" application.

**Notice that the applications and exercises in this part are not all React applications, and we will not use the create-react-app utility for initializing the project for this application.**

- We will create a new folder and run `npm init` and then `npm init help` command. We will answer the questions presented by the command, and the result will be an automatically generated `package.json` file at the root of the project.

```json
{
  "name": "backend",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Matti Luukkainen",
  "license": "MIT"
}
```

- The file defines, for instance that the entry point of the application is the index.js file.
- Let's make a small change to the scripts object:

```json
{
  // ...
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}
```

- Next, let's create the first version of our application by adding an index.js file to the root of the project with the following code:

```js
console.log("Hello World");
```

- We can run the program directly with Node from the terminal:

```
node index.js
```

- Or we can run it as an npm script:

```
npm start
```

- The start npm script works because we defined it in the package.json file:

```json
{
  // ...
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}
```

- Even though the execution of the project works when it is started by calling `node index.js` from the command line, it's common practice for npm projects to execute such tasks as `npm scripts`.

- By default the `package.json` file there's also another commonly used npm script called `npm test`. Since our project does not yet have a testing library, the npm test command simply executes the following command:

```
echo "Error: no test specified" && exit 1
```

