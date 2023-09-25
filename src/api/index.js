import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchMovies = async (endpoint) => {
  const response = await instance.get(endpoint, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
