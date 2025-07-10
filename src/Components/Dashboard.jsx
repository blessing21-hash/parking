// src/components/DashboardLayout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = ({ navItems }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <nav style={{ width: '220px', background: '#222', color: '#fff', padding: '20px' }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {navItems.map(({ to, label }) => (
            <li key={to} style={{ margin: '15px 0' }}>
              <NavLink
                to={to}
                style={({ isActive }) => ({
                  color: isActive ? '#4ade80' : '#ddd',
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main style={{ flexGrow: 1, padding: '20px', background: '#f4f4f5', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
