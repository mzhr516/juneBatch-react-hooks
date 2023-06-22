import React, { useState } from "react";

export const Example3 = () => {
  const [inputValue, setInputVale] = useState("");
  const [showValue, setShowValue] = useState("");
  const inputChange = (event) => {
    setInputVale(event.target.value);
  };
  const buttonClick = () => {
    setShowValue(inputValue);
  };
  return (
    <div>
      <input type="text" onChange={inputChange} />
      <button onClick={buttonClick}>show</button>
      <p>input value : {showValue}</p>
    </div>
  );
};
