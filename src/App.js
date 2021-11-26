import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ChangePasswordPage from "./components/pages/ChangePasswordPage";
import ToDoListPage from "./components/pages/ToDoListPage";
import Layout from "./components/layout/Layout";
import LoginPage from "./components/pages/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import CreateProfilePage from "./components/pages/CreateProfilePage";

function App() {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout(/*x*/)); // {type: SOME_UNIQUE_IDENTIFIER, payload: x}
  };
  const loggedIn = useSelector((state) => {
    return state.auth.loggedIn;
  });
  return (
    <React.Fragment>
      {!loggedIn && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/new" element={<CreateProfilePage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      {loggedIn && (
        <Layout>
          <Routes>
            <Route path="/" element={<ToDoListPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      )}
      <button
        style={{ margin: "1rem" }}
        onClick={loggedIn ? logoutHandler : loginHandler}
      >
        Change Login
      </button>
    </React.Fragment>
  );
}

export default App;
