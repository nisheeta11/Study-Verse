// // backend/adminSeeder.js

// const mongoose = require('mongoose');
// const User = require('./models/User'); // adjust path if needed
// const bcrypt = require('bcryptjs');
// require('dotenv').config();

// const createAdmin = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     const existingAdmin = await User.findOne({ email: 'admin@example.com' });
//     if (existingAdmin) {
//       console.log('Admin user already exists.');
//       return process.exit();
//     }

//     const hashedPassword = await bcrypt.hash('admin123', 10);

//     const admin = new User({
//       name: 'Admin User',
//       email: 'admin@example.com',
//       password: hashedPassword,
//       role: 'admin'
//     });

//     await admin.save();
//     console.log('Admin user created successfully');
//     process.exit();
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// createAdmin();
