import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4b190e449f27cff49b7be3cb0384f9d7';

export async function getFilms() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
}

export async function getFilmById(filmId) {
  const response = await axios.get(
    `${BASE_URL}movie/${filmId}?api_key=${API_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
}

export async function getFilmByQuery(query) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  console.log(response.data);
  return response.data;
}

export async function getFilmCast(filmId) {
  const response = await axios.get(
    `${BASE_URL}movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
}

export async function getFilmReviews(filmId) {
  const response = await axios.get(
    `${BASE_URL}movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  console.log(response.data);
  return response.data;
}
