


import React from "react";
import "./HarareMap.css";
import mapImg from "../assets/images/map.png"; // Use your Harare map image
import { FaSearch, FaSlidersH } from "react-icons/fa";

const locations = [
  "Harare CBD",
  "Avondale",
  "Borrowdale",
  "Westgate",
  "Greendale",
  "Highlands",
  "Mbare",
  "Belvedere"
];

function HarareMap() {
  return (
    <section className="harare-map-section">
      <h2 className="section-title">Parking Map - Harare</h2>
      <div className="harare-map-container">
        {/* Sidebar list */}
        <div className="map-sidebar">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search Area..." />
            <FaSlidersH className="filter-icon" />
          </div>
          <ul className="location-list">
            {locations.map((loc, index) => (
              <li key={index}>{loc}</li>
            ))}
          </ul>
        </div>

        {/* Map with pins */}
        <div className="map-image">
          <img src={mapImg} alt="Harare Map" />
          <span className="pin cbd">CBD</span>
          <span className="pin avondale">Avondale</span>
          <span className="pin borrowdale">Borrowdale</span>
          {/* Add more pins with custom positions */}
        </div>
      </div>
    </section>
  );
}

export default HarareMap;




