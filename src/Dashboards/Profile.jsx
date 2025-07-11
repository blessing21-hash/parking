




import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem('user')) || {
    name: 'Blessing Kusiwani',
    email: 'blessing@example.com',
    username: 'blessing21',
    phone: '+263 77 000 0000',
    role: 'User',
    joinDate: '2024-05-01',
    avatar: '/default-avatar.png',
  };

  const [user, setUser] = useState(storedUser);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    setEditMode(false);
  };

  return (
    <div className="dashboard-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <img
          src={user?.avatar}
          alt="User Avatar"
          className="profile-avatar"
        />

        {editMode ? (
          <form className="profile-form" onSubmit={handleSave}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Avatar URL:
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="save-btn">Save</button>
          </form>
        ) : (
          <div className="profile-details">
            <h2>{user?.name}</h2>
            <p><strong>Username:</strong> {user?.username}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Phone:</strong> {user?.phone}</p>
            <p><strong>Role:</strong> {user?.role}</p>
            <p><strong>Joined:</strong> {user?.joinDate}</p>
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

