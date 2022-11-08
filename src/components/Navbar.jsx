import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/cars">Cars</Link>
        </li>
        <li className="nav-item">
          <Link to="/add">Add a car</Link>
        </li>
      </ul>
    </div>
  );
}
