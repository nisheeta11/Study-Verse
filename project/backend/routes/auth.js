const express = require('express');
const { signup, login, getLoginLogs } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/login-logs', getLoginLogs); // ✅ Added login-logs route

module.exports = router;
