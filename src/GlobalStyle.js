import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,li,ol,a{
    list-style: none;
    text-decoration: none;
  }
`;

export default GlobalStyle;
