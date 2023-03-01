import classes from "./Footer.module.css";

import TopFooter from "./TopFooter";
import MiddleFooter from "./MiddleFooter";
import BottomFooter from "./BottomFooter";

const Footer = (props) => {
  return (
    <div className={classes.container}>
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
