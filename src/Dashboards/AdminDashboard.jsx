



// // AdminDashboard.jsx
// import React, { useState, useEffect } from 'react';
// import './AdminDashboard.css';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState('overview');
//   const [parkingSpaces, setParkingSpaces] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [newSlots, setNewSlots] = useState('');
//   const [userPage, setUserPage] = useState(1);
//   const [bookingPage, setBookingPage] = useState(1);
//   const pageSize = 5;

//   useEffect(() => {
//     // Simulated API data
//     setUsers([
//       { id: 1, name: 'Jane Doe', email: 'jane@example.com' },
//       { id: 2, name: 'John Smith', email: 'john@example.com' },
//       { id: 3, name: 'Emily Jones', email: 'emily@example.com' },
//       { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
//       { id: 5, name: 'Alice White', email: 'alice@example.com' },
//       { id: 6, name: 'Tom Black', email: 'tom@example.com' },
//     ]);
//     setParkingSpaces([
//       { id: 1, location: 'Westgate', slots: 20 },
//       { id: 2, location: 'CBD Harare', slots: 15 },
//     ]);
//     setBookings([
//       { id: 1, user: 'Jane', location: 'CBD', date: '2025-07-15' },
//       { id: 2, user: 'John', location: 'Avondale', date: '2025-07-20' },
//       { id: 3, user: 'Emily', location: 'Borrowdale', date: '2025-07-25' },
//       { id: 4, user: 'Bob', location: 'Highlands', date: '2025-07-27' },
//       { id: 5, user: 'Alice', location: 'CBD', date: '2025-07-29' },
//       { id: 6, user: 'Tom', location: 'Westgate', date: '2025-08-01' },
//     ]);
//     setPayments([
//       { id: 1, user: 'Jane', amount: 15 },
//       { id: 2, user: 'John', amount: 20 },
//       { id: 3, user: 'Emily', amount: 10 },
//     ]);
//     setReviews([
//       { id: 1, user: 'Jane', text: 'Great service!' },
//       { id: 2, user: 'John', text: 'Parking was tight but okay.' },
//     ]);
//   }, []);

//   const handleEdit = (id, currentSlots) => {
//     setEditId(id);
//     setNewSlots(currentSlots.toString());
//   };

//   const handleSave = (id) => {
//     const updated = parkingSpaces.map((space) =>
//       space.id === id ? { ...space, slots: parseInt(newSlots) } : space
//     );
//     setParkingSpaces(updated);
//     setEditId(null);
//     setNewSlots('');
//   };

//   const handleDelete = (type, id) => {
//     if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
//       if (type === 'parking') {
//         setParkingSpaces(prev => prev.filter(p => p.id !== id));
//       }
//     }
//   };

//   const paginatedUsers = users.slice((userPage - 1) * pageSize, userPage * pageSize);
//   const paginatedBookings = bookings.slice((bookingPage - 1) * pageSize, bookingPage * pageSize);

