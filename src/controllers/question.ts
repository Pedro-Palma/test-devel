import Question from "../models/question";
import { Request, Response } from "express";
import { questionSchema,questionSchemaNot } from "../schemas/question";

export const addQuestion = async (req: Request, res: Response) => {
    try {
        const { error, value } = questionSchema.validate(req.body);
        if (error)
            return res
                .status(400)
                .json(error['details'][0]['message']);

        const { name,title,id,idType} = req.body;

        const newQuestion = await Question.query().insert({
            name:name,
            title:title,
            idPoll:id,
            idType:idType

        });
        return res.status(201).json({newQuestion});
    } catch (err) {
        return res.status(500).json(err);
    }

}


export const getQuestionId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const question = await Question.query().findById(id);
        if (!question)
            return res
                .status(500)
                .json({ message: "There is no question with the ID you entered" });

        return res.status(200).json({ question })

    } catch (err) {
        return res.status(500).json(err);
    }
};


export const getQuestions = async (req: Request, res: Response) => {
    try {
        const question = await Question.query();
        if (!question.length)
            return res
                .status(500)
                .send({ message: "No existing questions" });

        return res.status(200).json([question]);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const updateQuestion = async (req:Request, res:Response) => {
    try {
      const { error, value } = questionSchemaNot.validate(req.body);
      if (error)
          return res
              .status(400)
              .json(error['details'][0]['message']);  

              const {title,name,id,idType} = req.body;
  
      const newQuestion = await Question.query().findById(id).patch({ 
        name:name,
        title:title,
        idPoll:id,
        idType:idType
    })
  
      if(!newQuestion) return res
      .status(500)
        .send({ message: "There is no question with the ID you entered" });
  
        return res.status(200).json(newQuestion);
  
    } catch (err) {
        return res.status(500).json(err);
  
    }
  }

  export const deleteQuestion = async (req:Request, res:Response)=>{
    try {
        const { id } = req.body;
        const question = await Question.query().deleteById(id);
        if (!question)
            return res
                .status(500)
                .json({ message: "There is no question with the ID you entered" });

        return res.status(200).json({ question })

    } catch (err) {
        return res.status(500).json(err);
    }
  }

  export const getQuestionPoll = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const question = await Question.query().where({idPoll:id});
        if (question.length <= 0)
            return res
                .status(500)
                .json({ message: "There is no questions of the poll" });

        return res.status(200).json({ question })

    } catch (err) {
        return res.status(500).json(err);
    }
};