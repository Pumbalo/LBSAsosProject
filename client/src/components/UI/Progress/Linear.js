import classes from "./Linear.module.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
`;

const Linear = (props) => {
  const [currentWidth, setCurrentWidth] = useState(null);

  useEffect(() => {
    let setWidth = (100 / props.total) * props.current;
    setCurrentWidth(setWidth);
    let indicator = document.getElementsByClassName(`${classes.indicator}`);

    indicator[0].style.width = `${currentWidth}%`;
  }, []);

  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.bar_container}>
        <Bar className={classes.bar}></Bar>
        <Bar className={classes.indicator}></Bar>
      </div>
    </div>
  );
};

export default Linear;
