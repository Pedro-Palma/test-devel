import  Joi from "@hapi/joi"

export const typeSchema = Joi.object({
    type: Joi.string().required(),
})

export const typeSchemaNot = Joi.object({
    id: Joi.required(),
    type: Joi.string(),
})