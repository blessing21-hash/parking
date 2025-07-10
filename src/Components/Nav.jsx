


import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">BlessyPark</div>
      <ul className="nav-links">
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/auth" className="login-btn">Sign Up</Link>
        </li>
        <li>
          
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
