import React, { useEffect, useState } from "react";
import { Child } from "./child";

export const Example1 = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  const minus = () => {
    setCount(count - 1);
    // setCalculation(count * 2);
  };
  const plus = () => {
    setCount(count + 1);

    // setCalculation(count * 2);
  };
  return (
    <div>
      <button onClick={plus}>+</button>
      {count}
      <button onClick={minus}>-</button>
      <h1>calculation : {calculation}</h1>
    </div>
  );
};
