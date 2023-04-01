# Fetching data from the DB

Let's comment out the code for generating new notes and replace it with the following:

```js
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
```

- When the code is executed, the program prints all the notes stored in the database:

- The objects are retrieved from the database with the `find` method of the Note model. The parameter of the method is an object expressing search conditions. Since the parameter is an empty object{}, we get all of the notes stored in the notes collection.

- The search conditions adhere to the Mongo search query <a href="https://www.mongodb.com/docs/manual/reference/operator/">syntax</a>.

- We could restrict our search to only include important notes like this:

```js
Note.find({important: true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close();
})
```