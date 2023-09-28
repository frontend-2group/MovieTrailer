import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  // reset.css
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
  }
  button {
    border: none;
  }
`;

export default GlobalStyles;
