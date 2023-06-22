import React from "react";
import { useState } from "react";

export const Example4 = () => {
  const [details, setDetails] = useState({ name: "tekisky", address: "" });
  const click = () => {
    setDetails({ name: "tekisky pvt ltd", address: "work shop corner nanded" });
  };
  return (
    <div>
      <p>{details.name}</p>
      <p>{details.address}</p>
      <button onClick={click}>get full name / address</button>
    </div>
  );
};
