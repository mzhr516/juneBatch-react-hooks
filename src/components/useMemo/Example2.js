import React, { useState, useMemo } from "react";

export const Example02 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, "todo"]);
  };

  //   const calculation = expensiveCalculation(count);

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  
  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
