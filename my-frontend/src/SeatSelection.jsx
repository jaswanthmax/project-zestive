// src/pages/SeatSelection.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SeatSelection.css";

const SeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  // Load booked seats from localStorage
  useEffect(() => {
    const storedBookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    setBookedSeats(storedBookedSeats);
  }, []);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return; // prevent selecting booked seat
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }

    navigate("/payment", {
      state: { movie, selectedSeats, bookedSeats },
    });
  };

  // Create seat layout (A1 to E10)
  const rows = ["A", "B", "C", "D", "E"];
  const cols = 10;

  return (
    <div className="seat-selection">
      <h2>Select Seats for {movie?.title}</h2>
      <div className="seat-grid">
        {rows.map((row) =>
          Array.from({ length: cols }, (_, i) => {
            const seat = `${row}${i + 1}`;
            const isBooked = bookedSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);
            return (
              <div
                key={seat}
                className={`seat ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            );
          })
        )}
      </div>

      <div className="actions">
        <button onClick={handleProceed} className="proceed-btn">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;
