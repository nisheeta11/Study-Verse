const express = require('express');
const Enrollment = require('../models/Enrollment');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { student, course } = req.body;

    if (!student || !course) {
      return res.status(400).json({ error: 'Student and course IDs are required.' });
    }

    const enrollment = new Enrollment({ student, course });
    await enrollment.save();

    res.status(201).json(enrollment);
  } catch (error) {
    console.error('Error creating enrollment:', error);
    res.status(500).json({ error: 'Server error creating enrollment' });
  }
});

router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate('student', 'name email')
      .populate('course', 'title price');
    res.json(enrollments);
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    res.status(500).json({ error: 'Server error fetching enrollments' });
  }
});

module.exports = router;
