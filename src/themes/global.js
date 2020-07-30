import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #50345B;
    /* color: #3F7E79; */
    color: #EDB848;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace
  }
  
  h3 {
    color: #EDB848;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    text-transform: capitalize;
    margin: 0;
  }

  
  h4 {
    color: #EDB848;
    font-weight: bold;
    font-size: 1.35rem;
    line-height: 35px;
    text-transform: capitalize;
    margin: 0;
  }
  
  p {
    font-size: 0.85rem;
    line-height: 35px;
    color: #EDB848;
    margin: 0;
  }

  `;
