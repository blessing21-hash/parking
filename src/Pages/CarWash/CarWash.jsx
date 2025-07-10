




import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './CarWash.css';
import basic from '../../assets/images/basic.jpeg';
import premium from '../../assets/images/premium.jpeg';
import full from '../../assets/images/full.jpeg'

const carWashOptions = [
  {
    title: 'Basic Wash',
    price: '$3',
    features: ['Exterior wash', 'Tire shine'],
    image: basic, // Replace with your actual image path or URL
  },
  {
    title: 'Premium Wash',
    price: '$6',
    features: ['Exterior + Interior', 'Wax finish', 'Tire shine'],
    image: premium,
  },
  {
    title: 'Full Detail',
    price: '$10',
    features: ['Full clean', 'Engine bay wash', 'Polish & wax'],
    image: full,
  },
];

const CarWash = () => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    service: 'Basic Wash',
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted! We’ll contact you shortly.');
    setForm({ name: '', date: '', service: 'Basic Wash', location: '' });
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="car-hero">
        <h1>Car Wash Services</h1>
        <p>Keep your ride shining while you park. Book a car wash with BlessyPark today.</p>
      </section>

      {/* Packages */}
      <section className="packages">
        <h2>Choose Your Package</h2>
        <div className="package-grid">
          {carWashOptions.map((pkg, index) => (
            <div className="package-card" key={index}>
              <img src={pkg.image} alt={pkg.title} className="package-image" />
              <h3>{pkg.title}</h3>
              <p className="price">{pkg.price}</p>
              <ul>
                {pkg.features.map((feat, i) => (
                  <li key={i}>✅ {feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-section">
        <h2>Book a Wash</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            {carWashOptions.map((opt, i) => (
              <option key={i} value={opt.title}>{opt.title}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Preferred Location"
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <button type="submit">Submit Booking</button>
        </form>
      </section>

      {/* Benefits */}
      <section className="wash-benefits">
        <h2>Why BlessyPark Car Wash?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">🚗 <strong>Convenient</strong><br />Wash while you park</div>
          <div className="benefit-card">💧 <strong>Eco-friendly</strong><br />Cleaning methods</div>
          <div className="benefit-card">👨‍🔧 <strong>Trusted professionals</strong><br />Skilled & reliable</div>
          <div className="benefit-card">💸 <strong>Affordable pricing</strong><br />Great value for money</div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CarWash;

