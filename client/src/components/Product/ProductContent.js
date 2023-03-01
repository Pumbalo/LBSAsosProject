import styled from "styled-components";
import classes from "./ProductContent.module.css";
import { useState, useContext, Fragment } from "react";
import { useParams, Link } from "react-router-dom";

// Importerar AddToCartContext & AddToWishlitContext
import AddToCartContext from "../../Contexts/AddToCartContext";
import AddToWishlistContext from "../../Contexts/AddToWishlistContext";

import Cart from "../UI/Icons/Cart";
import Heart from "../UI/Icons/Heart";
import SubImages from "./SubImages";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};

  a {
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.secondaryColor};
  }

  .sub_img__active {
    border: 2px solid ${(props) => props.theme.secondaryColor};
    box-shadow: 0px 0px 8px ${(props) => props.theme.secondaryColor};
  }
`;

const InfoApp = styled.div`
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0;

  h1 {
    font-weight: var(--font-light);
    padding-top: 30px;
    opacity: 0.87;
    font-size: 28px;
  }

  h2 {
    font-weight: var(--font-bold);
    opacity: 0.87;
    padding-top: 30px;
    font-size: 32px;
  }

  p {
    font-weight: var(--font-light);
    opacity: 0.87;
    font-size: 16px;
    padding-top: 10px;
  }

  h3 {
    font-weight: var(--font-semibold);
    opacity: 0.87;
    font-size: 28px;
    padding-top: 30px;
  }

  h5 {
    font-weight: var(--font-bold);
    opacity: 0.8;
    font-size: 28px;
    padding-top: 30px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  button {
    background-color: ${(props) => props.theme.secondaryColor};
  }

  button:disabled::before,
  button:disabled::after {
    content: "";
    opacity: 0;
    transition: opacity 700ms ease-in-out;
  }

  button:hover:disabled::before {
    content: "Please select size.";
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translate(-50%);
    color: #fff;
    width: 100%;
    padding: 2px 4px;
    background-color: ${(props) => props.theme.secondaryColor};
    border-radius: 4px;
    opacity: 1;
  }

  button:hover:disabled::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%);
    width: 20px;
    height: 15px;
    background-color: ${(props) => props.theme.secondaryColor};
    clip-path: polygon(50% 60%, 0 0, 100% 0);
    opacity: 1;
  }
