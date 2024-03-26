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
  }),
});

const updateUserbyAdminSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    id: Joi.number().required(),
    firstName: Joi.string().max(20),
    lastName: Joi.string().max(20),
    email: Joi.string().email().max(40),
    password: Joi.string().max(50),
    phoneNumber: Joi.string().max(20),
  }),
});
const updateUserSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    firstName: Joi.string().max(20),
    lastName: Joi.string().max(20),
    email: Joi.string().email().max(40),
    password: Joi.string().max(50),
    phoneNumber: Joi.string().max(20),
  }),
});

const deleteUserSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    id: Joi.number().required(),
  }),
});

const passwordChangeUserSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
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
  updateUserbyAdminSchema,
  passwordChangeUserSchema
};
