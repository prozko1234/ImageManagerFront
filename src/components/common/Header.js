import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-container">
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

export default Header;
