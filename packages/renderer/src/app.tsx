import React from "react";
import { HashRouter, Route } from "react-router-dom";

import {GlobalStyles} from "twin.macro";
import Home from "@pages/home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Route path="/" exact component={Home} />
      </HashRouter>
    </>
  );
};

export default App;