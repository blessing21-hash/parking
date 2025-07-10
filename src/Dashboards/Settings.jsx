import React, { useState } from 'react';
import './Settings.css'

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="dashboard-container">
      <h1>Settings</h1>
      <form className="settings-form">
        <label>
          <input 
            type="checkbox" 
            checked={emailNotifications} 
            onChange={() => setEmailNotifications(!emailNotifications)} 
          />
          Email Notifications
        </label>
        <br />
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
