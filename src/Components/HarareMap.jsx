




import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import "./HarareMap.css";

const locations = [
  { name: "Harare CBD", position: [-17.8292, 31.0522] },
  { name: "Avondale", position: [-17.7892, 31.0352] },
  { name: "Borrowdale", position: [-17.7462, 31.1012] },
  { name: "Westgate", position: [-17.7900, 30.9800] },
  { name: "Greendale", position: [-17.8214, 31.1208] },
  { name: "Highlands", position: [-17.7869, 31.0969] },
  { name: "Mbare", position: [-17.8612, 31.0382] },
  { name: "Belvedere", position: [-17.8233, 31.0143] },
];

// Custom icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component to recenter map
function RecenterMap({ coords }) {
  const map = useMap();
  if (coords) map.setView(coords, 15);
  return null;
}

function HarareMap() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered locations based on search query
  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="harare-map-section">
      <div className="harare-map-container">
        {/* Sidebar */}
        <div className="map-sidebar">
          <h2 className="section-title">Parking Map - Harare</h2>
          <div className="search-bar">
            <FaSearch />
            <input
              type="text"
              placeholder="Search Area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            />
            <FaSlidersH className="filter-icon" />
          </div>
          <ul className="location-list">
            {filteredLocations.map((loc, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedLocation(loc);
                  setSearchQuery(""); // Optional: clear search after click
                }}
                className={
                  selectedLocation.name === loc.name ? "active" : ""
                }
              >
                {loc.name}
              </li>
            ))}
            {filteredLocations.length === 0 && (
              <li className="no-result">No matching area</li>
            )}
          </ul>
        </div>

        {/* Map Area */}
        <MapContainer
          center={selectedLocation.position}
          zoom={13}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <RecenterMap coords={selectedLocation.position} />
          {locations.map((loc, i) => (
            <Marker position={loc.position} icon={customIcon} key={i}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}

export default HarareMap;
