const express = require('express');
const router = express.Router();
const User = require('../models/User');
const LoginLog = require('../models/LoginLog');
const bcrypt = require('bcrypt');

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Signup successful!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route with login logging
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid email or password' });

    // Log the login
    await LoginLog.create({
      userId: user._id,
      loginTime: new Date(),
      ipAddress: req.ip || req.connection.remoteAddress
    });

    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ New Route: Get all login logs
router.get('/login-logs', async (req, res) => {
  try {
    const logs = await LoginLog.find().populate('userId', 'name email');
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error fetching login logs:', error);
    res.status(500).json({ message: 'Server error while fetching login logs' });
  }
});

module.exports = router;
