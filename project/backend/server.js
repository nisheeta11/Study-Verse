const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const purchaseRoutes = require('./routes/PurchaseRoutes');
const paymentRoutes = require('./routes/PaymentRoutes');   // Payment routes
const courseRoutes = require('./routes/course');
const enrollmentRoutes = require('./routes/enrollment');
const transactionRoutes = require('./routes/transaction');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/payment', paymentRoutes);           // Payment-related API
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/transactions', transactionRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB and start the Express server
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(error => {
  console.error('MongoDB connection error:', error);
});
