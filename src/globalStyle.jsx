import {createGlobalStyle} from "styled-components"; 
const GlobalStyle=createGlobalStyle`
  html,body{
    width: 100px;
    height: 100dvh;
    background-color: aqua;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    outline-width: 0;
  }
`
export default GlobalStyle;