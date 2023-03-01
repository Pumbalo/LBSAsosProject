import { useState } from "react";

import styled from "styled-components";
import classes from "./Dropdown.module.css";

import DownArrow from "../../UI/Icons/DownArrow";

const Tab = styled.div`
  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.fontColor};
  h4 {
    color: ${(props) => props.theme.fontColor};
  }
  svg {
    fill: ${(props) => props.theme.fontColor};
  }
`;

const Menu = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const ListItem = styled.li`
  padding: 14px 16px;
  font-family: var(--font-family);
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  opacity: 0.87;
  font-weight: var(--font-regular);
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color ease-in-out 200ms;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  span {
    color: ${(props) => props.theme.fontColor};
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.secondaryBody};
  }
`;

const DropdownSort = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const dropdownToggleHandler = () => setIsActive((prevState) => !prevState);

  const clickedItemHandler = (item) => {
    setActiveItem(item.name);
    props.facetValue(item.id);
    props.facetItemKey(props.facetKey);

    dropdownToggleHandler(false);
  };

  return (
    <div className={classes.container}>
      <Tab onClick={dropdownToggleHandler} className={classes.tab}>
        <h4 className={classes.title}>
          {activeItem === null ? props.name : activeItem}
        </h4>
        <DownArrow className={classes.arrow} />
      </Tab>
      <Menu
        className={`${classes.menu} ${isActive ? classes.menu_active : null}`}
      >
        <ul className={classes.dropdown_link}>
          {props.values.map((item) => (
            <ListItem key={item.id} onClick={() => clickedItemHandler(item)}>
              <p>{item.name}</p> <span>({item.count})</span>
            </ListItem>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default DropdownSort;
