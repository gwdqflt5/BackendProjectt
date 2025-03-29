const Joi = require("joi");

const pregionValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(data);  
};

module.exports = { pregionValidation };
