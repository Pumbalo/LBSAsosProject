import styled from "styled-components";
import classes from "./Notes.module.css";

const TextArea = styled.textarea`
  border: 1px solid ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};

  &:focus {
    border: 1px solid ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.fontColor};
  }
`;

const Notes = (props) => {
  return (
    <div className={classes.container}>
      <TextArea className={classes.textarea}></TextArea>
    </div>
  );
};

export default Notes;
