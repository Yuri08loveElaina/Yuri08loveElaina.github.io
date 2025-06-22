import React, { useState, useMemo } from 'react';

const sampleWriteups = [
  {
    id: 1,
    title: "CTF Red Team Challenge #1",
    author: "Yuri08",
    date: "2025-06-20",
    tags: ["Red Team", "CTF"],
    summary: "Phân tích và khai thác lỗ hổng buffer overflow trên server mục tiêu.",
    link: "#",
  },
  {
    id: 2,
    title: "Reverse Engineering Malware Sample",
    author: "Elaina",
    date: "2025-06-18",
    tags: ["Reverse Engineering", "Malware"],
    summary: "Bóc tách và phân tích hành vi malware nguy hiểm trên Windows.",
    link: "#",
  },
  {
    id: 3,
    title: "Web Security: XSS & CSRF",
    author: "CyberTeam",
    date: "2025-06-10",
    tags: ["Web Security", "XSS", "CSRF"],
    summary: "Tổng hợp kỹ thuật tấn công và phòng chống XSS & CSRF trong ứng dụng web.",
    link: "#",
  },
  {
    id: 4,
    title: "Forensics Investigation Case #5",
    author: "Yuri08",
    date: "2025-06-15",
    tags: ["Forensics"],
    summary: "Khám phá dấu vết và phân tích dữ liệu trên hệ thống bị tấn công.",
    link: "#",
  },
  // ...thêm dữ liệu mẫu tùy ý
];

const tagsList = [
  "All",
  "Red Team",
  "CTF",
  "Reverse Engineering",
  "Malware",
  "Web Security",
  "Forensics",
  "XSS",
  "CSRF",
];

export default function Writeup() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Lọc theo tag
  const filteredWriteups = useMemo(() => {
    if (selectedTag === "All") return sampleWriteups;
    return sampleWriteups.filter(wp => wp.tags.includes(selectedTag));
  }, [selectedTag]);

  // Phân trang
  const totalPages = Math.ceil(filteredWriteups.length / itemsPerPage);
  const paginatedWriteups = filteredWriteups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function changePage(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }

  return (
    <main className="writeup-page container">
      <h1>Write-up</h1>

      {/* Filter tags */}
      <div className="filter-tags">
        {tagsList.map(tag => (
          <button
            key={tag}
            className={`tag-btn ${tag === selectedTag ? "active" : ""}`}
            onClick={() => {
              setSelectedTag(tag);
              setCurrentPage(1);
            }}
            aria-pressed={tag === selectedTag}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Writeup list */}
      <section className="writeup-list">
        {paginatedWriteups.length === 0 && (
          <p>Không có bài write-up nào phù hợp.</p>
        )}
        {paginatedWriteups.map(wp => (
          <article key={wp.id} className="writeup-card" tabIndex="0">
            <h2><a href={wp.link} target="_blank" rel="noopener noreferrer">{wp.title}</a></h2>
            <p className="meta">
              Tác giả: {wp.author} | Ngày: {wp.date} | Tags: {wp.tags.join(", ")}
            </p>
            <p className="summary">{wp.summary}</p>
          </article>
        ))}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="pagination" aria-label="Pagination Navigation">
          <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} aria-label="Trang trước">
            &laquo; Trước
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
              aria-current={currentPage === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Trang tiếp">
            Tiếp &raquo;
          </button>
        </nav>
      )}
    </main>
  );
}
