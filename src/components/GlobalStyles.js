import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
