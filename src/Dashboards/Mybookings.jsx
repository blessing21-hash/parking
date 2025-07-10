import React from 'react';
import './Dashboard.css'

const MyBookings = () => {
  // Replace with real user bookings fetched from API/backend
  const bookings = [
    { id: 1, location: 'Westgate', date: '2025-07-15', time: '09:00', duration: 2 },
    { id: 2, location: 'CBD Harare', date: '2025-07-20', time: '14:00', duration: 3 },
  ];

  return (
    <div className="dashboard-container">
      <h1>My Bookings</h1>
      <ul className="bookings-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <strong>{booking.location}</strong> - {booking.date} at {booking.time} for {booking.duration} hour(s)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
