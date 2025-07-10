









import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth');
  };

  return (
    <nav className="navbar">
      <div className="logo">BlessyPark</div>

      <div className="nav-right">
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
          <li><Link to="/parkingoptions">Parking Options</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/carwash">Car Wash</Link></li>
        </ul>

        {user && (
          <div className="avatar-section" ref={dropdownRef}>
            <img
              src={user.avatar}
              alt="User Avatar"
              className="avatar-img"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="avatar-dropdown">
                <div className="dropdown-header">
                  <strong>{user.name}</strong>
                </div>
                <p onClick={() => handleNavigate('/dashboard/user/profile')}>Profile</p>
                <p onClick={() => handleNavigate('/dashboard/user/settings')}>Settings</p>
                <p onClick={() => handleNavigate('/dashboard/user/bookings')}>My Bookings</p>
                <p onClick={() => navigate('/dashboard/admin/overview')}>Admin Dashboard</p>

                <hr />
                <p className="logout" onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
