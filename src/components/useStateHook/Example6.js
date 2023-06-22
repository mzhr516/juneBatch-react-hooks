import React, { useState } from "react";

export const Example6 = (props) => {
  const [rectangle, setRectangle] = useState([]);
  const handleClick = () => {
    setRectangle([...rectangle, ""]);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        {rectangle.map(() => {
          return (
            <div
              style={{
                width: "150px",
                height: "100px",
                border: "1px solid black",
                marginLeft: "5px",
                marginBottom: "5px",
                backgroundColor: "red",
              }}
            ></div>
          );
        })}
      </div>

      <button onClick={handleClick}>get rectangle</button>
    </div>
  );
};
