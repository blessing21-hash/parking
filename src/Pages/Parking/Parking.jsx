





import React from 'react';
import Navbar from '../../Components/Navbar';
import './Parking.css';
import { Link } from 'react-router-dom';
import separatorImg from '../../assets/images/separator.jpeg'; // Replace this with your own image
import './Parking.css'; // Include your parking rates styles here
import Footer from '../../Components/Footer';

const parkingTypes = [
  {
    title: 'Short-Term Parking',
    description: 'Perfect for quick errands or short visits. Charged hourly.',
    icon: '⏱️',
  },
  {
    title: 'Long-Term Parking',
    description: 'Ideal for daily commuters or weekend travelers.',
    icon: '📅',
  },
  {
    title: 'VIP Parking',
    description: 'Premium spots near entrances with security.',
    icon: '⭐',
  },
  {
    title: 'Covered Parking',
    description: 'Protect your vehicle from weather elements.',
    icon: '🛡️',
  },
];

const plans = [
  {
    price: 20,
    name: 'Premium',
    description: 'This plan includes all of the services that come with a parking space!'
  },
  {
    price: 15,
    name: 'Standard',
    description: 'Get the unlimited time and a regular parking spot at one of the lots.'
  },
  {
    price: 10,
    name: 'Basic',
    description: 'A limited plan perfect for a short stay with a random parking spot.'
  },
  {
    price: 5,
    name: 'Economy',
    description: 'Get a spot for parking at the time of arrival. No extra services.'
  }
];

const ParkingOptions = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="parking-hero fullscreen">
        <div className="overlay">
          <h1>Our Parking Options</h1>
          <p>Choose the right fit for your needs – flexible, safe and convenient parking across Harare.</p>
        </div>
      </section>

      {/* Types of Parking */}
      <section className="parking-types">
        <h2>Types of Parking</h2>
        <div className="type-layout">
          <div className="type-column">
            {parkingTypes.slice(0, 2).map((type, i) => (
              <div className="type-card" key={i}>
                <span className="icon">{type.icon}</span>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>

          <div className="separator-image">
            <img src={separatorImg} alt="visual" />
          </div>

          <div className="type-column">
            {parkingTypes.slice(2).map((type, i) => (
              <div className="type-card" key={i + 2}>
                <span className="icon">{type.icon}</span>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Options & Rates */}
      <section className="parking">
        <h2>Parking Options and Rates</h2>
        <div className="parking-cards">
          {plans.map((plan, index) => (
            <div className="card" key={index}>
              <h3><span>$</span> {plan.price} <small>/day</small></h3>
              <h4>{plan.name}</h4>
              <p>{plan.description}</p>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="booking-cta">
        <h2>Ready to Park?</h2>
        <p>Reserve your ideal parking spot today.</p>
        <Link to="/booking"><button>Book Now</button></Link>
      </section>

      {/* Contact Form */}
      <section className="parking-contact">
        <h2>Have Questions?</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Question" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <Footer/>
    </div>
  );
};

export default ParkingOptions;


