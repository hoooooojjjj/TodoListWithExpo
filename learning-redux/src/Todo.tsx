import React, { useEffect, useState } from "react";
import type { Todo } from "./type";
import store from "./reducer";

function TodoApp() {
  const [text, setText] = useState<string>("");

  const [todo, setTodo] = useState<Todo[]>(store.getState().todo);

  const addTodo = () => {
    store.dispatch({
      type: "ADD_TODO",
      data: {
        id: Date.now(),
        todo: text,
      },
    });

    setText("");
  };

  useEffect(() => {
    let prevState = store.getState().todo;
    store.subscribe(() => {
      if (prevState !== store.getState().todo) {
        setTodo(store.getState().todo);
      }
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button onClick={addTodo}>추가</button>
      {todo.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
}

export default TodoApp;
