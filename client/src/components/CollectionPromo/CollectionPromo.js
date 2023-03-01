import Button from "../UI/Buttons/Button";
import classes from "./CollectionPromo.module.css";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import ImageOne from "./image/ImageOne.png";
import ImageTwo from "./image/ImageTwo.png";
import ImageThree from "./image/ImageThree.png";

const ColoredText = styled.span`
  color: ${(props) => props.theme.secondaryColor};
`;

const CollectionPromo = (props) => {
  let history = useHistory();

  const womenSummerHandler = () => {
    history.push("category/view all/27108");
    window.scrollTo(0, 0);
  };
  const womenHoodiesHandler = () => {
    history.push("category/hoodies & sweatshirts/11321");
    window.scrollTo(0, 0);
  };
  const menSummerHandler = () => {
    history.push("category/clothing/6993");
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.grid_container}>
        <div className={classes.grid_item}>
          <img src={ImageOne} alt="" className={classes.img} />
          <div className={classes.box}>
            <h4 className={classes.title}>
              women summer <ColoredText>2021</ColoredText>
            </h4>
            <h3 className={classes.sub_title}>new arrivals</h3>
          </div>
          <div className={classes.btn_container}>
            <Button onClick={womenSummerHandler} className={classes.btn}>
              browse
            </Button>
          </div>
        </div>
        <div className={classes.grid_item}>
          {" "}
          <img src={ImageTwo} alt="" className={classes.img} />
          <div className={classes.box}>
            <h4 className={classes.title}>new in</h4>
            <h3 className={classes.sub_title}>
              <ColoredText>women hoodies</ColoredText>
            </h3>
          </div>
          <div className={classes.btn_container}>
            <Button onClick={womenHoodiesHandler} className={classes.btn}>
              browse
            </Button>
          </div>
        </div>
        <div className={classes.grid_item}>
          {" "}
          <img src={ImageThree} alt="" className={classes.img} />
          <div className={classes.box}>
            <h4 className={classes.title}>
              men summer <ColoredText>2021</ColoredText>
            </h4>
            <h3 className={classes.sub_title}>
              new <ColoredText>clothing</ColoredText>
            </h3>
          </div>
          <div className={classes.btn_container}>
            <Button onClick={menSummerHandler} className={classes.btn}>
              browse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPromo;
