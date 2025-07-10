

import React from "react";
import "./Features.css";
import { FaVideo, FaConciergeBell, FaMapMarkerAlt, FaCar } from "react-icons/fa";

const features = [
  {
    icon: <FaVideo />,
    title: "Safe And Secure",
    description: "24 hour surveillance to ensure your car is safe and secure while you are away."
  },
  {
    icon: <FaConciergeBell />,
    title: "Concierge Options",
    description: "Take advantage of our Concierge services and have us help you out."
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Close And Handy",
    description: "Park at the terminal – just a short walk and you are at your departure gate."
  },
  {
    icon: <FaCar />,
    title: "Car Wash",
    description: "Simply drive up and go with our Parkivia service. Why not add a car wash?"
  }
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((features, index) => (
          <div className="features-card" key={index}>
            <div className="icon">{features.icon}</div>
            <h3>{features.title}</h3>
            <p>{features.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
