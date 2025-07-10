


import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>We Have The Best Deals For Parking Lots!</h1>
          <p>Instantly book your space today. Trusted by millions.</p>

          <form className="hero-form">
            <select>
              <option>Select Car Park</option>
              <option>Harare CBD</option>
              <option>Borron Park</option>
            </select>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Your Phone Number" />
            <button type="submit">Request a Call</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
