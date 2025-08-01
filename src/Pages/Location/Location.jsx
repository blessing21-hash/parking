





// import React, { useState, useEffect } from 'react';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';
// import './Location.css';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const markerIcon = new L.Icon({
//   iconUrl: ('leaflet/dist/images/marker-icon.png'),
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// const parkingLocations = [
//   {
//     name: 'Joina City Parking',
//     address: 'Corner Julius Nyerere & Jason Moyo Ave',
//     price: '$1/hr',
//     availableSpots: 12,
//     area: 'CBD',
//     lat: -17.8292,
//     lng: 31.0522,
//   },
//   {
//     name: 'Avondale Shopping Centre',
//     address: 'Avondale, Harare',
//     price: '$1.50/hr',
//     availableSpots: 0,
//     area: 'Avondale',
//     lat: -17.8076,
//     lng: 31.0335,
//   },
//   {
//     name: 'Westgate Mall Parking',
//     address: 'Westgate, Harare',
//     price: '$1/hr',
//     availableSpots: 8,
//     area: 'Westgate',
//     lat: -17.8005,
//     lng: 30.9872,
//   },
//   {
//     name: 'Highlands Parking Bay',
//     address: 'Highlands Shopping Centre',
//     price: '$1.20/hr',
//     availableSpots: 0,
//     area: 'Highlands',
//     lat: -17.7778,
//     lng: 31.0783,
//   },
// ];

// const FitBounds = ({ locations }) => {
//   const map = useMap();

//   useEffect(() => {
//     const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
//     map.fitBounds(bounds, { padding: [50, 50] });
//   }, [locations, map]);

//   return null;
// };

// const Location = () => {
//   const [selectedArea, setSelectedArea] = useState('All');
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const areas = ['All', ...new Set(parkingLocations.map(loc => loc.area))];

//   const filteredLocations =
//     selectedArea === 'All'
//       ? parkingLocations
//       : parkingLocations.filter(loc => loc.area === selectedArea);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thanks! Your question has been submitted.');
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Hero */}
//       <section className="location-hero">
//         <div className="hero-content">
//           <h1>Find Parking Across Harare</h1>
//           <p>Explore secure, verified parking in all major areas.</p>
//         </div>
//       </section>

//       <section className="location-page">
//         <h2>Available Parking Locations</h2>

//         {/* Filter Dropdown */}
//         <div className="filter-dropdown">
//           <label htmlFor="area">Filter by Area:</label>
//           <select
//             id="area"
//             value={selectedArea}
//             onChange={(e) => setSelectedArea(e.target.value)}
//           >
//             {areas.map((area, i) => (
//               <option key={i} value={area}>{area}</option>
//             ))}
//           </select>
//         </div>

//         {/* Grid */}
//         <div className="location-grid">
//           {filteredLocations.map((loc, index) => (
//             <div className="location-card" key={index}>
//               <h3>{loc.name}</h3>
//               <p><strong>Address:</strong> {loc.address}</p>
//               <p><strong>Area:</strong> {loc.area}</p>
//               <p><strong>Price:</strong> {loc.price}</p>
//               <p>
//                 <strong>Available Spots:</strong>{' '}
//                 <span className={loc.availableSpots > 0 ? 'available' : 'full'}>
//                   {loc.availableSpots > 0 ? loc.availableSpots : 'Full'}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Map */}
//         <h3>Map View</h3>
//         <div className="map-wrapper">
//           <MapContainer
//             center={[-17.8292, 31.0522]}
//             zoom={13}
//             scrollWheelZoom={false}
//             style={{ height: '400px', width: '100%', borderRadius: '12px' }}
//           >
//             <TileLayer
//               attribution='&copy; OpenStreetMap contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <FitBounds locations={filteredLocations} />
//             {filteredLocations.map((loc, i) => (
//               <Marker key={i} position={[loc.lat, loc.lng]} icon={markerIcon}>
//                 <Popup>
//                   <strong>{loc.name}</strong><br />
//                   {loc.address}<br />
//                   {loc.availableSpots > 0
//                     ? `${loc.availableSpots} spots available`
//                     : 'Full'}
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>

//         {/* Contact Form */}
//         <section className="contact-section">
//           <h2>Ask a Question</h2>
//           <form onSubmit={handleSubmit} className="contact-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//             <textarea
//               placeholder="Your Question"
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               required
//             ></textarea>
//             <button type="submit">Submit</button>
//           </form>
//         </section>

