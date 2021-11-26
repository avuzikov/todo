import classes from "./LoginForm.module.css";
import Button from "../UI/Button";

const LoginForm = (props) => {
  return (
    <form>
      <div className={classes["form-control"]}>
        <label htmlFor="email">Your email</label>
        <input type="email" name="email" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="email">Your password</label>
        <input type="password" name="password" />
      </div>
      <div className={classes["form-actions"]}>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default LoginForm;
