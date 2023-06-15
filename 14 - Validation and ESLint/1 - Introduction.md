# Introduction

There are usually constraints that we want to apply to the data that is stored in our application's database. Our application shouldn't accept notes that have a missing or empty content property. The validity of the note is checked in the route handler:

```js
app.post('/api/notes', (request, response) => {
  const body = request.body
  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  // ...
})
```

- If the *note* does not have the content property, we respond to the request with the status code 400 bad request.

- One smarter way of validating the format of the data before it is stored in the database is to use the <a href="https://mongoosejs.com/docs/validation.html">validation</a> functionality available in Mongoose.

- We can define specific validation rules for each field in the schema:

```js
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true
  },
  important: Boolean
})
```

- The content field is now required to be at least five characters long and it is set as **required**, meaning that it can not be missing. We have not added any constraints to the important field, so its definition in the schema has not changed.

- If we try to store an object in the database that breaks one of the constraints, the operation will throw an exception. Let's change our handler for creating a new note so that it passes any potential exceptions to the error handler middleware:

```js
app.post('/api/notes', (request, response, next) => {
  const body = request.body

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save()
    .then(savedNote => {
      response.json(savedNote)
    })
    .catch(error => next(error))
})
```

- Let's expand the error handler to deal with these validation errors:

```js
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
```

- When validating an object fails, we return the following default error message from Mongoose:

<img src="./mongo validation.png" alt="postman screenshot showing mongo validation">

- We notice that the backend has now a problem: validations are not done when editing a note. The documentation explains what is the problem, validations are not run by default when findOneAndUpdate is executed.

- The fix is easy. Let us also reformulate the route code a bit:

<a href="https://fullstackopen.com/en/part3/validation_and_es_lint#deploying-the-database-backend-to-production">Deploying database backend to production (fly.io)</a>

