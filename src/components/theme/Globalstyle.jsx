import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  width: 100vw;
  margin: 0;
  padding: 0;
}
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    text-decoration: none;
    color: rgba(100,100,100);
    &:hover {
      color: rgba(0,0,0);
    }
  }
`;

export default GlobalStyle;
