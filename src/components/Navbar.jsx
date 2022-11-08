import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h2 className="nav-title">Cars showcase</h2>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/cars">Cars</Link>
        </li>
      </ul>
    </div>
  );
}
