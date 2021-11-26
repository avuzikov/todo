import Button from "../UI/Button";
import classes from "./ChangePasswordForm.module.css";

const ChangePasswordForm = (props) => {
  return (
    <form>
      <div className={classes["form-control"]}>
        <label htmlFor="oldPassword">Old password</label>
        <input type="password" id="oldPassword"></input>
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="newPassword1">New password</label>
        <input type="password" id="newPassword1"></input>
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="newPassword2">Repeat new password</label>
        <input type="password" id="newPassword2"></input>
      </div>
      <div className={classes["form-actions"]}>
        <Button>Change</Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
