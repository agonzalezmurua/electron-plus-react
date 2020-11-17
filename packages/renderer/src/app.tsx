import '@assets/tailwind.css';

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@globals/styles";
import { Default as DefaultTheme } from "@globals/theme";

import Home from "@pages/home";

const root = document.getElementById("root");

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <Route path="/" exact component={Home} />
      </HashRouter>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, root);
