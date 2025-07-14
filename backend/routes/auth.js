const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: 'Email already registered' });

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'Signup successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid email or password' });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
