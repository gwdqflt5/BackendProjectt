const Joi = require("joi");

const validateCartItem = (data) => {
    const schema = Joi.object({
        ticket_id: Joi.number().integer().positive().required(),
        cart_id: Joi.number().integer().positive().required(),
        quantity: Joi.number().integer().positive().min(1).required(),
    });

    return schema.validate(data);
};

module.exports = { validateCartItem };
