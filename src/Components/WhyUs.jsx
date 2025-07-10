


import React from 'react';
import './WhyUs.css';
import whyImage from '../assets/images/whyus.png'; // Replace with your actual image path

const WhyUS = () => {
  return (
    <section className="why-choose">
      <div className="why-choose__image">
        <img src={whyImage} alt="car handover" />
      </div>
      <div className="why-choose__content">
        <h2>Why Choose <span>BlessyPark</span></h2>
        <p>
          Short Stay and Valet parking options are just a few minutes' walk away
          from the terminal. If you're opting for Long Stay, the car park is just
          10 minutes away by bus and shuttles run every 10–15 minutes.
        </p>
        <div className="why-choose__benefits">
          <div>
            <span>1</span>
            <p>Save Money</p>
          </div>
          <div>
            <span>2</span>
            <p>Save Time</p>
          </div>
          <div>
            <span>3</span>
            <p>Save Stress</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUS;