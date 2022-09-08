import * as React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div>
      <div style={{ marginBottom: "10px" }}> Current count: {count}</div>
      <button style={{ marginRight: "10px" }} onClick={decrement}>
        Decrement
      </button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
