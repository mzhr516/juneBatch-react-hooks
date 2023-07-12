import React from "react";

export const Model = ({ setIsOpen }) => {
  return (
    <div className="model">
      <h1>custom model</h1>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        close
      </button>
    </div>
  );
};
