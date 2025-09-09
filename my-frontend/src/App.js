// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import AppProvider from "./AppProvider";

function App() {
  return (
    <Router>
      <AppProvider>
        {/* Navbar, AppRoutes, Footer will get city from context */}
        <Navbar />    
        <AppRoutes /> 
        <Footer />
      </AppProvider>
    </Router>
  );
}

export default App;
