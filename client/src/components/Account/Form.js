import classes from "./Form.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonBig from "../UI/Buttons/Button";
import InputField from "../UI/InputFields/InputField";
import { useState } from "react";

// Importerar axios
import Axios from "axios";

const PswdDropdown = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.secondaryBody};
  z-index: 99 !important;
`;

const Form = (props) => {
  const registerSubmitHandler = (event) => {
    event.preventDefault();

    if (!isCharLength) {
      // Ifall lösenordet är för kort när man registrerar.
      setIsInvalid(true);
      setErrorMessage("Password is to short.");
    } else if (!isOneNum) {
      // Ifall lösenordet inte har en siffra i sig när man registrerar.
      setIsInvalid(true);
      setErrorMessage("Password needs one number.");
    } else if (!isOneUpper) {
      // Ifall lösenordet inte har en stor bokstav när man registrerar.
      setIsInvalid(true);
      setErrorMessage("Password needs one uppercase.");
    } else if (!isMatching) {
      // Ifall lösenordet inte är lika när man registrerar.
      setIsInvalid(true);
      setErrorMessage("Password does not match.");
    } else {
      setIsInvalid(false);

      // Skickar lösenordet till /register på port 3001 (där min server är)
      Axios.post("http://localhost:3001/register", {
        firstName: firstNameReg,
        lastName: lastNameReg,
        username: usernameReg,
        phone: phoneReg,
        password: passwordReg,
        email: emailReg,
      }).then((response) => {
        //
      });
    }
  };

  // States för inloggnings info
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [secondPasswordReg, setSecondPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  // Password Check
  const [errorMessage, setErrorMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isCharLength, setIsCharLength] = useState(false);
  const [isOneNum, setIsOneNum] = useState(false);
  const [isOneUpper, setIsOneUpper] = useState(false);
  const [isMatching, setIsMatching] = useState(false);

  // State för dropdown att visas
  const [passwordDropdown, setPasswordDropdown] = useState(false);

  const showDropdownHandler = () => setPasswordDropdown(true);
  const hideDropdownHandler = () => setPasswordDropdown(false);

  const passwordCheckHandler = (e) => {
    let val = e.target.value;
    setPasswordReg(val);

    // Ifall lösenordet är kortare än 7 bokstäver
    if (val.length < 7) {
      setIsCharLength(false);
    }

    // Ifall lösenordet är längre eller lika med 7 bokstäver
    if (val.length >= 7) {
      setIsCharLength(true);
    }

    // Ifall lösenordet har en siffra i sig
    setIsOneNum(/\d/.test(val));

    // Ifall lösenordet har en stor bokstav
    setIsOneUpper(/[A-Z]/.test(val));

    if (val.length !== 0) {
      // Ifall Password och SecondPassword är lika
      if (val === secondPasswordReg) {
        setIsMatching(true);
      }
    } else {
      setIsMatching(false);
    }
  };
  const secondPasswordCheckHandler = (e) => {
    let val = e.target.value;
    setSecondPasswordReg(val);
    if (val.length !== 0) {
      // Ifall Password och SecondPassword är lika
      if (val === passwordReg) {
        setIsMatching(true);
      }
    } else {
      setIsMatching(false);
    }
  };

  return (
    <form onSubmit={registerSubmitHandler} className={classes.input_container}>
      <div className={classes.firstname}>
        <InputField
          className={classes.input_field}
          type="text"
          name="FirstName"
          placeholder="First Name"
          onChange={(e) => setFirstNameReg(e.target.value)}
        />
      </div>
      <div className={classes.lastname}>
        <InputField
          className={classes.input_field}
          type="text"
          name="LastName"
          placeholder="Last Name"
          onChange={(e) => setLastNameReg(e.target.value)}
        />
      </div>
      <div className={classes.username}>
        <InputField
          className={classes.input_field}
          type="text"
          name="Username"
          placeholder="Username"
          onChange={(e) => setUsernameReg(e.target.value)}
        />
      </div>
      <div className={classes.phone}>
        <InputField
          className={classes.input_field}
          type="tel"
          name="Phone"
          placeholder="Phone"
          onChange={(e) => setPhoneReg(e.target.value)}
        />
      </div>
      <div className={classes.password}>
        <InputField
          className={classes.input_field}
          type="password"
          name="Password"
          placeholder="Password"
          onChange={passwordCheckHandler}
          onFocus={showDropdownHandler}
          onBlur={hideDropdownHandler}
        />
        {isInvalid ? (
          <div className={classes.psw_error}>
            <span>{errorMessage}</span>
          </div>
        ) : null}
        <PswdDropdown
          className={`${classes.pswd_dropdown} ${
            passwordDropdown ? classes.pswd_dropdown_show : null
          }`}
        >
          <h6>Password Requirements: </h6>
          <ul>
            <li className={isCharLength ? classes.valid : null}>
              At least 7 characters long
            </li>
            <li className={isOneNum ? classes.valid : null}>
              At least one number
            </li>
            <li className={isOneUpper ? classes.valid : null}>
              At least one uppercase letter
            </li>
            <li className={isMatching ? classes.valid : null}>
              Password must match
            </li>
          </ul>
        </PswdDropdown>
      </div>
      <div className={classes.password_two}>
        <InputField
          className={classes.input_field}
          type="password"
          name="PasswordTwo"
          placeholder="Password"
          onChange={secondPasswordCheckHandler}
          onFocus={showDropdownHandler}
          onBlur={hideDropdownHandler}
        />
      </div>
      <div className={classes.email}>
        <InputField
          className={classes.input_field}
          type="email"
          name="Email"
          placeholder="E-Mail"
          onChange={(e) => setEmailReg(e.target.value)}
        />
      </div>
      <div className={classes.checkboxes}>
        <div className={classes.checkbox_container}>
          <label className={classes.label}>
            I accept the{" "}
            <Link to="/" className={classes.colored}>
              terms and conditions
            </Link>
            *
            <input type="checkbox" />
            <span className={classes.checkmark}></span>
          </label>
          <label className={classes.label}>
            I want to sign up to ASOS's newsletter <input type="checkbox" />
            <span className={classes.checkmark}></span>
          </label>
        </div>
      </div>
      <div className={classes.button_container}>
        <ButtonBig type="submit">register</ButtonBig>
      </div>
    </form>
  );
};

export default Form;
