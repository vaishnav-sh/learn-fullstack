# Creating a module for Database 

Before we refactor the rest of the backend to use the database, let's extract the Mongoose-specific code into its own module.

Let's create a new directory for the module called models, and add a file called note.js:

```js
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)
```

- Defining Node <a href="https://nodejs.org/docs/latest-v8.x/api/modules.html">modules</a> differs slightly from the way of defining <a href="https://fullstackopen.com/en/part2/rendering_a_collection_modules#refactoring-modules">ES6 modules</a> in part 2.

- The public interface of the module is defined by setting a value to the module.exports variable. We will set the value to be the Note model. The other things defined inside of the module, like the variables mongoose and url will not be accessible or visible to users of the module.

- Importing the module happens by adding the following line to index.js:

```js
const Note = require('./models/note')
```

- This way the `Note` variable will be assigned to the same object that the module defines. 

<h3>The way that the connection is made has changed slightly:</h3>

```js
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })
```

- It's not a good idea to hardcode the address of the database into the code, so instead the address of the database is passed to the application via the MONGODB_URI environment variable.

- The method for establishing the connection is now given functions for dealing with a successful and unsuccessful connection attempt. Both functions just log a message to the console about the success status:

- There are many ways to define the value of an environment variable. One way would be to define it when the application is started:

```js
MONGODB_URI=address_here npm run dev
```

- A more sophisticated way is to use the dotenv library. You can install the library with the command:

```
npm install dotenv
```

- To use the library, we create a .env file at the root of the project. The environment variables are defined inside of the file, and it can look like this:

```
MONGODB_URI=mongodb+srv://fullstack:<password>@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority
PORT=3001
```

- We also added the hardcoded port of the server into the `PORT` environment variable.

- Mention .env file in the .gitignore so that it is not tracked by git and won't accidentally be pushed to github

- The environment variables defined in the <em>.env</em> file can be taken into use with the expression `require('dotenv').config()` and you can reference them in your code just like you would reference normal environment variables, with the familiar `process.env.MONGODB_URI` syntax.

- Let's change the index.js file in the following way:

```js
require('dotenv').config()
const express = require('express')
const app = express()
const Note = require('./models/note')

// ..

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

```

- It's important that `dotenv` gets imported before the note model is imported. This ensures that the environment variables from the .env file are available globally before the code from the other modules is imported.













