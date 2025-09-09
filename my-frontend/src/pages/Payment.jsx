import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import movies from "../utils/MoviesStored";
import theaters from "../utils/TheatersStored";
import { saveBooking } from "../utils/bookingHistory";
import "../styles/Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    type = "movie",
    selectedSeats = [],
    movieId,
    showtime,
    movieTitle,
    theaterName,
    screenName,
    city,
    event = null,
    tickets = 0
  } = location.state || {};

  const [movieData, setMovieData] = useState(null);
  const [cancellable, setCancellable] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  // Determine ticket price
  const ticketPrice =
    type === "event"
      ? parseInt(event?.price?.replace(/\D/g, "")) || 0
      : 120;

  const quantity = type === "event" ? tickets : selectedSeats.length;
  const baseAmount = quantity * ticketPrice;
  const taxes = 35.4;
  const discountedAmount = baseAmount - (baseAmount * discount) / 100;
  const finalTotal = (discountedAmount + taxes).toFixed(2);

  useEffect(() => {
    if (type === "movie" && movieId) {
      const foundMovie = movies.find(
        (m) => m.id.toString() === movieId.toString()
      );
      setMovieData(foundMovie || null);

      const foundTheater = theaters.find((t) => t.name === theaterName);
      setCancellable(foundTheater?.cancellable || false);
    }
  }, [type, movieId, theaterName]);

  const applyOffer = (code) => {
    if (code === "DISCOUNT50") setDiscount(50);
    else if (code === "DISCOUNT20") setDiscount(20);
    else alert("Invalid code!");
    setShowOfferPopup(false);
  };

  const handlePay = () => {
    if (!mobile || mobile !== "9177538692") {
      setError("❌ Payment Failed: Invalid Mobile Number");
      return;
    }

    const bookingId = (type === "event" ? "EVENT" : "BOOK") + Date.now();

    if (type === "movie") {
      const storedSeats =
        JSON.parse(localStorage.getItem(`bookedSeats_${movieId}_${showtime}`)) || [];

      const updatedBookedSeats = [...new Set([...storedSeats, ...selectedSeats])];

      localStorage.setItem(
        `bookedSeats_${movieId}_${showtime}`,
        JSON.stringify(updatedBookedSeats)
      );

      const newBooking = {
        bookingId,
        type: "movie",
        movieName: movieTitle,
        moviePoster: movieData?.image || "",
        theaterName,
        location: city,
        screenName,
        showtime,
        seats: selectedSeats,
        totalPaid: finalTotal,
        date: new Date().toLocaleDateString(),
      };

      saveBooking(newBooking);

      alert(`✅ Booking Confirmed!\nMovie: ${movieTitle}\nSeats: ${selectedSeats.join(", ")}\nTotal: ₹${finalTotal}`);
    } else if (type === "event") {
      const newBooking = {
        bookingId,
        type: "event",
        eventId: event.id,
        title: event.title,
        venue: event.venue,
        image: event.image,
        date: event.date,
        tickets: quantity,
        totalAmount: finalTotal,
      };

      saveBooking(newBooking);

      alert(`✅ Event Booking Confirmed!\n${event.title}\nTickets: ${quantity}\nTotal: ₹${finalTotal}`);
    }

    navigate("/history");
  };

  const isMovie = type === "movie";

  if (isMovie && !movieData) return <p>No movie data found. Go back and select a movie.</p>;
  if (!isMovie && !event) return <p>No event data found. Go back and select an event.</p>;

  return (
    <div className="payment-page">
      {/* LEFT SIDE */}
      <div className="payment-left">
        <div className="movie-details">
          <img
            src={isMovie ? movieData?.image : event?.image2 || event?.image}
            alt={isMovie ? movieData?.title : event?.title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h3>{isMovie ? movieData?.title : event?.title}</h3>
            {isMovie ? (
              <>
                <p>{movieData?.rating} | {movieData?.languages?.join(", ")}</p>
                <p><strong>Theater:</strong> {theaterName}</p>
                <p><strong>Screen:</strong> {screenName}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Showtime:</strong> {showtime}</p>
              </>
            ) : (
              <>
                <p><strong>Date:</strong> {event?.date}</p>
                <p><strong>Venue:</strong> {event?.venue}</p>
                <p><strong>Price per Ticket:</strong> ₹{ticketPrice}</p>
              </>
            )}
          </div>
        </div>

        <div className="ticket-details">
          <p><strong>{isMovie ? "Seats Selected" : "Tickets"}:</strong> {isMovie ? selectedSeats.join(", ") : quantity}</p>
          <p>Subtotal: ₹{baseAmount}</p>
        </div>

        {isMovie && (
          <div className="refund-note">
            {cancellable ? (
              <p>💡 This theater allows cancellations. Get 70% refund if cancelled before the showtime.</p>
            ) : (
              <p>❌ This theater does not support cancellations.</p>
            )}
          </div>
        )}

        <div className="offers">
          <button className="offer-btn" onClick={() => setShowOfferPopup(true)}>
            🎁 View all Offers
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="payment-right">
        <div className="summary-card">
          <h4>Payment summary</h4>
          <p><span>Order amount</span> <span>₹{baseAmount}</span></p>
          <p><span>Taxes & fees</span> <span>₹{taxes}</span></p>
          {discount > 0 && (
            <p>
              <span>Discount ({discount}%)</span>
              <span>- ₹{((baseAmount * discount) / 100).toFixed(2)}</span>
            </p>
          )}
          <p className="total">
            <span>To be paid</span> <span>₹{finalTotal}</span>
          </p>
        </div>

        <div className="details-card">
          <h4>Your details</h4>
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
          />
        </div>

        <button className="pay-btn" onClick={handlePay} disabled={quantity === 0}>
          ₹{finalTotal} Proceed To Pay
        </button>

        {error && <p className="error">{error}</p>}
      </div>

      {showOfferPopup && (
        <div className="popup">
          <div className="popup-box">
            <h3>Enter Offer Code</h3>
            <input
              type="text"
              id="offerCode"
              placeholder="Enter DISCOUNT50 or DISCOUNT20"
            />
            <div className="popup-actions">
              <button onClick={() => applyOffer(document.getElementById("offerCode").value)}>Apply</button>
              <button onClick={() => setShowOfferPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
