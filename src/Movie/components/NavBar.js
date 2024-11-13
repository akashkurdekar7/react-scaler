import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <img src="path/to/logo.png" alt="Logo" />
          </li>
          <li>
            <Link to="/movie">Home</Link>
          </li>
          <li>
            <Link to="/movie/watchlist">WatchList</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 4rem;
  /* background-color: grey; */
  border: 1px solid black;

  nav {
    height: 100%;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      gap: 3rem;
      list-style: none;

      li {
        font-size: 1rem;
      }

      img {
        width: 40px;
        height: auto;
      }

      a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.5s linear;

        &:hover {
          color: blue;
        }
      }
    }
  }
`;

export default NavBar;
