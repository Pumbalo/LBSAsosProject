import classes from "./Circular.module.css";
import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 16px;
  padding-top: 30px;
  font-family: var(--font-family);
  font-weight: var(--font-bold);
`;

const Circular = (props) => {
  return (
    <div className={classes.container}>
      <svg
        className={classes.progress}
        id="Light_Progress_Indicators_2._Circular_a._Primary"
        data-name="Light 🌕/ Progress Indicators/2. Circular/a. Primary"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
      >
        <path
          id="Surface"
          d="M22,44A21.982,21.982,0,0,1,0,22H4a18,18,0,0,0,34.585,7.007A17.995,17.995,0,0,0,22,4V0a22.006,22.006,0,0,1,8.564,42.271A21.864,21.864,0,0,1,22,44Z"
          fill="#6200ee"
        />
      </svg>
      <Text>{props.title}</Text>
    </div>
  );
};

export default Circular;
