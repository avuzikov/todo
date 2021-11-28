import { createSlice } from "@reduxjs/toolkit";

const initialAuthentificationState = {
  loggedIn: false,
  displayName: "",
  email: "",
  expiresIn: "",
  idToken: "",
  kind: "",
  localId: "",
  refreshToken: "",
  registered: false,
};

const authSlice = createSlice({
  name: "authentification",
  initialState: initialAuthentificationState,
  reducers: {
    login(state, action) { //expect response prop with parameters specified above
      /*state.displayName = action.response.displayName;
      state.email = action.response.email;
      state.expiresIn = action.response.expiresIn;
      state.idToken = action.response.idToken;
      state.kind = action.response.kind;
      state.localId = action.response.localId;
      state.refreshToken = action.response.refreshToken;
      state.registered = action.response.registered;
      state.loggedIn = action.response.loggedIn;*/
      console.log("Logged in");
    },
    logout(state, action) {
      state.loggedIn = false;
      console.log("Logged out");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

//response for login:
//idToken	string	A Firebase Auth ID token for the authenticated user.
//email	string	The email for the authenticated user.
//refreshToken	string	A Firebase Auth refresh token for the authenticated user.
//expiresIn	string	The number of seconds in which the ID token expires.
//localId	string	The uid of the authenticated user.
//registered	boolean	Whether the email is for an existing account.
