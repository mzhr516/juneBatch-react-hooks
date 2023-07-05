import React, { useEffect } from "react";

export const Child = (props) => {
  useEffect(() => {
    return ()=>{
        console.log("killing from dom")
    }
  }, []);
  return <div>Child</div>;
};
