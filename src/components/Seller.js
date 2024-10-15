import React from "react";
import Fruits from "./Fruits";

const Seller = () => {
  const fruits = [
    {
      name: "Apple",
      price: 400,
    },
    {
      name: "Banana",
      price: 800,
    },
    {
      name: "green apple",
      price: 700,
    },
    {
      name: "Strawberry",
      price: 300,
    },
    {
      name: "chiku",
      price: 200,
    },
  ];
  return (
    <div>
      {fruits.map((fruit, index) => (
        <Fruits key={index} name={fruit.name} price={fruit.price} />
      ))}
    </div>
  );
};

export default Seller;
