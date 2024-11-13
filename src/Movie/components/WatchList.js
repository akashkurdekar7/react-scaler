import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const WatchList = ({ wishlist, setWishlist, removeFromWishlist }) => {
  let [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleAscending = () => {
    let sortAsc = wishlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWishlist([...sortAsc]);
  };
  const handleDescending = () => {
    let sortDesc = wishlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWishlist([...sortDesc]);
  };

  return (
    <Wrapper>
      <div className="genre">
        <div className="genreBtn btn">All Movies</div>
        <div className="genreBtn btn">Action</div>
      </div>

      <div className="search">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          name=""
          placeholder="Search for Movies"
          id=""
        />
      </div>

      <div className="moviesList">
        <table border={1} rules="all">
          <thead>
            <tr>
              <th>Poster</th>
              <th>Name</th>
              <th>
                <div className="ratingArrow">
                  <FaArrowUp className="arrow" onClick={handleAscending} />
                  <div>Rating</div>
                  <FaArrowDown className="arrow" onClick={handleDescending} />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`}
                        alt=""
                      />
                    </td>
                    <td>{movieObj.original_title}</td>
                    <td>{Math.floor(movieObj.vote_average)}</td>
                    <td>{movieObj.popularity}</td>
                    <td>Action</td>
                    <td>
                      <button onClick={() => removeFromWishlist(movieObj)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  .genre {
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    margin: 2rem 0;
    .genreBtn {
      background-color: grey;
      padding: 0.8rem;
      border-radius: 8px;
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
    }
    .btn:active {
      background-color: blue;
    }
  }
  .search {
    text-align: center;
    input {
      padding: 0.8rem;
      outline: none;
      background-color: rgba(0, 0, 0, 0.3);
      border: none;
      border-radius: 5px;
      color: black;
      margin: 0 0 2rem 0;
      font-size: 1rem;
    }
    input::placeholder {
      color: black;
    }
  }
  .moviesList {
    table {
      width: 100%;
    }
    thead {
      tr th {
        text-transform: uppercase;
        color: white;
        background-color: green;
        text-align: center;
        padding: 5px;
      }
      .ratingArrow {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: green;
        gap: 0.8rem;
      }
      .arrow {
        cursor: pointer;
      }
    }
    tbody {
      tr {
        text-align: center;
        img {
          width: 150px;
          height: auto;
          margin: 10px;
          border-radius: 8px;
        }
        button {
          background-color: red;
          padding: 0.5rem;
          border: none;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
`;

export default WatchList;