//         {/* Customer-Facing Contact Info */}
//         <section className="contact-info">
//           <h2>Contact Us</h2>
//           <p>Have questions or need help? Get in touch with our team below.</p>
//           <div className="contact-details">
//             <p><strong>📧 Email:</strong> <a href="mailto:support@blessypark.com">support@blessypark.com</a></p>
//             <p><strong>📞 Phone:</strong> <a href="tel:+263779054714">+263 77 905 4714</a></p>
//             <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/27704985629" target="_blank" rel="noopener noreferrer">+27 704 985 629</a></p>
//             <p><strong>📍 Address:</strong> 45 Nelson Mandela Ave, Harare</p>
//             <p><strong>🕐 Hours:</strong> Mon–Fri 8am–6pm, Sat 9am–1pm</p>
//           </div>
//         </section>
//       </section>
//       <Footer/>
//     </div>
//   );
// };

// export default Location;








// import React, { useState, useEffect } from 'react';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';
// import './Location.css';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { supabase } from '../../supabaseClient';

// const markerIcon = new L.Icon({
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// const FitBounds = ({ locations }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (locations.length > 0) {
//       const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
//       map.fitBounds(bounds, { padding: [50, 50] });
//     }
//   }, [locations, map]);

//   return null;
// };

// const Location = () => {
//   const [locations, setLocations] = useState([]);
//   const [selectedArea, setSelectedArea] = useState('All');
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   useEffect(() => {
//     const fetchLocations = async () => {
//       const { data, error } = await supabase.from('parking_spaces').select('*');

//       if (error) {
//         console.error('Error fetching data:', error);
//       } else {
//         setLocations(data);
//       }
//     };

//     fetchLocations();
//   }, []);

//   const areas = ['All', ...new Set(locations.map(loc => loc.area))];

//   const filteredLocations =
//     selectedArea === 'All'
//       ? locations
//       : locations.filter(loc => loc.area === selectedArea);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thanks! Your question has been submitted.');
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Hero */}
//       <section className="location-hero">
//         <div className="hero-content">
//           <h1>Find Parking Across Harare</h1>
//           <p>Explore secure, verified parking in all major areas.</p>
//         </div>
//       </section>

//       <section className="location-page">
//         <h2>Available Parking Locations</h2>

//         {/* Filter Dropdown */}
//         <div className="filter-dropdown">
//           <label htmlFor="area">Filter by Area:</label>
//           <select
//             id="area"
//             value={selectedArea}
//             onChange={(e) => setSelectedArea(e.target.value)}
//           >
//             {areas.map((area, i) => (
//               <option key={i} value={area}>{area}</option>
//             ))}
//           </select>
//         </div>

//         {/* Grid */}
//         <div className="location-grid">
//           {filteredLocations.map((loc, index) => (
//             <div className="location-card" key={index}>
//               <h3>{loc.name}</h3>
//               <p><strong>Address:</strong> {loc.address}</p>
//               <p><strong>Area:</strong> {loc.area}</p>
//               <p><strong>Price:</strong> {loc.price}</p>
//               <p>
//                 <strong>Available Spots:</strong>{' '}
//                 <span className={loc.available_spots > 0 ? 'available' : 'full'}>
//                   {loc.available_spots > 0 ? loc.available_spots : 'Full'}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Map */}
//         <h3>Map View</h3>
//         <div className="map-wrapper">
//           <MapContainer
//             center={[-17.8292, 31.0522]}
//             zoom={13}
//             scrollWheelZoom={false}
//             style={{ height: '400px', width: '100%', borderRadius: '12px' }}
//           >
//             <TileLayer
//               attribution='&copy; OpenStreetMap contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <FitBounds locations={filteredLocations} />
//             {filteredLocations.map((loc, i) => (
//               <Marker key={i} position={[loc.lat, loc.lng]} icon={markerIcon}>
//                 <Popup>
//                   <strong>{loc.name}</strong><br />
//                   {loc.address}<br />
//                   {loc.available_spots > 0
//                     ? `${loc.available_spots} spots available`
//                     : 'Full'}
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>

//         {/* Contact Form */}
//         <section className="contact-section">
//           <h2>Ask a Question</h2>
//           <form onSubmit={handleSubmit} className="contact-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//             <textarea
//               placeholder="Your Question"
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               required
//             ></textarea>
//             <button type="submit">Submit</button>
//           </form>
//         </section>

//         {/* Contact Info */}
//         <section className="contact-info">
//           <h2>Contact Us</h2>
//           <p>Have questions or need help? Get in touch with our team below.</p>
//           <div className="contact-details">
//             <p><strong>📧 Email:</strong> <a href="mailto:support@blessypark.com">support@blessypark.com</a></p>
//             <p><strong>📞 Phone:</strong> <a href="tel:+263779054714">+263 77 905 4714</a></p>
//             <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/27704985629" target="_blank" rel="noopener noreferrer">+27 704 985 629</a></p>
//             <p><strong>📍 Address:</strong> 45 Nelson Mandela Ave, Harare</p>
//             <p><strong>🕐 Hours:</strong> Mon–Fri 8am–6pm, Sat 9am–1pm</p>
//           </div>
//         </section>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Location;










// import React, { useState, useEffect } from 'react';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';
// import './Location.css';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { supabase } from '../../supabaseClient';
// import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
// import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// // Custom marker icon
// const markerIcon = new L.Icon({
//   iconUrl: markerIconUrl,
//   shadowUrl: markerShadowUrl,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// // Fit map to markers
// const FitBounds = ({ locations }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (locations.length > 0) {
//       const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
//       map.fitBounds(bounds, { padding: [50, 50] });
//     }
//   }, [locations, map]);

//   return null;
// };

// const Location = () => {
//   const [locations, setLocations] = useState([]);
//   const [selectedArea, setSelectedArea] = useState('All');
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   // Fetch parking data
//   useEffect(() => {
//     const fetchLocations = async () => {
//       const { data, error } = await supabase.from('parking_spaces').select('*');
//       if (error) {
//         console.error('Error fetching data:', error);
//       } else {
//         setLocations(data);
//       }
//     };
//     fetchLocations();
//   }, []);

//   // Get unique areas for dropdown
//   const areas = ['All', ...new Set(locations.map(loc => loc.area))];

//   // Filter by area
//   const filteredLocations =
//     selectedArea === 'All'
//       ? locations
//       : locations.filter(loc => loc.area === selectedArea);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thanks! Your question has been submitted.');
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Hero */}
//       <section className="location-hero">
//         <div className="hero-content">
//           <h1>Find Parking Across Harare</h1>
//           <p>Explore secure, verified parking in all major areas.</p>
//         </div>
//       </section>

