import { Link } from "react-router-dom";
import movies from "../utils/MoviesStored";  // Correct path to MoviesStored.js
import "../styles/Movies.css";  // Ensure correct CSS path

const Movies = ({ city }) => {
  // Filter movies based on the selected city
  const filteredMovies = movies.filter((movie) =>
    movie.cities.includes(city)
  );

  return (
    <section className="now-showing-section">
      <h2 className="now-showing-title">Now Showing in {city}</h2>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-meta">
              {movie.rating} | {movie.languages.join(" ")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Movies;
