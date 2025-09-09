import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../styles/History.css";

const History = () => {
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("events"); // default: events

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    setBookings(saved.reverse());
  }, []);

  const filteredBookings = bookings.filter((b) =>
    activeTab === "events" ? b.type === "event" : b.type !== "event"
  );

  return (
    <div className="history-container">
      <h2>🎟️ My Booking History</h2>

      {/* Tab Switcher */}
      <div className="history-tabs">
        <button
          className={activeTab === "events" ? "active" : ""}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
        <button
          className={activeTab === "movies" ? "active" : ""}
          onClick={() => setActiveTab("movies")}
        >
          Movies
        </button>
      </div>

      {filteredBookings.length === 0 ? (
        <p>No {activeTab} bookings found.</p>
      ) : (
        <div className="history-list">
          {filteredBookings.map((booking, index) => (
            <div key={index} className="history-card">
              <div className="history-header">
                <img
                  src={booking.moviePoster || booking.image || "/default-poster.jpg"}
                  alt={booking.movieName || booking.title}
                  className="poster"
                />
                <div className="booking-info">
                  {booking.type === "event" ? (
                    <>
                      <h3>{booking.title}</h3>
                      <p><strong>Event ID:</strong> {booking.bookingId}</p>
                      <p><strong>Date:</strong> {booking.date}</p>
                      <p><strong>Venue:</strong> {booking.venue}</p>
                      <p><strong>Tickets:</strong> {booking.tickets}</p>
                      <p><strong>Total Paid:</strong> ₹{booking.totalAmount}</p>
                    </>
                  ) : (
                    <>
                      <h3>{booking.movieName}</h3>
                      <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                      <p><strong>Date:</strong> {booking.date}</p>
                      <p><strong>Showtime:</strong> {booking.showtime}</p>
                      <p><strong>Screen:</strong> {booking.screenName}</p>
                      <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
                      <p><strong>Total Paid:</strong> ₹{booking.totalPaid}</p>
                      <p><strong>Theater:</strong> {booking.theaterName}, {booking.location}</p>
                    </>
                  )}
                </div>
              </div>

              <div className="qr-section">
                <QRCodeCanvas
                  value={booking.bookingId}
                  size={80}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"H"}
                  includeMargin={true}
                />
                <div className="qr-details">
                  <strong>{booking.type === "event" ? booking.venue : booking.theaterName}</strong>
                  <p>{booking.type === "event" ? `${booking.tickets} ticket(s)` : `${booking.seats.length} seat(s)`}</p>
                  <p>
                    {booking.type === "event"
                      ? `Total: ₹${booking.totalAmount}`
                      : booking.seats.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
