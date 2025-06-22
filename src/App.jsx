import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Writeup from "./pages/Writeup";
import Blog from "./pages/Blog";
import Member from "./pages/Member";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { DarkModeProvider } from "./context/useDarkMode";
import "./styles/index.css";

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
