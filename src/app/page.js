import Link from 'next/link';
import Profile from '../../tabs/profile';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <h1>Lichess App</h1>
      {/* <nav>
        <Link href="/profile">User Profile</Link> {' '}
        <Link href="/leaderboards">Leaderboards</Link> {' '}
        <Link href="/tournaments">Tournaments</Link>
      </nav> */}
      <Profile/>
      
    </div>
  );
}
