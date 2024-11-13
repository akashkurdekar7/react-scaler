import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ page, handleNext, handlePrev }) => {
  return (
    <Wrapper>
      <div className="prev font" onClick={handlePrev}>
        <FaArrowLeft />
      </div>
      <div className="number">{page}</div>
      <div className="next font" onClick={handleNext}>
        <FaArrowRight />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  .font {
    font-size: 2rem;
    cursor: pointer;
    display: flex;
  }
  .number {
    font-size: 2rem;
    cursor: pointer;
    font-weight: 600;
  }
`;
export default Pagination;