//   const chartData = [
//     { name: 'Users', value: users.length },
//     { name: 'Bookings', value: bookings.length },
//     { name: 'Payments', value: payments.reduce((sum, p) => sum + p.amount, 0) },
//     { name: 'Spaces', value: parkingSpaces.length },
//     { name: 'Reviews', value: reviews.length },
//   ];

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'overview':
//         return (
//           <div className="overview-section">
//             <h2>Dashboard Overview</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={chartData}>
//                 <XAxis dataKey="name" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#4fa3ff" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         );
//       case 'users':
//         return (
//           <div>
//             <h2>Manage Users</h2>
//             <ul>
//               {paginatedUsers.map(user => (
//                 <li key={user.id}>{user.name} - {user.email}</li>
//               ))}
//             </ul>
//             <div className="pagination">
//               <button disabled={userPage === 1} onClick={() => setUserPage(userPage - 1)}>Prev</button>
//               <button disabled={userPage * pageSize >= users.length} onClick={() => setUserPage(userPage + 1)}>Next</button>
//             </div>
//           </div>
//         );
//       case 'parking':
//         return (
//           <div>
//             <h2>Manage Parking Spaces</h2>
//             <ul>
//               {parkingSpaces.map(space => (
//                 <li key={space.id}>
//                   {space.location} - {' '}
//                   {editId === space.id ? (
//                     <>
//                       <input
//                         type="number"
//                         value={newSlots}
//                         onChange={(e) => setNewSlots(e.target.value)}
//                       />
//                       <button onClick={() => handleSave(space.id)}>Save</button>
//                     </>
//                   ) : (
//                     <>
//                       {space.slots} slots
//                       <button onClick={() => handleEdit(space.id, space.slots)}>Edit</button>
//                     </>
//                   )}
//                   <button onClick={() => handleDelete('parking', space.id)}>Delete</button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       case 'bookings':
//         return (
//           <div>
//             <h2>All Bookings</h2>
//             <ul>
//               {paginatedBookings.map(b => (
//                 <li key={b.id}>{b.user} - {b.location} - {b.date}</li>
//               ))}
//             </ul>
//             <div className="pagination">
//               <button disabled={bookingPage === 1} onClick={() => setBookingPage(bookingPage - 1)}>Prev</button>
//               <button disabled={bookingPage * pageSize >= bookings.length} onClick={() => setBookingPage(bookingPage + 1)}>Next</button>
//             </div>
//           </div>
//         );
//       case 'payments':
//         return (
//           <div>
//             <h2>Payments</h2>
//             <ul>
//               {payments.map(p => (
//                 <li key={p.id}>{p.user} - ${p.amount}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       case 'reviews':
//         return (
//           <div>
//             <h2>Reviews</h2>
//             <ul>
//               {reviews.map(r => (
//                 <li key={r.id}>{r.user}: {r.text}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       default:
//         return <div>Select a section from the sidebar.</div>;
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <aside className="admin-sidebar">
//         <h2>Admin Panel</h2>
//         <button onClick={() => setActiveSection('overview')}>Overview</button>
//         <button onClick={() => setActiveSection('users')}>Manage Users</button>
//         <button onClick={() => setActiveSection('parking')}>Parking Spaces</button>
//         <button onClick={() => setActiveSection('bookings')}>Bookings</button>
//         <button onClick={() => setActiveSection('payments')}>Payments</button>
//         <button onClick={() => setActiveSection('reviews')}>Reviews</button>
//       </aside>
//       <main className="admin-content">{renderSection()}</main>
//     </div>
//   );
// };

// export default AdminDashboard;









