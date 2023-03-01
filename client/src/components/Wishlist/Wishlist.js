import { Fragment } from "react";
import TopNavigation from "../Navigation/TopNavigation";
import BottomNavigation from "../Navigation/BottomNavigation";
import Footer from "../Footer/Footer";
import WishlistContent from "./WishlistContent";

const Wishlist = (props) => {
  return (
    <Fragment>
      <TopNavigation />
      <BottomNavigation theme={props.theme} toggleTheme={props.toggleTheme} />
      <WishlistContent />
      <Footer />
    </Fragment>
  );
};

export default Wishlist;
