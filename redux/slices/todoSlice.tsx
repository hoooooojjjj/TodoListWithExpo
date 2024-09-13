import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoAction {
  id: number;
  text: string;
  status: "done" | "todo";
}

type Todo = {
  currentId: number;
  todos: {
    id: number;
    text: string;
    status: "done" | "todo";
  }[];
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 0,
    todos: [],
  } as Todo,
  reducers: {
    addTodo: (state: Todo, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        status: "todo",
      });
    },
    updateTodo: (state: Todo, action: PayloadAction<TodoAction>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            id: action.payload.id,
            text: action.payload.text.trim(),
            status:
              action.payload.status === "done" ? "todo" : action.payload.status,
          };
        }
        return todo;
      });
    },
    deleteTodo: (state: Todo, action: PayloadAction<TodoAction>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
