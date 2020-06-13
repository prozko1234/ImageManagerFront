import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Login from "./login/Login";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
