import React from "react";
import "./404.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Trang không tìm thấy</h2>
      <p className="notfound-message">
        Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <a href="/" className="notfound-link">
        Quay về trang chủ
      </a>
    </div>
  );
}
