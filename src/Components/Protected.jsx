// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;






import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return children
}

export default ProtectedRoute



// import React, { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
// import { supabase } from '../supabaseClient'  // adjust the path if necessary

// const ProtectedRoute = ({ children }) => {
//   const [loading, setLoading] = useState(true)
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     // Check Supabase session on mount
//     const checkSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession()

//       if (session) {
//         setSession(session)
//         localStorage.setItem('user', JSON.stringify(session.user))
//       } else {
//         localStorage.removeItem('user')
//       }
      
//       setLoading(false)
//     }

//     checkSession()
//   }, [])

//   if (loading) {
//     return <p>Loading...</p>  // optional: spinner or loader
//   }

//   if (!session) {
//     return <Navigate to="/auth" replace />
//   }

//   return children
// }

// export default ProtectedRoute
