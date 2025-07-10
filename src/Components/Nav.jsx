


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Components/Nav.css';

// function Nav() {
//   return (
//     <nav className="nav">
//       <div className="logo">BlessyPark</div>
//       <ul className="nav-links">
//         <li>
//           <Link to="/auth">Login</Link>
//         </li>
//         <li>
//           <Link to="/auth" className="login-btn">Sign Up</Link>
//         </li>
//         <li>
          
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">BlessyPark</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/auth" className="login-link" onClick={() => setMenuOpen(false)}>Login</Link></li>
        <li><Link to="/auth" className="signup-btn" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
