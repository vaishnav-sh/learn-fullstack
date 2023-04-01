# Schema

After establishing the connection to the database, we define the schema for a note and the matching model:

- Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

- Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.


```js
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
```

- First, we define the schema of a note that is stored in the noteSchema variable. The schema tells Mongoose how the note objects are to be stored in the database.


- In the Note model definition, the first "Note" parameter is the singular name of the model. The name of the collection will be the lowercase plural notes, because the Mongoose convention is to automatically name collections as the plural (e.g. notes) when the schema refers to them in the singular (e.g. Note).


- Document databases like Mongo are schemaless, meaning that the database itself does not care about the structure of the data that is stored in the database. It is possible to store documents with completely different fields in the same collection.

- The idea behind Mongoose is that the data stored in the database is given a schema at the level of the application that defines the shape of the documents stored in any given collection.