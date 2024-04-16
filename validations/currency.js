const Joi = require("joi");

const getSchema = Joi.object({
  query: Joi.object({
    code: Joi.string().required(),
  }),
  params: Joi.object({
    date: Joi.date().required(),
  }),
  body: Joi.object({}),
});

module.exports = {
  getSchema,
};
