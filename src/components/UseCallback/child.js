import React, { memo } from "react";

const ChildComponent = ({ todos, addTodos }) => {
  console.log("child rendered");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodos}>Add Todo</button>
    </div>
  );
};

export default memo(ChildComponent);
