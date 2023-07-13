import React, { useEffect, useRef, useState } from "react";

export const Example002 = (props) => {
  const [value, setValue] = useState("");
//   const [prevValue,setPrevValue]=useState("")
  const prevValue = useRef("");
  useEffect(() => {
    prevValue.current = value;
    // setPrevValue(value)
  },[value]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <h1>current value: {value}</h1>
      <h1>previous value:{prevValue.current}</h1>
    </div>
  );
};
