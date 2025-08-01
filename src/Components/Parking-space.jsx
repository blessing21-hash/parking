import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'

const ParkingSpaces = () => {
  const [spaces, setSpaces] = useState([])

  useEffect(() => {
    fetchParkingSpaces()
  }, [])

  const fetchParkingSpaces = async () => {
    const { data, error } = await supabase
      .from('parking_spaces')
      .select('*')

    if (error) {
      console.error('Error fetching parking spaces:', error.message)
    } else {
      setSpaces(data)
    }
  }

  return (
    <div>
      <h2>Available Parking Spaces</h2>
      {spaces.map(space => (
        <div key={space.id}>
          <h3>{space.name}</h3>
          <p>Location: {space.location}</p>
          <p>Price: ${space.price}</p>
          <p>Available: {space.available ? 'Yes' : 'No'}</p>
          {space.image_url && <img src={space.image_url} alt={space.name} width="200" />}
        </div>
      ))}
    </div>
  )
}

export default ParkingSpaces
