import React from "react";

const Fruits = ({ name, price }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{price < 500 ? `${price} cheap` : `${price} costlier`}</h1>
    </div>
  );
};

export default Fruits;
