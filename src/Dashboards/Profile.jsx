import React from 'react';
import './Profile.css'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <img src={user?.avatar} alt="User Avatar" className="profile-avatar" />
        <div>
          <h2>{user?.name}</h2>
          <p>Email: {user?.email}</p>
          {/* Add more profile details here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
