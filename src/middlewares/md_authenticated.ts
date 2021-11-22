import { Request, Response, NextFunction } from "express";
import jwt from "jwt-simple";
import moment from "moment";
const pass = "passT";


export const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.header("Authorization")) {
        return res
            .status(401)
            .send({ message: "The request does not have the authorization header" });
    }

    const token: string = req.header("Authorization") as string;


    try {
        const payload = jwt.decode(token, pass);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                message: "The token expired",
            });
        }
        req.userId = payload.sub ;
        next();
    } catch (error) {
        return res.status(401).send({
            message: "The token invalid",
        });
    }


};