import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4b190e449f27cff49b7be3cb0384f9d7';

export async function getFilms() {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  //   console.log(response.data);
  //   console.log(response.data.results);
  return response.data;
}

export async function getFilmById(filmId = 504949) {
  const response = await axios.get(
    `${BASE_URL}movie/504949?api_key=${API_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
}

export async function getFilmByQuery(query = 'batman') {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    // search/movie?api_key=${TOKEN}&language=en-US&&page=${params[1]}&include_adult=false
  );
  console.log(response.data);
  return response.data;
}

export async function getFilmCast() {
  const response = await axios.get(
    `${BASE_URL}movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
}

export async function getFilmReviews() {
  const response = await axios.get(
    `${BASE_URL}movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  console.log(response.data);
  return response.data;
}
// API Key: 4b190e449f27cff49b7be3cb0384f9d7

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>       trends

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false        film for query

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US      all about film

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US     cast

//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1      reviews
