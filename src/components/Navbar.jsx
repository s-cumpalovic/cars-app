import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/cars">Cars</Link>
        </li>
        <li className="nav-item">
          <Link to="/add">Add a car</Link>
        </li>
        <li className="nav-item">
          {token ? (
            <Link to="/logout">Logout</Link>
            ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
