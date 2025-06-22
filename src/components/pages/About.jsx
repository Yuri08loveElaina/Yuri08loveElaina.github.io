import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <main className="about-page container">
      <h1>Về Elaina Core</h1>
      <section className="about-intro">
        <p>
          <strong>Elaina Core</strong> là một nhóm phát triển bảo mật mạng tiên tiến, chuyên xây dựng hệ điều hành <strong>ElainaOS</strong>, công cụ khai thác bảo mật, và nền tảng đào tạo CTF chuyên sâu.
        </p>
        <p>
          Với đội ngũ bao gồm những tài năng như <em>Yuri08</em>, <em>Elaina</em> và <em>CyberTeam</em>, chúng tôi không chỉ tạo ra công nghệ tiên phong mà còn chia sẻ kiến thức thông qua write-up, blog và các công cụ nguồn mở.
        </p>
      </section>

      <section className="about-core">
        <h2>Sứ mệnh</h2>
        <ul>
          <li>Phát triển công nghệ an ninh mạng mã nguồn mở.</li>
          <li>Hỗ trợ cộng đồng CTF và nghiên cứu bảo mật.</li>
          <li>Xây dựng hệ điều hành ElainaOS tối ưu cho tấn công/phòng thủ.</li>
        </ul>
      </section>

      <section className="about-core">
        <h2>Giá trị cốt lõi</h2>
        <ul>
          <li>Kiến thức – Đam mê học hỏi và nghiên cứu chuyên sâu.</li>
          <li>Tự do – Phát triển mã nguồn mở, công khai minh bạch.</li>
          <li>Trách nhiệm – Tôn trọng đạo đức nghề nghiệp và pháp luật.</li>
        </ul>
      </section>

      <section className="about-contact">
        <h2>Liên hệ</h2>
        <p>Email: <a href="mailto:elainacore@protonmail.com">elainacore@protonmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Yuri08loveElaina" target="_blank" rel="noreferrer">github.com/Yuri08loveElaina</a></p>
      </section>
    </main>
  );
}
