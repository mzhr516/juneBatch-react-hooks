import React from "react";
import { useState } from "react";

export const Example2 = () => {
  const [text, setText] = useState("");
  const change = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={change} />
      <p>input value : {text}</p>
    </div>
  );
};
