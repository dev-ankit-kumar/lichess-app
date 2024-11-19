'use client'; 

import { useEffect, useState } from 'react';

export default function Leaderboards() {
  const [leaderboards, setLeaderboards] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await fetch('https://lichess.org/api/leaderboard'); 
        if (!response.ok) {
          throw new Error(`Failed to fetch leaderboards: ${response.status}`);
        }
        const data = await response.json();

        setLeaderboards(data.users || []); 
      } catch (err) {
        console.error('Error fetching leaderboards:', err);
        setError(err.message);
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <div>
      <h1>Leaderboards</h1>
      {error && <p>Error: {error}</p>}
      {leaderboards.length === 0 && !error ? (
        <p>Loading leaderboards...</p>
      ) : (
        <ul>
          {leaderboards.map((board, index) => (
            <li key={index}>
              <h3>{board.username || 'Unnamed Player'}</h3>
              <p>Rating: {board.perfs?.blitz?.rating || 'N/A'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
