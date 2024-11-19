'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-xl">♟️ LiStats</div>
          <div className="flex gap-4">
            <Link href="/profile" className="hover:text-blue-600">Profile</Link>
            <Link href="/tournaments" className="hover:text-blue-600">Tournaments</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Check Your Lichess Stats
          </h1>
          <p className="text-gray-600 mb-8">
            Quick access to profiles and tournaments
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              href="/profile" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Player
            </Link>
            <Link 
              href="/tournaments" 
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              View Tournaments
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2">👤 Player Profiles</h2>
            <p className="text-gray-600 mb-4">
              Look up any player to see their ratings, games, and stats
            </p>
            <Link 
              href="/profile" 
              className="text-blue-600 hover:underline"
            >
              Search profiles →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2">🏆 Tournaments</h2>
            <p className="text-gray-600 mb-4">
              Browse ongoing and upcoming chess tournaments
            </p>
            <Link 
              href="/tournaments" 
              className="text-blue-600 hover:underline"
            >
              View tournaments →
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
}