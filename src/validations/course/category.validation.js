const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createCategory = {
  body: Joi.object().keys({
    title: Joi.string().required(),
  }),
};

module.exports = {
  createCategory,
};
