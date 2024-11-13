import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleAddToWishlist, removeFromWishlist, wishlist }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=fa3e905673c58cfdcb2ea3d737eb2b7b&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <MoviesComponent>
      <h1 className="heading">Trending Movies</h1>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieObj={movie}
            poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            original_title={movie.original_title}
            handleAddToWishlist={handleAddToWishlist}
            removeFromWishlist={removeFromWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
      <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev} />
    </MoviesComponent>
  );
};
const MoviesComponent = styled.div`
  .heading {
    text-align: center;
    font-size: 1.6rem;
    color: skyblue;
    margin: 2rem;
  }
  .movies {
    margin: 2rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default Movies;
