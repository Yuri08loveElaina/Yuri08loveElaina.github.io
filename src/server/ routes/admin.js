const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { requireAuth, requireAdmin } = require('../middleware/auth');

router.get('/dashboard-data', requireAuth, requireAdmin, async (req, res) => {
  try {
    const users = await User.find({}, 'name email role');
    const totalUsers = users.length;

    res.json({
      stats: {
        totalUsers,
        // ... thống kê khác nếu cần
      },
      users,
    });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server.' });
  }
});

module.exports = router;
