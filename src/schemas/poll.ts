import  Joi from "@hapi/joi"

export const pollSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),

})
export const pollSchemaNot = Joi.object({
    id: Joi.required(),
    name: Joi.string(),
    description: Joi.string()

})


