import { useParams } from 'react-router-dom';
import { getFilmById } from 'services/getFilms';

const MovieDetails = () => {
  const { movieId } = useParams();
  const film = getFilmById(movieId);
  return (
    <>
      <img></img>
    <div>Now showing product with id - {movieId}</div>)</>
};

export default MovieDetails;
