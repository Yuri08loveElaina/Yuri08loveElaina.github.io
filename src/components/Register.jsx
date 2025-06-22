// src/components/Register.jsx
import React, { useState } from "react";
import '../styles/Register.css';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }

    // Thực hiện đăng ký (gửi API hoặc xử lý tại đây)
    alert(`Đăng ký thành công!\nUsername: ${username}\nEmail: ${email}`);
    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>

        <label htmlFor="username">Tên đăng nhập</label>
        <input
          id="username"
          type="text"
          placeholder="Nhập tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Mật khẩu</label>
        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
        <div className="password-wrapper">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn-submit">
          Đăng ký
        </button>
      </form>
    </div>
  return 
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>
        {/* ... các input ... */}
        <button type="submit" className="btn-submit">Đăng ký</button>
      </form>
      <p className="switch-link">         Đã có tài khoản?{" "}         <Link to="/login">Đăng nhập tại đây</Link>       </p>     </div>    ); }
