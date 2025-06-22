import React, { useEffect, useState } from "react";
import "../styles/index.css";

const phrases = [
  "Người mới tìm hiểu bảo mật",
  "Thành viên Elaina Core",
  "Đam mê Reverse Engineering",
  "Chinh phục CTF và Hack thử thách",
];

export default function IndexElainaCore() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex <= phrases[phraseIndex].length) {
      timeout = setTimeout(() => {
        setText(phrases[phraseIndex].substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(phrases[phraseIndex].substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setCharIndex(charIndex - 1);
        } else {
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setCharIndex(0);
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <button
        className="dark-toggle-btn"
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌞 Sáng" : "🌙 Tối"}
      </button>

      <img
        src="https://files.catbox.moe/755fgv.png"
        alt="Avatar Elaina Core"
        className="avatar"
        draggable={false}
      />
      <h1>Elaina Core</h1>
      <div className="typing-text">
        {text}
        <span className="cursor">|</span>
      </div>

      <h2>Kỹ năng nổi bật</h2>
      <div className="skills-grid">
        <div className="skill-item">Reverse Engineering</div>
        <div className="skill-item">CTF & Exploit</div>
        <div className="skill-item">Network Security</div>
        <div className="skill-item">Web Hacking</div>
        <div className="skill-item">Cryptography</div>
        <div className="skill-item">Malware Analysis</div>
        <div className="skill-item">Linux & Shell</div>
        <div className="skill-item">Programming (C, Python)</div>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Yuri08loveElaina"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/Yuri08"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/yuri08"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          LinkedIn
        </a>
        <a href="mailto:nammoleong@gmail.com" title="Email">
          Email
        </a>
      </div>

      <footer>© 2025 Elaina Core Team. All rights reserved.</footer>
    </div>
  );
}
