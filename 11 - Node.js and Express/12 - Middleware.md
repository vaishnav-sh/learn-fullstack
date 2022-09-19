# Middleware

The express json-parser we took into use earlier is a so-called middleware.

**Middleware are functions that can be used for handling request and response objects.**

- The json-parser we used earlier takes the raw data from the requests that's stored in the request object, parses it into a JavaScript object and assigns it to the request object as a new property body.

- In practice, you can use several middleware at the same time. When you have more than one, **they're executed one by one in the order that they were taken into use in express**.

- Let's implement our own middleware that prints information about every request that is sent to the server.

- Middleware is a function that receives three parameters:

```js
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
```

- At the end of the function body the next function that was passed as a parameter is called. The next function yields control to the next middleware.

- Middleware are taken into use like this:

```js
app.use(requestLogger)
```

- To view the `requestLogger` logs, reload the server and check the terminal/console.

- Middleware functions are called in the order that they're taken into use with the express server object's `use` method. Notice that `json-parser` is taken into use before the `requestLogger` middleware, because otherwise request.body will not be initialized when the logger is executed!

- Middleware functions have to be taken into use before routes if we want them to be executed before the route event handlers are called. There are also situations where we want to define middleware functions after routes. In practice, this means that we are defining middleware functions that are only called if no route handles the HTTP request.

- Let's add the following middleware after our routes, that is used for catching requests made to non-existent routes. For these requests, the middleware will return an error message in the JSON format.

```js
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)
```

- **For reference, You can find the code for our current application in its entirety in the file `server v1` in this folder**



