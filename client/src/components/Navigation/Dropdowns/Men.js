import classes from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import image from "./images/men.png";

const Men = (props) => {
  const MenClothing = {
    0: {
      name: "activewear",
      id: 26090,
    },
    1: {
      name: "designer",
      id: 27111,
    },
    2: {
      name: "hoodies & sweatshirts",
      id: 5668,
    },
    3: {
      name: "jackets & coats",
      id: 3606,
    },
    4: {
      name: "jeans",
      id: 4208,
    },
    5: {
      name: "loungewear",
      id: 18797,
    },
    6: {
      name: "pants & chinos",
      id: 4910,
    },
    7: {
      name: "polo shirts",
      id: 4616,
    },
    8: {
      name: "shirts",
      id: 3602,
    },
    9: {
      name: "shorts",
      id: 7078,
    },
    10: {
      name: "socks",
      id: 16329,
    },
    11: {
      name: "suits",
      id: 5678,
    },
    12: {
      name: "sweaters & cardigans",
      id: 7617,
    },
    13: {
      name: "sweatpants",
      id: 14274,
    },
    14: {
      name: "swimwear",
      id: 13210,
    },
    15: {
      name: "t-shirt & tanks",
      id: 7616,
    },
    16: {
      name: "tracksuits & joggers",
      id: 26776,
    },
    17: {
      name: "underwear",
      id: 20317,
    },
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>shop men</h4>
      <div className={classes.list_container}>
        <ul className={classes.list_link}>
          {Object.keys(MenClothing).map((item) => (
            <li
              key={`clothing-men-${MenClothing[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${MenClothing[item].name}/${MenClothing[item].id}`}
              >
                {MenClothing[item].name}
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

export default Men;
