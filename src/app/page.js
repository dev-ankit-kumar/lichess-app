import Link from 'next/link';
import Profile from '../../tabs/profile';
import Leaderboards from '../../tabs/leaderboards';
import Tournaments from '../../tabs/tournaments';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <h1>Lichess App</h1>
      
        <Link href="profile">User Profile</Link> {'   '}
        <Link href="/leaderboards">Leaderboards</Link> {'   '}
        <Link href="/tournaments">Tournaments</Link>
      
      <Profile/>
      <Leaderboards/>
      <Tournaments/>
      
    </div>
  );
}
