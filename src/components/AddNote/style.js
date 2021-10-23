import styled from "styled-components";

export const Notenew = styled.div`
  background-color: #67d7cc;
  border-radius: 15px;
`;
export const Textarea = styled.textarea`
  text-align: left;
  border: none;
  resize: none;
  background: #67d7cc;
  width: 50%;
  margin-top: 30px;
  margin-left: 40px;
  :focus {
    outline: none;
  }
`;
export const NoteFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
`;
export const Save = styled.button`
  background-color: #e1e1e1;
  border: none;
  padding: 5px 10px 5px 10px;
  border-radius: 15px;
  :hover{
    background-color: #ededed;
    cursor: pointer;
  }
`;
