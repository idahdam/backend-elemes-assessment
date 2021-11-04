const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { categoryValidation } = require('../../../validations');
const { categoryController } = require('../../../controllers');

const router = express.Router();
router
  .route('/')
  .get(categoryController.getCategories)
  .post(validate(categoryValidation.createCategory), categoryController.createCategory);
router
  .route('/:categoryId')
  .get(categoryController.getCategoryById)
  .put(categoryController.updateCategoryById)
  .delete(categoryController.deleteCategoryById);
module.exports = router;
