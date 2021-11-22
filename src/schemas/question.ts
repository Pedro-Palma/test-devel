import  Joi from "@hapi/joi"

export const questionSchema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().required(),
    id:Joi.required()

})
export const questionSchemaNot = Joi.object({
    id: Joi.required(),
    title: Joi.string(),
    name: Joi.string()

})


