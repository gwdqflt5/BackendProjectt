const Joi = require("joi");

const langValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
  });

  return schema.validate(data);  
};

module.exports = { langValidation };
