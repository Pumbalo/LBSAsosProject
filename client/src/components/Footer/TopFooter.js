import classes from "./TopFooter.module.css";
import styled from "styled-components";

// Icons
import Apple from "../UI/Icons/Apple";
import Android from "../UI/Icons/Android";
import Facebook from "../UI/Icons/Facebook";
import Twitter from "../UI/Icons/Twitter";
import Instagram from "../UI/Icons/InstagramIcon";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
`;

const StyledButton = styled.button`
  color: ${(props) => props.theme.fontColor};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: var(--font-light);
  letter-spacing: 1px;
  font-family: var(--font-family);
  background-color: ${(props) => props.theme.opositeBackground};
  outline: none;
  border: none;
  margin: 0;
  padding: 11px 19px;
  border-radius: 0 15px 15px 0;
`;

const Footer = (props) => {
  return (
    <StyledApp>
      <div className={classes.container}>
        <footer>
          <div className={classes.top_section}>
            <h4 className={classes.title}>be in touch with us:</h4>
            <div className={classes.newsletter_container}>
              <input
                type="email"
                className={classes.newsletter}
                placeholder="enter your e-mail"
              />
              <StyledButton type="submit">join us</StyledButton>
            </div>
            <div className={classes.icons_container}>
              <Apple className={classes.icon} />
              <Android className={classes.icon} />
              <Facebook className={classes.icon} />
              <Twitter className={classes.icon} />
              <Instagram className={classes.icon} />
            </div>
          </div>
        </footer>
      </div>
    </StyledApp>
  );
};

export default Footer;
