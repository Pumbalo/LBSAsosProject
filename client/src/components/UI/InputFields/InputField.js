import classes from "./InputField.module.css";

const InputField = (props) => {
  return (
    <div className={classes.container}>
      <input
        className={`${props.className} ${classes.input}`}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        pattern={props.pattern}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputField;
