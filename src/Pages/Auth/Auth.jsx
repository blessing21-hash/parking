





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Auth.css';

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   const toggleForm = () => setIsLogin(!isLogin);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Dummy user info — replace with actual login API response
//     const userData = {
//       name: 'Blessing Kusiwani',
//       avatar: 'https://i.pravatar.cc/150?img=32',
//       email: 'user@example.com',
//     };

//     // Save user data to localStorage
//     localStorage.setItem('user', JSON.stringify(userData));

//     // Redirect to home or dashboard
//     navigate('/home');
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <>
//             <input type="text" placeholder="Username" required />
//             <input type="email" placeholder="Email" required />
//           </>
//         )}
//         {isLogin && <input type="text" placeholder="Username or Email" required />}
//         <input type="password" placeholder="Password" required />
//         <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//       </form>

//       <p onClick={toggleForm} className="toggle-link">
//         {isLogin
//           ? "Don't have an account? Register"
//           : "Already have an account? Login"}
//       </p>
//     </div>
//   );
// };

// export default Auth;








// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { supabase } from '../../supabaseClient'   // Update path as necessary
// import './Auth.css'

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const toggleForm = () => setIsLogin(!isLogin)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       if (isLogin) {
//         const { data, error } = await supabase.auth.signInWithPassword({
//           email,
//           password
//         })

//         if (error) {
//           alert('Login failed: ' + error.message)
//           return
//         }

//         console.log('Login successful:', data)
//         localStorage.setItem('user', JSON.stringify(data.user))

//         navigate('/home')
//       } else {
//         const { data, error } = await supabase.auth.signUp({
//           email,
//           password
//         })

//         if (error) {
//           alert('Registration failed: ' + error.message)
//           return
//         }

//         console.log('Registration successful:', data)
//         alert('Registration successful! Please log in.')
//         setIsLogin(true)
//       }
//     } catch (error) {
//       console.error('Auth error:', error.message)
//       alert('An unexpected error occurred')
//     }
//   }

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//       </form>

//       <p onClick={toggleForm} className="toggle-link">
//         {isLogin
//           ? "Don't have an account? Register"
//           : "Already have an account? Login"}
//       </p>
//     </div>
//   )
// }

// export default Auth






import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'
import './Auth.css'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const toggleForm = () => setIsLogin(!isLogin)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })

        if (error) {
          alert('Login failed: ' + error.message)
          return
        }

        console.log('Login successful:', data)
        localStorage.setItem('user', JSON.stringify(data.user))

        navigate('/home')
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password
        })

        if (error) {
          alert('Registration failed: ' + error.message)
          return
        }

        console.log('Registration successful:', data)

        if (data.user?.confirmed_at) {
          alert('Your email is already confirmed. You can now log in.')
        } else {
          alert('Registration successful! Please check your email to confirm your account before logging in.')
        }

        setIsLogin(true)
      }
    } catch (error) {
      console.error('Auth error:', error.message)
      alert('An unexpected error occurred')
    }
  }

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>

      <p onClick={toggleForm} className="toggle-link">
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  )
}

export default Auth
