import React, { useState } from 'react';
import "../App.css";
 

// Seat Component
// Seat Component
const Seat = ({ row, col, selected, onClick }) => {
  return (
    <div
      className={`seat ${selected ? 'selected' : ''}`}
      onClick={() => onClick(row, col)}
    >
      {row}{col}
    </div>
  );
};


// Theater Screen Component
const TheaterScreen = ({ id, totalAmount, setTotalAmount, seats, setSeats }) => {
  const handleSeatClick = (row, col) => {
    const newSeats = [...seats];
    newSeats[row][col] = !newSeats[row][col];
    setSeats(newSeats);

    // Calculate the total for this screen
    const newTotal = newSeats.flat().filter(Boolean).length * 200; // Assuming ₹200 per seat
    setTotalAmount(newTotal);
  };

  return (
    <div className="screen">
      <h2>Theater Screen {id}</h2>
      <div className="seats">
        {seats.map((row, rowIndex) =>
          row.map((selected, colIndex) => (
            <Seat
  key={`${rowIndex}-${colIndex}`}
  row={String.fromCharCode(65 + rowIndex)}
  col={colIndex + 1}
  selected={selected}
  onClick={handleSeatClick}
/>

          ))
        )}
      </div>
      <div className="total">Total: ₹{totalAmount}</div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [totalAmount1, setTotalAmount1] = useState(0);
  const [totalAmount2, setTotalAmount2] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState(1);

  const [seats1, setSeats1] = useState(Array.from({ length: 10 }, () => Array(15).fill(false)));
  const [seats2, setSeats2] = useState(Array.from({ length: 10 }, () => Array(15).fill(false)));

  const handleScreenChange = (event) => {
    setSelectedScreen(Number(event.target.value));
  };

  return (
    <div className="app">
      <h1>Movie Theater Seat Booking</h1>

      {/* Screen Selector */}
      <div>
        <select onChange={handleScreenChange} value={selectedScreen}>
          <option value={1}>Screen 1</option>
          <option value={2}>Screen 2</option>
        </select>
      </div>

      {/* Conditionally Render Selected Screen */}
      {selectedScreen === 1 && (
        <TheaterScreen
          id={1}
          totalAmount={totalAmount1}
          setTotalAmount={setTotalAmount1}
          seats={seats1}
          setSeats={setSeats1}
        />
      )}

      {selectedScreen === 2 && (
        <TheaterScreen
          id={2}
          totalAmount={totalAmount2}
          setTotalAmount={setTotalAmount2}
          seats={seats2}
          setSeats={setSeats2}
        />
      )}
    </div>
  );
};

export default App;
