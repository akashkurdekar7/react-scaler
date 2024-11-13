import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  width: 100vw;
  height: auto;
`;

export default Layout;
