import Button from "../UI/Buttons/Button";
import classes from "./BestSellerCard.module.css";
import { useHistory } from "react-router-dom";

import BodyCare from "./Images/BodyCare.png";
import Designer from "./Images/Designer.png";
import Hoodies from "./Images/Hoodies.png";
import Sneakers from "./Images/Sneakers.png";
import Trending from "./Images/Trending.png";

const BestSellerCard = (props) => {
  let history = useHistory();

  const menHoodiesHandler = () => {
    history.push("category/hoodies & sweatshirts/5668");
    window.scrollTo(0, 0);
  };

  const womenTrendingHandler = () => {
    history.push("category/trending now/13497");
    window.scrollTo(0, 0);
  };

  const womenBodyCareHandler = () => {
    history.push("category/body care/4896");
    window.scrollTo(0, 0);
  };

  const menSneakersHandler = () => {
    history.push("/category/sneakers/5775");
    window.scrollTo(0, 0);
  };

  const menDesignerHandler = () => {
    history.push("category/designer/27111");
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.grid_container}>
        <div className={classes.item}>
          <Button
            onClick={menHoodiesHandler}
            type="button"
            className={classes.btn}
          >
            men hoodies
          </Button>
          <img src={Hoodies} alt="Men Hoodies" className={classes.img} />
        </div>
        <div className={classes.item}>
          <Button
            onClick={womenTrendingHandler}
            type="button"
            className={classes.btn}
          >
            women trending
          </Button>
          <img src={Trending} alt="Women Trending" className={classes.img} />
        </div>
        <div className={classes.item}>
          <Button
            onClick={womenBodyCareHandler}
            type="button"
            className={classes.btn}
          >
            women body care
          </Button>
          <img src={BodyCare} alt="Women Body Care" className={classes.img} />
        </div>
        <div className={classes.item}>
          <Button
            onClick={menSneakersHandler}
            type="button"
            className={classes.btn}
          >
            men sneakers
          </Button>
          <img src={Sneakers} alt="Men Sneakers" className={classes.img} />
        </div>
        <div className={classes.item}>
          <Button
            onClick={menDesignerHandler}
            type="button"
            className={classes.btn}
          >
            men designer
          </Button>
          <img src={Designer} alt="Men Designer" className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
