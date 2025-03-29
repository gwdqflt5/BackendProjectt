const Joi = require("joi");

const validateCustomerAddress = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().positive().required(),
        name: Joi.string().min(3).max(255).required(),
        country_id: Joi.number().integer().positive().required(),
        region_id: Joi.number().integer().positive().required(),
        district_id: Joi.number().integer().positive().required(),
        street: Joi.string().max(255).optional(),
        house: Joi.string().max(50).optional(),
        flat: Joi.number().integer().positive().optional(),
        location: Joi.string().max(255).optional(),
        post_index: Joi.string().max(20).optional(),
        info: Joi.string().max(1000).optional()
    });

    return schema.validate(data);
};

module.exports = {validateCustomerAddress} ;
