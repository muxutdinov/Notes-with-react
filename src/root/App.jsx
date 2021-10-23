import React, { useState } from "react";
import NotesList from "../components/NoteList";
import { AllWrapper, Container } from "./AppStyle";
import { Search } from "../components/Search";
import { Header } from "../components/Header";
export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "This is my first note!",
      date: "22/10/2021",
    },
    {
      id: 2,
      text: "This is my second note!",
      date: "22/10/2021",
    },
    {
      id: 3,
      text: "This is my third note!",
      date: "22/10/2021",
    },
    {
      id: 4,
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

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  return (
    <AllWrapper>
      <div className={`${({setDarkMode})} &&  DarkMode`}>
        <Container>
          <Header handleToggleDarkMode={darkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </Container>
      </div>
    </AllWrapper>
  );
};
export default App;
