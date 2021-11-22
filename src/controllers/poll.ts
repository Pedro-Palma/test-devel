import Poll from "../models/polls";
import { Request, Response } from "express";
import { pollSchema,pollSchemaNot } from "../schemas/poll";

export const addPoll = async (req: Request, res: Response) => {
    try {
        const { error, value } = pollSchema.validate(req.body);
        if (error)
            return res
                .status(400)
                .json(error['details'][0]['message']);

        const { description, name } = req.body;

        const newPoll = await Poll.query().insert({
            name: name,
            description: description,
            idUser: req.userId,
            date: new Date
        });
        return res.status(201).json({ newPoll, link: 'http://localhost:3000/api/pollQuestions/' + newPoll.id });
    } catch (err) {
        return res.status(500).json(err);
    }

}

export const getPollId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const poll = await Poll.query().findById(id);
        if (!poll)
            return res
                .status(500)
                .json({ message: "There is no poll with the ID you entered" });

        return res.status(200).json({ poll })

    } catch (err) {
        return res.status(500).json(err);
    }
};


export const getPolls = async (req: Request, res: Response) => {
    try {
        const polls = await Poll.query();
        if (!polls.length)
            return res
                .status(500)
                .send({ message: "No existing poll" });

        return res.status(200).json([polls]);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const updatePoll = async (req:Request, res:Response) => {
    try {
      const { error, value } = pollSchemaNot.validate(req.body);
      if (error)
          return res
              .status(400)
              .json(error['details'][0]['message']);  

              const {name,description,id} = req.body;
  
      const newPoll = await Poll.query().findById(id).patch({ 
        name:name,
        description: description,
      })
  
      if(!newPoll) return res
      .status(500)
        .send({ message: "There is no poll with the ID you entered" });
  
        return res.status(200).json(newPoll);
  
    } catch (err) {
        return res.status(500).json(err);
  
    }
  }

  export const deletePoll = async (req:Request, res:Response)=>{
    try {
        const { id } = req.body;
        const poll = await Poll.query().deleteById(id);
        if (!poll)
            return res
                .status(500)
                .json({ message: "There is no poll with the ID you entered" });

        return res.status(200).json({ poll })

    } catch (err) {
        return res.status(500).json(err);
    }
  }