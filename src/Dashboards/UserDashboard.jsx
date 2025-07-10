


import React from 'react';
import './Dashboard.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Profile from '../Dashboards/Profile';
import Settings from '../Dashboards/Settings';
import MyBookings from './MyBookings';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>

      <nav className="dashboard-nav">
        <NavLink to="profile" className={({ isActive }) => isActive ? 'active-link' : ''}>Profile</NavLink>
        <NavLink to="settings" className={({ isActive }) => isActive ? 'active-link' : ''}>Settings</NavLink>
        <NavLink to="bookings" className={({ isActive }) => isActive ? 'active-link' : ''}>My Bookings</NavLink>
      </nav>

      <div className="dashboard-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="*" element={<Profile />} /> {/* default route */}
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;

