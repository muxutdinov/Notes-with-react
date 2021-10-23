import React from 'react'
import Note from '../Note'
import { Notes } from './style'
import AddNote from '../AddNote'
export const NotesList = ({notes,handleAddNote,handleDeleteNote}) => {
    return (
       <Notes>
           {
               notes.map((note)=> <Note id={note.id}
                text={note.text}
                 date={note.date}
                 handleDeleteNote={handleDeleteNote}
                 /> )
           }
           <AddNote handleAddNote={handleAddNote}/>
       </Notes>
    )
}
export default NotesList