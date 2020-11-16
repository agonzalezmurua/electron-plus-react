import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./globals/styles";
import { HashRouter, Route } from "react-router-dom";

import Home from "./pages/home";

const root = document.getElementById("root");

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Route path="/" exact component={Home} />
      </HashRouter>
    </>
  );
};

ReactDOM.render(<App />, root);
