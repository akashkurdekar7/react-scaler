import React from "react";
import Child from "./Child";

const Parent = () => {
  const animals = [
    { name: "cat", type: "ass" },
    { name: "dog", type: "ass" },
    { name: "dog", type: "ass" },
  ];
  const details = [
    {
      name: "akash",
      age: 26,
    },
    {
      name: "saleem",
      age: 28,
    },
    {
      name: "nawaz",
      age: 18,
    },
  ];
  return (
    <div>
      <h1>parent</h1>
      <div className="child">
        {details.map((data, index) => (
          <Child key={index} name={data.name} age={data.age} />
        ))}
      </div>
      <div className="animal">
        {animals.map((data, index) => (
          <ul key={index}>
            <li>{data.name}</li>
            <li>{data.type}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Parent;
