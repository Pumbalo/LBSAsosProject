import classes from "./Dropdown.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "./images/shoes.png";

const Shoes = (props) => {
  const ShoesWomen = {
    0: {
      name: "view all",
      id: 4172,
    },
    1: {
      name: "boots",
      id: 6455,
    },
    2: {
      name: "flat shoes",
      id: 6459,
    },
    3: {
      name: "heels",
      id: 6461,
    },
    4: {
      name: "sandals",
      id: 6458,
    },
    5: {
      name: "sliders & flip flops",
      id: 15173,
    },
    6: {
      name: "sneakers",
      id: 6456,
    },
    7: {
      name: "socks & thights",
      id: 7657,
    },
  };

  const ShoesMen = {
    0: {
      name: "view all",
      id: 4209,
    },
    1: {
      name: "boots",
      id: 5774,
    },
    2: {
      name: "loafers",
      id: 11247,
    },
    3: {
      name: "shoes",
      id: 27116,
    },
    4: {
      name: "sliders & flip flops",
      id: 17514,
    },
    5: {
      name: "slippers",
      id: 14328,
    },
    6: {
      name: "sneakers",
      id: 5775,
    },
    7: {
      name: "socks",
      id: 16329,
    },
  };
  const ListTitle = styled.li`
    color: ${(props) => props.theme.secondaryColor};
  `;
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>shop shoes</h4>
      <div className={classes.list_container}>
        <ul className={classes.list_link}>
          <ListTitle className={classes.list_title}>women</ListTitle>
          {Object.keys(ShoesWomen).map((item) => (
            <li
              key={`Shoes-women-${ShoesWomen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${ShoesWomen[item].name}/${ShoesWomen[item].id}`}
              >
                {ShoesWomen[item].name}
              </Link>
            </li>
          ))}
          <ListTitle className={classes.list_title}>men</ListTitle>
          {Object.keys(ShoesMen).map((item) => (
            <li
              key={`Shoes-men-${ShoesMen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${ShoesMen[item].name}/${ShoesMen[item].id}`}
              >
                {ShoesMen[item].name}
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

export default Shoes;
