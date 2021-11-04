const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  photo: {
    type: String,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
