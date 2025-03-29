const Joi = require("joi");

const ticket_statusValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(data);  
};

module.exports = { ticket_statusValidation };
