import React, { useState } from "react";

export const Example7 = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    // if (isShow ) {
    //   setIsShow(false);
    // } else {
    //   setIsShow(true);
    // }

    setIsShow((prev) => (prev ? false : true));
  };

  return (
    <>
      <div>
        {isShow && (
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

        <button onClick={handleClick}>{isShow ? "hide" : "show"}</button>
      </div>
    </>
  );
};
