const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const upload = require('../../../middlewares/multer');
const { courseValidation } = require('../../../validations');
const { courseController } = require('../../../controllers');

const router = express.Router();

router
  .route('/')
  .get(courseController.getCourses)
  .post(validate(courseValidation.createCourse), courseController.createCourse);
router
  .route('/:courseId')
  .get(courseController.getCourseById)
  .put(courseController.updateCourseById)
  .delete(courseController.deleteCourseById);
// router.route('/category/all').get(courseController.getAllCategories);
// router.route('/category/popular').get(courseController.getPopularCourses);
router.route('/search/:search').get(courseController.getCourseBySearch);
router.route('/sort/:base').get(courseController.getCourseSortedBy);
router.route('/all/statistics').get(courseController.getStatistics);
router.route('/upload/:courseId').post(upload.single('image'), courseController.uploadCoursePhoto);
module.exports = router;
