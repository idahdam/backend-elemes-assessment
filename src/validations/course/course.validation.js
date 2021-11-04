const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createCourse = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required().custom(objectId),
    photo: Joi.string().required().default('photoLink'),
  }),
};

const getCourses = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

const updateCourseById = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string(),
      name: Joi.string(),
    })
    .min(1),
};

const deleteCourseById = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourseById,
  deleteCourseById,
};
