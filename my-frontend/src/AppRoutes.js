// src/AppRoutes.js
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { AppContext } from "./AppProvider";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetail";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetail";
import SeatSelection from "./pages/SeatSelection";
import Payment from "./pages/Payment";
import History from "./components/History";
import ChartWithus from "./components/ChartWithus";

// 404 Page
const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const AppRoutes = () => {
  const { city } = useContext(AppContext); // Get city from context

  return (
    <Routes>
      {/* Home / Movies */}
      <Route path="/" element={<Movies city={city} />} />
      <Route path="/movies" element={<Movies city={city} />} />
      <Route path="/movie/:id" element={<MovieDetails city={city} />} />

      {/* Events */}
      <Route path="/events" element={<EventsPage />} />
      <Route path="/event/:id" element={<EventDetailsPage />} />

      {/* Booking / Payment / History */}
      <Route path="/seat-selection/:id" element={<SeatSelection />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/history" element={<History />} />
      <Route path="/chartwithus" element={<ChartWithus />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
