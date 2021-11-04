const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const upload = require('../../../middlewares/multer');
const { courseValidation } = require('../../../validations');
const { courseController } = require('../../../controllers');

const router = express.Router();

router
  .route('/')
  .get(auth('getCourses'), courseController.getCourses)
  .post(auth('createCourse'), validate(courseValidation.createCourse), courseController.createCourse);
router
  .route('/:courseId')
  .get(auth('getCourses'), courseController.getCourseById)
  .put(auth('updateCourse'), courseController.updateCourseById)
  .delete(auth('deleteCourse'), courseController.deleteCourseById);
router.route('/sort/:base').get(auth('sortCourse'), courseController.getCourseSortedBy);
router.route('/search/:search').get(auth('searchCourse'), courseController.getCourseBySearch);
router.route('/all/statistics').get(auth('getStatistics'), courseController.getStatistics);
router
  .route('/upload/:courseId')
  .post(auth('uploadCoursePhoto'), upload.single('image'), courseController.uploadCoursePhoto);
module.exports = router;
