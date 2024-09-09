import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducer/rtkStore";
import { addTodo } from "../reducer/rtkReducer";

function RtkTodo() {
  const todo: {
    id: number;
    todo: string;
  }[] = useSelector((state: RootState) => state.todo);

  const TodoDispatch = useDispatch();

  const addTodos = () => {
    TodoDispatch(addTodo({ id: Date.now(), todo: "text" }));
  };
  return (
    <div>
      <button onClick={addTodos}>추가</button>
      {todo.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
}

export default RtkTodo;
