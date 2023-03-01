import classes from "./Instagram.module.css";
import styled from "styled-components";

// Images
import ImageOne from "./images/ImageOne.png";
import ImageTwo from "./images/ImageTwo.png";
import ImageThree from "./images/ImageThree.png";
import ImageFour from "./images/ImageFour.png";
import ImageFive from "./images/ImageFive.png";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Colored = styled.span`
  color: ${(props) => props.theme.secondaryColor};
`;

const Instagram = (props) => {
  return (
    <StyledApp>
      <div className={classes.container}>
        <div className={classes.text_content}>
          <h1 className={classes.title}>
            <Colored>follow</Colored> us on
          </h1>
          <h2 className={classes.sub_title}>instagram</h2>
        </div>
        <div className={classes.latest_posts}>
          <div className={classes.post}>
            <img src={ImageOne} alt="" className={classes.img} />
            <div className={classes.description}>
              <p className={classes.description_text}>
                Your beer jacket just got a (pastel blue) upgrade 🍻 📸
                <br />
                <br />
                <a
                  className={classes.user_link}
                  href="https://www.instagram.com/ayomifull_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ayomifull_
                </a>{" "}
                <br />
                <br />
                🔎 ASOS DESIGN blazer [1867678]
              </p>
            </div>
          </div>
          <div className={classes.post}>
            <img src={ImageTwo} alt="" className={classes.img} />
            <div className={classes.description}>
              <p className={classes.description_text}>
                Waiting for warmer weather like 👀
                <br />
                <br /> 📸:{" "}
                <a
                  className={classes.user_link}
                  href="https://www.instagram.com/itanomisandre/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @itanomisandre
                </a>{" "}
                [he/him]
                <br /> <br />
                🔎: ASOS DESIGN boiler suit [1955432]
              </p>
            </div>
          </div>
          <div className={classes.post}>
            <img src={ImageThree} alt="" className={classes.img} />
            <div className={classes.description}>
              {" "}
              <p className={classes.description_text}>
                All of us from tomorrow 👆
                <br />
                <br /> ASOS EDITION broderie one shoulder dress [1617079] As
                Seen On{" "}
                <a
                  className={classes.user_link}
                  href="https://www.instagram.com/tostos_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @tostos_
                </a>{" "}
                <br />
                <br />
                [she/her]​
              </p>
            </div>
          </div>
          <div className={classes.post}>
            <img src={ImageFour} alt="" className={classes.img} />
            <div className={classes.description}>
              {" "}
              <p className={classes.description_text}>
                Is the New Balance 237 the next big thing?
                <br />
                <br /> 📸:{" "}
                <a
                  className={classes.user_link}
                  href="https://www.instagram.com/rugged_style/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @rugged_style
                </a>{" "}
                [he/him]​
              </p>
            </div>
          </div>
          <div className={classes.post}>
            <img src={ImageFive} alt="" className={classes.img} />
            <div className={classes.description}>
              {" "}
              <p className={classes.description_text}>
                What Spring should look like. 🌸 🔎
                <br />
                <br /> Search ‘adidas corset' on ASOS
                <br />
                <br /> 🔁{" "}
                <a
                  className={classes.user_link}
                  href="https://www.instagram.com/legrosbordel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @legrosbordel
                </a>{" "}
                [she/her]​
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledApp>
  );
};

export default Instagram;
