import Type from "../models/types";
import { Request, Response } from "express";

import { typeSchema,typeSchemaNot } from "../schemas/type";

export const andType = async (req: Request, res: Response) => {
    try {
        const { error, value } = typeSchema.validate(req.body);
        if (error)
            return res
                .status(400)
                .json(error['details'][0]['message']);

        const { type } = req.body;

        const newType = await Type.query().insert({
            type: type,
        });
        return res.status(201).json({newType});
    } catch (err) {
        return res.status(500).json(err);
    }

}


export const getTypeId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const type = await Type.query().findById(id);
        if (!type)
            return res
                .status(500)
                .json({ message: "There is no types with the ID you entered" });

        return res.status(200).json({ type })

    } catch (err) {
        return res.status(500).json(err);
    }
};


export const getTypes = async (req: Request, res: Response) => {
    try {
        const types = await Type.query();
        if (!types.length)
            return res
                .status(500)
                .send({ message: "No existing types" });

        return res.status(200).json([types]);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const updateTypes = async (req:Request, res:Response) => {
    try {
      const { error, value } = typeSchemaNot.validate(req.body);
      if (error)
          return res
              .status(400)
              .json(error['details'][0]['message']);  

              const {type,id} = req.body;
  
      const newType = await Type.query().findById(id).patch({ 
        type:type,
      })
  
      if(!newType) return res
      .status(500)
        .send({ message: "There is no type with the ID you entered" });
  
        return res.status(200).json(newType);
  
    } catch (err) {
        return res.status(500).json(err);
  
    }
  }

  export const deleteType = async (req:Request, res:Response)=>{
    try {
        const { id } = req.body;
        const type = await Type.query().deleteById(id);
        if (!type)
            return res
                .status(500)
                .json({ message: "There is no type with the ID you entered" });

        return res.status(200).json({ type })

    } catch (err) {
        return res.status(500).json(err);
    }
  }