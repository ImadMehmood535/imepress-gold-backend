const Joi = require("joi");

const registerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    subCategoryId: Joi.number().required(),
  }),
});

const updateSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    description: Joi.string(),
    subCategoryId: Joi.number(),
  }),
});

const deleteSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({}),
});

module.exports = { registerSchema, updateSchema, deleteSchema };
