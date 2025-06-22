import React, { useState, useMemo } from "react";

const sampleBlogs = [
  {
    id: 1,
    title: "Nhật ký hành trình học hacking",
    author: "Yuri08",
    date: "2025-06-21",
    tags: ["Hacking", "Personal"],
    summary: "Chia sẻ kinh nghiệm và bài học trong quá trình luyện tập hacking.",
    link: "#",
  },
  {
    id: 2,
    title: "Cập nhật ElainaOS phiên bản mới",
    author: "Elaina Core Team",
    date: "2025-06-18",
    tags: ["ElainaOS", "Update"],
    summary: "Tổng quan các tính năng mới trong bản cập nhật hệ điều hành ElainaOS.",
    link: "#",
  },
  {
    id: 3,
    title: "Phân tích kỹ thuật tấn công mạng hiện đại",
    author: "CyberTeam",
    date: "2025-06-15",
    tags: ["Network", "Security"],
    summary: "Một số kỹ thuật tấn công mạng thường gặp và cách phòng chống.",
    link: "#",
  },
];

const tagsList = ["All", "Hacking", "Personal", "ElainaOS", "Update", "Network", "Security"];

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = useMemo(() => {
    let filtered = selectedTag === "All" ? sampleBlogs : sampleBlogs.filter(blog => blog.tags.includes(selectedTag));
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [selectedTag, searchTerm]);

  return (
    <main className="blog-page container">
      <h1>Nhật ký nhóm (Blog)</h1>

      <div className="controls">
        <div className="filter-tags">
          {tagsList.map(tag => (
            <button
              key={tag}
              className={`tag-btn ${tag === selectedTag ? "active" : ""}`}
              onClick={() => setSelectedTag(tag)}
              aria-pressed={tag === selectedTag}
            >
              {tag}
            </button>
          ))}
        </div>

        <input
          type="search"
          placeholder="Tìm kiếm theo tiêu đề hoặc tác giả..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-label="Tìm kiếm bài blog"
          className="search-input"
        />
      </div>

      <section className="blog-list">
        {filteredBlogs.length === 0 ? (
          <p>Không có bài blog nào phù hợp.</p>
        ) : (
          filteredBlogs.map(blog => (
            <article key={blog.id} className="blog-card" tabIndex="0">
              <h2><a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a></h2>
              <p className="meta">
                Tác giả: {blog.author} | Ngày: {blog.date} | Tags: {blog.tags.join(", ")}
              </p>
              <p className="summary">{blog.summary}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
