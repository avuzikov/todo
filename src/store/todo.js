import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  tasks: [{ id: "1", value: "Example task", type: "other" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {}, //will need to add reducer for init, add element, remove element
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
