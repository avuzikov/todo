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
    login(state, action) {
      state.displayName = action.displayName;
      state.email = action.email;
      state.expiresIn = action.expiresIn;
      state.idToken = action.idToken;
      state.kind = action.kind;
      state.localId = action.localId;
      state.refreshToken = action.refreshToken;
      state.registered = action.registered;
      state.loggedIn = true;
      console.log("Logged In");
    },
    logout(state, action) {
      state.loggedIn = false;
      state.displayName = "";
      state.email = "";
      state.expiresIn = "";
      state.idToken = "";
      state.kind = "";
      state.localId = "";
      state.refreshToken = "";
      state.registered = false;
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
