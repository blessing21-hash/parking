




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Landing from './Pages/Landing/Landing';
// import Auth from './Pages/Auth/Auth';
// import Home from './Pages/Home/Home';
// import Booking from './Pages/Booking/Booking';
// import Location from './Pages/Location/Location';
// import CarWash from './Pages/CarWash/CarWash';
// import ParkingOptions from './Pages/Parking/Parking';
// import AboutUs from './Pages/AboutUs/AboutUs';
// import Features from './Pages/Features/Features';
// import UserDashboard from './Dashboards/UserDashboard';
// import AdminDashboard from './Dashboards/AdminDashboard';
// import ProtectedRoute from './Components/Protected';
// import PaymentPage from './pages/Payment/Payment';



// function App() {
//   const [bookings, setBookings] = useState([]);
//   const [payments, setPayments] = useState([]);

//   const handleNewBooking = (booking) => {
//     setBookings(prev => [booking, ...prev]);
//   };

//   const handleNewPayment = (payment) => {
//     setPayments(prev => [payment, ...prev]);
//   };

//   return (
//     <>
//       <Booking onNewBooking={handleNewBooking} />
//       <AdminDashboard
//         bookings={bookings}
//         payments={payments}
//         // You can pass handlers here to AdminDashboard if you want
//       />
//     </>
//   );
// }

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />
        
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//          }
//         />


//         {/* Protect pages that require login */}
//         <Route
//           path="/booking"
//           element={
//             <ProtectedRoute>
//               <Booking />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/features"
//           element={
//             <ProtectedRoute>
//               <Features />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/location"
//           element={
//             <ProtectedRoute>
//               <Location />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/carwash"
//           element={
//             <ProtectedRoute>
//               <CarWash />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/parkingoptions"
//           element={
//             <ProtectedRoute>
//               <ParkingOptions />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/aboutus"
//           element={
//             <ProtectedRoute>
//               <AboutUs />
//             </ProtectedRoute>
//           }
//         />

//         {/* Protect dashboards */}
//         <Route
//           path="/dashboard/user/*"
//           element={
//             <ProtectedRoute>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard/admin/*"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//          <Route path="/payment/:bookingId" element={<PaymentPage />} />
//       </Routes>
      
//     </>
//   );
// };

// export default App;





import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import PaymentPage from './Pages/Payment/Payment';
import Location from './Pages/Location/Location';
import CarWash from './Pages/CarWash/CarWash';
import ParkingOptions from './Pages/Parking/Parking';
import AboutUs from './Pages/AboutUs/AboutUs';
import Features from './Pages/Features/Features';
import UserDashboard from './Dashboards/UserDashboard';
import AdminDashboard from './Dashboards/AdminDashboard';
import ProtectedRoute from './Components/Protected';
import ParkingSpaces from './Pages/Parkingspace/Parkingspace';

function App() {
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);
  const navigate = useNavigate();

  const handleNewBooking = (booking) => {
    setBookings(prev => [booking, ...prev]);
    setCurrentBooking(booking);
    navigate(`/payment/${booking.id}`);  // Navigate to payment page
  };

  const handleNewPayment = (payment) => {
    setPayments(prev => [payment, ...prev]);
    navigate('/dashboard/admin'); // Redirect to Admin Dashboard after payment
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking onNewBooking={handleNewBooking} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment/:bookingId"
          element={
            <ProtectedRoute>
              <PaymentPage
                booking={currentBooking}
                onPaymentSuccess={handleNewPayment}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/features"
          element={
            <ProtectedRoute>
              <Features />
            </ProtectedRoute>
          }
        />
        <Route
          path="/location"
          element={
            <ProtectedRoute>
              <Location />
            </ProtectedRoute>
          }
        />
        <Route
          path="/carwash"
          element={
            <ProtectedRoute>
              <CarWash />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parkingoptions"
          element={
            <ProtectedRoute>
              <ParkingOptions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aboutus"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/user/*"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard
                bookings={bookings}
                payments={payments}
              />
            </ProtectedRoute>
          }
        />

        <Route
         path="/parkingspace"element={<ParkingSpaces />} />
      </Routes>
    </>
  );
}

export default App;
