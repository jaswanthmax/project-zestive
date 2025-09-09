import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEvents } from "../utils/events";
import "../styles/EventDetails.css";

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [numTickets, setNumTickets] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const events = getEvents();

    // ✅ Match event by id (handles both string/number ids)
    const foundEvent = events.find((e) => String(e.id) === String(id));

    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [id]);

  // ✅ Parse price into number (ignores "₹" or extra text like "per ticket")
  const getPrice = () => {
    if (!event?.price) return 0;
    const match = event.price.toString().match(/\d+/g);
    return match ? parseInt(match.join(""), 10) : 0;
  };

  const decrement = () => {
    if (numTickets > 0) {
      const updated = numTickets - 1;
      setNumTickets(updated);
      setTotal(updated * getPrice());
    }
  };

  const increment = () => {
    if (numTickets < 6) {
      const updated = numTickets + 1;
      setNumTickets(updated);
      setTotal(updated * getPrice());
    } else {
      alert("⚠️ You can only book up to 6 tickets!");
    }
  };

  const handleBooking = () => {
    if (numTickets === 0) {
      alert("Please select at least 1 ticket.");
      return;
    }

    navigate("/payment", {
      state: {
        type: "event",
        event,
        tickets: numTickets,
        total,
      },
    });
  };

  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="event-details-s">
      <img src={event.image2} alt={event.title} className="event-banner" />
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p className="price"><strong>Price:</strong> {event.price}</p>

      {/* Ticket Counter */}
      <div className="ticket-counter">
        <button onClick={decrement}>-</button>
        <span>{numTickets}</span>
        <button onClick={increment}>+</button>
      </div>

      <h3>Total: ₹{total}</h3>

      <button
        onClick={handleBooking}
        disabled={numTickets === 0}
        className="book-btn"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default EventDetailsPage;
