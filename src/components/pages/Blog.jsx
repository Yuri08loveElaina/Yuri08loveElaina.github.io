import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    title: "Giới thiệu về Elaina Core",
    author: "Elaina",
    date: "2025-06-20",
    summary:
      "Elaina Core là nhóm phát triển hệ điều hành ElainaOS, tập trung vào bảo mật và hiệu năng cao.",
    content:
      "Elaina Core là nhóm các nhà phát triển thiên tài tập trung xây dựng ElainaOS với các tính năng vượt trội, bảo mật tối ưu, và trải nghiệm người dùng tuyệt vời...",
  },
  {
    id: 2,
    title: "Bí mật của kỹ thuật Reverse Engineering",
    author: "Yuri08",
    date: "2025-06-18",
    summary:
      "Reverse Engineering là kỹ thuật quan trọng trong bảo mật mạng và phát hiện lỗ hổng.",
    content:
      "Trong bài viết này, chúng ta sẽ cùng khám phá các công cụ, kỹ thuật phân tích mã nguồn, và quy trình reverse engineering hiệu quả...",
  },
  {
    id: 3,
    title: "Hướng dẫn sử dụng công cụ Elaina Inspector Pro",
    author: "CyberTeam",
    date: "2025-06-15",
    summary:
      "Elaina Inspector Pro giúp phân tích gói tin mạng, mô phỏng tấn công, và reverse engineering dễ dàng hơn.",
    content:
      "Với Elaina Inspector Pro, bạn có thể tải PCAP, phân tích chi tiết TCP packets, và replay các gói tin để kiểm thử bảo mật một cách chính xác...",
  },
];

export default function Blog() {
  const [posts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className="blog-page container">
      <h1>Blog Elaina Core</h1>

      <section className="post-list">
        {posts.map((post) => (
          <article
            key={post.id}
            className="post-card"
            tabIndex={0}
            role="button"
            onClick={() => setSelectedPost(post)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedPost(post);
            }}
            aria-label={`Đọc bài viết: ${post.title}`}
          >
            <h2>{post.title}</h2>
            <p className="post-meta">
              Bởi <strong>{post.author}</strong> • {post.date}
            </p>
            <p className="post-summary">{post.summary}</p>
          </article>
        ))}
      </section>

      {/* Modal hiển thị nội dung bài viết */}
      {selectedPost && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={() => setSelectedPost(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedPost(null);
          }}
        >
          <article
            className="modal-content blog-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Đóng"
              onClick={() => setSelectedPost(null)}
            >
              &times;
            </button>
            <h2>{selectedPost.title}</h2>
            <p className="post-meta">
              Bởi <strong>{selectedPost.author}</strong> • {selectedPost.date}
            </p>
            <div className="post-content">{selectedPost.content}</div>
          </article>
        </div>
      )}
    </main>
  );
}

