const Joi = require("joi");

const validateDistrict = (district) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    regionId: Joi.number().integer().required(),
  });

  return schema.validate(district);
};

module.exports = { validateDistrict };
