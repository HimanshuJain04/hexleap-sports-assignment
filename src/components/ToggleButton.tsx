"use client";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if localStorage is available (in the browser)
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      setDarkMode(localStorageTheme === "dark");
    } else {
      // Set the default theme if localStorage is not available
      setDarkMode(false); // Set default to light theme
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save theme preference to localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="flex border-2 border-bg-button rounded-full items-center justify-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`relative w-16 h-8 flex items-center rounded-full transition-transform duration-300 ${
          darkMode ? "bg-gray-700" : "bg-teal-500"
        }`}
      >
        <span
          className={`absolute inset-0 w-8 h-8 transition-transform duration-300 ${
            darkMode ? "translate-x-8" : "translate-x-0"
          } flex items-center justify-center bg-white rounded-full`}
        >
          {darkMode ? (
            <FaMoon className="text-teal-500" size={16} />
          ) : (
            <FaSun className="text-yellow-500" size={16} />
          )}
        </span>
      </button>
    </div>
  );
};

export default ToggleButton;
