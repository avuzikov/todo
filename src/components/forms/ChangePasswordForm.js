import { useState } from "react";
import { useNavigate } from "react-router";
import validatePassword from "../functions/validationFunctions/validatePassword";
import useInput from "../hooks/use-input";
import Button from "../UI/Button";
import classes from "./ChangePasswordForm.module.css";

const ChangePasswordForm = (props) => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    value: enteredOldPassword,
    isValid: oldPasswordIsValid,
    hasError: oldPasswordHasError,
    valueChangeHandler: oldPasswordChangeHandler,
    inputBlurHandler: oldPasswordBlurHandler,
    reset: resetOldPassword,
  } = useInput(validatePassword);

  const {
    value: enteredPassword1,
    isValid: password1IsValid,
    hasError: password1HasError,
    valueChangeHandler: password1ChangeHandler,
    inputBlurHandler: password1BlurHandler,
    reset: resetPassword1,
  } = useInput(validatePassword);

  const {
    value: enteredPassword2,
    isValid: password2IsValid,
    hasError: password2HasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    reset: resetPassword2,
  } = useInput(validatePassword);

  let formIsValid = false;

  if (
    password1IsValid &&
    password2IsValid &&
    enteredPassword1 === enteredPassword2 &&
    oldPasswordIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredOldPassword); //will be submission logic
    console.log(enteredPassword1);

    resetOldPassword();
    resetPassword1();
    resetPassword2();
    setFormSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const oldPasswordInputClasses = oldPasswordHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  const password1InputClasses = password1HasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  const password2InputClasses = password2HasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={oldPasswordInputClasses}>
        <label htmlFor="oldPassword">Old password</label>
        <input
          type="password"
          id="oldPassword"
          value={enteredOldPassword}
          onChange={oldPasswordChangeHandler}
          onBlur={oldPasswordBlurHandler}
        />
        {oldPasswordHasError && (
          <p className={classes["error-text"]}>
            Please type valid old password
          </p>
        )}
      </div>
      <div className={password1InputClasses}>
        <label htmlFor="newPassword1">New password</label>
        <input
          type="password"
          id="newPassword1"
          value={enteredPassword1}
          onChange={password1ChangeHandler}
          onBlur={password1BlurHandler}
        />
        {password1HasError && (
          <p className={classes["error-text"]}>
            Please insert valid new password
          </p>
        )}
      </div>
      <div className={password2InputClasses}>
        <label htmlFor="newPassword2">Repeat new password</label>
        <input
          type="password"
          id="newPassword2"
          value={enteredPassword2}
          onChange={password2ChangeHandler}
          onBlur={password2BlurHandler}
        />
        {(password2HasError || enteredPassword1 !== enteredPassword2) && (
          <p className={classes["error-text"]}>
            Password must be valid and equal to the password in the second field
          </p>
        )}
      </div>
      <div className={classes["form-actions"]}>
        <Button>Change</Button>
      </div>
      {formSubmitted && <p>Form successfully submitted</p>}
    </form>
  );
};

export default ChangePasswordForm;
