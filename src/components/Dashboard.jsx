import React, { useState, useEffect, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const initialStats = {
  totalMembers: 38,
  totalWriteups: 75,
  totalBlogs: 29,
  todayActivities: 10,
};

// Giả lập dữ liệu hoạt động hàng giờ (24 giờ)
const generateHourlyActivity = () =>
  Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    activities: Math.floor(Math.random() * 10),
  }));

export default function Dashboard() {
  const [stats, setStats] = useState(initialStats);
  const [hourlyActivity, setHourlyActivity] = useState(generateHourlyActivity());
  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      user: "Yuri08",
      action: "đăng write-up",
      target: "CVE-2025-6070",
      date: new Date().toISOString(),
    },
  ]);

  const nextActivityId = useRef(2);

  // Giả lập realtime update dữ liệu (ví dụ mỗi 5 giây)
  useEffect(() => {
    const interval = setInterval(() => {
      // Cập nhật thống kê tổng thể
      setStats((prev) => ({
        ...prev,
        totalWriteups: prev.totalWriteups + Math.floor(Math.random() * 2),
        todayActivities: prev.todayActivities + Math.floor(Math.random() * 3),
      }));

      // Cập nhật hoạt động theo giờ
      setHourlyActivity((prev) => {
        const nowHour = new Date().getHours();
        const newData = prev.map((item) =>
          item.hour === nowHour
            ? { ...item, activities: item.activities + Math.floor(Math.random() * 2) }
            : item
        );
        return newData;
      });

      // Thêm hoạt động gần đây mới
      setRecentActivities((prev) => {
        const newAct = {
          id: nextActivityId.current++,
          user: ["Yuri08", "Elaina", "CyberTeam"][Math.floor(Math.random() * 3)],
          action: ["đăng write-up", "viết blog", "cập nhật giao diện"][Math.floor(Math.random() * 3)],
          target: ["CVE-2025-32433", "Hướng dẫn bảo mật", "Trang Dashboard"][Math.floor(Math.random() * 3)],
          date: new Date().toISOString(),
        };
        // Giữ tối đa 10 hoạt động mới nhất
        return [newAct, ...prev].slice(0, 10);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Cấu hình dữ liệu biểu đồ line (hoạt động theo giờ)
  const lineData = {
    labels: hourlyActivity.map((item) => `${item.hour}:00`),
    datasets: [
      {
        label: "Hoạt động theo giờ",
        data: hourlyActivity.map((item) => item.activities),
        fill: false,
        borderColor: "#7c3aed",
        backgroundColor: "#a78bfa",
        tension: 0.3,
        pointRadius: 5,
      },
    ],
  };

  // Cấu hình biểu đồ bar (thống kê tổng thể)
  const barData = {
    labels: ["Thành viên", "Write-ups", "Blogs", "Hoạt động hôm nay"],
    datasets: [
      {
        label: "Thống kê nhanh",
        data: [stats.totalMembers, stats.totalWriteups, stats.totalBlogs, stats.todayActivities],
        backgroundColor: ["#a78bfa", "#7c3aed", "#c4b5fd", "#d8b4fe"],
      },
    ],
  };

  return (
    <main className="dashboard container" role="main">
      <h1>Dashboard Elaina Core - Real-time</h1>
      <p>Quản lý hoạt động và theo dõi thông tin quan trọng của nhóm bảo mật.</p>

      <section className="stats-grid" aria-label="Thống kê nhanh">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className="stat-card"
            tabIndex="0"
            aria-describedby={`${key}Desc`}
          >
            <h2>{value}</h2>
            <p id={`${key}Desc`}>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </p>
          </div>
        ))}
      </section>

      <section aria-label="Biểu đồ hoạt động theo giờ" style={{ marginTop: 20 }}>
        <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </section>

      <section aria-label="Biểu đồ thống kê tổng thể" style={{ marginTop: 40 }}>
        <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
      </section>

      <section
        className="recent-activities"
        aria-label="Danh sách hoạt động gần đây"
        style={{ marginTop: 40 }}
      >
        <h2>Hoạt động gần đây</h2>
        <ul>
          {recentActivities.map((act) => (
            <li key={act.id} tabIndex="0" style={{ marginBottom: 8 }}>
              <strong>{act.user}</strong> {act.action}{" "}
              {act.target && <em>{act.target}</em>} —{" "}
              <time dateTime={act.date}>
                {new Date(act.date).toLocaleString("vi-VN", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </time>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

