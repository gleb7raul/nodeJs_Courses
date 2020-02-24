const Joi = require('@hapi/joi');
 
const bodySchemaForCreate = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().regex(/[a-zA-Z]/).regex(/[0-9]/).required(),
  age: Joi.number().integer().min(4).max(130).required(),
});

const bodySchemaForUpdate = Joi.object({
  login: Joi.string(),
  password: Joi.string().regex(/[a-zA-Z]/).regex(/[0-9]/),
  age: Joi.number().integer().min(4).max(130),
});

const paramsSchemaForUpdate = Joi.object({
  id: Joi.string().required()
});

const bodySchemaForSuggestLogin = Joi.object({
  login: Joi.string().required()
});

module.exports = { bodySchemaForCreate, bodySchemaForUpdate, paramsSchemaForUpdate, bodySchemaForSuggestLogin };
