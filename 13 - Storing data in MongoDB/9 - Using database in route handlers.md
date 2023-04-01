# Using database in route handlers

Next, let's change the rest of the backend functionality to use the database.

Creating a new note is accomplished like this:

```js
app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})
```

- The note objects are created with the `Note` constructor function. The response is sent inside of the callback function for the save operation. This ensures that the response is sent only if the operation succeeded. We will discuss error handling a little bit later.

- The `savedNote` parameter in the callback function is the saved and newly created note. The data sent back in the response is the formatted version created automatically with the toJSON method:

```js
response.json(savedNote)
```

- Using Mongoose's `findById` method, fetching an individual note gets changed into the following:

```js
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})
```

**For referance, check out `notes with mongo` file in the same directory**
