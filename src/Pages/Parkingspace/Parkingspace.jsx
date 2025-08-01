import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'

const ParkingSpaces = () => {
  const [parkingSpaces, setParkingSpaces] = useState([])

  useEffect(() => {
    fetchParkingSpaces()
  }, [])

  const fetchParkingSpaces = async () => {
    const { data, error } = await supabase
      .from('ParkingSpaces')
      .select('*')

    if (error) {
      console.error('Error fetching parking spaces:', error)
    } else {
      setParkingSpaces(data)
    }
  }

  return (
    <div>
      <h2>Available Parking Spaces</h2>
      <div className="parking-list">
        {parkingSpaces.map(space => (
          <div key={space.id} className="parking-card">
            <h3>{space.title}</h3>
            <img src={space.image_url} alt={space.title} width="150" />
            <p>{space.description}</p>
            <p>Location: {space.location}</p>
            <p>Price per hour: ${space.price_per_hour}</p>
            <p>Available: {space.available ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ParkingSpaces
