





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy user info — replace with actual login API response
    const userData = {
      name: 'Blessing Kusiwani',
      avatar: 'https://i.pravatar.cc/150?img=32',
      email: 'user@example.com',
    };

    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect to home or dashboard
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
          </>
        )}
        {isLogin && <input type="text" placeholder="Username or Email" required />}
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>

      <p onClick={toggleForm} className="toggle-link">
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default Auth;
