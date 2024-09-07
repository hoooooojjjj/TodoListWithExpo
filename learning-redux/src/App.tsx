import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <button onClick={increase}>+</button>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
