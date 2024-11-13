import React from "react";
import styled from "styled-components";

const MovieCard = ({
  movieObj,
  poster_path,
  original_title,
  handleAddToWishlist,
  removeFromWishlist,
  wishlist,
}) => {
  const doesContain = (movieObj) => {
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <Card style={{ backgroundImage: `url(${poster_path})` }}>
      {doesContain(movieObj) ? (
        <div className="emoji" onClick={() => removeFromWishlist(movieObj)}>
          &#10060;
        </div>
      ) : (
        <div className="emoji" onClick={() => handleAddToWishlist(movieObj)}>
          &#128525;
        </div>
      )}

      <h2 className="movieName">{original_title}</h2>
    </Card>
  );
};
const Card = styled.div`
  background: no-repeat center;
  background-size: cover;
  height: 300px;
  width: 200px;
  border-radius: 10px;
  position: relative;
  transition: transform 0.2s ease-in-out;
  opacity: 90%;

  &:hover {
    transform: scale(110%);
    cursor: pointer;
    opacity: 100%;
  }
  .emoji {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1.2rem;
    background-color: rgba(0, 0, 0, 0.8);
    transition: transform 0.3s ease-in-out;
    padding: 5px;
    border-radius: 10px;
    &:hover {
      /* animation: shake 0.5s ease-in-out infinite; */
      transform: scale(150%);
      cursor: pointer;
    }
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .movieName {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    transition: color 0.3s ease-in;
    &:hover {
      color: grey;
      cursor: pointer;
    }
  }
`;
export default MovieCard;
