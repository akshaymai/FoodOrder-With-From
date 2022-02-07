import { useRef } from "react";
import useInput from "../../Hooks/userInput";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    value: enterName,
    hasError: hasNameError,
    valueChangeHandler: nameChangeHandler,
    inputBlerHandler: nameBlerHandler,
    isValid: enterNameIsvalid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterCity,
    hasError: hasCityError,
    valueChangeHandler: cityChangeHandler,
    inputBlerHandler: cityBlerHandler,
    isValid: enterCityIsvalid,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enterPosatalcode,
    hasError: hasPostalcodeError,
    valueChangeHandler: postalcodeChangeHandler,
    inputBlerHandler: postalcodeBlerHandler,
    isValid: enterpostalcodeIsvalid,
    reset: resetpostalcode,
  } = useInput((value) => value.length === 5);
  const {
    value: Enterstreet,
    hasError: hasstreetError,
    valueChangeHandler: streetChangeHandler,
    inputBlerHandler: streetBlerHandler,
    isValid: enterstreetIsvalid,
    reset: resetstreet,
  } = useInput((value) => value.trim() !== "");

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  let formIsvlaid = false;
  if (
    enterNameIsvalid &&
    enterstreetIsvalid &&
    enterpostalcodeIsvalid &&
    enterCityIsvalid
  ) {
    formIsvlaid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (
      !enterNameIsvalid &&
      !enterstreetIsvalid &&
      !enterpostalcodeIsvalid &&
      !enterCityIsvalid
    ) {
      return;
    }

    props.onSubmitHAndle({
      name: enterName,
      street: Enterstreet,
      postalcode: enterPosatalcode,
      city: enterCity,
    });

    resetName();
    resetstreet();
    resetpostalcode();
    resetCity();
  };

  const checkclassNameInput = hasNameError
    ? `${classes.control} invalid`
    : `${classes.control}`;
  const checkclassStreetInput = hasstreetError
    ? `${classes.control} invalid`
    : `${classes.control}`;
  const checkclassNamePostalcodeInput = hasPostalcodeError
    ? `${classes.control} invalid`
    : `${classes.control}`;
  const checkclassNameCity = hasCityError
    ? `${classes.control} invalid`
    : `${classes.control}`;


 
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={checkclassNameInput}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          value={enterName}
          onChange={nameChangeHandler}
          onBlur={nameBlerHandler}
          className={hasNameError?`${classes.invalidinput}`:''}
        />
      </div>
      {hasNameError && <p className={classes.errortext}>Enter name</p>}
      <div className={checkclassStreetInput}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          ref={streetRef}
          value={Enterstreet}
          onChange={streetChangeHandler}
          onBlur={streetBlerHandler}
          className={hasstreetError?`${classes.invalidinput}`:''}
        />
      </div>
      {hasstreetError && <p className={classes.errortext}>Enter Street</p>}
      <div className={checkclassNamePostalcodeInput}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          ref={postalRef}
          value={enterPosatalcode}
          onChange={postalcodeChangeHandler}
          onBlur={postalcodeBlerHandler}
          className={hasPostalcodeError?`${classes.invalidinput}`:''}
        />
      </div>
      {hasPostalcodeError && <p  className={classes.errortext}>Enter pincode</p>}
      <div className={checkclassNameCity}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          ref={cityRef}
          value={enterCity}
          onChange={cityChangeHandler}
          onBlur={cityBlerHandler}
        />
      </div>
      {hasCityError && <p  className={classes.errortext}>Enter city</p>}
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsvlaid}  >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
