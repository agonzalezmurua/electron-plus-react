import React from "react";
import { HashRouter, Route } from "react-router-dom";

import {GlobalStyles} from "twin.macro";
import HomePage from "@pages/Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Route path="/" exact component={HomePage} />
      </HashRouter>
    </>
  );
};

export default App;