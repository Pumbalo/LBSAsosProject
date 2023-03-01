import { React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import classes from "./TopNavigation.module.css";
import Search from "../UI/Icons/Search";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryBody};
  box-shadow: var(--dp14-shadow);
  color: ${(props) => props.theme.fontColor};
`;

const Logo = styled.h1`
  a {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 39px;
    margin: 0;
    padding: 11px 0 19px 0;
    color: ${(props) => props.theme.fontColor};
    user-select: none;
  }
  a:hover {
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
  }
`;

const TopNavigation = (props) => {
  return (
    <nav>
      <StyledApp>
        <div className={classes.logo_container}>
          <Logo>
            <Link to="/">asos</Link>
          </Logo>
        </div>
        <div className={classes.right_section}>
          <div className={classes.short_info}>
            <div className={classes.item}>
              <p className={`${classes.item_text}`}>contact</p>
            </div>
            <div className={classes.item}>
              <p className={`${classes.item_text}`}>about</p>
            </div>
            <div className={classes.item}>
              <p className={`${classes.item_text} ${classes.last_child}`}>
                usd
              </p>
            </div>
          </div>
          <div className={classes.search_container}>
            <input
              type="text"
              name="search"
              className={classes.search_box}
              placeholder="Type in and hit Enter"
            />
            <Search className={classes.search_icon} />
          </div>
        </div>
      </StyledApp>
    </nav>
  );
};

export default TopNavigation;
