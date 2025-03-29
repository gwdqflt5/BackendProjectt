const Joi = require("joi");

const validateSeatType = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(data);
};

module.exports = { validateSeatType };
