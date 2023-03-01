import classes from "./LoginForm.module.css";
import { useState, useContext } from "react";

// Importerar Axios.
import Axios from "axios";

import ButtonBig from "../UI/Buttons/Button";
import InputField from "../UI/InputFields/InputField";

// Login/Email Status Context
import LoginStatusContext from "../../Contexts/LoginStatusContext";

// Importerar useHistory
import { useHistory } from "react-router";

const LoginForm = (props) => {
  // Skapar states för input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Skapar en state som visar error messages.
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Importerar Login Status Context
  const { setLoginStatus } = useContext(LoginStatusContext);

  Axios.defaults.withCredentials = true;

  let history = useHistory();

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    // Postar email & lösenord till /login på port 3001
    // Detta tas sedan upp från server sidan.
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        // Ifall det finns något error (tex fel lösenord) skrivs det i en state variable
        // Samt sätter error på "true"
        setErrorMessage(response.data.message);
        setIsError(true);
      }
    });
    setTimeout(() => {
      // Kollar ifall /login på port 3001 är true, är den true har man skrivit in rätt
      // inloggnings detaljer
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn === true) {
          setLoginStatus(response.data.user[0].firstName);
          history.push("/");
        }
      });
    }, 1000);
    // Väntar en sekund eftersom ibland kan servern ta längre tid att ladda än själva sidan.
  };

  return (
    <form onSubmit={loginSubmitHandler} className={classes.input_container}>
      <div className={classes.email}>
        {isError ? (
          <div className={classes.tooltip}>
            <p>{errorMessage}</p>
          </div>
        ) : null}
        <InputField
          className={`${classes.input_field} ${
            isError ? classes.input_error : null
          }`}
          type="email"
          name="email"
          placeholder="E-Mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={classes.password}>
        <InputField
          className={`${classes.input_field} ${
            isError ? classes.input_error : null
          }`}
          type="Password"
          name="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className={classes.button_container}>
        <ButtonBig type="submit">login</ButtonBig>
      </div>
    </form>
  );
};

export default LoginForm;
