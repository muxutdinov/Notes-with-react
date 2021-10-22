import React from "react";
import { Delete, Notee, NoteFooter , FooterWrapper} from "./NoteStyle";
import deletee from "../../assets/icons/delete.png";
export const Note = ({id,text,date}) => {
  return (
    <Notee>
      <span>{text}</span>
      <FooterWrapper>
        <NoteFooter>
          <small>{date}</small>
        </NoteFooter>
        <Delete src={deletee} />
      </FooterWrapper>
    </Notee>
  );
};
export default Note;
