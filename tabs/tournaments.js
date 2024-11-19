'use client';

import { useEffect, useState } from 'react';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch('https://lichess.org/api/tournament');
        if (!response.ok) {
          throw new Error('Failed to fetch tournaments');
        }
        const data = await response.json();
        setTournaments(data || []); // Ensure data is an array or default to []
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Tournaments</h1>
      {tournaments.length > 0 ? (
        <ul>
          {tournaments.map((tournament, index) => (
            <li key={index}>
              <p>Name: {tournament.name}</p>
              <p>Status: {tournament.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tournaments found.</p>
      )}
    </div>
  );
}
