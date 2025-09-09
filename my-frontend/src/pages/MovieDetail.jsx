import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import movies from "../utils/MoviesStored";
import { getMovieDetails } from "../utils/castStore";
import TheatersStored from "../utils/TheatersStored";
import "../styles/MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const movieId = parseInt(id, 10);
  const movie = movies.find((m) => m.id === movieId);
  const selectedCity = location.state?.city;

  const [movieDetails, setMovieDetails] = useState(null);
  const [filteredTheaters, setFilteredTheaters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("synopsis");

  const normalizeCity = (city) => city?.toLowerCase().trim();

  useEffect(() => {
    const storedMovieDetails = getMovieDetails();
    if (storedMovieDetails && storedMovieDetails[movieId]) {
      setMovieDetails(storedMovieDetails[movieId]);
    }

    const storedTheaters =
      JSON.parse(localStorage.getItem("theaters")) || TheatersStored;

    const matchedTheaters = storedTheaters.filter(
      (theater) => normalizeCity(theater.city) === normalizeCity(selectedCity)
    );

    setFilteredTheaters(matchedTheaters);
  }, [movieId, selectedCity]);

  if (!movie || !movieDetails) return <p>Movie not found</p>;

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleBookingClick = (time, theaterName, screenName) => {
    navigate(`/seat-selection/${movieId}`, {
      state: {
        movieTitle: movie.title,
        movieId,
        showtime: time,
        theaterName,
        screenName,
        city: selectedCity || "",
      },
    });
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="movie-details-wrapper">
      <div className="movie-top-section">
        <img src={movie.image} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.rating}</p>
          <button className="view-details-btn" onClick={openModal}>
            View Details
          </button>
        </div>
      </div>

      <div className="theaters-section">
        <h2>Theaters Showing {movie.title} in {selectedCity}</h2>
        {filteredTheaters.length === 0 ? (
          <p>No theaters available for this movie in {selectedCity}.</p>
        ) : (
          filteredTheaters.map((theater) => (
            <div key={theater.id} className="theater-card">
              <div className="theater-header">
                <img
                  src={theater.logo}
                  alt={theater.name}
                  className="theater-logo"
                />
                <div>
                  <h3>{theater.name}</h3>
                  <p>{theater.location}</p>
                  <small>
                    {theater.distance} |{" "}
                    {theater.cancellable ? "Cancellable" : "Non-cancellable"}
                  </small>
                </div>
              </div>

              {theater.screens.map((screen, sIndex) => (
                <div key={sIndex} className="screen-section">
                  <h4>{screen.name}</h4>
                  <div className="booking-buttons">
                    {screen.showtimes.map((time, tIndex) => (
                      <button
                        key={tIndex}
                        className="booking-btn"
                        onClick={() =>
                          handleBookingClick(time, theater.name, screen.name)
                        }
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal-btn" onClick={closeModal}>
              ×
            </button>

            {/* Navigation Links */}
            <div className="modal-nav-container">
              <div className="modal-nav">
                <button
                  className={activeLink === "synopsis" ? "nav-btn active" : "nav-btn"}
                  onClick={() => {
                    handleNavClick("synopsis");
                    document.getElementById("synopsis").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Synopsis
                </button>
                <button
                  className={activeLink === "genres" ? "nav-btn active" : "nav-btn"}
                  onClick={() => {
                    handleNavClick("genres");
                    document.getElementById("genres").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Genres
                </button>
                <button
                  className={activeLink === "language" ? "nav-btn active" : "nav-btn"}
                  onClick={() => {
                    handleNavClick("language");
                    document.getElementById("language").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Language
                </button>
                <button
                  className={activeLink === "cast" ? "nav-btn active" : "nav-btn"}
                  onClick={() => {
                    handleNavClick("cast");
                    document.getElementById("cast").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Cast
                </button>
                <button
                  className={activeLink === "videos" ? "nav-btn active" : "nav-btn"}
                  onClick={() => {
                    handleNavClick("videos");
                    document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Videos
                </button>
                <button
                  className={activeLink === "posters" ? "nav-btn active" : "nav-btn"}
                  onClick={() => {
                    handleNavClick("posters");
                    document.getElementById("posters").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Posters
                </button>
              </div>
            </div>

            <div className="modal-content">
              <div className="synopsis" id="synopsis">
                <h3>Synopsis</h3>
                <p>{movieDetails.synopsis}</p>
              </div>
              <div className="genres" id="genres">
                <h3>Genres</h3>
                <p>{movieDetails.genres}</p>
              </div>
              <div className="language" id="language">
                <h3>Language</h3>
                <p>{movieDetails.languages?.join(", ")}</p>
              </div>
              <div className="cast" id="cast">
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

              {/* ✅ Updated Videos Section */}
              <div className="videos" id="videos">
                <h3>Videos</h3>
                {movieDetails.trailers?.map((trailer, index) => (
                  <div key={index} className="trailer-item">
                    {trailer.type === "youtube" ? (
                      <iframe
                        width="100%"
                        height="400"
                        src={trailer.url}
                        title={`YouTube trailer ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video controls>
                        <source src={trailer.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ))}
              </div>

              <div className="posters" id="posters">
                <h3>Posters</h3>
                {movieDetails.posters?.map((poster, index) => (
                  <img
                    key={index}
                    src={poster}
                    alt={`Poster ${index + 1}`}
                    className="poster-image"
                  />
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
