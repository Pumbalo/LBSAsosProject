import classes from "./Button.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
`;

const ButtonBig = (props) => {
  return (
    <div>
      <StyledButton
        onClick={props.onClick}
        className={`${classes.btn} ${props.className}`}
        type={props.type}
      >
        {props.children}
      </StyledButton>
    </div>
  );
};

export default ButtonBig;
