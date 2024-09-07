import React, { useEffect, useState } from "react";
import "./App.css";
import store from "./reducer/index";
import TodoApp from "./Todo";

function App() {
  const [state, setState] = useState<number>(store.getState().counter);

  useEffect(() => {
    let prevState = store.getState().counter;

    store.subscribe(() => {
      if (prevState !== store.getState().counter) {
        setState(store.getState().counter);
      }
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => store.dispatch({ type: "INCREASE" })}>+</button>
      <p>{state}</p>
      <button onClick={() => store.dispatch({ type: "DECREASE" })}>-</button>
      <TodoApp />
    </div>
  );
}

export default App;
