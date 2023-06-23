import React, { useState } from "react";

export const Example7 = () => {
  const [isshow, setIsShow] = useState(false);
  const handleClick = () => {
    if (isshow === true) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

  return (
    <>
      <div>
        {isshow && (
          <div
            style={{
              width: "150px",
              height: "100px",
              border: "1px solid black",
              marginLeft: "700px",
              marginBottom: "5px",
              backgroundColor: "red",
            }}
          />
        )}

        <button onClick={handleClick}>{isshow ? "hide" : "show"}</button>
      </div>
    </>
  );
};
