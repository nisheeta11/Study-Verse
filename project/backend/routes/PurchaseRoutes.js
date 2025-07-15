const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const Course = require('../models/course');
const Transaction = require('../models/Transaction');

// Dummy purchase route (e.g., after successful payment)
router.post('/purchase', async (req, res) => {
  const { userId, courseId, paymentMethod } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    // Avoid duplicate enrollments
    const alreadyEnrolled = await Enrollment.findOne({ student: userId, course: courseId });
    if (alreadyEnrolled)
      return res.status(400).json({ message: 'Already purchased this course' });

    // Save Enrollment
    await Enrollment.create({ student: userId, course: courseId });

    // Save Transaction
    await Transaction.create({
      user: userId,
      course: courseId,
      amount: course.price,
      method: paymentMethod,
      status: 'Success', // Later update with real payment response
    });

    res.status(200).json({ message: 'Course purchased successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
