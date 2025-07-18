
// import React from 'react';
// import './Payment.css';

// const Payment = ({ bookingId, user }) => {
//   const handlePayment = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/payments', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           user,
//           bookingId,
//           amount: 10,
//           method: 'MockPay',
//         }),
//       });

//       if (res.ok) {
//         alert('Payment Successful!');
//       } else {
//         alert('Payment Failed!');
//       }
//     } catch (err) {
//       console.error('Payment Error', err);
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h3>Proceed with Payment</h3>
//       <button onClick={handlePayment}>Pay $10</button>
//     </div>
//   );
// };

// export default Payment;





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Payment.css';

// const PaymentPage = () => {
//   const { bookingId } = useParams();
//   const [booking, setBooking] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/bookings/${bookingId}`)
//       .then(res => res.json())
//       .then(setBooking);
//   }, [bookingId]);

//   const handlePayment = async () => {
//     await fetch('http://localhost:5000/api/payments', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         user: booking.user,
//         bookingId,
//         amount: 10,
//         method: 'MockPay',
//       }),
//     });
//     alert('Payment Successful!');
//   };

//   if (!booking) return <p>Loading...</p>;

//   return (
//     <div className="payment-container">
//       <h2>Payment for Booking</h2>
//       <p>Location: {booking.location}</p>
//       <p>Date: {booking.date}</p>
//       <button onClick={handlePayment}>Pay $10</button>
//     </div>
//   );
// };

// export default PaymentPage;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Payment.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const PaymentPage = ({ booking, onPaymentSuccess }) => {
  const { bookingId } = useParams();
  const [amount, setAmount] = useState(0);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    if (booking) {
      const calculatedAmount = booking.duration * 5; // Example: $5 per hour
      setAmount(calculatedAmount);
    }
  }, [booking]);

  if (!booking) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>No booking found.</h2>
          <p>Please make a booking first.</p>
        </div>
        <Footer />
      </>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();

    const paymentDetails = {
      id: Date.now(),
      user: booking.user || 'Guest User',
      amount,
      bookingId: booking.id,
    };

    if (onPaymentSuccess) {
      onPaymentSuccess(paymentDetails);
    }
    setPaid(true);
  };

  return (
    <>
      <Navbar />
      <div className="payment-container">
        <h2>Payment for Booking #{bookingId}</h2>
        <p>Location: <strong>{booking.location}</strong></p>
        <p>Date: <strong>{booking.date}</strong></p>
        <p>Duration: <strong>{booking.duration} hour(s)</strong></p>

        {!paid ? (
          <form className="payment-form" onSubmit={handlePayment}>
            <label>
              Amount to Pay (USD):
              <input
                type="number"
                value={amount}
                readOnly
              />
            </label>
            <button type="submit">Pay Now</button>
          </form>
        ) : (
          <div className="payment-success">
            <h3>Payment Successful!</h3>
            <p>Thank you for your payment of ${amount}.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
