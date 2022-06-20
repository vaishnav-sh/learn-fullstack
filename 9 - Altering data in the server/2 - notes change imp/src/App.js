import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...")
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    axios.post("http://localhost:3001/notes", noteObject)
      .then(response => console.log(response))
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    axios.put(url, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App