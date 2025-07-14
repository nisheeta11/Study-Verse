const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());


const MONGO_URI = 'mongodb://localhost:27017/studyverse'; 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error('MongoDB error:', err));


app.use('/api/auth', authRoutes);
