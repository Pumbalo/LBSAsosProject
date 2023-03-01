import styled from "styled-components";
import classes from "./Product.module.css";
import { useState, useContext } from "react";

import Trash from "../UI/Icons/Trash";
import Close from "../UI/Icons/Close";

import AddToWishlistContext from "../../Contexts/AddToWishlistContext";

const TitleContainer = styled.div`
  color: ${(props) => props.theme.fontColor};
  margin-left: 5%;
`;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  font-family: var(--font-family);
  border-top: 1px solid ${(props) => props.theme.fontColor};
  padding-top: 18px;
  position: relative;
`;

const IconContainer = styled.div`
  fill: ${(props) => props.theme.fontColor};
  margin-right: 25px;

  svg {
    cursor: pointer;
    transition: fill 500ms ease-in-out;
  }

  svg:hover {
    fill: ${(props) => props.theme.secondaryColor};
  }
`;

const Product = (props) => {
  const [amount, setAmount] = useState(1);

  const { setWishlistItems, wishlistItems } = useContext(AddToWishlistContext);

  const removeItemHandler = (e) => {
    let id = e.currentTarget.getAttribute("itemid");

    // Klonar kundvagnen
    const clonedWishlistItems = JSON.parse(JSON.stringify(wishlistItems));

    // Gör en ny kundvagn där produkten man vill ta bort inte finns.
    let newWishlist = clonedWishlistItems.filter((elem) => elem.id !== id);

    // Sätter kundvagnen till den nya kundvagnen.
    setWishlistItems(newWishlist);
  };

  if (amount < 1) {
    setAmount(1);
  }

  const decreaseAmountHandler = () => {
    setAmount(amount - 1);
  };
  const increaseAmountHandler = () => {
    setAmount(amount + 1);
  };

  return (
    <StyledApp className={classes.container}>
      <div className={classes.img_container}>
        <img
          className={classes.img}
          alt="wishlist item"
          src={`https://${props.img}`}
        />
      </div>
      <TitleContainer className={classes.title_container}>
        <h2 className={classes.product_name}>{props.name}</h2>
        {props.color === null ? null : (
          <h4 className={classes.product_color}>COLOR: {props.color}</h4>
        )}
        {props.size === null ? null : (
          <h4 className={classes.product_color}>SIZE: {props.size}</h4>
        )}
      </TitleContainer>
      <div className={classes.options_container}>
        <span className={classes.price}>${props.price * amount}</span>
        <div className={classes.amount_container}>
          <span
            onClick={decreaseAmountHandler}
            className={`${classes.amount_icon} ${classes.amount_decrease}`}
          >
            -
          </span>
          <span className={`${classes.amount}`}>{amount}</span>
          <span
            onClick={increaseAmountHandler}
            className={`${classes.amount_icon} ${classes.amount_increase}`}
          >
            +
          </span>
        </div>

        <IconContainer>
          <Trash
            itemid={props.itemid}
            itemsize={props.size}
            itemcolor={props.color}
            onClick={removeItemHandler}
          />
        </IconContainer>
      </div>
    </StyledApp>
  );
};

export default Product;
