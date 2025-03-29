const Joi = require("joi");

const validateSeat = (seat) => {
    const schema = Joi.object({
        sector: Joi.number().integer().min(1).required(),
        row_number: Joi.number().integer().min(1).required(),
        number: Joi.number().integer().min(1).required(),
        venue_id: Joi.number().integer().positive().required(),
        seat_type_id: Joi.number().integer().positive().required(),
        location_in_schema: Joi.object({
            type: Joi.string().valid("Point").required(),
            coordinates: Joi.array().length(2).items(Joi.number()).required()
        }).optional()
    });

    return schema.validate(seat);
};

module.exports = { validateSeat };
