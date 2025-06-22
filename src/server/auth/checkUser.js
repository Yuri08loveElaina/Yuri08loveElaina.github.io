// server/auth/checkUser.js

// Danh sách user mẫu 
const users = [
  {
    username: 'yuri08',
    password: 'elaina@123', // Mật khẩu demo, nên mã hoá nếu thật
    role: 'admin',
  },
  {
    username: 'elaina',
    password: 'uiuxpass',
    role: 'frontend',
  },
  {
    username: 'cyberteam',
    password: 'forensics123',
    role: 'member',
  },
];

// Hàm kiểm tra user/password (giả lập)
function checkUserCredentials(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;
  return {
    username: user.username,
    role: user.role,
    token: generateFakeToken(user.username),
  };
}

// Tạo token giả
function generateFakeToken(username) {
  return Buffer.from(username + ':' + Date.now()).toString('base64');
}

export { checkUserCredentials };
