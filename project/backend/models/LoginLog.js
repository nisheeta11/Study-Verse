const mongoose = require('mongoose');

const loginLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
  ipAddress: {
    type: String,
    default: 'Unknown',
  },
});

// Optional: Add an index to optimize retrieval by time or user
loginLogSchema.index({ userId: 1, loginTime: -1 });

module.exports = mongoose.model('LoginLog', loginLogSchema);
