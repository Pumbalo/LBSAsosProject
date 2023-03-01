import styled from "styled-components";
import classes from "./Product.module.css";
import { useState, useContext } from "react";
import AddToCartContext from "../../Contexts/AddToCartContext";

import Trash from "../UI/Icons/Trash";

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
  const { cartItems, setCartItems } = useContext(AddToCartContext);
  const [count, setCount] = useState(props.count);

  const removeItemHandler = (e) => {
    let id = e.currentTarget.getAttribute("itemid");
    let size = e.currentTarget.getAttribute("itemsize");

    // Klonar kundvagnen
    const clonedCartItems = JSON.parse(JSON.stringify(cartItems));

    // Gör en ny kundvagn där produkten man vill ta bort inte finns.
    let newCart = clonedCartItems.filter((elem) => {
      if (elem.id === id) {
        return elem.size !== size;
      } else {
        return elem.id !== id;
      }
    });

    // Sätter kundvagnen till den nya kundvagnen.
    setCartItems(newCart);
  };
  // Skapar en klon av alla produkter i "Cart"
  const updateCartItems = (count) => {
    // För att uppdatera en state som är en array eller object måste det bli ersatt med en nytt objekt eller array.
    const clonedCartItems = JSON.parse(JSON.stringify(cartItems));
    // Sätter de nya "count" till den klonen.
    clonedCartItems[props.productInd].count = count;

    return clonedCartItems;
  };

  const decreaseCountHandler = () => {
    // Ifall count === 1 så händer inget.
    if (count === 1) {
      return;
    }
    setCount(count - 1);
    // Ersätter "CartItems" till klonade "Cart".
    setCartItems(updateCartItems(count - 1));
  };

  const increaseCountHandler = () => {
    setCount(count + 1);
    setCartItems(updateCartItems(count + 1));
  };

  return (
    <StyledApp className={classes.container}>
      <div className={classes.img_container}>
        <img
          className={classes.img}
          src={`https://${props.img}`}
          alt="Product-Cart"
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
        <span className={classes.price}>${props.price * count}</span>
        <div className={classes.count_container}>
          <span
            onClick={decreaseCountHandler}
            className={`${classes.count_icon} ${classes.count_decrease}`}
          >
            -
          </span>
          <span className={`${classes.count}`}>{count}</span>
          <span
            onClick={increaseCountHandler}
            className={`${classes.count_icon} ${classes.count_increase}`}
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
