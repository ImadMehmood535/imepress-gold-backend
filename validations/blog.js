const Joi = require("joi");

const registerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required(),
    imageUrl: Joi.string().required(),
    description: Joi.string().required(),
    short_description: Joi.string().required(),
    slug: Joi.string().required(),
  }),
});

const updateSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    imageUrl: Joi.string(),
    description: Joi.string(),
    short_description: Joi.string(),
    slug: Joi.string(),
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
