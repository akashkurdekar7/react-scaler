import React, { useState } from "react";

const HandleEvent = () => {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);
  const [name, setname] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState(null);

  function Increment() {
    setCount((prevCount) => prevCount + factor);
  }
  function Decrement() {
    setCount((prevCount) => prevCount - factor);
  }
  function factorIncrement() {
    setFactor((prevCount) => prevCount + 1);
  }
  function factorDecrement() {
    setFactor((prevCount) => prevCount - 1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const { fname, lname, email, password } = name;
      setData({ fname, lname, email, password });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Add</button>
        <button onClick={Decrement}>Remove</button>
      </div>
      <div>
        <h1>{factor}</h1>
        <button onClick={factorIncrement}>Add</button>
        <button onClick={factorDecrement}>Remove</button>
      </div> */}
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          width: "200px",
          padding: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={(e) => setname({ ...name, fname: e.target.value })}
          value={name.fname}
        />

        <input
          type="text"
          onChange={(e) => setname({ ...name, lname: e.target.value })}
          value={name.lname}
        />
        <input
          type="email"
          onChange={(e) => setname({ ...name, email: e.target.value })}
          value={name.email}
        />
        <input
          type="password"
          onChange={(e) => setname({ ...name, password: e.target.value })}
          value={name.password}
        />
        <button type="submit">submit</button>
      </form>
      {data && (
        <div className="details">
          <h1>{data.fname}</h1>
          <h1>{data.lname}</h1>
          <h1>{data.email}</h1>
          <h1>{data.password}</h1>
        </div>
      )}
    </div>
  );
};

export default HandleEvent;
