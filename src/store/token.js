import { createSlice } from "@reduxjs/toolkit";
import token from "./token_secret";

const initialTokenState = {
  token: token,
  loginUrl:
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
  signUpUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
};

const tokenSlice = createSlice({
  name: "token",
  initialState: initialTokenState,
  reducers: {},
});

export const tokenActions = tokenSlice.actions;

export default tokenSlice.reducer;
