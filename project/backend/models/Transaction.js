const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  course: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  currency: { 
    type: String, 
    default: 'usd' 
  },
  method: { 
    type: String, 
    default: 'stripe' 
  },
  status: { 
    type: String, 
    enum: ['Success', 'Failed'], 
    default: 'Success' 
  },
  transactionId: { 
    type: String, 
    required: true, 
    unique: true  // helps prevent duplicate transaction entries
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

// Optional: index on user and date for faster queries on user history
transactionSchema.index({ user: 1, date: -1 });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
