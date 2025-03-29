const Joi = require('joi');

const validateVenue = (venue) => {
  const schema = Joi.object({
    name: Joi.string().max(255).required(),
    address: Joi.string().max(500).required(),
    location: Joi.string().max(255).required(),
    site: Joi.string().uri().allow(null, ''),
    phone: Joi.string().max(20).required(),
    schema: Joi.string().allow(null, ''),
    regionId: Joi.number().integer().required(),
    districtId: Joi.number().integer().required(),
  });

  return schema.validate(venue);
};

module.exports = { validateVenue };
