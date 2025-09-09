import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "../styles.css";

const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const cols = 22;
const SEAT_PRICE = 120;
const MAX_SELECTION = 6;

const SeatSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: movieIdFromParams } = useParams();

  // Receive data from MovieDetails
  const {
    movieTitle,
    movieId = movieIdFromParams,
    showtime,
    theaterName,
    screenName,
    city,
  } = location.state || {};

  // Load booked seats from localStorage
  const confirmedSeats =
    JSON.parse(localStorage.getItem(`bookedSeats_${movieId}_${showtime}`)) || [];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (confirmedSeats.includes(seatId)) return;

    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((s) => s !== seatId);
      }
      if (prev.length >= MAX_SELECTION) {
        alert(`You can only select up to ${MAX_SELECTION} seats at a time.`);
        return prev;
      }
      return [...prev, seatId];
    });
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }

    navigate("/payment", {
      state: {
        selectedSeats,
        movieTitle,
        movieId,
        showtime,
        theaterName,
        screenName,
        city,
      },
    });
  };

  if (!movieTitle || !showtime || !theaterName || !screenName) {
    return <p>No booking info found. Go back and select a movie/showtime.</p>;
  }

  return (
    <div className="container">
      <h2>
        Select Your Seats for {movieTitle} ({showtime}) at {theaterName} -{" "}
        {screenName}
      </h2>
      <div className="seats-grid">
        {rows.map((row) => (
          <div key={row} className="row">
            {Array.from({ length: cols }, (_, col) => {
              const seatId = `${row}${col + 1}`;
              const isBooked = confirmedSeats.includes(seatId);
              const isSelected = selectedSeats.includes(seatId);

              return (
                <div
                  key={seatId}
                  className={`seat ${isBooked ? "booked" : ""} ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => handleSeatClick(seatId)}
                >
                  {isBooked ? "X" : seatId}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {selectedSeats.length > 0 ? (
        <p>
          {selectedSeats.length} seat(s) selected — Total: ₹
          {selectedSeats.length * SEAT_PRICE}
        </p>
      ) : (
        <p>No seats selected</p>
      )}

      <button onClick={handleProceed} className="proceed-btn">
        Proceed to Payment
      </button>
    </div>
  );
};

export default SeatSelection;
