import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home/Home";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Login from "./login/Login";
import { connect } from "react-redux";
import { getUserAuth } from "../redux/actions/accountActions";
import Gallery from "./gallery/Gallery";

function App({ getUserAuth, user, error }) {
  if (localStorage.getItem("token") != null)
    useEffect(() => {
      getUserAuth(localStorage.getItem("token")).catch((err) => {
        console.log(err);
      });
    }, []);

  return (
    <section className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/gallery:slug" component={Gallery}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { user: state.accountReducer.user, error: state.accountReducer.error };
};

const mapDispatchToProps = { getUserAuth };

export default connect(mapStateToProps, mapDispatchToProps)(App);
