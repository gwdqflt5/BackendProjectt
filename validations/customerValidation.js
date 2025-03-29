const Joi = require('joi');

const validateCustomer = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string().max(255).required(),
    last_name: Joi.string().max(255).required(),
    phone: Joi.string().max(20).required(),
    hashed_password: Joi.string().required(),
    email: Joi.string().email().required(),
    birth_date: Joi.date().required(),
    gender: Joi.number().integer().valid(0, 1).required(),
    lang_id: Joi.number().integer().required(),
    hashed_refresh_token: Joi.string().allow(null, '')
  });

  return schema.validate(customer);
};

module.exports = { validateCustomer };
