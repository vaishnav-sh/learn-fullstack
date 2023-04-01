# Connecting backend to DB

Let's get a quick start by copy-pasting the Mongoose definitions to the index.js file:

```js
const mongoose = require('mongoose')

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url =
  `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
```

- Let's change the handler for fetching all notes to the following form:

```js
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})
```

- run the server and you should be able to retrieve the data from the DB

- The application works almost perfectly. The frontend assumes that every object has a unique id in the id field. We also don't want to return the mongo versioning field __v to the frontend.

- One way to format the objects returned by Mongoose is to modify the `toJSON` method of the schema, which is used on all instances of the models produced with that schema.

- To modify the method we need to change the configurable options of the schema, options can be changed using the set method of the schema, see here for more info on this method: 
    - https://mongoosejs.com/docs/guide.html#options. 
    - https://mongoosejs.com/docs/guide.html#toJSON and 
    - https://mongoosejs.com/docs/api.html#document_Document-toObject for more info on the toJSON option.

- see https://mongoosejs.com/docs/api.html#transform for more info on the transform function.

- Even though the `_id` property of Mongoose objects looks like a `string`, it is in fact an `object`. The `toJSON` method we defined <strong>transforms</strong> it into a string just to be safe. If we didn't make this change, it would cause more harm to us in the future once we start writing tests.

- No changes are needed in the handler:


```js
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})
```

- the code uses automatically the defined `toJSON` when formatting notes to the response.

