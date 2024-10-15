import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  const Uri = "https://fakestoreapi.com/products";
  const fetchData = async () => {
    try {
      const res = await fetch(Uri);
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>hii</h2>
      <h1 onClick={fetchData}>click</h1>
      <div className="card">
        {data.map((d, index) => (
          <div className="card-inner" key={index}>
            <h1>{d.id}</h1>
            <h1>{d.title}</h1>
            <h1>{d.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
