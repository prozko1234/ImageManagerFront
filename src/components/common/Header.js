import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header({ user, error }) {
  if (user.authStatus)
    return (
      <nav className="nav-container">
        <div className="user-thumbnail">
          <img src="" />
          {user.username}
        </div>
        <div className="nav-menu">
          <NavLink to="/" className="" exact>
            Home
          </NavLink>
          <NavLink to="/login" className="" exact>
            Login
          </NavLink>
          <NavLink to="/gallery" className="" exact>
            Gallery
          </NavLink>
        </div>
      </nav>
    );
  else
    return (
      <nav className="nav-container">
        <div className="user-thumbnail">
          <img src="" />
          {user.username}
        </div>
        <div className="nav-menu">
          <NavLink to="/" className="" exact>
            Home
          </NavLink>
          <NavLink to="/login" className="" exact>
            Login
          </NavLink>
        </div>
      </nav>
    );
}

const mapStateToProps = (state) => {
  return { user: state.accountReducer.user, error: state.accountReducer.error };
};

export default connect(mapStateToProps, null)(Header);
