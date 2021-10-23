import React from "react";
import { Delete, Notee, NoteFooter , FooterWrapper} from "./style";
import deletee from "../../assets/icons/delete.png";
export const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <Notee>
      <span>{text}</span>
      <FooterWrapper>
        <NoteFooter>
          <small>{date}</small>
        </NoteFooter>
        <Delete src={deletee} onClick={()=>handleDeleteNote(id)}/>
      </FooterWrapper>
    </Notee>
  );
};
export default Note;
