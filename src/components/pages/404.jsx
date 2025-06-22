import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

export default function NotFound() {
  return (
    <main className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Oops! Trang bạn tìm không tồn tại.</h2>
      <p className="notfound-message">
        Có thể bạn gõ sai URL hoặc trang đã bị xóa.
      </p>
      <Link to="/" className="notfound-link">
        Quay về Trang Chủ
      </Link>
    </main>
  );
}

