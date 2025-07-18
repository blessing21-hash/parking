// import React, { useState } from 'react';
// import './Booking.css';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     location: '',
//     date: '',
//     time: '',
//     duration: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Booking submitted:', formData);
//     setSubmitted(true);
//   };

//   return (
// <div>
// <Navbar/>
//     <div className="booking-container">
        
//       <h2>Book a Parking Spot</h2>

//       {!submitted ? (
//         <form className="booking-form" onSubmit={handleSubmit}>
//           <label>
//             Location:
//             <select name="location" value={formData.location} onChange={handleChange} required>
//               <option value="">Select a location</option>
//               <option value="Westgate">Westgate</option>
//               <option value="CBD Harare">CBD Harare</option>
//               <option value="Avondale">Avondale</option>
//               <option value="Sam Levy Village">Sam Levy Village</option>
//             </select>
//           </label>

//           <label>
//             Date:
//             <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//           </label>

//           <label>
//             Time:
//             <input type="time" name="time" value={formData.time} onChange={handleChange} required />
//           </label>

//           <label>
//             Duration (in hours):
//             <input type="number" name="duration" value={formData.duration} onChange={handleChange} min="1" max="24" required />
//           </label>

//           <button type="submit">Confirm Booking</button>
//         </form>
//       ) : (
//         <div className="confirmation">
//           <h3>Booking Confirmed!</h3>
//           <p><strong>Location:</strong> {formData.location}</p>
//           <p><strong>Date:</strong> {formData.date}</p>
//           <p><strong>Time:</strong> {formData.time}</p>
//           <p><strong>Duration:</strong> {formData.duration} hour(s)</p>
//         <button type="submit"> Back</button>
//         </div>
//       )}
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default Booking;









import React, { useState } from 'react';
import './Booking.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Booking = ({ onNewBooking }) => {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    duration: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate booking submission (replace with real API call)
    const newBooking = {
      id: Date.now(),
      user: 'Guest User',
      location: formData.location,
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
    };

    if (onNewBooking) {
      onNewBooking(newBooking);  // Notify parent (e.g. App) or AdminDashboard
    }

    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="booking-container">
        <h2>Book a Parking Spot</h2>
        {!submitted ? (
          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Location:
              <select name="location" value={formData.location} onChange={handleChange} required>
                <option value="">Select a location</option>
                <option value="Westgate">Westgate</option>
                <option value="CBD Harare">CBD Harare</option>
                <option value="Avondale">Avondale</option>
                <option value="Sam Levy Village">Sam Levy Village</option>
              </select>
            </label>

            <label>
              Date:
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>

            <label>
              Time:
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </label>

            <label>
              Duration (in hours):
              <input type="number" name="duration" value={formData.duration} onChange={handleChange} min="1" max="24" required />
            </label>

            <button type="submit">Confirm Booking</button>
          </form>
        ) : (
          <div className="confirmation">
            <h3>Booking Confirmed!</h3>
            <p><strong>Location:</strong> {formData.location}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Duration:</strong> {formData.duration} hour(s)</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
