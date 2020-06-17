import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Login from "./login/Login";
import { connect } from "react-redux";

function App({ user, error }) {
  return (
    <section className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { user: state.accountReducer.user, error: state.accountReducer.error };
};

export default connect(mapStateToProps, null)(App);
