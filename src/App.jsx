




import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Location from './Pages/Location/Location';
import CarWash from './Pages/CarWash/CarWash';
import ParkingOptions from './Pages/Parking/Parking';
import AboutUs from './Pages/AboutUs/AboutUs';
import Features from './Pages/Features/Features';
import UserDashboard from './Dashboards/UserDashboard';
import AdminDashboard from './Dashboards/AdminDashboard';
import ProtectedRoute from './components/Protected';

const App = () => {
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


        {/* Protect pages that require login */}
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking />
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

        {/* Protect dashboards */}
        <Route
          path="/dashboard/user/*"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </>
  );
};

export default App;
