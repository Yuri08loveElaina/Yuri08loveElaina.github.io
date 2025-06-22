const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  password: { type: String, required: true },
  role: { type: String, default: 'member' }, // Có thể là 'admin' hoặc 'member'
  loginLogs: [
    {
      timestamp: { type: Date, default: Date.now },
      ip: String,
      userAgent: String,
    },
  ],
});

// Hash password trước khi lưu vào DB
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// So sánh mật khẩu người dùng nhập với mật khẩu đã mã hóa
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
