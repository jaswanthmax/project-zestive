// bookingHistory.js

// Save a new booking into localStorage
export const saveBooking = (booking) => {
  const history = JSON.parse(localStorage.getItem("bookingHistory")) || [];

  // Add a timestamp to help sort or filter later
  const enrichedBooking = {
    ...booking,
    createdAt: new Date().toISOString(),
  };

  history.push(enrichedBooking);
  localStorage.setItem("bookingHistory", JSON.stringify(history));
};

// Get all booking history
export const getBookingHistory = () => {
  return JSON.parse(localStorage.getItem("bookingHistory")) || [];
};

// Clear booking history (optional)
export const clearBookingHistory = () => {
  localStorage.removeItem("bookingHistory");
};