`;

const SizeContainer = styled.div`
  color: ${(props) => props.theme.fontColor};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  align-items: flex-end;
  text-align: center;

  span {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: var(--font-regular);
    cursor: pointer;
    position: relative;
    padding: 0 2px;
    margin: 0;
  }

  span:first-child {
    margin-left: 0;
  }

  span::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.secondaryColor};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 100ms ease-in-out;
  }

  span:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  & .size_active {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const SubImageContainer = styled.div`
  & .active_sub_image {
    box-shadow: 0px 0px 7px 1px ${(props) => props.theme.secondaryColor};
  }
`;

const ProductContent = (props) => {
  // Sätter "Size" i en state.
  const [selectedSize, setSelectedSize] = useState();

  // Kollar ifall användare har valt en "Size"
  const [isSizeSelected, setIsSizeSelected] = useState(false);

  let params = useParams();
  let location = `/category/${params.type}/${params.id}`;

  // Gör så att value "setCartItems" som finns i './app.js' fungerar i denna filen.
  const { setCartItems } = useContext(AddToCartContext);

  // Gör så att value "setWishlistItems" som finns i './app.js' fungerar i denna filen.
  const { setWishlistItems } = useContext(AddToWishlistContext);

  const selectSizeHandler = (event) => {
    setSelectedSize(event.target.textContent);
    setIsSizeSelected(true);
  };

  const changeMainImg = (event) => {
    let target = event.target.getAttribute("src");
    let mainImg = document.getElementsByClassName(`${classes.main_img}`);
    // Byter "main image" till "sub image" man tryckt på.
    mainImg[0].src = target;
  };

  const zoomInHandler = (e) => {
    let img = e.target;
    let lens = document.getElementsByClassName(`${classes.lens}`)[0];

    // Får tag på img src så det kan sättas i lens.
    lens.style.backgroundImage = `url(${e.target.getAttribute("src")})`;

    // Zoom Ratio
    let ratio = 2;

    // Sätter storleken på bilden inuti 'lens' till storleken på bilden * ratio.
    lens.style.backgroundSize =
      img.width * ratio + "px " + img.height * ratio + "px";

    // Få position på mus
    let bounds = img.getBoundingClientRect();
    let x = e.pageX - bounds.left;
    let y = e.pageY - bounds.top;

    // Flytta 'lens'
    let positionLeft = x - lens.offsetWidth / 2;
    let positionTop = y - lens.offsetWidth / 2;

    // Sätter left och top position (som används i position: absolute).
    lens.style.left = positionLeft + "px";
    lens.style.top = positionTop + "px";

    // Ändra plats på bilden i 'lens'.
    lens.style.backgroundPosition = "-" + x * ratio + "px -" + y * ratio + "px";
  };

  return (
    <StyledApp className={classes.container}>
      <div className={classes.top}>
        <span className={classes.location}>
          <Link to="/">home</Link> /
          <Link to={location}>{props.categoryType}</Link> / {props.brandName}
        </span>
      </div>
      <div className={classes.content}>
        <div className={classes.grid_container}>
          <div className={classes.item}>
            <div className={classes.img_grid}>
              <SubImageContainer className={classes.sub_img__container}>
                <SubImages
                  onClick={changeMainImg}
                  media={props.media}
                  className={classes.sub_img}
                />
              </SubImageContainer>
              <div className={classes.main_img__container}>
                <div className={classes.lens}></div>
                <img
                  alt="main"
                  src={`https://${props.mainImg?.url}`}
                  className={classes.main_img}
                  onMouseMove={zoomInHandler}
                />
              </div>
            </div>
          </div>
          <div className={classes.item}>
            <InfoApp className={classes.information_container}>
              <h1>{props.name}</h1>
              <h2>${props.price}</h2>
              <p>free delivery &#38; returns</p>
              {props.mainImg?.colour === "No colour" ? null : (
                <h3>color: {props.mainImg?.colour}</h3>
              )}
              <form className={classes.purchase}>
                {props.sizes[0].brandSize === "No Size" ? null : (
                  <Fragment>
                    <h5>size: </h5>
                    <SizeContainer className={classes.sizes}>
                      {props.sizes?.map((sizes) => (
                        <span
                          onClick={selectSizeHandler}
                          className={
                            selectedSize === sizes.brandSize
                              ? "size_active"
                              : null
                          }
                        >
                          {sizes.brandSize}
                        </span>
                      ))}
                    </SizeContainer>
                  </Fragment>
                )}
                <BtnContainer className={classes.btn_container}>
                  {props.sizes[0].brandSize === "No Size" ? (
                    <button
                      type="button"
                      onClick={() =>
                        setCartItems((cartItems) => [
                          ...cartItems,
                          {
                            name: props.name,
                            price: props.price,
                            color: props.mainImg?.colour,
                            img: props.mainImg?.url,
                            id: params.productid,
                            size: selectedSize,
                            count: 1,
                          },
                        ])
                      }
                      className={classes.add_to_cart}
                    >
                      <Cart />
                      add to cart
                    </button>
                  ) : (
                    <button
                      disabled={!isSizeSelected}
                      type="button"
                      onClick={() =>
                        setCartItems((cartItems) => [
                          ...cartItems,
                          {
                            name: props.name,
                            price: props.price,
                            color: props.mainImg?.colour,
                            img: props.mainImg?.url,
                            id: params.productid,
                            size: selectedSize,
                            count: 1,
                          },
                        ])
                      }
                      className={classes.add_to_cart}
                    >
                      <Cart />
                      add to cart
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      setWishlistItems((wishListItems) => [
                        ...wishListItems,
                        {
                          name: props.name,
                          price: props.price,
                          color: props.mainImg?.colour,
                          img: props.mainImg?.url,
                          id: params.productid,
                          size: selectedSize,
                        },
                      ])
                    }
                    className={classes.wishlist}
                  >
                    <Heart />
                  </button>
                </BtnContainer>
              </form>
            </InfoApp>
          </div>
        </div>
      </div>
    </StyledApp>
  );
};

export default ProductContent;
