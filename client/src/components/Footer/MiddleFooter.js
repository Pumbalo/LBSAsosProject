import classes from "./MiddleFooter.module.css";
import styled from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.fontColor};
  text-transform: capitalize;
  font-weight: var(--color-light);
  font-size: var(--font-xs);
  opacity: 0.8;
  transition: opacity ease-in-out 200ms;

  &:hover {
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
    opacity: 1;
  }
`;

const Footer = (props) => {
  return (
    <StyledApp>
      <div className={classes.container}>
        <div className={classes.grid_container}>
          <div className={classes.grid_item}>
            <h2 className={classes.title}>categories</h2>
            <ul className={classes.list_link}>
              <li className={classes.list_item}>
                <StyledLink href="/">women</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">men</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">accessories</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">shoes</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">new arrivals</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">summer collection</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">sale</StyledLink>
              </li>
            </ul>
          </div>
          <div className={classes.grid_item}>
            <h2 className={classes.title}>buy with us</h2>
            <ul className={classes.list_link}>
              <li className={classes.list_item}>
                <StyledLink href="/">about us</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">contact us</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">services</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">FAQs</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">privacy policy</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">cookie policy</StyledLink>
              </li>
              <li className={classes.list_item}>
                <StyledLink href="/">terms and conditions</StyledLink>
              </li>
            </ul>
          </div>
          <div className={classes.grid_item}>
            <h2 className={classes.title}>about us</h2>
            <div className={classes.text_content}>
              <p className={classes.about_us__text}>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Aliquam dignissim aliquet <br />
                erat, a elementum urna facilisis vel. <br />
                Phasellus ac risus vestibulum, commodo <br />
                arcu sed, tempus lacus. Ut et sapien ut <br />
                quam rhoncus condimentum a et tellus. <br />
                Phasellus suscipit finibus pharetra. <br />
                Nulla dolor arcu, blandit eu lacus sit <br />
                amet, dapibus luctus tortor.
              </p>
            </div>
          </div>
          <div className={classes.grid_item}>
            <h2 className={classes.title}>contact us</h2>
            <div className={classes.text_content}>
              <p className={classes.contact_us__text}>
                <span className={classes.text_header}>adress: </span>
                1795 North Avenue NE Winnetoon, <br />
                Nebraska, United States of America.
              </p>
              <p className={classes.contact_us__text}>
                <span className={classes.text_header}>phone: </span>
                +402 847 6003; +402 366 8632
              </p>
              <p className={classes.contact_us__text}>
                <span className={classes.text_header}>hours: </span>
                All week from 9 am to 9 pm.
              </p>
              <p className={classes.contact_us__text}>
                <span className={classes.text_header}>e-mail: </span>
                asos@contact.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledApp>
  );
};

export default Footer;
