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

// Main App
function App() {
  const [city, setCity] = useState("Chennai"); // Default city

  return (
    <Router>
      <Navbar city={city} setCity={setCity} />

      <Routes>
        {/* Root: always redirect to /movies/<city> */}
        <Route path="/" element={<Navigate to={`/movies/${city}`} replace />} />

        {/* Movies & Events with city */}
        <Route path="/movies" element={<Navigate to={`/movies/${city}`} replace />} />
        <Route path="/movies/:city" element={<MoviesWithCity />} />
        <Route path="/events" element={<Navigate to={`/events/${city}`} replace />} />
        <Route path="/events/:city" element={<EventsWithCity />} />

        {/* Details pages */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/event/:id" element={<EventDetails />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

// Handle dynamic city for Movies
const MoviesWithCity = () => {
  const { city } = useParams();
  if (!city) return <Navigate to="/movies/Chennai" replace />; // fallback to default city
  return <Movies city={decodeURIComponent(city)} />;
};

// Handle dynamic city for Events
const EventsWithCity = () => {
  const { city } = useParams();
  if (!city) return <Navigate to="/events/Chennai" replace />; // fallback to default city
  return <Events city={decodeURIComponent(city)} />;
};

// 404 Not Found Page
const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default App;
