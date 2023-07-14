import React, { useCallback, useState } from "react";
import ChildComponent from "./child";

export const ParentComponent = (props) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodos = useCallback(() => {
    setTodos([...todos, "Todo"]);
  },[todos]);

//   const addTodos=()=>{
//     setTodos([...todos, "Todo"]);
//   }

  return (
    <div>
      <ChildComponent todos={todos} addTodos={addTodos} />
      <div>
        <br />
        count: {count}{" "}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
