import styled from "styled-components";
import classes from "./Cart.module.css";
import Product from "./Product";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import LeftArrow from "../UI/Icons/LeftArrow";
import Trash from "../UI/Icons/Trash";
import CartFooter from "./CartFooter";
import SmileySad from "../UI/Icons/SmileySad";

import { useHistory } from "react-router-dom";

// Importerar AddToCartContext
import AddToCartContext from "../../Contexts/AddToCartContext";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  height: 100%;
  font-family: var(--font-family);

  span a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
  }

  span a:hover {
    color: ${(props) => props.theme.secondaryColor};
  }

  span {
    cursor: default;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.fontColor};
`;

const OptionsBox = styled.div`
  svg path {
    fill: ${(props) => props.theme.secondaryColor};
  }
  color: ${(props) => props.theme.secondaryColor};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const EmptyCart = styled.div`
  text-align: center;
  font-family: var(--font-family);
  font-weight: var(--font-semibold);

  svg {
    fill: ${(props) => props.theme.secondaryColor};
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme.fontColor};
    font-size: 28px;
  }

  a {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 18px;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.5;
  }
`;

const Cart = (props) => {
  let history = useHistory();

  const returnHome = () => history.push("/");

  const { cartItems } = useContext(AddToCartContext);

  let cart = cartItems.filter(
    (ele, ind) =>
      ind ===
      cartItems.findIndex(
        (elem) => elem.id === ele.id && elem.size === ele.size
      )
  );

  return (
    <StyledApp className={classes.container}>
      <div className={classes.top}>
        <div className={classes.location}>
          <span>
            <Link to="/">home</Link> / shopping cart
          </span>
        </div>
        <div className={classes.title}>
          <h1>shopping cart</h1>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.grid_container}>
          <Fragment>
            {cart.length === 0 ? (
              <EmptyCart>
                <SmileySad />
                <h2>Cart is empty</h2>
                <Link to="/">Start shopping!</Link>
              </EmptyCart>
            ) : (
              cart.map((item, index) => (
                <Fragment>
                  <Product
                    img={item?.img}
                    name={item?.name}
                    price={item?.price}
                    color={item?.color === "No colour" ? null : item?.color}
                    size={item?.size === undefined ? null : item?.size}
                    key={item?.id}
                    count={item?.count}
                    productInd={index}
                    itemid={item?.id}
                  />
                </Fragment>
              ))
            )}
            <Line></Line>
          </Fragment>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.options}>
          <OptionsBox>
            <LeftArrow />
            <span onClick={returnHome} className={classes.options_text}>
              continue shopping
            </span>
          </OptionsBox>
          <OptionsBox>
            <span className={classes.options_text}>clear shopping cart</span>
            <Trash />
          </OptionsBox>
        </div>
      </div>
      <footer className={classes.cart_footer}>
        <CartFooter />
      </footer>
    </StyledApp>
  );
};

export default Cart;
