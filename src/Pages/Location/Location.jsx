import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './Location.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { supabase } from '../../supabaseClient';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Custom marker
const markerIcon = new L.Icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Fit map bounds
const FitBounds = ({ locations }) => {
  const map = useMap();
  useEffect(() => {
    const validLocations = locations.filter((loc) => loc.lat && loc.lng);
    if (validLocations.length > 0) {
      const bounds = L.latLngBounds(validLocations.map((loc) => [loc.lat, loc.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);
  return null;
};

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch locations from Supabase
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data, error } = await supabase.from('parkingspaces').select('*');
        console.log('Supabase response:', { data, error });

        if (error) throw error;
        setLocations(data || []);
      } catch (err) {
        console.error('Error fetching parking spaces:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  // Unique areas for filter
  const areas = ['All', ...new Set(locations.map((loc) => loc.area))];

  // Filter locations
  const filteredLocations =
    selectedArea === 'All'
      ? locations
      : locations.filter((loc) => loc.area === selectedArea);

  return (
    <div>
      <Navbar />

      <section className="location-hero">
        <div className="hero-content">
          <h1>Find Parking Across Harare</h1>
          <p>Explore secure, verified parking in all major areas.</p>
        </div>
      </section>

      <section className="location-page">
        <h2>Available Parking Locations</h2>

        {/* Filter */}
        <div className="filter-dropdown">
          <label htmlFor="area">Filter by Area:</label>
          <select
            id="area"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {areas.map((area, i) => (
              <option key={i} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Status messages */}
        {loading && <p>Loading parking locations...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && filteredLocations.length === 0 && (
          <p>No parking locations found in this area.</p>
        )}

        {/* Parking cards */}
        <div className="location-grid">
          {filteredLocations.map((loc, i) => (
            <div className="location-card" key={i}>
              <h3>{loc.parking_name}</h3>
              <p><strong>Address:</strong> {loc.location}</p>
              <p><strong>Area:</strong> {loc.area_name}</p>
              <p><strong>Price:</strong> {loc.price ? `$${loc.price}` : '1.50'}</p>
              <p>
                <strong>Available Spots:</strong>{' '}
                <span className={loc.availableSpots > 0 ? 'available' : 'full'}>
                  {loc.availableSpots > 0 ? loc.availableSpots : 'Full'}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Map */}
        <h3>Map View</h3>
        <div className="map-wrapper">
          <MapContainer
            center={[-17.8292, 31.0522]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%', borderRadius: '12px' }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FitBounds locations={filteredLocations} />
            {filteredLocations
              .filter((loc) => loc.lat && loc.lng)
              .map((loc, i) => (
                <Marker key={i} position={[loc.lat, loc.lng]} icon={markerIcon}>
                  <Popup>
                    <strong>{loc.name}</strong>
                    <br />
                    {loc.address}
                    <br />
                    {loc.availableSpots > 0
                      ? `${loc.availableSpots} spots available`
                      : 'Full'}
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;
