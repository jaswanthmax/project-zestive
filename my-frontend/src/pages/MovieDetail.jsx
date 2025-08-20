import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movies from "../utils/MoviesStored";
import { getMovieDetails } from "../utils/castStore";
import "../styles/MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);
  const [movieDetails, setMovieDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedMovieDetails = getMovieDetails();
    if (storedMovieDetails && storedMovieDetails[id]) {
      setMovieDetails(storedMovieDetails[id]);
    }
  }, [id]);

  if (!movie || !movieDetails) return <p>Movie not found</p>;

  // Open/close modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="movie-details-wrapper">
      <div className="movie-top-section">
        <img src={movie.image} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.rating} | {movie.languages.join(", ")} | {movie.duration}</p>
          <button className="view-details-btn" onClick={openModal}>
            View Details
          </button>
        </div>
      </div>


      <div>
        <h1>Now showing</h1>

      </div>

      {/* Modal for Movie Details */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal-btn" onClick={closeModal}>X</button>
            <h2>Movie Details: {movie.title}</h2>
            <div className="modal-content">
              <div className="synopsis">
                <h3>Synopsis</h3>
                <p>{movieDetails.synopsis}</p>
                <p><strong>Genres:</strong> {movieDetails.genres}</p>
                <p><strong>Languages:</strong> {movie.languages.join(", ")}</p>
              </div>

              <div className="cast">
                <h3>Cast</h3>
                <div className="cast-list">
                  {movieDetails.cast?.map((castMember, index) => (
                    <div key={index} className="cast-member">
                      <img
                        src={castMember.image || "/images/default-cast-image.jpg"}
                        alt={castMember.name}
                        className="cast-image"
                      />
                      <p>{castMember.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="videos">
                <h3>Videos</h3>
                <video controls>
                  <source src={movieDetails.trailer} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="posters">
                <h3>Posters</h3>
                {movieDetails.posters?.map((poster, index) => (
                  <img key={index} src={poster} alt={`Poster ${index + 1}`} className="poster-image" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
