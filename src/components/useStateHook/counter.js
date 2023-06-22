import { useState } from "react";

function Counter() {
  const [count, setterFunction] = useState(0);

  const click = () => {
    if (count < 10) {
      setterFunction(count + 1);
    }
    if (count === 10) {
      setterFunction(0);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setterFunction(count - 1);
    }
  };
  const reset = () => {
    setterFunction(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={click}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
