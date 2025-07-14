const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  amount: Number,
  method: String, // e.g. 'eSewa', 'Khalti'
  status: { type: String, enum: ['Success', 'Failed'], default: 'Success' },
  transactionId: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
