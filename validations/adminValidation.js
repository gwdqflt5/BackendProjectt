const Joi = require("joi");

const validateAdmin = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    login: Joi.string().email().required(),
    hashed_password: Joi.string().min(6).required(),
    is_active: Joi.boolean(),
    is_creator: Joi.boolean(),
    hashed_refresh_token: Joi.string().allow(null, ""),
  });

  return schema.validate(data);
};

module.exports = { validateAdmin };
