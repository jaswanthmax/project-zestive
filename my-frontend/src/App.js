import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";   // ✅ fixed name
import Events from "./pages/Events";              // ✅ fixed name
import EventDetails from "./pages/EventDetails";  // ✅ fixed name

function App() {
  const [city, setCity] = useState("Chennai"); // Default city

  return (
    <Router>
      <Navbar city={city} setCity={setCity} />

      <Routes>
        {/* ✅ Movies listing */}
        <Route path="/" element={<Movies city={city} />} />
        <Route path="/movies" element={<Movies city={city} />} />
        <Route path="/movies/:city" element={<MoviesWithCity />} />

        {/* ✅ Movie details */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* ✅ Events listing */}
        <Route path="/events" element={<Events city={city} />} />
        <Route path="/events/:city" element={<EventsWithCity />} />

        {/* ✅ Event details */}
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

// ✅ Helper component to handle the dynamic city route for movies
const MoviesWithCity = () => {
  const { city } = useParams();
  return <Movies city={city} />;
};

// ✅ Helper component to handle the dynamic city route for events
const EventsWithCity = () => {
  const { city } = useParams();
  return <Events city={city} />;
};

export default App;
