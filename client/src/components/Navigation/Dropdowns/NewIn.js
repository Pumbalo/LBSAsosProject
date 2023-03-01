import classes from "./Dropdown.module.css";
import styled from "styled-components";
import image from "./images/newin.png";
import { Link } from "react-router-dom";

const NewIn = (props) => {
  const NewInWomen = {
    0: {
      name: "view all",
      id: 27108,
    },
    1: {
      name: "clothing",
      id: 2623,
    },
    2: {
      name: "shoes",
      id: 6992,
    },
    3: {
      name: "accessories",
      id: 27109,
    },
    4: {
      name: "face + body",
      id: 2426,
    },
    5: {
      name: "topshop",
      id: 29299,
    },
    6: {
      name: "back in stock",
      id: 17204,
    },
    7: {
      name: "trending now",
      id: 13497,
    },
  };

  const NewInMen = {
    0: {
      name: "view all",
      id: 27110,
    },
    1: {
      name: "clothing",
      id: 6993,
    },
    2: {
      name: "shoes",
      id: 17184,
    },
    3: {
      name: "accessories",
      id: 27112,
    },
    4: {
      name: "face + body",
      id: 27140,
    },
    5: {
      name: "topshop",
      id: 29065,
    },
    6: {
      name: "back in stock",
      id: 17010,
    },
    7: {
      name: "trending now",
      id: 13500,
    },
  };
  const ListTitle = styled.li`
    color: ${(props) => props.theme.secondaryColor};
  `;
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>shop new in</h4>
      <div className={classes.list_container}>
        <ul className={classes.list_link}>
          <ListTitle className={classes.list_title}>women</ListTitle>
          {Object.keys(NewInWomen).map((item) => (
            <li
              key={`NewIn-women-${NewInWomen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${NewInWomen[item].name}/${NewInWomen[item].id}`}
              >
                {NewInWomen[item].name}
              </Link>
            </li>
          ))}
          <ListTitle className={classes.list_title}>men</ListTitle>
          {Object.keys(NewInMen).map((item) => (
            <li
              key={`NewIn-men-${NewInMen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${NewInMen[item].name}/${NewInMen[item].id}`}
              >
                {NewInMen[item].name}
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

export default NewIn;
