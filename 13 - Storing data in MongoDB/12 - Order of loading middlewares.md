# Order of loading middlewares

Since the middlewares are executed in the order in which they are enabled with the function `app.use` , you have to be careful with their definition.

The orthodox order is this:

```js
app.use(express.static('build'))
app.use(express.json())
app.use(requestLogger)

app.post('/api/notes', (request, response) => {
  const body = request.body
  // ...
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  // ...
}
app.use(errorHandler)
```

- The JSON parser should be used almost first. If the order were as follows

```js
app.use(requestLogger) // request.body on tyhjä

app.post('/api/notes', (request, response) => {
  // request.body on tyhjä
  const body = request.body
  // ...
})

app.use(express.json())
```

- the data included in the HTTP request would not be available during processing of the logger or POST request, but the field request.body would have an empty object.

- It is also important to enable the processing of non-existent addresses last.

- The following order would also cause a problem:

```js
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// olemattomien osoitteiden käsittely
app.use(unknownEndpoint)

app.get('/api/notes', (request, response) => {
  // ...
})
```