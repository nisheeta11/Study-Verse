const Transaction = require('../models/Transaction');

// Controller to handle payment success and save transaction
const handlePaymentSuccess = async (req, res) => {
  try {
    const { userId, courseId, amount, method, paymentIntentId, currency = 'inr', status = 'Success' } = req.body;

    // Validate required fields
    if (!userId || !courseId || !amount || !method || !paymentIntentId) {
      return res.status(400).json({ message: 'Missing required transaction details.' });
    }

    // Create a new transaction
    const transaction = new Transaction({
      user: userId,
      course: courseId,
      amount,
      currency,
      method,
      status,
      transactionId: paymentIntentId,
    });

    await transaction.save();

    res.status(200).json({ message: 'Payment and transaction saved successfully', transaction });
  } catch (error) {
    console.error('Transaction save error:', error);
    res.status(500).json({ message: 'Failed to save transaction' });
  }
};

module.exports = {
  handlePaymentSuccess,
};
