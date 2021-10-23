import React, { useState } from "react";
import { Notenew, NoteFooter, Save, Textarea } from "./style";

export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charactorLimit = 50;

  const handleChange = (e) => {
    if (charactorLimit >= e.target.value.length) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <Notenew>
      <Textarea
        rows="8"
        cols="10"
        placeholder="Type add a note..."
        onChange={handleChange}
        value={noteText}
      ></Textarea>
      <NoteFooter>
        <small>{charactorLimit - noteText.length} Remaining</small>
        <Save onClick={handleSaveClick}>Save</Save>
      </NoteFooter>
    </Notenew>
  );
};
export default AddNote;
