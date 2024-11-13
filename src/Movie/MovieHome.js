import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies.js";
import WatchList from "./components/WatchList.js";
import Layout from "./components/Layout.js";
import Banner from "./components/Banner.js";
import Test from "./components/Test.js";

const MovieHome = () => {
  const [wishlist, setWishlist] = useState([]);

  let handleAddToWishlist = (movieObj) => {
    let newWishlist = [...wishlist, movieObj];
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
        <Route path="watchlist" element={<WatchList />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </Layout>
  );
};

export default MovieHome;
