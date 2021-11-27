import { createSlice } from "@reduxjs/toolkit";

const initialAuthentificationState = { loggedIn: false };

const authSlice = createSlice({
  name: "authentification",
  initialState: initialAuthentificationState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
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
