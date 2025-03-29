const Joi = require("joi");

const venue_typevenueValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
  });

  return schema.validate(data);
};

module.exports = { venue_typevenueValidation };
