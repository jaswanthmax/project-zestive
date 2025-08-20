import React, { useEffect, useState } from "react";
import { initEvents, getEvents } from "../utils/events";
import { Link } from "react-router-dom";   
import "../styles/EventsPage.css";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    initEvents(); 
    setEvents(getEvents());
  }, []);

  return (
    <div className="events-page">
      <h2 className="page-title">All Music Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}   
            className="event-link"
          >
            <div className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <p className="event-date">{event.date}</p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-venue">{event.venue}</p>
                <p className="event-price">{event.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
