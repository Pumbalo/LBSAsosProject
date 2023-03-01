import classes from "./BestSeller.module.css";
import styled from "styled-components";
import BestSellerCard from "./BestSellerCard";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const BestSeller = (props) => {
  return (
    <StyledApp>
      <div className={classes.container}>
        <div className={classes.text_content}>
          <h1 className={classes.title}>best seller</h1>
          <h4 className={classes.sub_title}>top categories of this week</h4>
        </div>
        <div className={classes.grid_content}>
          <BestSellerCard />
        </div>
      </div>
    </StyledApp>
  );
};

export default BestSeller;
