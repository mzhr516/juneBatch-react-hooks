import React, { useRef } from "react";

export const Example001 = () => {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const paraRef = useRef(null);

  console.log(inputRef);

  const handleOnClick = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  
  const onClick = () => {
    h1Ref.current.style.fontSize = "50px";
    h1Ref.current.style.color = "red";
    h1Ref.current.style.backgroundColor = "black";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <h1 ref={h1Ref}>hello world</h1>
      <p ref={paraRef}></p>
      <button onClick={handleOnClick}>set focus</button>
      <button onClick={onClick}>increse font size</button>
    </div>
  );
};
