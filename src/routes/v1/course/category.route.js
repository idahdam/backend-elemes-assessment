const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { categoryValidation } = require('../../../validations');
const { categoryController } = require('../../../controllers');

const router = express.Router();
router
  .route('/')
  .get(auth('getCategory'), categoryController.getCategories)
  .post(auth('admin'), validate(categoryValidation.createCategory), categoryController.createCategory);
router
  .route('/:categoryId')
  .get(auth('getCategory'), categoryController.getCategoryById)
  .put(auth('updateCategory'), categoryController.updateCategoryById)
  .delete(auth('deleteCategory'), categoryController.deleteCategoryById);
module.exports = router;
