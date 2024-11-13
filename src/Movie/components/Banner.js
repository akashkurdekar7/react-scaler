import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <MovieBanner>
      <h1>Avengers</h1>
    </MovieBanner>
  );
};
const MovieBanner = styled.div`
  background: url("https://wallpapercave.com/wp/wp3533643.jpg") center no-repeat;
  background-size: cover;
  height: 500px;
  position: relative;
  h1 {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
    color: red;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }
`;
export default Banner;
