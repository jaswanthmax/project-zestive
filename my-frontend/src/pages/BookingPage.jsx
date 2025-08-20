import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import movies from "../utils/MoviesStored";  // Import your movie data

const BookingPage = ({ selectedSeats, userDetails }) => {
  const navigate = useNavigate();
  const { movieId } = useParams();  // Get the movieId from the URL

  // Find the selected movie using the movieId
  const movie = movies.find((m) => m.id.toString() === movieId);
  if (!movie) return <p>Movie not found</p>;

  // Price and tax calculations
  const seatPrice = 200;  // Define the seat price
  const taxesAndFees = 35.4;  // Example tax/fee amount
  const totalAmount = selectedSeats.length * seatPrice + taxesAndFees;

  // Format the seat details for the user
  const seatDetails = selectedSeats.map((seat) => {
    const [row, col] = seat.split("-");
    return `Row ${row}, Seat ${col}`;
  }).join(", ");

  const handlePayment = () => {
    // Handle payment logic here, like integrating with a payment gateway
    // For now, we'll navigate to a "payment" page
    navigate("/payment");
  };

  return (
    <div className="booking-page-container">
      <div className="movie-details">
        <img src={movie.image} alt={`Poster of ${movie.title}`} className="movie-poster" />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>{movie.rating} | {movie.languages.join(", ")} | {movie.duration}</p>
          <p><strong>Showtime:</strong> Today, {movie.showtime} | {movie.theater}</p>
          <p><strong>Seats:</strong> {seatDetails}</p>
        </div>
      </div>

      {/* Payment Summary Section */}
      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <div><strong>Order amount:</strong> ₹{seatPrice * selectedSeats.length}</div>
        <div><strong>Taxes & fees:</strong> ₹{taxesAndFees}</div>
        <div><strong>Total:</strong> ₹{totalAmount}</div>

        {/* User details */}
        <h3>Your Details</h3>
        <div><strong>Name:</strong> {userDetails.name}</div>
        <div><strong>Contact:</strong> {userDetails.contact}</div>
        <div><strong>Location:</strong> {userDetails.location}</div>
      </div>

      {/* Payment Button */}
      <div className="payment-button">
        <button onClick={handlePayment}>
          ₹{totalAmount} - Proceed To Pay
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
