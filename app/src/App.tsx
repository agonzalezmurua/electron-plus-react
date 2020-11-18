import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { GlobalStyles } from "twin.macro";
import AppGlobalStyles from "@globals/AppGlobalStyle";

import HomePage from "@pages/Home";

const App: React.FunctionComponent = () => {
  return (
    <div tw="bg-gray-200 h-screen">
      <GlobalStyles />
      <AppGlobalStyles />
      <HashRouter>
        <Route path="/" exact component={HomePage} />
      </HashRouter>
    </div>
  );
};

export default App;
