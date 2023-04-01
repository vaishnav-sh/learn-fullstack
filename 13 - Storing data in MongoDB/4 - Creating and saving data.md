# Creating and saving data

Next, the application creates a new note object with the help of the Note model:


```js
const note = new Note({
  content: 'HTML is Easy',
  important: false,
})
```

- <strong>Models</strong> are so-called constructor functions that create new JavaScript objects based on the provided parameters. Since the objects are created with the model's constructor function, they have all the properties of the model, which include methods for saving the object to the database.

- Saving the object to the database happens with the appropriately named save method, which can be provided with an event handler with the then method:

```js 
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
```

- When the object is saved to the database, the event handler provided to then gets called. The event handler closes the database connection with the command mongoose.connection.close(). If the connection is not closed, the program will never finish its execution.




