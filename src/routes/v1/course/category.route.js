const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { categoryValidation } = require('../../../validations');
const { categoryController } = require('../../../controllers');

const router = express.Router();
router
  .route('/')
  .get(auth('user'), categoryController.getCategories)
  .post(auth('admin'), validate(categoryValidation.createCategory), categoryController.createCategory);
router
  .route('/:categoryId')
  .get(auth('admin', 'user'), categoryController.getCategoryById)
  .put(auth('admin'), categoryController.updateCategoryById)
  .delete(auth('admin'), categoryController.deleteCategoryById);
module.exports = router;
