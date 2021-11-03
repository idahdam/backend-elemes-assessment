const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
    enum: ['coding', 'math', 'physics'],
    default: 'coding',
  },
  photo: {
    type: String,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
