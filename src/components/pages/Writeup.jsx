import React, { useState } from "react";
import "./Writeup.css";
const initialWriteUps = [
  {
    id: 1,
    title: "Phân tích lỗ hổng CVE-2025-32433",
    author: "Yuri08",
    date: "2025-06-21",
    summary:
      "Lỗ hổng trong Erlang/OTP SSH cho phép thực thi mã từ xa. Bài viết trình bày chi tiết cách khai thác.",
    content:
      "CVE-2025-32433 là lỗi nghiêm trọng trong Erlang/OTP, tận dụng lỗ hổng SSH pre-auth để thực thi mã từ xa. Trong bài viết này, chúng ta sẽ phân tích chi tiết cách thức hoạt động, khai thác và cách phòng tránh lỗ hổng này...",
  },
  {
    id: 2,
    title: "Kỹ thuật Reverse Engineering ElainaOS Kernel",
    author: "CyberTeam",
    date: "2025-06-19",
    summary:
      "Giới thiệu các công cụ và phương pháp phân tích kernel của hệ điều hành ElainaOS.",
    content:
      "Reverse engineering kernel của ElainaOS giúp hiểu rõ cấu trúc và phát hiện các điểm yếu tiềm tàng. Bài viết này trình bày các kỹ thuật phổ biến, bao gồm sử dụng Ghidra, IDA Pro, và debug trực tiếp...",
  },
  {
    id: 3,
    title: "Tấn công DDoS có kiểm soát với Elaina C2",
    author: "Elaina",
    date: "2025-06-17",
    summary:
      "Mô tả công cụ C2 cho phép điều phối tấn công DDoS an toàn và hợp pháp nhằm phá các server lừa đảo.",
    content:
      "Elaina C2 là một công cụ điều khiển và kiểm soát botnet dùng cho mục đích kiểm thử bảo mật. Bài viết phân tích kiến trúc, giao thức giao tiếp và cách xây dựng payload tấn công hiệu quả nhưng không gây hại ngoài ý muốn...",
  },
];

export default function WriteUp() {
  const [writeUps] = useState(initialWriteUps);
  const [selectedWriteUp, setSelectedWriteUp] = useState(null);

  return (
    <main className="writeup-page container">
      <h1>Write-Up Kỹ Thuật</h1>

      <section className="writeup-list">
        {writeUps.map((writeUp) => (
          <article
            key={writeUp.id}
            className="writeup-card"
            tabIndex={0}
            role="button"
            onClick={() => setSelectedWriteUp(writeUp)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedWriteUp(writeUp);
            }}
            aria-label={`Đọc write-up: ${writeUp.title}`}
          >
            <h2>{writeUp.title}</h2>
            <p className="writeup-meta">
              Bởi <strong>{writeUp.author}</strong> • {writeUp.date}
            </p>
            <p className="writeup-summary">{writeUp.summary}</p>
          </article>
        ))}
      </section>

      {selectedWriteUp && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={() => setSelectedWriteUp(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedWriteUp(null);
          }}
        >
          <article
            className="modal-content writeup-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Đóng"
              onClick={() => setSelectedWriteUp(null)}
            >
              &times;
            </button>
            <h2>{selectedWriteUp.title}</h2>
            <p className="writeup-meta">
              Bởi <strong>{selectedWriteUp.author}</strong> • {selectedWriteUp.date}
            </p>
            <div className="writeup-content">{selectedWriteUp.content}</div>
          </article>
        </div>
      )}
    </main>
  );
}
