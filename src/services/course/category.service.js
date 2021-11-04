const httpStatus = require('http-status');
const { Course, User, Category } = require('../../models');
const ApiError = require('../../utils/ApiError');
const config = require('../../config/config');

/**
 * Create a category
 * @param {Object} categoryData
 * @returns {Promise<Course>}
 */

const createCategory = async (categoryData) => {
  return Category.create(categoryData);
};

/**
 * Get All Category
 * @param {ObjectId} req
 * @param {ObjectId} res
 * @returns {Promise<Course>}
 */

const getCategories = async (req, res) => {
  return Category.find();
};

/**
 * Get category by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

/**
 * Update category by id
 * @param {ObjectId} categoryId
 * @param {Object} categoryData
 * @returns {Promise<Course>}
 */

const updateCategoryById = async (categoryId, categoryData) => {
  const category = await Category.findById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  Object.assign(category, categoryData);
  await category.save();
  return category;
};

/**
 * Delete category by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Course>}
 */

const deleteCategoryById = async (courseId) => {
  const category = await Category.findById(courseId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  await category.remove();
  return category;
};

module.exports = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategoryById,
  deleteCategoryById,
};
