import TopNavigation from "../Navigation/TopNavigation";
import BottomNavigation from "../Navigation/BottomNavigation";
import Footer from "../Footer/Footer";
import LoginAndRegister from "./LoginAndRegister";
import { Fragment } from "react";

const Account = (props) => {
  return (
    <Fragment>
      <TopNavigation />
      <BottomNavigation theme={props.theme} toggleTheme={props.toggleTheme} />
      <LoginAndRegister />
      <Footer />
    </Fragment>
  );
};

export default Account;
