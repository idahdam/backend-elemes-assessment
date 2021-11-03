const httpStatus = require('http-status');
const { Course } = require('../../models');
const ApiError = require('../../utils/ApiError');
const config = require('../../config/config');
const { cloudinary } = require('../../middlewares/cloudinary');
const upload = require('../../middlewares/multer');

/**
 * Create a course
 * @param {Object} courseData
 * @returns {Promise<Course>}
 */

const createCourse = async (careerData) => {
  return Course.create(careerData);
};

/**
 * Get all course
 * @returns {Promise<Course>}
 */

const getCourses = async () => {
  return Course.find();
};

/**
 * Get career by id
 * @param {ObjectId} courseId
 * @returns {Promise<Course>}
 */

const getCourseById = async (courseId) => {
  return Course.findById(courseId);
};

/**
 * Update course by id
 * @param {ObjectId} courseId
 * @param {Object} courseData
 * @returns {Promise<Course>}
 */

const updateCourseById = async (courseId, courseData) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  Object.assign(course, courseData);
  await course.save();
  return course;
};

/**
 * Delete course by id
 * @param {ObjectId} courseId
 * @returns {Promise<Course>}
 */

const deleteCourseById = async (courseId) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  await course.remove();
  return course;
};

const uploadPhoto = async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (course) {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // Create new user
      course.photo = result.secure_url;
      course.save();
      return course;
    } catch (err) {
      console.log(err);
    }
  }
  throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  uploadPhoto,
};