import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [parkingSpaces, setParkingSpaces] = useState([
    { id: 1, location: 'Westgate', slots: 20 },
    { id: 2, location: 'CBD Harare', slots: 15 },
  ]);
  const [users, setUsers] = useState([
    { id: 1, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 2, name: 'John Smith', email: 'john@example.com' },
    { id: 3, name: 'Emily Jones', email: 'emily@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Alice White', email: 'alice@example.com' },
    { id: 6, name: 'Tom Black', email: 'tom@example.com' },
  ]);
  const [bookings, setBookings] = useState([
    { id: 1, user: 'Jane', location: 'CBD', date: '2025-07-15' },
    { id: 2, user: 'John', location: 'Avondale', date: '2025-07-20' },
    { id: 3, user: 'Emily', location: 'Borrowdale', date: '2025-07-25' },
    { id: 4, user: 'Bob', location: 'Highlands', date: '2025-07-27' },
    { id: 5, user: 'Alice', location: 'CBD', date: '2025-07-29' },
    { id: 6, user: 'Tom', location: 'Westgate', date: '2025-08-01' },
  ]);
  const [payments, setPayments] = useState([
    { id: 1, user: 'Jane', amount: 15 },
    { id: 2, user: 'John', amount: 20 },
    { id: 3, user: 'Emily', amount: 10 },
  ]);
  const [reviews, setReviews] = useState([
    { id: 1, user: 'Jane', text: 'Great service!' },
    { id: 2, user: 'John', text: 'Parking was tight but okay.' },
  ]);
  const [editId, setEditId] = useState(null);
  const [newSlots, setNewSlots] = useState('');
  const [userPage, setUserPage] = useState(1);
  const [bookingPage, setBookingPage] = useState(1);
  const pageSize = 5;
  
  // Notifications state to show new bookings/payments
  const [notifications, setNotifications] = useState([]);

  // Function to add new booking from Booking page
  const handleNewBooking = (newBooking) => {
    setBookings(prev => [newBooking, ...prev]);
    setNotifications(prev => [
      `New booking by ${newBooking.user} at ${newBooking.location} on ${newBooking.date}`,
      ...prev
    ]);
  };

  // Simulated new payment (you can extend later to real payments)
  const handleNewPayment = (newPayment) => {
    setPayments(prev => [newPayment, ...prev]);
    setNotifications(prev => [
      `New payment of $${newPayment.amount} by ${newPayment.user}`,
      ...prev
    ]);
  };

  const handleEdit = (id, currentSlots) => {
    setEditId(id);
    setNewSlots(currentSlots.toString());
  };

  const handleSave = (id) => {
    const updated = parkingSpaces.map(space =>
      space.id === id ? { ...space, slots: parseInt(newSlots) } : space
    );
    setParkingSpaces(updated);
    setEditId(null);
    setNewSlots('');
  };

  const handleDelete = (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      if (type === 'parking') {
        setParkingSpaces(prev => prev.filter(p => p.id !== id));
      }
    }
  };

  const paginatedUsers = users.slice((userPage - 1) * pageSize, userPage * pageSize);
  const paginatedBookings = bookings.slice((bookingPage - 1) * pageSize, bookingPage * pageSize);

  const chartData = [
    { name: 'Users', value: users.length },
    { name: 'Bookings', value: bookings.length },
    { name: 'Payments', value: payments.reduce((sum, p) => sum + p.amount, 0) },
    { name: 'Spaces', value: parkingSpaces.length },
    { name: 'Reviews', value: reviews.length },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="overview-section">
            <h2>Dashboard Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#4fa3ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            {notifications.length > 0 && (
              <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px', borderRadius: '6px' }}>
                <h3>Notifications</h3>
                <ul>
                  {notifications.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 'users':
        return (
          <div>
            <h2>Manage Users</h2>
            <ul>
              {paginatedUsers.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
              ))}
            </ul>
            <div className="pagination">
              <button disabled={userPage === 1} onClick={() => setUserPage(userPage - 1)}>Prev</button>
              <button disabled={userPage * pageSize >= users.length} onClick={() => setUserPage(userPage + 1)}>Next</button>
            </div>
          </div>
        );
      case 'parking':
        return (
          <div>
            <h2>Manage Parking Spaces</h2>
            <ul>
              {parkingSpaces.map(space => (
                <li key={space.id}>
                  {space.location} - {' '}
                  {editId === space.id ? (
                    <>
                      <input
                        type="number"
                        value={newSlots}
                        onChange={(e) => setNewSlots(e.target.value)}
                      />
                      <button onClick={() => handleSave(space.id)}>Save</button>
                    </>
                  ) : (
                    <>
                      {space.slots} slots
                      <button onClick={() => handleEdit(space.id, space.slots)}>Edit</button>
                    </>
                  )}
                  <button onClick={() => handleDelete('parking', space.id)}>Delete</button>
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
              {paginatedBookings.map(b => (
                <li key={b.id}>{b.user} - {b.location} - {b.date}</li>
              ))}
            </ul>
            <div className="pagination">
              <button disabled={bookingPage === 1} onClick={() => setBookingPage(bookingPage - 1)}>Prev</button>
              <button disabled={bookingPage * pageSize >= bookings.length} onClick={() => setBookingPage(bookingPage + 1)}>Next</button>
            </div>
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
      <main className="admin-content">{renderSection()}</main>
    </div>
  );
};

export default AdminDashboard;

