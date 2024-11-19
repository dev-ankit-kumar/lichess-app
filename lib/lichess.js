import axios from 'axios';

const BASE_URL = 'https://lichess.org/api';

export const fetchUserProfile = async (username) => {
  const response = await axios.get(`${BASE_URL}/user/${username}`);
  return response.data;
};

export const fetchLeaderboards = async () => {
  const response = await axios.get(`${BASE_URL}/leaderboard`);
  return response.data;
};

export const fetchTournaments = async () => {
  const response = await axios.get(`${BASE_URL}/tournament`);
  return response.data;
};
