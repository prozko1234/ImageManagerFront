import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
