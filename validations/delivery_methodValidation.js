const Joi = require("joi");

const delivery_methodValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
  });

  return schema.validate(data);  
};

module.exports = { delivery_methodValidation };
venue_typevenueValidation