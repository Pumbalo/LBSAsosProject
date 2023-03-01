import classes from "./ProductCard.module.css";
import styled from "styled-components";

import Visibility from "../Icons/Visibility";
import Heart from "../Icons/Heart";
import Cart from "../Icons/Cart";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  border-radius: 100%;
  margin: 10px 0;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color ease-in-out var(--transition-speed);

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }

  &:hover svg {
    fill: #fff;
  }
`;

const IconApp = styled.div`
  svg {
    fill: ${(props) => props.theme.fontColor};
  }
`;

const ProductCard = (props) => {
  return (
    <div
      datakey={props.datakey}
      onClick={props.onClick}
      className={classes.container}
    >
      <div className={classes.card}>
        <IconApp className={classes.icon_container}>
          <StyledApp>
            <Visibility className={classes.icon} />
          </StyledApp>
          <StyledApp>
            <Heart className={classes.icon} />
          </StyledApp>
          <StyledApp>
            <Cart className={classes.icon} />
          </StyledApp>
        </IconApp>
        <div className={classes.image_container}>
          <img
            src={"https://" + props.img}
            alt={props.name}
            className={classes.img}
          />
        </div>
        <div className={classes.information_container}>
          <div className={classes.name_container}>
            <h4 className={classes.product_name}>{props.name}</h4>
          </div>
          <h3 className={classes.price}>{props.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
