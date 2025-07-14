require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection'); // import DB connection function

const authRoutes = require('./routes/auth');
const purchaseRoutes = require('./routes/PurchaseRoutes');
const paymentRoutes = require('./routes/PaymentRoutes');
const courseRoutes = require('./routes/course');
const enrollmentRoutes = require('./routes/enrollment');
const transactionRoutes = require('./routes/transaction');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
