import classes from "./Dropdown.module.css";
import styled from "styled-components";
import image from "./images/facebody.png";
import { Link } from "react-router-dom";

const FaceBody = (props) => {
  const FaceBodyWomen = {
    0: {
      name: "view all",
      id: 1314,
    },
    1: {
      name: "body care",
      id: 4896,
    },
    2: {
      name: "gifts",
      id: 14312,
    },
    3: {
      name: "hair care",
      id: 5021,
    },
    4: {
      name: "makeup",
      id: 5020,
    },
    5: {
      name: "nails",
      id: 5607,
    },
    6: {
      name: "skin care",
      id: 4540,
    },
    7: {
      name: "suncare & tanning",
      id: 5606,
    },
    8: {
      name: "tools & accessories",
      id: 16793,
    },
  };

  const FaceBodyMen = {
    0: {
      name: "view all",
      id: 19517,
    },
    1: {
      name: "body care",
      id: 27142,
    },
    2: {
      name: "gifts",
      id: 16775,
    },
    3: {
      name: "hair care",
      id: 27143,
    },
    4: {
      name: "makeup",
      id: 27149,
    },
    5: {
      name: "shaving & grooming",
      id: 25399,
    },
    6: {
      name: "skin care",
      id: 27150,
    },
    7: {
      name: "suncare & tanning",
      id: 5606,
    },
    8: {
      name: "tools & accessories",
      id: 27141,
    },
  };
  const ListTitle = styled.li`
    color: ${(props) => props.theme.secondaryColor};
  `;
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>shop face + body</h4>
      <div className={classes.list_container}>
        <ul className={classes.list_link}>
          <ListTitle className={classes.list_title}>women</ListTitle>
          {Object.keys(FaceBodyWomen).map((item) => (
            <li
              key={`FaceBody-women-${FaceBodyWomen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${FaceBodyWomen[item].name}/${FaceBodyWomen[item].id}`}
              >
                {FaceBodyWomen[item].name}
              </Link>
            </li>
          ))}
          <ListTitle className={classes.list_title}>men</ListTitle>
          {Object.keys(FaceBodyMen).map((item) => (
            <li
              key={`FaceBdody-men-${FaceBodyMen[item].name}`}
              className={classes.list_item}
            >
              <Link
                to={`/category/${FaceBodyMen[item].name}/${FaceBodyMen[item].id}`}
              >
                {FaceBodyMen[item].name}
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

export default FaceBody;
