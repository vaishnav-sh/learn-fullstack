const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();


const Note = require('./models/note')

const requestLogger = (request, response, next) => {
  console.log('Method: ', request.method);
  console.log('Path: ', request.path);
  console.log('Body: ', request.body);
  console.log("---");
  next();
}

console.log(process.env.MONGODB_URI);

app.use(express.json());
app.use(requestLogger)
app.use(cors())
app.use(express.static('build'))

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/api/notes", (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  })
});

app.get("/api/notes/:id", (request, response) => {
  Note.findById(request.params.id).then(note => {
    if(note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  }).catch(e => {
    console.log(e)
    response.status(400).send({"error": "malformed id"})
  })
});

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  }).catch(e => response.json({ "error": "something went wrong: " + e.message }))
});

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


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});

