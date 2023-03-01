import classes from "./InputField_Email.module.css";
import User from "../Icons/User";

const InputFieldEmail = (props) => {
  return (
    <div className={`${classes.container}`}>
      <User className={classes.email} />
      <input
        className={`${classes.input} ${props.className}`}
        type="email"
        name="email"
        placeholder="Email"
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputFieldEmail;
