import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
