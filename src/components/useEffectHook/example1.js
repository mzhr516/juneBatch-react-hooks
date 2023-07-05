import React, { useEffect, useState } from "react";
import { Child } from "./child";

export const Example1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("inside useEffect");
  }, []);

  useEffect(() => {
    console.log("component update");
  }, [count]);
//   console.log("outside useEffect");

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <Child/>
    </div>
  );
};
