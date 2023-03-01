import { useState } from "react";

import Button from "../UI/Buttons/Button";
import Form from "./Form";
import LoginForm from "./LoginForm";
import classes from "./LoginAndRegister.module.css";

import ImageOne from "./images/ImageOne.png";
import ImageTwo from "./images/ImageTwo.png";

const LoginAndRegister = (props) => {
  const [slideCover, setSlideCover] = useState(false);

  // Ändrar bild som är på "cover".
  const slideCoverHandler = (event) => {
    if (slideCover) {
      setSlideCover(false);
    } else {
      setSlideCover(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.grid_container}>
          <div className={classes.login}>
            <h1 className={classes.title}>asos</h1>
            <h4 className={classes.sub_title}>login</h4>
            <LoginForm />
          </div>
          <div
            className={`${classes.login_cover} ${
              slideCover ? classes.right_side : null
            } `}
          >
            <div className={classes.img_container}>
              {/* Här sätter jag bilder beroende på ifall min state är true eller false. */}
              <img
                alt="cover"
                className={`${classes.img} ${
                  !slideCover ? classes.img_active : null
                }`}
                src={ImageOne}
              />
              <img
                alt="cover"
                className={`${classes.img} ${
                  slideCover ? classes.img_active : null
                }`}
                src={ImageTwo}
              />
            </div>
            <div className={classes.login_cover__container}>
              <h2 className={classes.login_cover__title}>asos</h2>
              {/* Ändrar även texten beroende på ifall state är true eller false */}
              {slideCover ? (
                <h2 className={classes.login_cover__subtitle}>
                  register today and get the best deals you could ever ask for!
                </h2>
              ) : (
                <h2 className={classes.login_cover__subtitle}>
                  Do you already have an account? Click to login!
                </h2>
              )}
              {slideCover ? (
                <Button type="button" onClick={slideCoverHandler}>
                  register
                </Button>
              ) : (
                <Button type="button" onClick={slideCoverHandler}>
                  login
                </Button>
              )}
            </div>
          </div>
          <div className={classes.register}>
            <h1 className={classes.title}>asos</h1>
            <h4 className={classes.sub_title}>create an account</h4>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegister;
