import React from "react";
import { Link } from "react-router-dom";

const NavBarAuth = (props) => {
  let authSection = null;

  if (props.checkLogin()) {
    authSection = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/dashboard">
            <button className="button login-button mr-1">Dashboard</button>
          </Link>
        </li>
        <li className="nav-item active mr-1">
          <Link to="/">
            <button className="button logout-button" onClick={props.onLogout}>
              Log Out
            </button>
          </Link>
        </li>
      </ul>
    );
  } else {
    authSection = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/login">
            <button className="button login-button mr-2">Login</button>
          </Link>
        </li>
        <li className="nav-item active mr-5">
          <a href="https://github.com/Imam-Abubakar/Quiz-Maestro" target="_blank" rel="noreferrer">
            <button className="button github-button">GitHub</button>
          </a>
        </li>
      </ul>
    );
  }

  return authSection;
};

export default NavBarAuth;
