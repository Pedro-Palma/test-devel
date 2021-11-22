import User from "../models/users";
import { userSchema, userSchemaNot } from "../schemas/user";
import { Request, Response } from "express";
import { jwT } from "../services/jwt";
import * as bcrypt from "bcrypt-nodejs";

export const addUser = async (req: Request, res: Response) => {
    try {
        const { error, value } = userSchema.validate(req.body);
        if (error)
            return res
                .status(400)
                .json(error['details'][0]['message']);

        const { user, password } = req.body;
        const passEncrypted = await bcrypt.hashSync(password);

        const newUser = await User.query().insert({
            user: user,
            password: passEncrypted
        });
        return res.status(201).json({ newUser });
    } catch (err) {
        return res.status(500).json(err);
    }
};


export const getUserId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      if (!user)
        return res
          .status(500)
          .json({ message: "There is no user with the ID you entered" });
  
      return  res.status(200).json({user})
  
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  
  export const getUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.query();
      if (!users.length)
        return res
          .status(500)
          .send({ message: "No existing users" });
  
      return res.status(200).json([users]);
    } catch (err) {
      return res.status(500).json(err);
    }
  };


  export const login = async (req: Request, res: Response) => {
    try {

      const { error, value } = userSchema.validate(req.body);
      if (error)
          return res
              .status(400)
              .json(error['details'][0]['message']);  

              const {user,password} = req.body;
      const searchUser = await User.query().findOne({user: user});
  
      if (!searchUser)
        return res
          .status(500)
          .json({ message: "There is no user with the username you entered" });
  
          bcrypt.compare(password,searchUser.password,(err,passCorrect) => {
            if(!passCorrect) return res.status(500).send({ message:'password incorrect' }); 
          })
          
          return res.status(200).send(jwT(searchUser)) 

  
      
  
    }catch (err) {
      return res.status(500).json(err);
    }
  };

  export const updateUser = async (req:Request, res:Response) => {
    try {
      const { error, value } = userSchemaNot.validate(req.body);
      if (error)
          return res
              .status(400)
              .json(error['details'][0]['message']);  

              const {user,password,id} = req.body;
  
        const newpassword = await bcrypt.hashSync(password)
      const newUser = await User.query().findById(id).patch({ 
        user:user,
        password: newpassword,
      })
  
      if(!newUser) return res
      .status(500)
        .send({ message: "There is no user with the ID you entered" });
  
        return res.status(200).json(newUser);
  
    } catch (err) {
        return res.status(500).json(err);
  
    }
  }