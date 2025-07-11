




import React, { useState } from 'react';
import './MyBookings.css';

const MyBookings = () => {
  const allBookings = [
    {
      id: 1,
      location: 'Westgate Parking Lot',
      date: '2025-07-15',
      time: '09:00',
      duration: 2,
      plate: 'ABZ 1234',
      status: 'Confirmed',
      cost: '$5.00',
    },
    {
      id: 2,
      location: 'CBD Harare Parking Bay',
      date: '2025-07-20',
      time: '14:00',
      duration: 3,
      plate: 'XYZ 9876',
      status: 'Pending',
      cost: '$7.50',
    },
  ];

  const [bookings, setBookings] = useState(allBookings);
  const [filterText, setFilterText] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.location.toLowerCase().includes(filterText.toLowerCase()) ||
      booking.status.toLowerCase().includes(filterText.toLowerCase())
  );

  const openCancelModal = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const cancelBooking = () => {
    const updated = bookings.map((b) =>
      b.id === selectedBooking.id ? { ...b, status: 'Cancelled' } : b
    );
    setBookings(updated);
    setShowModal(false);
    setSelectedBooking(null);
  };

  return (
    <div className="dashboard-container">
      <h1>My Bookings</h1>

      <input
        type="text"
        placeholder="Search by location or status..."
        className="filter-input"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <div className="bookings-grid">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.location}</h3>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Duration:</strong> {booking.duration} hour(s)</p>
            <p><strong>Vehicle:</strong> {booking.plate}</p>
            <p><strong>Status:</strong>{' '}
              <span className={`status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </p>
            <p><strong>Cost:</strong> {booking.cost}</p>
            <button
              className="cancel-btn"
              disabled={booking.status !== 'Confirmed'}
              onClick={() => openCancelModal(booking)}
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedBooking && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Cancellation</h3>
            <p>
              Are you sure you want to cancel your booking at{' '}
              <strong>{selectedBooking.location}</strong> on{' '}
              <strong>{selectedBooking.date}</strong>?
            </p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={cancelBooking}>
                Yes, Cancel
              </button>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                No, Keep
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;

