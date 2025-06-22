import React from "react";
import "./Writeup.css";

const writeups = [
  {
    id: 1,
    title: "Khai thác CVE-2025-32433 hiệu quả",
    author: "Yuri08",
    date: "2025-06-18",
    summary:
      "Mô tả chi tiết cách khai thác lỗ hổng CVE-2025-32433 trên Erlang/OTP SSH, đi kèm demo mã exploit.",
  },
  {
    id: 2,
    title: "Reverse Engineering phần mềm độc hại",
    author: "CyberTeam",
    date: "2025-06-12",
    summary:
      "Bài viết giới thiệu kỹ thuật reverse engineering malware và công cụ phân tích mã nguồn độc hại.",
  },
  {
    id: 3,
    title: "Sử dụng WebSocket để xây dựng hệ thống tấn công mạng",
    author: "Elaina",
    date: "2025-06-08",
    summary:
      "Hướng dẫn xây dựng một hệ thống điều khiển botnet qua WebSocket, đảm bảo realtime và bảo mật.",
  },
];

export default function Writeup() {
  return (
    <main className="writeup-page">
      <h1>Write-ups Elaina Core</h1>
      <section className="writeup-list">
        {writeups.map(({ id, title, author, date, summary }) => (
          <article key={id} className="writeup-card" tabIndex="0" role="article">
            <h2>{title}</h2>
            <div className="writeup-meta">
              <span>By {author}</span>
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <p className="writeup-summary">{summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

