// src/AppRoutes.js
import React, { useEffect, useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import SeatSelection from "./pages/SeatSelection";
import Payment from "./pages/Payment";
import History from "./components/History";
import ChartWithus from "./components/ChartWithus";
import {
  MoviesWithCity,
  EventsWithCity,
  EventDetailsWrapper,
  MovieDetailsWithCity,
} from "./RouteWrappers";
import { AppContext } from "./AppProvider"; // ✅ context

const AppRoutes = () => {
  const { city, setCity } = useContext(AppContext); // ✅ use context
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const pathCity = decodeURIComponent(pathParts[2] || "");
    const isMovies = location.pathname.startsWith("/movies/");
    const isEvents = location.pathname.startsWith("/events/");

    if ((isMovies || isEvents) && pathCity && pathCity !== city) {
      setCity(pathCity);
    }
  }, [location.pathname, city, setCity]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/movies/${city}`} replace />} />
      <Route path="/movies" element={<Navigate to={`/movies/${city}`} replace />} />
      <Route path="/movies/:city" element={<MoviesWithCity />} />
      <Route path="/movie/:id" element={<MovieDetailsWithCity />} />

      <Route path="/events" element={<Navigate to={`/events/${city}`} replace />} />
      <Route path="/events/:city" element={<EventsWithCity />} />
      <Route path="/event/:id" element={<EventDetailsWrapper />} />

      <Route path="/seat-selection/:id" element={<SeatSelection />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/history" element={<History />} />
      <Route path="/chartwithus" element={<ChartWithus />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default AppRoutes;
