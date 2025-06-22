import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Dashboard.css";

// Chart.js setup
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalWriteups: 0,
    totalBlogs: 0,
    todayActivities: 0,
  });

  const [activityLog, setActivityLog] = useState([]);

  // Giả lập dữ liệu realtime cập nhật
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        totalMembers: 38 + Math.floor(Math.random() * 5),
        totalWriteups: 75 + Math.floor(Math.random() * 5),
        totalBlogs: 29 + Math.floor(Math.random() * 5),
        todayActivities: 10 + Math.floor(Math.random() * 5),
      });

      setActivityLog((oldLog) => {
        const newEntry = {
          id: oldLog.length + 1,
          user: ["Yuri08", "Elaina", "CyberTeam"][Math.floor(Math.random() * 3)],
          action: ["đăng write-up", "viết blog", "cập nhật giao diện"][Math.floor(Math.random() * 3)],
          target: ["CVE-2025-32433", "Hướng dẫn bảo mật", "Trang Dashboard"][Math.floor(Math.random() * 3)],
          date: new Date().toLocaleTimeString(),
        };
        const newLog = [newEntry, ...oldLog];
        return newLog.slice(0, 8); // Giữ max 8 bản ghi
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Chuẩn bị dữ liệu biểu đồ
  const chartData = {
    labels: activityLog.map((a) => a.date).reverse(),
    datasets: [
      {
        label: "Hoạt động hôm nay",
        data: activityLog.map(() => Math.floor(Math.random() * 10) + 1).reverse(),
        fill: false,
        borderColor: "#4f46e5",
        backgroundColor: "#4f46e5",
        tension: 0.3,
      },
    ],
  };

  return (
    <main className="dashboard container">
      <h1>Dashboard Elaina Core</h1>

      <section className="stats">
        <div className="stat-card">
          <h3>Tổng thành viên</h3>
          <p>{stats.totalMembers}</p>
        </div>
        <div className="stat-card">
          <h3>Tổng bài write-up</h3>
          <p>{stats.totalWriteups}</p>
        </div>
        <div className="stat-card">
          <h3>Tổng blog</h3>
          <p>{stats.totalBlogs}</p>
        </div>
        <div className="stat-card">
          <h3>Hoạt động hôm nay</h3>
          <p>{stats.todayActivities}</p>
        </div>
      </section>

      <section className="chart-section">
        <h2>Biểu đồ hoạt động realtime</h2>
        <Line data={chartData} />
      </section>

      <section className="activity-log">
        <h2>Hoạt động gần đây</h2>
        <ul>
          {activityLog.length === 0 && <li>Chưa có hoạt động.</li>}
          {activityLog.map(({ id, user, action, target, date }) => (
            <li key={id}>
              <strong>{user}</strong> {action} <em>{target}</em> <span className="activity-date">{date}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

