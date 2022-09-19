# Deleting a resource

Next let's implement a route for deleting resources. Deletion happens by making an HTTP DELETE request to the url of the resource:

```js
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
```

- If deleting the resource is successful, meaning that the note exists and it is removed, we respond to the request with the status code `204` no content and return no data with the response.

- There's no consensus on what status code should be returned to a DELETE request if the resource does not exist. Really, the only two options are 204 and 404. For the sake of simplicity our application will respond with 204 in both cases.

- We will be testing the `delete` operation using `Postman` in the next module.