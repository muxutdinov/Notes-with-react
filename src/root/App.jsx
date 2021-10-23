import React, { useState } from "react";
import NotesList from "../components/NoteList";
import { Container } from "./AppStyle";

export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "This is my first note!",
      date: "22/10/2021",
    },
    {
      id:2,
      text: "This is my second note!",
      date: "22/10/2021",
    },
    {
      id:3,
      text: "This is my third note!",
      date: "22/10/2021",
    },
    {
      id:4,
      text: "This is my new note!",
      date: "30/10/2021",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: Date.now(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <Container>
      <NotesList 
      notes={notes}
       handleAddNote={addNote}
       handleDeleteNote={deleteNote}
       />
    </Container>
  );
};
export default App;
