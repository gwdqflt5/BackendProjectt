const Joi = require("joi");

const validateCountry = (country) => {
  const schema = Joi.object({

    country: Joi.string().min(2).max(255).required().messages({
      "string.empty": "Country name is required",
      "string.min": "Country name should have at least 2 characters",
      "string.max": "Country name should not exceed 255 characters",
    }),
  });

  return schema.validate(country);
};

module.exports = { validateCountry };
