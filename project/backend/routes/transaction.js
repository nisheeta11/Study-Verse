const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Create a transaction record
router.post('/', async (req, res) => {
  try {
    const { user, course, amount, method, status, transactionId } = req.body;

    if (!user || !course || !amount || !method) {
      return res.status(400).json({ error: 'User, course, amount, and method are required.' });
    }

    const transaction = new Transaction({ user, course, amount, method, status, transactionId });
    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Server error creating transaction' });
  }
});

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('user', 'name email')
      .populate('course', 'title price');
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Server error fetching transactions' });
  }
});

module.exports = router;
