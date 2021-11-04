const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const ApiError = require('../../utils/ApiError');
const { courseService } = require('../../services');

const getCourses = catchAsync(async (req, res) => {
  const course = await courseService.getCourses();
  res.status(httpStatus.OK).send(course);
});

const getStatistics = catchAsync(async (req, res) => {
  const course = await courseService.getStatistics();
  res.status(httpStatus.OK).send(course);
});

const getCourseById = catchAsync(async (req, res) => {
  const course = await courseService.getCourseById(req.params.courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Career not found');
  }
  res.status(httpStatus.OK).send(course);
});

const createCourse = catchAsync(async (req, res) => {
  const course = await courseService.createCourse(req.body);
  res.status(httpStatus.CREATED).send(course);
});

const updateCourseById = catchAsync(async (req, res) => {
  const course = await courseService.updateCourseById(req.params.courseId);
  res.status(httpStatus.NO_CONTENT).send(course);
});

const deleteCourseById = catchAsync(async (req, res) => {
  await courseService.deleteCourseById(req.params.courseId);
  res.status(httpStatus.NO_CONTENT).send();
});

const uploadCoursePhoto = catchAsync(async (req, res) => {
  const course = await courseService.uploadPhoto(req, res);
  res.status(httpStatus.NO_CONTENT).send(course);
});

// const getAllCategories = catchAsync(async (req, res) => {
//   const course = await courseService.getAllCategories(req, res);
//   res.status(httpStatus.NO_CONTENT).send(course);
// });

// const getPopularCourses = catchAsync(async (req, res) => {
//   const course = await courseService.getPopularCourses(req, res);
//   res.status(httpStatus.NO_CONTENT).send(course);
// });

const getCourseBySearch = catchAsync(async (req, res) => {
  const course = await courseService.getCourseBySearch(req, res);
  res.status(httpStatus.NO_CONTENT).send(course);
});

const getCourseSortedBy = catchAsync(async (req, res) => {
  const course = await courseService.getCourseSortedBy(req, res);
  res.status(httpStatus.NO_CONTENT).send(course);
});

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
  uploadCoursePhoto,
  getStatistics,
  // getAllCategories,
  // getPopularCourses,
  getCourseBySearch,
  getCourseSortedBy,
};
