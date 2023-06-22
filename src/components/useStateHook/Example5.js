import React, { useState } from "react";

export const Example5 = () => {
  const user1 = { name: "john", age: 25, location: "delhi" };
  const user2 = { name: "mike", age: 30, location: "mumbai" };
  const [userDetails, setUserDetails] = useState(user1);
  const handleClick = () => {
    if (userDetails.name === "john") {
      setUserDetails(user2);
    } else {
      setUserDetails(user1);
    }
  };
  return (
    <div>
      <p>
        my name is {userDetails.name} and my age is {userDetails.age}, iam
        currently leaves in {userDetails.location} city
      </p>
      <button onClick={handleClick}>next</button>
    </div>
  );
};
