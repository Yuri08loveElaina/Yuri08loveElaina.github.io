import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard.jsx";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import Writeup from "./components/pages/Writeup.jsx";
import Blog from "./components/pages/Blog.jsx";
import Member from "./components/pages/MemberPage.jsx";
import About from "./components/pages/About.jsx";
import NotFound from "./components/pages/404.jsx";
import { DarkModeProvider } from "./hook/useDarkMode.js";

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
