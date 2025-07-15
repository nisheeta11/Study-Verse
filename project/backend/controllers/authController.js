const bcrypt = require('bcrypt');
const User = require('../models/User');
const LoginLog = require('../models/LoginLog');

// ---------------------------
// User Signup
// ---------------------------
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
};

// ---------------------------
// User Login + Logging
// ---------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    await LoginLog.create({
      userId: user._id,
      email: user.email,
      ipAddress: req.ip || req.headers['x-forwarded-for'] || 'Unknown',
    });

    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// ---------------------------
// Get All Login Logs
// ---------------------------
const getLoginLogs = async (req, res) => {
  try {
    const logs = await LoginLog.find().sort({ loginTime: -1 }); // Most recent first
    res.status(200).json(logs);
  } catch (error) {
    console.error('Login Logs Error:', error);
    res.status(500).json({ message: 'Server error while fetching login logs' });
  }
};

module.exports = {
  signup,
  login,
  getLoginLogs,
};
