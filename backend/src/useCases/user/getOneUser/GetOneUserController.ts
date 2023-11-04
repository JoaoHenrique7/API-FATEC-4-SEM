import { Request, Response } from "express";
import GetOneUserUC from "./GetOneUserUC";

export default class GetOneUserController{
    constructor(
        private GetOneUserUC: GetOneUserUC
    ){}

    async getOneUser(req:Request,res:Response): Promise<Response>{
        const { id } = req.body;

        try {
            const user = await this.GetOneUserUC.execute({ id });

            return res.status(200).json({
                Ok: true,
                Message: "Succesfully",
                Data: user
            });
        } catch (err: unknown) {
            let message: string;
            if(err instanceof Error) message = err.message;
            else message = String(err)

            return res.status(400).json({
                Ok: false,
                Message: message,
                Data: []
            });
        }
    } 
}

