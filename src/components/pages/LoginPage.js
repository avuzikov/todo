import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>Here will be login page</div>
      <button
        onClick={() => {
          navigate("/new");
        }}
      >
        Want to create a new account?
      </button>
    </React.Fragment>
  );
};

export default LoginPage;
