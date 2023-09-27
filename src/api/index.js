import axios from "axios";

const API_KEY = "4a9b0c305a27b4c267d2350dd326d912";
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

export const getDetailMoviePage = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieVideo = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getSimilarMovie = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/similar`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
