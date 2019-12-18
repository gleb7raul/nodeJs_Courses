const Joi = require('@hapi/joi');
 
const querySchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  age: Joi.number().integer().required(),
});

module.exports = { querySchema };