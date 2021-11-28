import { createSlice } from "@reduxjs/toolkit";

const initialTokenState = {
  token: "AIzaSyCGYBAVJLQzTA3aCmxtFfPY7LBHTBqKGJM",
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
