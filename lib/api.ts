import axios from "axios";

const url = "http://localhost:3000";

export const getPodcasts = () => {
  const data = axios.get(`${url}/api/podcasts`).then((res) => res.data);

  return data;
};
