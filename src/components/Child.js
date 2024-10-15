import React from "react";

const Child = ({ name, age }) => {
  return (
    <div>
      <h3>name: {name}</h3>
      <h3>age: {age}</h3>
    </div>
  );
};

export default Child;
