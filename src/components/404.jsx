import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#1e293b",
        color: "#f8fafc",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Oops! Trang bạn tìm không tồn tại.
      </p>
      <Link
        to="/dashboard"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#7c3aed",
          color: "white",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1.1rem",
          boxShadow: "0 4px 8px rgba(124, 58, 237, 0.5)",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6d28d9")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#7c3aed")}
      >
        Quay về Dashboard
      </Link>
    </main>
  );
}
