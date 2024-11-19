"use client"; // Add this directive at the top

import { useState } from 'react';
import { fetchUserProfile } from '../lib/lichess';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUserProfile(username);
      setProfile(data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search User Profile</h1>
      <input
        type="text"
        placeholder="Enter Lichess Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {profile && (
        <div>
          <h2>{profile.username}</h2>
          <p>Title: {profile.title || 'None'}</p>
          <p>Games Played: {profile.count?.all || 0}</p>
          <p>Perfs: {JSON.stringify(profile.perfs, null, 2)}</p>
        </div>
      )}
    </div>
  );
}
