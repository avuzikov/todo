import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Logout from "../Logout";

const MainNavigation = () => {
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
            <Logout
              logout={() => {
                console.log("logged out");
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
