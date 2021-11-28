import { useState } from "react";
import { useSelector } from "react-redux";

const useAuth = (performedAction) => {
  const token = useSelector((state) => {
    return state.token;
  });

  const [isLoading, setIsLoading] = useState(false);
  let url = "";
  if (performedAction === "login") {
    url = `${token.loginUrl}${token.token}`;
  }
  if (performedAction === "signup") {
    url = `${token.signUpUrl}${token.token}`;
  }

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPassword1,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    setIsLoading(false);
    if (res.ok) {
      setRegistered(true);
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } else {
      return res.json().then((data) => {
        setFailedToRegistered(true);
        if (data && data.error && data.error.message) {
          if (data.error.message === "EMAIL_EXISTS") {
            setEmailExists(true);
          } else {
            setErrorMessage(data.error.message);
          }
        }
      });
    }
  });

  return { isLoading: isLoading };
};

export default useAuth;
