import React from "react";
import { useParams } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetail";
import Events from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetail";

// Movies with city param
export const MoviesWithCity = () => {
  const { city } = useParams();
  return <Movies city={decodeURIComponent(city)} />;
};

// Events with city param
export const EventsWithCity = () => {
  const { city } = useParams();
  return <Events city={decodeURIComponent(city)} />;
};

// Event details with id + city
export const EventDetailsWrapper = ({ city }) => {
  const { id } = useParams();
  return <EventDetailsPage id={id} city={city} />;
};

// Movie details with id + city
export const MovieDetailsWithCity = ({ city }) => {
  const { id } = useParams();
  return <MovieDetails id={id} city={city} />;
};
