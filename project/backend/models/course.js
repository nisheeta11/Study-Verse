const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  language: { type: String, required: true },
  author: { type: String, required: true },
  topics: { type: [String], default: [] },
  rating: { type: Number, default: 5 },
  category: { type: String, required: true }
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
