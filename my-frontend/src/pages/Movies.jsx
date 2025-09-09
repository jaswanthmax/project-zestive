import { Link } from "react-router-dom";
import movies from "../utils/MoviesStored";
import "../styles/Movies.css";

const Movies = ({ city }) => {
  console.log("Movies component, selected city:", city);

  const filteredMovies = movies.filter((movie) =>
    movie.cities.some((c) => c.toLowerCase() === city.toLowerCase())
  );

  return (
    <section className="now-showing-section">
      <h2 className="now-showing-title">Now Showing in {city}</h2>
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              state={{ city }} 
              className="movie-card"
              key={movie.id}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="movie-image"
              />
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-meta">
                {movie.rating} | {movie.languages.join(" ")}
              </p>
            </Link>
          ))
        ) : (
          <p className="no-movies">
            {`No movies found for "${city}". Try another city.`}
          </p>
        )}
      </div>
    </section>
  );
};

export default Movies;
