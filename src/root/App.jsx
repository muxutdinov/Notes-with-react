import React, { useState } from "react";

import NotesList from "../components/NoteList/NotesList";
import { Container } from "./AppStyle";
export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      text: "This is my first note!",
      date: "22/10/2021",
    },
    {
      id: Date.now(),
      text: "This is my second note!",
      date: "22/10/2021",
    },
    {
      id: Date.now(),
      text: "This is my third note!",
      date: "22/10/2021",
    },
    {
      id: Date.now(),
      text: "This is my new note!",
      date: "30/10/2021",
    },
  ]);
  return (
    <Container>
      <NotesList notes={notes} />
    </Container>
  );
};
export default App;
