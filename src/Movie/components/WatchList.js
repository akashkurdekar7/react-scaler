import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const WatchList = ({ wishlist, setWishlist, removeFromWishlist }) => {
  let [search, setSearch] = useState("");
  let [genreList, setGenreList] = useState(["All Genres"]);
  let [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genreIds = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleAscending = () => {
    const sortedWishlist = [...wishlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWishlist(sortedWishlist);
  };

  const handleDescending = () => {
    const sortedWishlist = [...wishlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWishlist(sortedWishlist);
  };

  useEffect(() => {
    // Collect all unique genres from the movies in wishlist
    let tempGenres = new Set();
    wishlist.forEach((movieObj) => {
      movieObj.genre_ids.forEach((id) => {
        if (genreIds[id]) {
          tempGenres.add(genreIds[id]);
        }
      });
    });
    setGenreList(["All Genres", ...Array.from(tempGenres)]);
  }, [wishlist]);

  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Wrapper>
      <div className="genre">
        {genreList.map((genre, index) => {
          return (
            <div
              key={index}
              className={`genreBtn btn ${
                selectedGenre === genre ? "selected" : ""
              }`}
              onClick={() => handleGenreFilter(genre)}
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="search">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search for Movies"
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
                const matchesSearch = movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());

                const matchesGenre =
                  selectedGenre === "All Genres" ||
                  movieObj.genre_ids.some(
                    (id) => genreIds[id] === selectedGenre
                  );

                return matchesSearch && matchesGenre;
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id}>
                    <td>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`}
                        alt={movieObj.original_title}
                      />
                    </td>
                    <td>{movieObj.original_title}</td>
                    <td>{Math.floor(movieObj.vote_average)}</td>
                    <td>{movieObj.popularity}</td>
                    <td>
                      {movieObj.genre_ids.map((id) => genreIds[id]).join(", ")}
                    </td>
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
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .genreBtn.selected {
      background-color: blue;
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
