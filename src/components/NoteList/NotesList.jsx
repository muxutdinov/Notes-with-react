import React from 'react'
import Note from '../Note/Note'
import { Notes } from './NotesListStyle'

export const NotesList = ({notes}) => {
    return (
       <Notes>
           {
               notes.map((note)=> <Note id={note.id} text={note.text} date={note.date} /> )
           }
       </Notes>
    )
}
export default NotesList