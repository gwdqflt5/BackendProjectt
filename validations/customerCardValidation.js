const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    number: Joi.string().required(),
    year: Joi.string().required(),
    month: Joi.string().required(),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  });

  return schema.validate(customerCard);
};

module.exports = { validateCustomerCard };
