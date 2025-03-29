const Joi = require('joi');

const validateCart = (cart) => {
    const schema = Joi.object({
        customer_id: Joi.number().required(),
        status_id: Joi.number().required(),
        createdAt: Joi.date().optional(),
        fineshedAt: Joi.date().optional()
    });

    return schema.validate(cart);
};

module.exports = { validateCart };