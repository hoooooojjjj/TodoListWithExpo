import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  todo: string;
};

export const todoReducer = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state: Todo[], action: PayloadAction<Todo>) => {
      state.push({
        id: action.payload.id,
        todo: action.payload.todo,
      });
    },
  },
});

export const { addTodo } = todoReducer.actions;
