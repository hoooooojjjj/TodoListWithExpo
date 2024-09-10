import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoAction {
  text: string;
  state: "done" | "todo";
}

type Todo = {
  currentId: number;
  todos: {
    id: number;
    text: string;
    state: "done" | "todo";
  }[];
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 0,
    todos: [],
  },
  reducers: {
    addTodo: (state: Todo, action: PayloadAction<TodoAction>) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.text.trim(),
        state: action.payload.state,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
