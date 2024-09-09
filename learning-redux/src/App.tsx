import React from "react";
import "./App.css";
import { RootState } from "./reducer/rtkStore";
import TodoApp from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import RtkTodo from "./components/RtkTodo";
// import Post from "./components/Post";

function App() {
  // const [state, setState] = useState<number>(store.getState().counter);
  // const counter = useSelector((state: RootState) => state.counter);

  // const counterDispatch = useDispatch();

  // useEffect(() => {
  //   let prevState = store.getState().counter;

  //   store.subscribe(() => {
  //     if (prevState !== store.getState().counter) {
  //       setState(store.getState().counter);
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      {/* <button onClick={() => store.dispatch({ type: "INCREASE" })}>+</button>
      <p>{counter}</p>
      <button onClick={() => store.dispatch({ type: "DECREASE" })}>-</button> */}
      {/* <button onClick={() => counterDispatch({ type: "INCREASE" })}>+</button>
      <p>{counter}</p>
      <button onClick={() => counterDispatch({ type: "DECREASE" })}>-</button>
      <TodoApp />
      <Post /> */}
      <RtkTodo />
    </div>
  );
}

export default App;
