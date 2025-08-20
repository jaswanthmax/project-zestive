import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetail";
import Events from "./pages/EventsPage";
import EventDetails from "./pages/EventDetail";

function App() {
  const [city, setCity] = useState("Chennai"); // Default city

  return (
    <Router>
      <Navbar city={city} setCity={setCity} />

      <Routes>
        {/* Movies listing */}
        <Route path="/" element={<Navigate to={`/movies/${city}`} replace />} />
        <Route path="/movies" element={<Navigate to={`/movies/${city}`} replace />} />
        <Route path="/movies/:city" element={<MoviesWithCity />} />

        {/* Movie details */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Events listing */}
        <Route path="/events" element={<Navigate to={`/events/${city}`} replace />} />
        <Route path="/events/:city" element={<EventsWithCity />} />

        {/* Event details */}
        <Route path="/event/:id" element={<EventDetails />} />

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

// ✅ Handles dynamic city for movies
const MoviesWithCity = () => {
  const { city } = useParams();
  if (!city) return <div>Invalid city</div>;

  const decodedCity = decodeURIComponent(city);
  return <Movies city={decodedCity} />;
};

// ✅ Handles dynamic city for events
const EventsWithCity = () => {
  const { city } = useParams();
  if (!city) return <div>Invalid city</div>;

  const decodedCity = decodeURIComponent(city);
  return <Events city={decodedCity} />;
};

// ✅ Not Found Page
const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default App;
