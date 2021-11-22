import Answer from "../models/answer";
import Question from "../models/question";
import { answerSchema, answerSchemaNot } from "../schemas/answer";
import { Request, Response } from "express";


export const addAnswer = async (req: Request, res: Response) => {
    try {
        const { error, value } = answerSchema.validate(req.body);
        if (error)
            return res
                .status(400)
                .json(error['details'][0]['message']);

        const { answer} = req.body;
        const {id} = req.params;
        const question = await Question.query().findById(id)

        const newAnswer = await Answer.query().insert({
            value:answer,
            idQuestion:id,
            idPoll:question?.idPoll

        });
        return res.status(201).json({ newAnswer});
    } catch (err) {
        return res.status(500).json(err);
    }

}


export const getAnswerPoll = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const answers = await Answer.query().where({idPoll:id});
        if (answers.length <= 0)
            return res
                .status(500)
                .json({ message: "There is no answers of the poll" });

        return res.status(200).json({ answers })

    } catch (err) {
        return res.status(500).json(err);
    }
};