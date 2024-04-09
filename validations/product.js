const Joi = require("joi");

const registerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    subCategoryId: Joi.number().required(),
    imageUrl: Joi.string().required(),
    brandId: Joi.number().required(),
    isFeatured: Joi.boolean().required(),
    isSale: Joi.boolean().required(),
    discount: Joi.number().required(),
    isNew: Joi.boolean().required(),
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
    price: Joi.number(),
    description: Joi.string(),
    imageUrl: Joi.string(),
    subCategoryId: Joi.number(),
    brandId: Joi.number(),
    isFeatured: Joi.boolean(),
    isSale: Joi.boolean(),
    discount: Joi.number(),
    slug: Joi.string(),
    isNew: Joi.boolean(),
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
