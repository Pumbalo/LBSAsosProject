import classes from "./Dropdown.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "./images/accessories.png";

const Accessories = (props) => {
  const AccessoriesWomen = {
    0: {
      name: "view all",
      id: 4174,
    },
    1: {
      name: "bags & purses",
      id: 8730,
    },
    2: {
      name: "belts",
      id: 6448,
    },
    3: {
      name: "face coverings",
      id: 50035,
    },
    4: {
      name: "hair accessories",
      id: 11412,
    },
    5: {
      name: "hats",
      id: 6449,
    },
    6: {
      name: "sunglasses",
      id: 4545,
    },
    7: {
      name: "gifts",
      id: 16095,
    },
  };

  const AccessoriesMen = {
    0: {
      name: "view all",
      id: 4210,
    },
    1: {
      name: "bags",
      id: 9265,
    },
    2: {
      name: "caps & hats",
      id: 6517,
    },
    3: {
      name: "face coverings",
      id: 50036,
    },
    4: {
      name: "sunglasses",
      id: 6519,
    },
    5: {
      name: "ties",
      id: 6520,
    },
    6: {
      name: "wallets",
      id: 6516,
    },
    7: {
      name: "gifts",
      id: 16091,
    },
  };

  const ListTitle = styled.li`
    color: ${(props) => props.theme.secondaryColor};
  `;

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>shop accessories</h4>
      <div className={classes.list_container}>
        <ul className={classes.list_link}>
          <ListTitle className={classes.list_title}>women</ListTitle>
          {Object.keys(AccessoriesWomen).map((item) => (
            <li
              key={`Accessory-women-${AccessoriesWomen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${AccessoriesWomen[item].name}/${AccessoriesWomen[item].id}`}
              >
                {AccessoriesWomen[item].name}
              </Link>
            </li>
          ))}

          <ListTitle className={classes.list_title}>men</ListTitle>
          {Object.keys(AccessoriesWomen).map((item) => (
            <li
              key={`Accessory-men-${AccessoriesMen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${AccessoriesMen[item].name}/${AccessoriesMen[item].id}`}
              >
                {AccessoriesMen[item].name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.img_container}>
        <img src={image} className={classes.dropdown_image} alt="dropdown" />
      </div>
    </div>
  );
};

export default Accessories;
