# Moving error handling into middleware

We have written the code for the error handler among the rest of our code. This can be a reasonable solution at times, but there are cases where it is better to implement all error handling in a single place.

This can be particularly useful if we want to report data related to errors to an external error-tracking system like <a href="https://sentry.io/welcome/">Sentry</a> later on.

```js
app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})
```

- <b>The error that is passed forwards is given to the next function as a parameter. If next was called without a parameter, then the execution would simply move onto the next route or middleware. If the next function is called with a parameter, then the execution will continue to the error handler middleware.</b>

- Express <a href="https://expressjs.com/en/guide/error-handling.html">error handlers</a> are middleware that are defined with a function that accepts four parameters. Our error handler looks like this:

```js
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

// tämä tulee kaikkien muiden middlewarejen rekisteröinnin jälkeen!
app.use(errorHandler)
```

- The error handler checks whether it is a CastError exception, i.e. an incorrect object id. If so, the handler sends a response to the browser that made the request using the response object as a parameter of the handler. Otherwise, it transfers error handling to Express's default error handler with the next function.

- Note that the error handler middleware should be registered after the registration of the other middleware.
