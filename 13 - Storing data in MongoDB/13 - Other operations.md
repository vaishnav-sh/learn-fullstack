# Other operations

Let's add some missing functionality to our application, including deleting and updating an individual note.

The easiest way to delete a note from the database is with the <a href="https://mongoosejs.com/docs/api/model.html#Model.findByIdAndRemove()">findByIdAndRemove</a> method:

```js
app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
```

- In both of the "successful" cases of deleting a resource, the backend responds with the status code 204 no content. The two different cases are deleting a note that exists, and deleting a note that does not exist in the database. The result callback parameter could be used for checking if a resource was actually deleted, and we could use that information for returning different status codes for the two cases if we deemed it necessary. Any exception that occurs is passed onto the error handler.

- The toggling of the importance of a note can be easily accomplished with the <a href="https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()">findByIdAndUpdate</a> method.

```js
app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})
```

- **Notice that the `findByIdAndUpdate` method receives a regular JavaScript object as its parameter, and not a new note object created with the Note constructor function.**

- There is one important detail regarding the use of the `findByIdAndUpdate` method. By default, the `updatedNote` parameter of the event handler receives the original document without the modifications. **We added the optional `{ new: true }` parameter, which will cause our event handler to be called with the new modified document instead of the original.**


- After testing the backend directly with Postman and the VS Code REST client, we can verify that it seems to work. The frontend also appears to work with the backend using the database.

**For referance, check out `notes mongo advanced` file in the same directory**
