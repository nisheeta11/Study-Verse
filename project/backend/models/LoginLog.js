const mongoose = require('mongoose');

const loginLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true  // ⬅️ Makes sure login log must be tied to a valid user
  },
  loginTime: {
    type: Date,
    default: Date.now,
    required: true  // ⬅️ Ensures timestamp always exists
  },
  ipAddress: {
    type: String,
    default: 'Unknown'  // ⬅️ Just in case req.ip is unavailable
  }
});

module.exports = mongoose.model('LoginLog', loginLogSchema);
