import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
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
      <button>
        <Link to="/movie">movie Page</Link>
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  button {
    text-transform: capitalize;
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #42bfdd;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #2a98b9;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
export default Home;
