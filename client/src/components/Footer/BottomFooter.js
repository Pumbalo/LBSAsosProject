import classes from "./BottomFooter.module.css";
import styled from "styled-components";

// Payment Methods
import GooglePay from "../UI/PaymentMethods/GooglePay";
import ApplePay from "../UI/PaymentMethods/ApplePay";
import PayPal from "../UI/PaymentMethods/PayPal";
import Klarna from "../UI/PaymentMethods/Klarna";
import MasterCard from "../UI/PaymentMethods/MasterCard";
import Visa from "../UI/PaymentMethods/GooglePay";

const StyledPara = styled.p`
  color: ${(props) => props.theme.fontColor};
  opacity: 0.7;
`;

const StyledLogo = styled.h1`
  color: ${(props) => props.theme.secondaryColor};
  font-size: var(--font-xl);
  font-weight: var(--font-semibold);
  letter-spacing: 2px;
  padding-bottom: 15px;
  padding-right: 10px;
  margin: 0;
`;

const Footer = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.grid_container}>
        <div className={classes.logo_container}>
          <StyledLogo>ASOS</StyledLogo>
          <StyledPara>© ASOS 2021. All Rights Reserved.</StyledPara>
        </div>
        <div className={classes.payment_container}>
          <GooglePay />
          <ApplePay />
          <PayPal />
          <Klarna />
          <MasterCard />
          <Visa />
        </div>
      </div>
    </div>
  );
};

export default Footer;
