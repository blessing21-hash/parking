









import React, { useEffect, useState } from 'react';
import '../Components/Customers.css';
import blessing from '../assets/images/blessing.jpg';
import kelly from '../assets/images/kelly.jpg';
import petros from '../assets/images/petros.jpg';
import tinashe from '../assets/images/tinashe.jpg';
import ashely from '../assets/images/ashely.jpg';
import tammia from '../assets/images/tammia.jpg';

const Customers = () => {
  const reviews = [
    {
      quote: "Simple and easy-to-use app, perfect for my daily commute to work.",
      name: "Blessing Kusi",
      location: "Harare",
      image: blessing
    },
    {
      quote: "Amazing options for car parking spots around our city!",
      name: "Kelly Simmons",
      location: "Avondale",
      image: kelly
    },
    {
      quote: "Thank you for effective and expedient help. Stay awesome!",
      name: "Petros Small",
      location: "Westgate",
      image: petros
    },
    {
      quote: "It’s now easier to plan my errands with guaranteed parking.",
      name: "Tinashe Zenda",
      location: "Belvedere",
      image: tinashe
    },
    {
      quote: "Great service and reliable availability around Harare!",
      name: "Ashely Mlauzi",
      location: "Highlands",
      image: ashely
    },
    {
      quote: "I don’t have to circle around the city anymore. BlessyPark is it!",
      name: "Tammia Mufaro",
      location: "Greendale",
      image: tammia
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const visibleCards = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length]
  ];

  return (
    <section className="customers">
      <h2>What Our <br /> Customers Say</h2>

      <div className="carousel-container">
        <div className="carousel-track">
          {visibleCards.map((review, i) => (
            <div className="customers-card" key={i}>
              <div className="quote-icon">”</div>
              <p>{review.quote}</p>
              <h4>{review.name}</h4>
              <small>{review.location}</small>
              <img src={review.image} alt={review.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;




