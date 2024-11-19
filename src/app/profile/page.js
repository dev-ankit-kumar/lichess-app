'use client';

import { useState } from 'react';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProfile = async () => {
    if (!username) return;
    setIsLoading(true);

    try {
      const response = await fetch(`https://lichess.org/api/user/${username}`);
      if (!response.ok) {
        alert('Player not found!');
        return;
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      alert('Error fetching profile!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl text-white font-bold mb-4">⚡ Quick Lichess Profile</h1>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Lichess username..."
          className="border p-2 rounded flex-1"
          onKeyDown={(e) => e.key === 'Enter' && fetchProfile()}
        />
        <button 
          onClick={fetchProfile}
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? '...' : 'Go!'}
        </button>
      </div>

      {userData && (
        <div className="border rounded p-4 space-y-3">
          <div className="flex items-center gap-3">
            
            <div>
              <h2 className="text-xl text-white font-bold">{userData.username}</h2>
              <p className="text-gray-600">
                Games played: {userData.count?.all || '0'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded">
            <div>
              <p className="font-bold text-sm">🏃 Blitz</p>
              <p>{userData.perfs?.blitz?.rating || 'N/A'}</p>
            </div>
            <div>
              <p className="font-bold text-sm">⚡ Bullet</p>
              <p>{userData.perfs?.bullet?.rating || 'N/A'}</p>
            </div>
            <div>
              <p className="font-bold text-sm">🎯 Rapid</p>
              <p>{userData.perfs?.rapid?.rating || 'N/A'}</p>
            </div>
            <div>
              <p className="font-bold text-sm">♟️ Classical</p>
              <p>{userData.perfs?.classical?.rating || 'N/A'}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <p className="font-bold text-sm mb-2">📊 Quick Stats</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>Wins: {userData.count?.win || '0'}</p>
              <p>Losses: {userData.count?.loss || '0'}</p>
              <p>Draws: {userData.count?.draw || '0'}</p>
              <p>Playing: {userData.playing ? 'Yes' : 'No'}</p>
            </div>
          </div>

          {userData.profile?.bio && (
            <p className="text-gray-600 text-sm border-t pt-3">
              {userData.profile.bio}
            </p>
          )}
        </div>
      )}
    </div>
  );
}