import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies.js";
import WatchList from "./components/WatchList.js";
import Layout from "./components/Layout.js";
import Banner from "./components/Banner.js";

const MovieHome = () => {
  const [wishlist, setWishlist] = useState([]);

  let handleAddToWishlist = (movieObj) => {
    let newWishlist = [...wishlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWishlist));
    setWishlist(newWishlist);
    console.log(newWishlist);
    console.log("tapped");
  };

  let removeFromWishlist = (movieObj) => {
    let filteredWishlist = wishlist.filter((movie) => {
      return movieObj.id !== movie.id;
    });
    setWishlist(filteredWishlist);
    console.log(filteredWishlist);
    console.log("removed");
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      setWishlist(JSON.parse(moviesFromLocalStorage));
    }
  }, []);
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                removeFromWishlist={removeFromWishlist}
                handleAddToWishlist={handleAddToWishlist}
                wishlist={wishlist}
              />
            </>
          }
        />
        <Route
          path="watchlist"
          element={
            <WatchList
              wishlist={wishlist}
              setWishlist={setWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
      </Routes>
    </Layout>
  );
};

export default MovieHome;
