const Joi = require("joi");

const registerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    orderItems: Joi.array().items(Joi.object({
      quantity: Joi.number().integer().min(1).required(),
      price: Joi.number().positive().required(),
      productId: Joi.number().integer().min(1).required()
    })).required()
  }),
});

module.exports = { registerSchema };
