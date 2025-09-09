// src/components/Navbar.js
import React, { useState, useContext } from "react";
import { FaMapMarkerAlt, FaSearch, FaUser, FaCrosshairs, FaSun, FaMoon } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useTheme } from "../ThemeContext";
import { AppContext } from "../AppProvider"; // ✅ import context

function Navbar() {
  const { city, setCity } = useContext(AppContext); // ✅ use context instead of props
  const { theme, toggleTheme } = useTheme();

  const [showProfile, setShowProfile] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [search, setSearch] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [userName] = useState("Jaswanth");

  const navigate = useNavigate();

  const popularCities = [
    "Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Delhi NCR",
    "Goa", "Hyderabad", "Kolkata", "Mumbai", "Pune"
  ];

  const filteredCities =
    search.trim() === ""
      ? popularCities
      : popularCities.filter((c) =>
          c.toLowerCase().includes(search.toLowerCase())
        );

  const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  const detectLocation = async () => {
    setLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const detectedCity =
              data.address?.city ||
              data.address?.town ||
              data.address?.village ||
              data.address?.state;

            if (detectedCity) {
              const formattedCity = capitalize(detectedCity);
              setCity(formattedCity);
              navigate(`/movies/${formattedCity}`);
              alert(`📍 Location detected: ${formattedCity}`);
              setShowLocation(false);
              setSearch("");
            } else {
              alert("❌ Unable to detect city.");
            }
          } catch (error) {
            console.error("Geolocation error:", error);
            alert("❌ Failed to detect location.");
          }
          setLoadingLocation(false);
        },
        (error) => {
          alert("⚠️ Permission denied or location unavailable.");
          setLoadingLocation(false);
        }
      );
    } else {
      alert("❌ Geolocation not supported by your browser.");
      setLoadingLocation(false);
    }
  };

  // Close popup when clicking outside
  const closePopup = (e) => {
    if (e.target === e.currentTarget) setShowProfile(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="/logo/ChatGPT Image Jul 22, 2025, 09_48_50 PM.png"
            alt="Logo"
            className="logo"
          />
          <div className="location" onClick={() => { setShowLocation(true); setSearch(""); }}>
            <FaMapMarkerAlt className="location-icon" />
            <div><span className="city">{city}</span></div>
          </div>

          <div className="menu">
            <Link to={`/`} className="menu-link">For You</Link>
            <Link to={`/events`} className="menu-link">Events</Link> {/* no city */}
            <Link to={`/movies/${city}`} className="menu-link">Movies</Link>
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
          <div className="profile" onClick={() => setShowProfile(true)}>
            <FaUser />
          </div>
        </div>
      </nav>

      {/* Profile Popup */}
      {showProfile && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card">
            <button className="close-btn" onClick={() => setShowProfile(false)}>×</button>
            <div className="profile-info">
              <div className="profile-header">
                <div className="profile-image">
                  <div className="user-initial">{userName.charAt(0)}</div>
                </div>
                <div className="profile-details">
                  <h3>{userName}</h3>
                </div>
              </div>
              <button className="popup-btn" onClick={() => navigate("/history")}>View all bookings</button>
              <div className="support-section">
                <button className="popup-btn" onClick={()=> navigate("/chartwithus")}>Chat with us</button>
              </div>
              <div className="more-section">
                <button className="popup-btn">Terms & Conditions</button>
                <button className="popup-btn">Privacy Policy</button>
              </div>
              <div className="theme-toggle-section">
                <button className="popup-btn" onClick={toggleTheme}>
                  {theme === "light" ? <FaMoon /> : <FaSun />} Toggle Theme
                </button>
              </div>
              <button className="popup-btn" onClick={() => setShowProfile(false)}>Logout</button>
            </div>
          </div>
        </div>
      )}

      {/* Location Popup */}
      {showLocation && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button
              className="close-btn"
              onClick={() => { setShowLocation(false); setSearch(""); }}
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
            <button
              className="detect-location-btn"
              onClick={detectLocation}
              disabled={loadingLocation}
              style={{ margin: "10px 0", padding: "8px", backgroundColor: "#444", color: "#fff", border: "none", cursor: "pointer" }}
            >
              <FaCrosshairs style={{ marginRight: "6px" }} />
              {loadingLocation ? "Detecting..." : "Detect My Location"}
            </button>
            <h3 className="city-title">Popular Cities</h3>
            <div className="city-grid">
              {filteredCities.length > 0 ? (
                filteredCities.map((c) => (
                  <div
                    key={c}
                    className="city-card"
                    onClick={() => {
                      setCity(c);
                      navigate(`/movies/${c}`);
                      setShowLocation(false);
                      setSearch("");
                    }}
                  >
                    {c}
                  </div>
                ))
              ) : (
                <p>No cities found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
