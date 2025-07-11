


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './Home.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const UserHome = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: "BlessyPark made it so easy to find parking during peak hours. Game changer!",
      author: "Tawanda M.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "I love that I can book a spot and get my car cleaned while I'm shopping!",
      author: "Nyasha K.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Safe and reliable parking in the city center. 10/10 would recommend.",
      author: "Farai D.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      text: "Booking a spot has never been easier. Love the app!",
      author: "Chipo R.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "Great customer service and convenient locations.",
      author: "Simba N.",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      text: "Perfect solution for busy days in Harare.",
      author: "Rudo M.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ]);

  const cardsToShow = 3;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('userReviews')) || [];
    if (stored.length > 0) {
      setTestimonials(prev => [...prev, ...stored]);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + cardsToShow) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setIndex((index + cardsToShow) % testimonials.length);
  };

  const prev = () => {
    setIndex((index - cardsToShow + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleTestimonials.push(testimonials[(index + i) % testimonials.length]);
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.text.value.trim();
    const author = e.target.elements.author.value.trim();

    if (text && author) {
      const newReview = { text, author, image: "https://randomuser.me/api/portraits/lego/1.jpg" };
      const stored = JSON.parse(localStorage.getItem('userReviews')) || [];
      stored.push(newReview);
      localStorage.setItem('userReviews', JSON.stringify(stored));
      alert("Thanks for your review! It will appear after refresh.");
      e.target.reset();
    }
  };

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div>
      <Navbar />

      <div className="user-home">
        {/* Hero */}
        <section className="hero">
          <h1>Welcome to BlessyPark!</h1>
          <p>
            Take control of your parking experience with just a few clicks.
            BlessyPark connects drivers to available spaces in real-time, saving time and reducing stress.
            Ready to park smarter? Tap below to Book your perfect parking spot in seconds.
          </p>
          <Link to="/booking">
            <button className="cta-btn">Find parking</button>
          </Link>
        </section>

        {/* About */}
        <section className="about">
          <h2>About BlessyPark</h2>
          <p className="about-intro">
            BlessyPark is transforming urban parking in Harare. Our platform connects drivers to reliable parking spots with additional features like car wash and verified secure spaces.
          </p>

          <div className="about-grid">
            <div className="about-card"><h3>🚗 Easy Booking</h3><p>Reserve your spot online in just a few taps.</p></div>
            <div className="about-card"><h3>🔐 Safe & Secure</h3><p>All locations are monitored and vetted for peace of mind.</p></div>
            <div className="about-card"><h3>🧽 Car Services</h3><p>Get your car washed while you park at select locations.</p></div>
            <div className="about-card"><h3>📍 Verified Locations</h3><p>Real-time trusted parking across Harare.</p></div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-carousel">
            {visibleTestimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <img src={t.image} alt={t.author} className="testimonial-image" />
                <p>"{t.text}"</p>
                <h4>— {t.author}</h4>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button onClick={prev} aria-label="Previous testimonials">⟵</button>
            <button onClick={next} aria-label="Next testimonials">⟶</button>
          </div>

          {/* Review Submission */}
          <div className="review-form">
            <h3>Leave a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <input type="text" name="author" placeholder="Your Name" required />
              <textarea name="text" placeholder="Your Review" required />
              <button type="submit">Submit Review</button>
            </form>
          </div>
        </section>

        {/* Map Preview */}
        <section className="map-preview">
          <h2>Parking Near You</h2>
          <div className="map-box">
            <MapContainer
              center={[-17.8292, 31.0522]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[-17.8292, 31.0522]} icon={customIcon}>
                <Popup>Harare CBD Parking Spot</Popup>
              </Marker>
              <Marker position={[-17.7905, 31.0456]} icon={customIcon}>
                <Popup>Avondale Parking</Popup>
              </Marker>
              <Marker position={[-17.7676, 31.0842]} icon={customIcon}>
                <Popup>Borrowdale Parking</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default UserHome;

