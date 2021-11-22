import  Joi from "@hapi/joi"

export const answerSchema = Joi.object({
    answer: Joi.string().required(),

})
export const answerSchemaNot = Joi.object({
    id: Joi.required(),
    answer: Joi.string()


})


