import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About BlessyPark</h1>
          <p>Redefining the way you find, book, and enjoy parking in Harare.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for innovation and solving urban problems, BlessyPark began with a simple goal:
          to make parking easier, smarter, and more accessible for everyone in Harare. What started as an idea
          has turned into a movement — empowering drivers to park confidently and efficiently.
        </p>
      </section>

      {/* Founder Video */}
      <section className="founder-video">
        <h2>A Message From Our Founder</h2>
        <p>Hear directly from our founder about the vision behind BlessyPark.</p>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Founder Message"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <h2>Our Values</h2>
        <div className="value-grid">
          <div className="value-card">
            <h3>🚀 Innovation</h3>
            <p>We leverage technology to improve urban life for drivers and lot owners.</p>
          </div>
          <div className="value-card">
            <h3>💚 Trust</h3>
            <p>Security and reliability are at the core of everything we do.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Community</h3>
            <p>We believe in uplifting local businesses and serving people better.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="meet-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Founder" />
            <h4>Blessing Kusiwani</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="CTO" />
            <h4>Thandiwe Ncube</h4>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Support" />
            <h4>John Moyo</h4>
            <p>Customer Success</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Join the BlessyPark Movement</h2>
        <p>Experience stress-free parking today. Find your spot with ease and confidence.</p>
        <button>Get Started</button>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;
