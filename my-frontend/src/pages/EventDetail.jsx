import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEvents } from "../utils/events";
import "../styles/EventDetails.css"; // create this for styling

const EventDetailsPage = () => {
  const { id } = useParams(); // get event ID from URL
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [numTickets, setNumTickets] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const events = getEvents();
    const foundEvent = events.find((e) => e.id === parseInt(id));
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [id]);

  const decrement = () => {
    if (numTickets > 0) {
      setNumTickets(numTickets - 1);
      setTotal((numTickets - 1) * parseInt(event.price.replace(/\D/g, "")));
    }
  };
  const increment = () => {
  if (numTickets < 6) {
    setNumTickets(numTickets + 1);
    setTotal((numTickets + 1) * parseInt(event.price.replace(/\D/g, "")));
  } else {
    alert("⚠️ You can only book up to 6 tickets!");
  }
};


  const handleBooking = () => {
    const booking = {
      eventId: event.id,
      title: event.title,
      venue: event.venue,
      image: event.image,
      tickets: numTickets,
      totalAmount: total,
    };

    // Save booking to localStorage with event ID as key
    localStorage.setItem(`booking_${event.id}`, JSON.stringify(booking));

    alert("✅ Booking saved!");
    navigate("/events"); // redirect back to events page or bookings page
  };

  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="event-details-s">
      <img src={event.image2} alt={event.title} className="event-banner" />
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.venue}</p>
      <p className="price">Price: {event.price}</p>

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
