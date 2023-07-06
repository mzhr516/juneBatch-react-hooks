import React, { useEffect, useState } from "react";

export const Example02 = () => {
  const [count, setCount] = useState(0);
  const [reRenderCount, setReRenderCount] = useState(0);

  useEffect(() => {
    setReRenderCount(reRenderCount + 1);
  }, [count]);

  useEffect(() => {
    document.title = `value of counter:${count}`;
  }, [count]);

  const minus = () => {
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={plus}>+</button>
      {count}
      <button onClick={minus}>-</button>
      <h1>count of re-render:{reRenderCount}</h1>
    </div>
  );
};
