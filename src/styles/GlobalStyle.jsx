import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 20px;
    letter-spacing: -0.5px;
    position: absolute;
    left: 50%;
    margin-left: -187.5px;
  }

  a {
    text-decoration: none;
  }

  a:active, a:visited {
    color: inherit;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
  }
`;

export default GlobalStyles;
