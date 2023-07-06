import React, { useEffect } from "react";

export const Child = (props) => {
  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return <div>Child</div>;
};
