import { Fragment } from "react";
import Footer from "../Footer/Footer";
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import Cart from "./Cart";

const ShoppingCart = (props) => {
  return (
    <Fragment>
      <TopNavigation />
      <BottomNavigation theme={props.theme} toggleTheme={props.toggleTheme} />
      <Cart />
      <Footer />
    </Fragment>
  );
};

export default ShoppingCart;
