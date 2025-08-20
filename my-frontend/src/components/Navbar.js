import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ city, setCity }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [search, setSearch] = useState("");

  const popularCities = [
    "Ahmedabad",
    "Bengaluru",
    "Chandigarh",
    "Chennai",
    "Delhi NCR",
    "Goa",
    "Hyderabad",
    "Kolkata",
    "Mumbai",
    "Pune",
  ];

  const filteredCities = popularCities.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="\logo\ChatGPT Image Jul 22, 2025, 09_48_50 PM.png"
            alt="Logo"
            className="logo"
          />
          <div className="location" onClick={() => setShowLocation(true)}>
            <FaMapMarkerAlt className="location-icon" />
            <div>
              <span className="city">{city}</span>
              
            </div>
          </div>
          <div className="menu">
            <Link to="/" className="menu-link">For You</Link>
            <Link to="/dining" className="menu-link">Dining</Link>
            <Link to="/events" className="menu-link">Events</Link>
            <Link to="/movies" className="menu-link">Movies</Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for events, movies and restaurants"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="profile" onClick={() => setShowLogin(true)}>
            <FaUser />
          </div>
        </div>
      </nav>

      {showLogin && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button className="close-btn" onClick={() => setShowLogin(false)}>
              ×
            </button>
            {/* Popup content */}
          </div>
        </div>
      )}

      {showLocation && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button
              className="close-btn"
              onClick={() => setShowLocation(false)}
            >
              ×
            </button>
            <h2>Select Location</h2>
            <input
              className="location-search"
              type="text"
              placeholder="Search city, area or locality"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <h3 className="city-title">Popular Cities</h3>
            <div className="city-grid">
              {filteredCities.map((c) => (
                <div
                  key={c}
                  className="city-card"
                  onClick={() => {
                    setCity(c); // Update city
                    setShowLocation(false);
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
