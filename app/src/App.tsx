import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { GlobalStyles } from "twin.macro";

import AppGlobalStyles from "@globals/AppGlobalStyle";

import HomePage from "@pages/Home";
import SideBar from "@components/organisms/SideBar";

const App: React.FunctionComponent = () => {
  return (
    <div tw="bg-gray-500 h-screen">
      <GlobalStyles />
      <AppGlobalStyles />
      <SideBar>
        <HashRouter>
          <Route path="/" exact component={HomePage} />
        </HashRouter>
      </SideBar>
    </div>
  );
};

export default App;
