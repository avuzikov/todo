import Button from "../UI/Button";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <form>
      <div className={classes["form-control"]}>
        <label htmlFor="email">Your email</label>
        <input type="email" name="email" />
        <label htmlFor="password1">New password</label>
        <input type="password" name="password1" />
        <label htmlFor="password2">Repeat password</label>
        <input type="password" name="password2" />
      </div>
      <div className={classes["form-actions"]}>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
