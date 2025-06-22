import { useState, useEffect } from "react";

export default function useDarkMode() {
  // Kiểm tra localStorage, nếu không có thì mặc định là false (light mode)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dark-mode");
      if (saved !== null) return JSON.parse(saved);
      // Nếu chưa lưu, lấy theo prefer color scheme của trình duyệt
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Hàm toggle bật tắt
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return [darkMode, toggleDarkMode];
}
