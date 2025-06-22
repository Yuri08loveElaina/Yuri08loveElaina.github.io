import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useDarkMode from "./useDarkMode";
import "../styles/Navbar.css";

export default function Navbar() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeStyle = {
    fontWeight: "700",
    color: "#7c3aed",
    borderBottom: "2px solid #7c3aed",
  };

  // Đóng menu mobile khi chọn link
  function handleLinkClick() {
    setMobileOpen(false);
  }

  return (
    <>
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">Elaina Core</div>

          <button
            className="mobile-menu-btn"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`burger ${mobileOpen ? "open" : ""}`}></span>
            <span className={`burger ${mobileOpen ? "open" : ""}`}></span>
            <span className={`burger ${mobileOpen ? "open" : ""}`}></span>
          </button>

          <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
            <li>
              <NavLink
                to="/dashboard"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleLinkClick}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/writeup"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleLinkClick}
              >
                Write-up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleLinkClick}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/member"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleLinkClick}
              >
                Member
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleLinkClick}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleLinkClick}
              >
                Register
              </NavLink>
            </li>
          </ul>

          <button
            className="dark-toggle-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background-color: #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 0.75rem 1.5rem;
          position: sticky;
          top: 0;
          z-index: 100;
          transition: background-color 0.3s;
        }
        .dark .navbar {
          background-color: #1f2937;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.7);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }
        .nav-logo {
          font-weight: 700;
          font-size: 1.5rem;
          color: #7c3aed;
          user-select: none;
        }
        .dark .nav-logo {
          color: #a78bfa;
        }

        /* Nav links desktop */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.25rem;
          margin: 0;
          padding: 0;
          user-select: none;
        }
        .nav-links li a {
          text-decoration: none;
          color: #444;
          font-weight: 500;
          padding: 0.25rem 0;
          transition: color 0.2s;
        }
        .dark .nav-links li a {
          color: #d1d5db;
        }
        .nav-links li a:hover {
          color: #7c3aed;
        }
        .dark .nav-links li a:hover {
          color: #a78bfa;
        }

        /* Dark mode toggle button */
        .dark-toggle-btn {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          color: #7c3aed;
          transition: color 0.3s;
          user-select: none;
          margin-left: 1rem;
        }
        .dark .dark-toggle-btn {
          color: #a78bfa;
        }
        .dark-toggle-btn:hover,
        .dark-toggle-btn:focus {
          color: #5b21b6;
          outline: none;
        }

        /* Mobile menu button */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-left: 1rem;
          user-select: none;
          z-index: 110;
        }
        .mobile-menu-btn:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 2px;
        }
        .burger {
          display: block;
          width: 100%;
          height: 3px;
          background-color: #7c3aed;
          border-radius: 2px;
          transition: all 0.3s ease-in-out;
        }
        .dark .burger {
          background-color: #a78bfa;
        }
        .burger.open:nth-child(1) {
          transform: translateY(7.5px) rotate(45deg);
        }
        .burger.open:nth-child(2) {
          opacity: 0;
        }
        .burger.open:nth-child(3) {
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* Mobile nav links - hidden by default */
        .nav-links.open {
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 60px;
          right: 0;
          background-color: #fff;
          width: 200px;
          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
          padding: 1rem;
          height: calc(100vh - 60px);
          overflow-y: auto;
          transition: transform 0.3s ease;
          z-index: 105;
        }
        .dark .nav-links.open {
          background-color: #1f2937;
          box-shadow: -2px 0 8px rgba(124, 58, 237, 0.7);
        }
        .nav-links.open li {
          margin-bottom: 1rem;
        }
        .nav-links.open li a {
          color: #444;
          font-size: 1.1rem;
        }
        .dark .nav-links.open li a {
          color: #d1d5db;
        }
        .nav-links.open li a:hover {
          color: #7c3aed;
        }
        .dark .nav-links.open li a:hover {
          color: #a78bfa;
        }

        /* Hide desktop nav on mobile */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
