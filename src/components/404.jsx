import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="notfound-container" role="main">
      <h1>404</h1>
      <p>Oops! Trang bạn tìm không tồn tại.</p>
      <Link to="/dashboard" className="notfound-link">
        Quay về Dashboard
      </Link>
    </main>
  );
}
