import { fetchLeaderboards } from '../lib/lichess';

export default function Leaderboards({ leaderboards }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Leaderboards</h1>
      <pre>{JSON.stringify(leaderboards, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  const leaderboards = await fetchLeaderboards();
  return { props: { leaderboards } };
}
