// src/AppProvider.js
import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("Chennai");
  const { theme } = useTheme();

  // Apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ city, setCity, theme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
