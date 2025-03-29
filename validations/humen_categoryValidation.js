const Joi = require("joi");

const humen_categoryValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
  });

  return schema.validate(data);  
};

module.exports = { humen_categoryValidation };
