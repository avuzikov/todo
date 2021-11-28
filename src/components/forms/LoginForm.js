import classes from "./LoginForm.module.css";
import Button from "../UI/Button";
import validateEmail from "../functions/validationFunctions/validateEmail";
import validatePassword from "../functions/validationFunctions/validatePassword";
import useInput from "../hooks/use-input";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useState } from "react";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(validatePassword);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const fromSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    //console.log(enteredEmail); //will be submission logic
    //console.log(enteredPassword);
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGYBAVJLQzTA3aCmxtFfPY7LBHTBqKGJM",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json(); //add user data to store
        } else {
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              setErrorMessage(data.error.message);
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    resetEmail();
    resetPassword();

    setLoggedIn(true);
    setTimeout(() => {
      dispatch(authActions.login());
      navigate("/");
    }, 500);
  };

  const emailInputClasses = emailHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;
  const passwordInputClasses = passwordHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  return (
    <form onSubmit={fromSubmissionHandler}>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className={classes["error-text"]}>
            Please insert valid email address
          </p>
        )}
      </div>
      <div className={passwordInputClasses}>
        <label htmlFor="password">Your password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p className={classes["error-text"]}>
            Please insert valid password (at least 8 characters)
          </p>
        )}
      </div>
      <div className={classes["form-actions"]}>
        <Button>Submit</Button>
      </div>
      {loggedIn && <p>Logged in successfully!</p>}
      {isLoading && <p>Is loading...</p>}
      {errorMessage !== "" && <p>{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;
