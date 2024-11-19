'use client';

import { useEffect, useState } from 'react';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch('https://lichess.org/api/tournament', {
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch tournaments: ${response.statusText}`);
        }

        const data = await response.json();
        
      
        const allTournaments = [
          ...(data.created || []),
          ...(data.started || []),
          ...(data.finished || [])
        ];

        setTournaments(allTournaments);
      } catch (err) {
        console.error('Error fetching tournaments:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const formatTimeControl = (clock) => {
    if (!clock) return 'N/A';
    return `${clock.limit / 60}+${clock.increment}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Lichess Tournaments</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>Error: {error}</p>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">Loading tournaments...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tournaments.map((tournament) => (
            <div 
              key={tournament.id} 
              className="border rounded-lg p-4 shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{tournament.fullName}</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">Time Control:</span>{' '}
                  {formatTimeControl(tournament.clock)}
                </p>
                <p>
                  <span className="font-medium">Players:</span>{' '}
                  {tournament.nbPlayers || 0}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{' '}
                  {tournament.status || 'Unknown'}
                </p>
                {tournament.startsAt && (
                  <p>
                    <span className="font-medium">Starts:</span>{' '}
                    {new Date(tournament.startsAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!isLoading && tournaments.length === 0 && !error && (
        <div className="text-center text-gray-500 py-8">
          No tournaments found.
        </div>
      )}
    </div>
  );
}