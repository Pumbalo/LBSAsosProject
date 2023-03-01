import classes from "./ImageSlider.module.css";
import styled from "styled-components";

import ImageOne from "./ImageOne.png";
import ImageTwo from "./ImageTwo.png";
import ImageThree from "./ImageThree.png";

import Button from "../UI/Buttons/Button";

// Bootstrap
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const SubtitleThird = styled.h2`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: var(--font-family);
  font-weight: var(--font-semibold);
  padding: 16px 18px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.secondaryColor};
  margin-bottom: 2rem;
`;

const ImageSlider = (props) => {
  return (
    <div className={classes.container}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ImageOne} alt="First slide" />
          <div className={classes.content_first_image}>
            <h1 className={classes.title}>summer 2021</h1>
            <h2 className={classes.subtitle}>sale</h2>
            <Button type="button">shop now</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImageTwo} alt="Second slide" />
          <div className={classes.content_second_image}>
            <h1 className={classes.title}>must haves</h1>
            <h2 className={classes.subtitle_second}>for her</h2>
            <Button type="button">shop now</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImageThree} alt="Third slide" />
          <div className={classes.content_third_image}>
            <h1 className={classes.title}>BIG SALE!</h1>
            <SubtitleThird>Up to 70% OFF!</SubtitleThird>
            <Button type="button">shop now</Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
