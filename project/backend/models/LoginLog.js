const mongoose = require('mongoose');

const loginLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true  
  },
  loginTime: {
    type: Date,
    default: Date.now,
    required: true  
  },
  ipAddress: {
    type: String,
    default: 'Unknown' 
  }
});

module.exports = mongoose.model('LoginLog', loginLogSchema);
