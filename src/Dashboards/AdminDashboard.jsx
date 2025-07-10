

import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const users = [
    { id: 1, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 2, name: 'John Smith', email: 'john@example.com' },
  ];

  const parkingSpaces = [
    { id: 1, location: 'Westgate', slots: 20 },
    { id: 2, location: 'CBD Harare', slots: 15 },
  ];

  const bookings = [
    { id: 1, user: 'Jane', location: 'CBD', date: '2025-07-15' },
    { id: 2, user: 'John', location: 'Avondale', date: '2025-07-20' },
  ];

  const payments = [
    { id: 1, user: 'Jane', amount: 15 },
    { id: 2, user: 'John', amount: 20 },
  ];

  const reviews = [
    { id: 1, user: 'Jane', text: 'Great service!' },
    { id: 2, user: 'John', text: 'Parking was tight but okay.' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div>
            <h2>Dashboard Overview</h2>
            <p>Welcome admin. Here’s a summary of the system stats.</p>
          </div>
        );
      case 'users':
        return (
          <div>
            <h2>Manage Users</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  {user.name} - {user.email} <button>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'parking':
        return (
          <div>
            <h2>Manage Parking Spaces</h2>
            <ul>
              {parkingSpaces.map(space => (
                <li key={space.id}>
                  {space.location} - {space.slots} slots
                  <button>Edit</button>
                  <button>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'bookings':
        return (
          <div>
            <h2>All Bookings</h2>
            <ul>
              {bookings.map(b => (
                <li key={b.id}>{b.user} - {b.location} - {b.date}</li>
              ))}
            </ul>
          </div>
        );
      case 'payments':
        return (
          <div>
            <h2>Payments</h2>
            <ul>
              {payments.map(p => (
                <li key={p.id}>{p.user} - ${p.amount}</li>
              ))}
            </ul>
          </div>
        );
      case 'reviews':
        return (
          <div>
            <h2>Reviews</h2>
            <ul>
              {reviews.map(r => (
                <li key={r.id}>{r.user}: {r.text}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <button onClick={() => setActiveSection('overview')}>Overview</button>
        <button onClick={() => setActiveSection('users')}>Manage Users</button>
        <button onClick={() => setActiveSection('parking')}>Parking Spaces</button>
        <button onClick={() => setActiveSection('bookings')}>Bookings</button>
        <button onClick={() => setActiveSection('payments')}>Payments</button>
        <button onClick={() => setActiveSection('reviews')}>Reviews</button>
      </aside>

      <main className="admin-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default AdminDashboard;
