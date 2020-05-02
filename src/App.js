import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes/theme";
import { GlobalStyle } from "./themes/global";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";
import "../src/styles/antd.css";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
