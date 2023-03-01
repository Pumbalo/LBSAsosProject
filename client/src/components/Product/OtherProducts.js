import styled from "styled-components";
import classes from "./OtherProducts.module.css";

import SimilarProducts from "../SimilarProducts/FetchAPI";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const OtherProducts = (props) => {
  return (
    <StyledApp className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          <h1 className={classes.title}>you might also like</h1>
        </div>
        <div className={classes.grid_container}>
          <SimilarProducts />
        </div>
      </div>
    </StyledApp>
  );
};

export default OtherProducts;
