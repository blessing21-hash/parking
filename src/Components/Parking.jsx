import React from "react";
import './Parking.css';

const plans= [
  {
    price : 20,
    name : 'Premium',
    description : 'This plan includes all of the services that come with a parking space!'
  },

  {
    price : 15,
    name : 'Standard',
    description : 'Get the unlimited time and a regular parking spot at one of the lots.'
  },

  {
    price : 10,
    name : 'Basic',
    description : ' A limited plan perfect for a short stay with a random parking spots.'
  },

  {
    price : 5,
    name : 'Economy',
    description : 'Get a spot for parking at the time of arrival. No extra services.'
  },


];

const Parking = () => {
   return (   
      <section  className="parking">
        <h2>Parking Options and Rates</h2>
        <div className="parking-cards"> {plans.map ((plan, index)  => ( 
            <div className="card" key={index}>

                <h3><span>$</span> {plan.price} <small>/day</small></h3>

                <h4>{plan.name}</h4>

                <p>{plan.description}</p>
                       <button>Learn More</button>

            </div>
        ))}

        </div>

      </section>


   );


};

export default Parking;