//       <section className="location-page">
//         <h2>Available Parking Locations</h2>

//         {/* Filter Dropdown */}
//         <div className="filter-dropdown">
//           <label htmlFor="area">Filter by Area:</label>
//           <select
//             id="area"
//             value={selectedArea}
//             onChange={(e) => setSelectedArea(e.target.value)}
//           >
//             {areas.map((area, i) => (
//               <option key={i} value={area}>{area}</option>
//             ))}
//           </select>
//         </div>

//         {/* Grid */}
//         <div className="location-grid">
//           {filteredLocations.length === 0 ? (
//             <p>No parking locations available in this area.</p>
//           ) : (
//             filteredLocations.map((loc, index) => (
//               <div className="location-card" key={index}>
//                 <h3>{loc.name}</h3>
//                 <p><strong>Address:</strong> {loc.address}</p>
//                 <p><strong>Area:</strong> {loc.area}</p>
//                 <p><strong>Price:</strong> ${loc.price}</p>
//                 <p>
//                   <strong>Available Spots:</strong>{' '}
//                   <span className={loc.available_spots > 0 ? 'available' : 'full'}>
//                     {loc.available_spots > 0 ? loc.available_spots : 'Full'}
//                   </span>
//                 </p>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Map */}
//         <h3>Map View</h3>
//         <div className="map-wrapper">
//           <MapContainer
//             center={[-17.8292, 31.0522]}
//             zoom={13}
//             scrollWheelZoom={false}
//             style={{ height: '400px', width: '100%', borderRadius: '12px' }}
//           >
//             <TileLayer
//               attribution='&copy; OpenStreetMap contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <FitBounds locations={filteredLocations} />
//             {filteredLocations.map((loc, i) => (
//               <Marker key={i} position={[loc.lat, loc.lng]} icon={markerIcon}>
//                 <Popup>
//                   <strong>{loc.name}</strong><br />
//                   {loc.address}<br />
//                   {loc.available_spots > 0
//                     ? `${loc.available_spots} spots available`
//                     : 'Full'}
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>

//         {/* Contact Form */}
//         <section className="contact-section">
//           <h2>Ask a Question</h2>
//           <form onSubmit={handleSubmit} className="contact-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//             <textarea
//               placeholder="Your Question"
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               required
//             ></textarea>
//             <button type="submit">Submit</button>
//           </form>
//         </section>

//         {/* Contact Info */}
//         <section className="contact-info">
//           <h2>Contact Us</h2>
//           <p>Have questions or need help? Get in touch with our team below.</p>
//           <div className="contact-details">
//             <p><strong>📧 Email:</strong> <a href="mailto:support@blessypark.com">support@blessypark.com</a></p>
//             <p><strong>📞 Phone:</strong> <a href="tel:+263779054714">+263 77 905 4714</a></p>
//             <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/27704985629" target="_blank" rel="noopener noreferrer">+27 704 985 629</a></p>
//             <p><strong>📍 Address:</strong> 45 Nelson Mandela Ave, Harare</p>
//             <p><strong>🕐 Hours:</strong> Mon–Fri 8am–6pm, Sat 9am–1pm</p>
//           </div>
//         </section>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Location;








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

// Custom Leaflet marker icon
const markerIcon = new L.Icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Fit map bounds to markers
const FitBounds = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);

  return null;
};

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Fetch parking data
  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase.from('parking_spaces').select('*');
      if (error) {
        console.error('Error fetching parking spaces:', error);
      } else {
        setLocations(data);
      }
    };
    fetchLocations();
  }, []);

  // Unique areas for dropdown filter
  const areas = ['All', ...new Set(locations.map(loc => loc.area))];

  // Filter locations by selected area
  const filteredLocations =
    selectedArea === 'All'
      ? locations
      : locations.filter(loc => loc.area === selectedArea);

  // Contact form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! Your question has been submitted.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="location-hero">
        <div className="hero-content">
          <h1>Find Parking Across Harare</h1>
          <p>Explore secure, verified parking in all major areas.</p>
        </div>
      </section>

      <section className="location-page">
        <h2>Available Parking Locations</h2>

        {/* Filter Dropdown */}
        <div className="filter-dropdown">
          <label htmlFor="area">Filter by Area:</label>
          <select
            id="area"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {areas.map((area, i) => (
              <option key={i} value={area}>{area}</option>
            ))}
          </select>
        </div>

        {/* Selected Area Heading */}
        <div className="selected-area-title">
          <h3>
            Showing results for:{' '}
            <span>{selectedArea === 'All' ? 'All Areas' : selectedArea}</span>
          </h3>
        </div>

        {/* Parking Cards */}
        <div className="location-grid">
          {filteredLocations.length === 0 ? (
            <p className="no-results">No parking locations available in this area.</p>
          ) : (
            filteredLocations.map((loc, index) => (
              <div className="location-card" key={index}>
                <h3>{loc.name}</h3>
                <p><strong>Address:</strong> {loc.address}</p>
                <p><strong>Area:</strong> {loc.area}</p>
                <p><strong>Price:</strong> ${loc.price}</p>
                <p>
                  <strong>Available Spots:</strong>{' '}
                  <span className={loc.available_spots > 0 ? 'available' : 'full'}>
                    {loc.available_spots > 0 ? loc.available_spots : 'Full'}
                  </span>
                </p>
              </div>
            ))
          )}
        </div>

        {/* Map Section */}
        <h3>Map View</h3>
        <div className="map-wrapper">
          <MapContainer
            center={[-17.8292, 31.0522]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%', borderRadius: '12px' }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FitBounds locations={filteredLocations} />
            {filteredLocations.map((loc, i) => (
              <Marker key={i} position={[loc.lat, loc.lng]} icon={markerIcon}>
                <Popup>
                  <strong>{loc.name}</strong><br />
                  {loc.address}<br />
                  {loc.available_spots > 0
                    ? `${loc.available_spots} spots available`
                    : 'Full'}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Contact Form */}
        <section className="contact-section">
          <h2>Ask a Question</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Question"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>Have questions or need help? Get in touch with our team below.</p>
          <div className="contact-details">
            <p><strong>📧 Email:</strong> <a href="mailto:support@blessypark.com">support@blessypark.com</a></p>
            <p><strong>📞 Phone:</strong> <a href="tel:+263779054714">+263 77 905 4714</a></p>
            <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/27704985629" target="_blank" rel="noopener noreferrer">+27 704 985 629</a></p>
            <p><strong>📍 Address:</strong> 45 Nelson Mandela Ave, Harare</p>
            <p><strong>🕐 Hours:</strong> Mon–Fri 8am–6pm, Sat 9am–1pm</p>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Location;
