const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    index: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
