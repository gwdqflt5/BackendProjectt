const Joi = require('joi');

const validateEvent = (event) => {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().max(255).required(),
    photo: Joi.string().max(255).allow(null, ''),
    start_date: Joi.date().required(),
    start_time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/).required(),
    finish_date: Joi.date().required(),
    finish_time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/).required(),
    info: Joi.string().allow(null, ''),
    event_type_id: Joi.number().integer().required(),
    human_category_id: Joi.number().integer().required(),
    venue_id: Joi.number().integer().required(),
    lang_id: Joi.number().integer().required(),
    release_date: Joi.date().required()
  });

  return schema.validate(event);
};

module.exports = { validateEvent };
