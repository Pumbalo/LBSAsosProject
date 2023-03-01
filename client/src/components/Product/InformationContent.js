import styled from "styled-components";
import classes from "./InformationContent.module.css";

const StyledApp = styled.div`
  h1 {
    opacity: 0.7;
    color: ${(props) => props.theme.fontColor};
  }

  p {
    opacity: 0.8;
    color: ${(props) => props.theme.fontColor};
  }
`;

const InformationContent = (props) => {
  return (
    <StyledApp className={classes.container}>
      <div className={classes.content}>
        <div className={classes.grid_container}>
          <div className={classes.item}>
            <h1 className={classes.title}>description</h1>
            <p className={classes.description}>{props.aboutMe}</p>
          </div>
          <div className={classes.item}>
            <h1 className={classes.title}>brand</h1>
            <p className={classes.description}>{props.brand}</p>
          </div>
          <div className={classes.item}>
            <div className={classes.right_information}>
              <div className={classes.item}>
                <h1 className={classes.title}>size &#38; fit</h1>
                <p className={classes.description}>
                  {props.sizeAndFit?.replace('"', '"\n')}
                </p>
              </div>
              <div className={classes.item}>
                <h1 className={classes.title}>look after me</h1>
                <p className={classes.description}>{props.careInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledApp>
  );
};

export default InformationContent;
