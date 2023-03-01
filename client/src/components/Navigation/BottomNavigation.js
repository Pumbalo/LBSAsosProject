import { useState, useContext, Fragment } from "react";
import classes from "./BottomNavigation.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Icons
import Cart from "../UI/Icons/Cart";
import Heart from "../UI/Icons/Heart";
import Visibility from "../UI/Icons/Visibility";
import User from "../UI/Icons/User";

// Navigation Lists
import Men from "./Dropdowns/Men";
import Women from "./Dropdowns/Women";
import Accessories from "./Dropdowns/Accessories";
import Shoes from "./Dropdowns/Shoes";
import FaceBody from "./Dropdowns/FaceBody";
import NewIn from "./Dropdowns/NewIn";

// AddToCart Context
import AddToCartContext from "../../Contexts/AddToCartContext";

// LoginStatus Context
import LoginStatusContext from "../../Contexts/LoginStatusContext";

// Dropdown Icons
import Orders from "../UI/Icons/Orders";
import Settings from "../UI/Icons/Settings";
import LogOut from "../UI/Icons/LogOut";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  z-index: 98 !important;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.fontColor};

  p:hover {
    color: ${(props) => props.theme.fontColor};
  }
`;

const IconApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  svg {
    fill: ${(props) => props.theme.fontColor};
    cursor: pointer;
    transition: fill ease-in-out var(--transition-speed),
      transform ease-in-out var(--transition-speed);
  }

  svg:hover {
    transform: scale(1.1);
    fill: ${(props) => props.theme.secondaryColor};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: center;
    position: relative;
  }
`;

const CartAmount = styled.span`
  background-color: ${(props) => props.theme.secondaryColor};
`;

const AccountDropdown = styled.div`
  fill: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.secondaryBody};
  z-index: 99 !important;

  &::after {
    content: "";
    height: 20px;
    width: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
    background-color: ${(props) => props.theme.secondaryBody};
  }
`;

const BottomNavigation = (props) => {
  const [showItem, setShowItem] = useState(null);

  const menHandler = () => {
    if (showItem === "men") {
      setShowItem(null);
    } else {
      setShowItem("men");
    }
  };

  const womenHandler = () => {
    if (showItem === "women") {
      setShowItem(null);
    } else {
      setShowItem("women");
    }
  };
  const accessoriesHandler = () => {
    if (showItem === "accessories") {
      setShowItem(null);
    } else {
      setShowItem("accessories");
    }
  };
  const shoesHandler = () => {
    if (showItem === "shoes") {
      setShowItem(null);
    } else {
      setShowItem("shoes");
    }
  };
  const faceBodyHandler = () => {
    if (showItem === "facebody") {
      setShowItem(null);
    } else {
      setShowItem("facebody");
    }
  };
  const newInHandler = () => {
    if (showItem === "newin") {
      setShowItem(null);
    } else {
      setShowItem("newin");
    }
  };

  // Lägger till AddToCartContext
  const { cartItems } = useContext(AddToCartContext);

  // Filtrerar duplicerade produkter
  let cart = cartItems.filter(
    (ele, ind) =>
      ind ===
      cartItems.findIndex(
        (elem) => elem.id === ele.id && elem.size === ele.size
      )
  );
  // Tar alla "price" multipicerat med "count" och ger total summa för alla produkter.
  let totalPrice = cart.reduce(
    (totalPrice, item) => totalPrice + item.price * item.count,
    0
  );

  const { loginStatus } = useContext(LoginStatusContext);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const showDropdown = (e) => setShowLoginDropdown((prevState) => !prevState);

  return (
    <nav>
      <StyledApp>
        <div className={classes.nav_items_container}>
          <ul className={classes.nav_link}>
            <li className={`${classes.nav_item}`}>
              <p onClick={menHandler}>men</p>
              <div
                key="men"
                className={`${classes.nav_dropdown} ${classes.dropdown__men} ${
                  showItem === "men" ? classes.dropdown_show : null
                }`}
              >
                <Men />
              </div>
            </li>
            <li className={classes.nav_item}>
              <p onClick={womenHandler}>women</p>
              <div
                key="women"
                className={`${classes.nav_dropdown} ${
                  classes.dropdown__women
                } ${showItem === "women" ? classes.dropdown_show : null} `}
              >
                <Women />
              </div>
            </li>
            <li className={classes.nav_item}>
              <p onClick={accessoriesHandler}>accessories</p>
              <div
                key="accessories"
                className={`${classes.nav_dropdown} ${
                  classes.dropdown__accessories
                } ${
                  showItem === "accessories" ? classes.dropdown_show : null
                } `}
              >
                <Accessories />
              </div>
            </li>
            <li className={classes.nav_item}>
              <p onClick={shoesHandler}>shoes</p>
              <div
                key="shoes"
                className={`${classes.nav_dropdown} ${
                  classes.dropdown__shoes
                } ${showItem === "shoes" ? classes.dropdown_show : null} `}
              >
                <Shoes />
              </div>
            </li>
            <li className={classes.nav_item}>
              <p onClick={faceBodyHandler}>face + body</p>
              <div
                key="facebody"
                className={`${classes.nav_dropdown} ${
                  classes.dropdown__facebody
                } ${showItem === "facebody" ? classes.dropdown_show : null} `}
              >
                <FaceBody />
              </div>
            </li>
            <li className={classes.nav_item}>
              <p onClick={newInHandler}>new in</p>
              <div
                key="newin"
                className={`${classes.nav_dropdown} ${
                  classes.dropdown__newin
                } ${showItem === "newin" ? classes.dropdown_show : null} `}
              >
                <NewIn />
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.options_container}>
          <IconApp className={classes.icon_container}>
            <Link to="/cart">
              <span className={classes.cart_sum}>${totalPrice}</span>
              <Cart className={classes.icon} />
              {cart.length !== 0 ? (
                <CartAmount className={classes.cart_amount}>
                  {cart.length}
                </CartAmount>
              ) : null}
            </Link>
          </IconApp>
          <IconApp className={classes.icon_container}>
            <Link to="/wishlist">
              <Heart className={classes.icon} />
            </Link>
          </IconApp>
          <IconApp className={classes.icon_container}>
            <Visibility onClick={props.toggleTheme} className={classes.icon} />
          </IconApp>
          <IconApp className={classes.icon_container}>
            {loginStatus === "" ? (
              <Link to="/account">
                <User className={classes.icon} />
              </Link>
            ) : (
              <Fragment>
                <div
                  onClick={showDropdown}
                  className={classes.account_dropdown_wrapper}
                >
                  <User className={classes.icon} />
                  <AccountDropdown
                    className={`${classes.account_dropdown} ${
                      showLoginDropdown ? classes.account_dropdown_show : null
                    }`}
                  >
                    <p>Hi {loginStatus}!</p>
                    <ul className={classes.account_list_link}>
                      <li className={classes.account_list_item}>
                        <Orders />
                        <Link to="/">Orders</Link>
                      </li>
                      <li className={classes.account_list_item}>
                        <Settings />
                        <Link to="/">Settings</Link>
                      </li>
                      <li className={classes.account_list_item}>
                        <LogOut />
                        <Link to="/">Logout</Link>
                      </li>
                    </ul>
                  </AccountDropdown>
                </div>
              </Fragment>
            )}
          </IconApp>
        </div>
      </StyledApp>
    </nav>
  );
};

export default BottomNavigation;
