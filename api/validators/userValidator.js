import Joi from 'joi';

export const validUserSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string(),
    birth: Joi.date(),
    phone: Joi.string().required(),
    mail: Joi.string().required(),
    address: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    DPI: Joi.string(),
});
