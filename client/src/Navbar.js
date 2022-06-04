import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <label htmlFor="nav-closed">&#9776;</label>
      <input type="checkbox" id="nav-closed" name="nav-closed" />
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/activities">Activities</Link>
      </div>
    </nav>
  );
};

export default Navbar;
