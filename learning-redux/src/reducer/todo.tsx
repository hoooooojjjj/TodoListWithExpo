import { Todo } from "../type";

enum TodoActionType {
  ADDTODO = "ADD_TODO",
  DELETETODO = "DELETE_TODO",
}

type TodoAction =
  | {
      type: TodoActionType.ADDTODO;
      data: { id: number; todo: string };
    }
  | {
      type: TodoActionType.DELETETODO;
      id: number;
    };

const todo = (
  state: Todo[] = [
    {
      id: 0,
      todo: "",
    },
  ],
  action: TodoAction
) => {
  switch (action.type) {
    case TodoActionType.ADDTODO: {
      return [...state, { todo: action.data.todo, id: action.data.id }];
    }
    case TodoActionType.DELETETODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
export default todo;
