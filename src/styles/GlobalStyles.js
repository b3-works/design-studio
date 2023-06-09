import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: ${(props) => props.theme.color.black};
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  h1 {
    font-family: 'Bebas Neue', cursive;
  }

  ol, ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
