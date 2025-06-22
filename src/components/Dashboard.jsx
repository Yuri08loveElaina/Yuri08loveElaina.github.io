import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>Elaina Core</h2>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {sidebarOpen ? "⏪" : "⏩"}
          </button>
        </div>
        <nav className="nav-links">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : ""}>
            Dashboard
          </NavLink>
          <NavLink to="/writeup" className={({isActive}) => isActive ? "active" : ""}>
            Write-up
          </NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>
            Blog
          </NavLink>
          <NavLink to="/member" className={({isActive}) => isActive ? "active" : ""}>
            Members
          </NavLink>
          <NavLink to="/logout">
            Logout
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Welcome to Elaina Core Dashboard</h1>
          <p>Hello, <strong>User</strong></p>
        </header>

        <section className="content-area">
          <h2>Overview</h2>
          <p>This is your dashboard where you can manage projects, read updates, and monitor activities.</p>

          {/* Bạn có thể thêm widget, bảng, biểu đồ, etc ở đây */}
        </section>

        <footer className="dashboard-footer">
          © 2025 Elaina Core Team. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
