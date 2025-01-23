import axios from "axios";

// const API_KEY = "de8ca6f530a56b4c2a3ef5063b9bec55";
// const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZThjYTZmNTMwYTU2YjRjMmEzZWY1MDYzYjliZWM1NSIsIm5iZiI6MTcyOTU0MDYyMC45MTI5OTk5LCJzdWIiOiI2NzE2YjIwY2NhZWQ5ZWZlZmRmY2VkMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SFk_uzt6a3q_j-Go_-0JiihkNoHuRH6Qz8sJOkIcAq4",
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", options);
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, options);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, options);
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, options);
  return data.results;
};
