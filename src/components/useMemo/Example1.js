import React, { useState, useMemo, useCallback } from "react";

export const Example01 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const complexCalculation = useCallback(() => {
    for (let i = 0; i < 10000000000; i++) {}
    return counter1 * 2;
  }, [counter1]);

//   const complexCalculation = () => {
//     for (let i = 0; i < 10000000000; i++) {}
//     return counter1 * 2;
//   }
  

  return (
    <div>
      <div>
        <h1>counter 1 : {counter1}</h1>
        <button onClick={() => setCounter1(counter1 + 5)}>counter 1 +</button>
        <p>{complexCalculation()}</p>
      </div>
      <div>
        <h1>counter 2 : {counter2}</h1>
        <button onClick={() => setCounter2(counter2 + 5)}>counter 2 +</button>
      </div>
    </div>
  );
};
