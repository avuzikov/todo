import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";

const MainNavigation = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              To Do
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/change-password"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Change Password
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={(navData) => (navData.isActive ? classes.active : "")}
              onClick={() => {
                dispatch(authActions.logout());
              }}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
