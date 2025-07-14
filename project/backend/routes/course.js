const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// GET all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, price, image, language, author, topics } = req.body;

    const newCourse = new Course({
      title,
      description,
      price,
      image,
      language,
      author,
      topics: topics || [],
      rating: 5 // default rating
    });

    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error('Error saving course:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
