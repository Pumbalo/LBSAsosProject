import classes from "./ShippingAndTax.module.css";

import Button from "../../UI/Buttons/Button";

const ShippingAndTax = (props) => {
  return (
    <div className={classes.input_container}>
      <label htmlFor="country">country *</label>
      <input
        type="text"
        name="country"
        placeholder="Enter Country..."
        className={classes.input_field}
      />

      <label htmlFor="country">state/province *</label>
      <input
        type="text"
        name="state"
        placeholder="Enter State/Province..."
        className={classes.input_field}
      />

      <label htmlFor="country">zip/postal code *</label>
      <input
        type="text"
        name="zip"
        placeholder="Enter ZIP/Postal Code"
        className={classes.input_field}
      />
      <div className={classes.btn_container}>
        <Button className={classes.btn} type="submit">
          calculate shipping
        </Button>
      </div>
    </div>
  );
};

export default ShippingAndTax;
