import classes from "./InputField_Password.module.css";
import Visibility from "../Icons/Visibility";
import Lock from "../Icons/Lock";

const InputFieldPassword = (props) => {
  const visibilityClickHandler = (event) => {
    // Change icon color
    const element = event.target;
    element.classList.toggle(`${classes.active}`);

    // Toggle text/password
    const input = document.getElementsByClassName(`${classes.input}`);
    const type =
      input[0].getAttribute("type") === "password" ? "text" : "password";
    input[0].setAttribute("type", type);
  };

  return (
    <div className={`${classes.container}`}>
      <Lock className={classes.lock} />
      <input
        className={`${classes.input} ${props.className}`}
        type="password"
        name="password"
        placeholder="Password"
        onChange={props.onChange}
      />
      <Visibility className={classes.icon} onClick={visibilityClickHandler} />
    </div>
  );
};

export default InputFieldPassword;
