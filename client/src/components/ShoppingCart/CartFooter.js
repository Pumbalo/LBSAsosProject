import styled from "styled-components";
import classes from "./CartFooter.module.css";
import Notes from "./Forms/Notes";
import ShippingAndTax from "./Forms/ShippingAndTax";
import Button from "../UI/Buttons/Button";

import { useContext } from "react";

// Importerar AddToCartContext
import AddToCartContext from "../../Contexts/AddToCartContext";

const Card = styled.div`
  color: ${(props) => props.theme.fontColor};
  font-family: var(--font-family);
  border: 1px solid ${(props) => props.theme.borderColor};

  h4 {
    font-size: 20px;
    font-weight: (--font-semibold);
    text-transform: uppercase;
    padding: 20px 0 0 20px;
    margin: 0;
  }
  p {
    opacity: 0.6;
    font-size: 14px;
    font-weight: (--font-light);
    padding: 10px 0 0 20px;
    margin: 0;
  }

  span {
    color: ${(props) => props.theme.secondaryColor};
  }

  label {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: var(--font-regular);
    letter-spacing: 2px;
    padding-left: 20px;
    padding-top: 20px;
  }

  input {
    border: 1px solid ${(props) => props.theme.secondaryColor};
  }
`;

const CartFooter = (props) => {
  // Lägger till AddToCartContext
  const { cartItems } = useContext(AddToCartContext);

  // Filtrerar duplicerade produkter
  let cart = cartItems.filter(
    (ele, ind) =>
      ind ===
      cartItems.findIndex(
        (elem) => elem.id === ele.id && elem.size === ele.size
      )
  );

  // Tar alla "price" multipicerat med "count" och ger total summa för alla produkter.
  let totalPrice = cart.reduce(
    (totalPrice, item) => totalPrice + item.price * item.count,
    0
  );
  return (
    <div className={classes.container}>
      <div className={classes.grid_container}>
        <div className={classes.item}>
          <Card className={classes.card}>
            <h4 className={classes.title}>estimate shipping and tax</h4>
            <p className={classes.sub_title}>
              Enter your destination top get a shipping estimate.
            </p>
            <ShippingAndTax />
          </Card>
        </div>
        <Card className={classes.item}>
          <h4 className={classes.title}>note</h4>
          <p className={classes.sub_title}>
            Add special instructions for your order.
          </p>
          <Notes />
        </Card>
        <Card className={classes.item}>
          <h4 className={classes.title}>total</h4>
          <div className={classes.total_container}>
            <h4 className={classes.total_text}>
              subtotal:
              <span>${totalPrice}</span>
            </h4>
            <h4 className={classes.total_text}>
              grand total: <span>${totalPrice}</span>
            </h4>
            <div className={classes.btn_container}>
              <Button className={classes.btn}>proceed to checkout</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CartFooter;
