import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
export default function Navbar() {
  const history = useHistory();

  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    await authService.logout();
    alert("You have logged out.");
    history.push("/cars");
  };

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
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}
