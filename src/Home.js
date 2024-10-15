import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/parent">Parent</Link>
      </button>
      <button>
        <Link to="/seller">Seller</Link>
      </button>
      <button>
        <Link to="/data">data</Link>
      </button>
      <button>
        <Link to="/todolist">to-do list</Link>
      </button>
    </div>
  );
};

export default Home;
