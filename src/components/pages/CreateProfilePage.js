import React from "react";
import { useNavigate } from "react-router-dom";

const CreateProfilePage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      Create Profile
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Already have an account?
      </button>
    </div>
  );
};

export default CreateProfilePage;
