const Joi = require("joi");

const registerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required().max(50),
    email: Joi.string().email().required().max(40),
    password: Joi.string().required().max(50),
  }),
});
const logInSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    email: Joi.string().email().required().max(40),
    password: Joi.string().required().max(50),
  }),
});

const updateSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().max(50),
    email: Joi.string().email().max(40),
    password: Joi.string().max(50),
  }),
});

module.exports = { registerSchema, updateSchema, logInSchema };
