const Joi = require("joi");

const payment_methodValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(data);  
};

module.exports = { payment_methodValidation };
