import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./GridBtn.module.css";

import Button from "../../UI/Buttons/Button";

const GridBtn = (props) => {
  const [showBtn, setShowBtn] = useState(false);
  const dropdownClickHandler = (event) => setShowBtn((prevState) => !prevState);

  let history = useHistory();

  const historyLinks = {
    hoodies: {
      men: "/hoodies & sweatshirts/5668",
      women: "/hoodies & sweatshirts/5668",
    },
    designer: {
      men: "/designer/27111",
      women: "/designer/15210",
    },
    sunglasses: {
      men: "/sunglasses/6519",
      women: "/sunglasses/4545",
    },
    trending: {
      men: "/trending now/13500",
      women: "/trending now/13497",
    },
    newin: {
      men: "/view all/27110",
      women: "/view all/27108",
    },
    shoes: {
      men: "/view all/4209",
      women: "/view all/4172",
    },
  };
  let itemType = props.name.replaceAll(" ", "");

  const herClickHandler = () =>
    history.push(`/category${historyLinks[itemType].women}`);
  const himClickHandler = () =>
    history.push(`/category${historyLinks[itemType].men}`);

  return (
    <Fragment>
      <Button className={classes.grid_btn} onClick={dropdownClickHandler}>
        {props.name}
      </Button>
      {showBtn ? (
        <div className={classes.dropdownHer}>
          <Button onClick={herClickHandler} className={classes.btnHer}>
            her
          </Button>
        </div>
      ) : (
        <div className={classes.dropdownHerBack}>
          <Button onClick={herClickHandler} className={classes.btnHer}>
            her
          </Button>
        </div>
      )}
      {showBtn ? (
        <div className={classes.dropdownHim}>
          <Button onClick={himClickHandler} className={classes.btnHim}>
            him
          </Button>
        </div>
      ) : (
        <div className={classes.dropdownHimBack}>
          <Button onClick={himClickHandler} className={classes.btnHim}>
            him
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default GridBtn;
