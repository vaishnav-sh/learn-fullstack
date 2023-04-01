# Error handling

If we try to visit the URL of a note with an id that does not exist e.g. http://localhost:3001/api/notes/5c41c90e84d891c15dfa3431 where `5c41c90e84d891c15dfa3431` is not an id stored in the database, then the response will be `null`.

Let's change this behavior so that if a note with the given id doesn't exist, the server will respond to the request with the HTTP status code 404 not found. In addition let's implement a simple catch block to handle cases where the promise returned by the findById method is rejected:


```js
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(500).end()
    })
})
```

- If no matching object is found in the database, the value of note will be `null` and the else block is executed. This results in a response with the status code 404 not found. If a promise returned by the `findById` method is rejected, the response will have the status code 500 internal server error. The console displays more detailed information about the error.

- On top of the non-existing note, there's one more error situation that needs to be handled. In this situation, we are trying to fetch a note with the wrong kind of id, meaning an id that doesn't match the mongo identifier format.

- If we make the following request, we will get the error message shown below:

```
Method: GET
Path:   /api/notes/someInvalidId
Body:   {}
---
{ CastError: Cast to ObjectId failed for value "someInvalidId" at path "_id"
    at CastError (/Users/mluukkai/opetus/_fullstack/osa3-muisiinpanot/node_modules/mongoose/lib/error/cast.js:27:11)
    at ObjectId.cast (/Users/mluukkai/opetus/_fullstack/osa3-muisiinpanot/node_modules/mongoose/lib/schema/objectid.js:158:13)
    ...
```

- Given a malformed id as an argument, the `findById` method will throw an error causing the returned promise to be rejected. This will cause the callback function defined in the catch block to be called.

- Let's make some small adjustments to the response in the catch block:

```js
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end() 
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})
```

- If the format of the id is incorrect, then we will end up in the error handler defined in the catch block. The appropriate status code for the situation is 400 Bad Request because the situation fits the description perfectly:

- The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.

- We have also added some data to the response to shed some light on the cause of the error.

- It's never a bad idea to print the object that caused the exception to the console in the error handler:

