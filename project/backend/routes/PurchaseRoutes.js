const express = require('express');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/course');
const Transaction = require('../models/Transaction');

const router = express.Router();

router.post('/purchase', async (req, res) => {
  const { userId, courseId, paymentMethod } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    const alreadyEnrolled = await Enrollment.findOne({ student: userId, course: courseId });
    if (alreadyEnrolled)
      return res.status(400).json({ message: 'Already purchased this course' });

    await Enrollment.create({ student: userId, course: courseId });

    await Transaction.create({
      user: userId,
      course: courseId,
      amount: course.price,
      method: paymentMethod,
      status: 'Success',
    });

    res.status(200).json({ message: 'Course purchased successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
