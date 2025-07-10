import React from 'react';
import Navbar from '../../Components/Navbar';
import './Features.css';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';

const features = [
  {
    title: 'Find Nearby Parking',
    description: 'Easily discover parking spots close to your current location in real-time.',
    icon: '📍',
  },
  {
    title: 'Real-Time Availability',
    description: 'Know which spots are available before you get there.',
    icon: '📊',
  },
  {
    title: 'Book & Pay Online',
    description: 'Reserve your parking and pay securely through the app.',
    icon: '💳',
  },
  {
    title: 'Review System',
    description: 'See ratings from other users and leave your own feedback.',
    icon: '⭐',
  },
  {
    title: 'Owner Listings',
    description: 'Parking owners can list and manage their own spaces.',
    icon: '📦',
  },
  {
    title: 'Secure Payments',
    description: 'All transactions are encrypted and safe.',
    icon: '🔐',
  },
  {
    title: 'Car Wash Add-on',
    description: 'Book a car wash while your vehicle is parked.',
    icon: '🧼',
  },
  {
    title: 'User Dashboard',
    description: 'View your bookings, payments, and history in one place.',
    icon: '👤',
  },
  {
    title: 'Admin Tools',
    description: 'Admins can manage users, spaces, and reviews.',
    icon: '🛠️',
  },
];

const Features = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="featurespage-hero">
        <div className="hero-content">
          <h1>Features That Make Parking Simple</h1>
          <p>From finding a spot to paying and reviewing — BlessyPark has it all.</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="featurespage-list">
        <h2>Core Features</h2>
        <div className="featurespage-grid">
          {features.map((feat, i) => (
            <div className="featurepage-card" key={i}>
              <span className="icon">{feat.icon}</span>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="featurespage-cta">
        <h2>Ready to Park Smarter?</h2>
        <p>Join thousands already using BlessyPark to save time and stress.</p>
        <Link to="/booking">
          <button>Book a Spot</button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Features;
