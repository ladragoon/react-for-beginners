import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div>
      <img src={movie.medium_cover_image} />
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.hasOwnProperty("genres") ?
          movie.genres.map((g) => (
            <li key={g}>{g}</li>
          )) : null}
      </ul>
    </div>
  );
}
export default Movie;