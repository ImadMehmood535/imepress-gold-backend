const Joi = require("joi");

const registerUserSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    firstName: Joi.string().required().max(20),
    lastName: Joi.string().required().max(20),
    email: Joi.string().email().required().max(40),
    password: Joi.string().required().max(50),
    phoneNumber: Joi.string().required(),
    gender: Joi.string().valid("male", "female", "other").required(),
    roleId: Joi.number().required(),
    locationId: Joi.number().required(),
    departmentId: Joi.number().required(),
  }),
});

const updateUserSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    id: Joi.number().required(),
    firstName: Joi.string().max(20),
    lastName: Joi.string().max(20),
    email: Joi.string().email().max(40),
    password: Joi.string().max(50),
    phoneNumber: Joi.string().max(20),
    gender: Joi.string().valid("male", "female", "other"),
    roleId: Joi.number(),
    locationId: Joi.number(),
    departmentId: Joi.number(),
  }),
});

const deleteUserSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    id: Joi.number().required(),
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

module.exports = {
  registerUserSchema,
  updateUserSchema,
  deleteUserSchema,
  logInSchema,
};
