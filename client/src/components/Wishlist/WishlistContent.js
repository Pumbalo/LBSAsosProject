import styled from "styled-components";
import classes from "./WishlistContent.module.css";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import SmileySad from "../UI/Icons/SmileySad";

// Importerar AddToWishlistContext
import AddToWishlistContext from "../../Contexts/AddToWishlistContext";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  height: 100%;
  font-family: var(--font-family);
`;

const Line = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.fontColor};
`;

const EmptyWishlist = styled.div`
  text-align: center;
  font-family: var(--font-family);
  font-weight: var(--font-semibold);

  svg {
    fill: ${(props) => props.theme.secondaryColor};
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme.fontColor};
    font-size: 28px;
  }

  a {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 18px;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.5;
  }
`;

const WishlistContent = (props) => {
  const { wishlistItems } = useContext(AddToWishlistContext);

  let wishlist = wishlistItems.filter(
    (ele, ind) => ind === wishlistItems.findIndex((elem) => elem.id === ele.id)
  );

  return (
    <StyledApp className={classes.container}>
      <div className={classes.top}>
        <div className={classes.location}>
          <span>home / wishlist</span>
        </div>
        <div className={classes.title}>
          <h1>wishlist</h1>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.grid_container}>
          <Fragment>
            {wishlist.length === 0 ? (
              <EmptyWishlist>
                <SmileySad />
                <h2>Wishlist is empty</h2>
                <Link to="/">Start shopping!</Link>
              </EmptyWishlist>
            ) : (
              wishlist.map((item) => (
                <Fragment>
                  <Product
                    img={item?.img}
                    name={item?.name}
                    price={item?.price}
                    color={item?.color === "No colour" ? null : item?.color}
                    size={item?.size === undefined ? null : item?.size}
                    key={item?.id}
                    itemid={item?.id}
                  />
                </Fragment>
              ))
            )}
            <Line></Line>
          </Fragment>
        </div>
      </div>
    </StyledApp>
  );
};

export default WishlistContent;
