import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Writeup from "./components/pages/Writeup";
import Blog from "./components/pages/Blog";
import Member from "./components/pages/MemberPage.jsx";
import About from "./components/pages/About.jsx";
import NotFound from "./components/pages/404.jsx";
import { DarkModeProvider } from "./context/RealtimeContext.js";hook
useDarkMode.js
import "./App.css";

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/writeup" element={<Writeup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/member" element={<Member />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
