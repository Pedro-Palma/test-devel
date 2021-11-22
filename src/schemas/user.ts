import  Joi from "@hapi/joi"

export const userSchema = Joi.object({
    user: Joi.string().required(),
    password: Joi.string().required()
})

export const userSchemaNot = Joi.object({
    id: Joi.required(),
    user: Joi.string(),
    password: Joi.string()
})