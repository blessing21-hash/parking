



import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  // Account
  const [username, setUsername] = useState('blessing_kusiwani');
  const [email] = useState('blessing@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Notifications
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [notificationFrequency, setNotificationFrequency] = useState('immediate');

  // Privacy
  const [profilePublic, setProfilePublic] = useState(true);

  // Appearance
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and save logic here
    alert('Settings saved!');
  };

  return (
    <div className="dashboard-container">
      <h1>Settings</h1>
      <form className="settings-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Account Settings</legend>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label>
            Email:
            <input type="email" value={email} readOnly />
          </label>

          <label>
            Current Password:
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </label>

          <label>
            New Password:
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>

          <label>
            Confirm New Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <label>
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
            />
            Enable Two-Factor Authentication
          </label>
        </fieldset>

        <fieldset>
          <legend>Notification Settings</legend>
          <label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            Email Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
            />
            SMS Notifications
          </label>

          <label>
            Notification Frequency:
            <select
              value={notificationFrequency}
              onChange={(e) => setNotificationFrequency(e.target.value)}
            >
              <option value="immediate">Immediate</option>
              <option value="daily">Daily Summary</option>
              <option value="weekly">Weekly Summary</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <legend>Privacy Settings</legend>
          <label>
            <input
              type="checkbox"
              checked={profilePublic}
              onChange={() => setProfilePublic(!profilePublic)}
            />
            Make Profile Public
          </label>
        </fieldset>

        <fieldset>
          <legend>Appearance</legend>
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            Enable Dark Mode
          </label>
        </fieldset>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
