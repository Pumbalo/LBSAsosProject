import classes from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import image from "./images/women.png";

const Women = (props) => {
  const womenClothing = {
    0: {
      name: "activewear",
      id: 26091,
    },
    1: {
      name: "designer",
      id: 15210,
    },
    2: {
      name: "hoodies & sweatshirts",
      id: 11321,
    },
    3: {
      name: "jackets & coats",
      id: 2641,
    },
    4: {
      name: "jeans",
      id: 3630,
    },
    5: {
      name: "loungewear",
      id: 21867,
    },
    6: {
      name: "pants & leggings",
      id: 2640,
    },
    7: {
      name: "dresses",
      id: 8799,
    },
    8: {
      name: "jumpsuits & rompers",
      id: 7618,
    },
    9: {
      name: "shorts",
      id: 9263,
    },
    10: {
      name: "skirts",
      id: 2639,
    },
    11: {
      name: "socks & thights",
      id: 7657,
    },
    12: {
      name: "sweaters & cardigans",
      id: 2637,
    },
    13: {
      name: "lingerie & sleepwear",
      id: 6046,
    },
    14: {
      name: "swimwear & beachwear",
      id: 2238,
    },
    15: {
      name: "suits & tailoring",
      id: 13632,
    },
    16: {
      name: "tracksuits",
      id: 27953,
    },
    17: {
      name: "tops",
      id: 4169,
    },
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>shop women</h4>
      <div className={classes.list_container}>
        <ul className={classes.list_link}>
          {Object.keys(womenClothing).map((item) => (
            <li
              key={`clothing-women-${womenClothing[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${womenClothing[item].name}/${womenClothing[item].id}`}
              >
                {womenClothing[item].name}
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

export default Women;
