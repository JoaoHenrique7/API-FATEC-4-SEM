import { Request, Response } from "express";
import CreatePartnerUC from "./CreatePartnerUC";
import * as bcrypt from "bcryptjs";

export class CreatePartnerController {
    constructor(
        private createUserUC: CreatePartnerUC
    ) { }

    async create(req: Request, res: Response): Promise<Response> {

        let { userName, cpfCnpj, email, password, active } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        
        try {
            await this.createUserUC.execute({ userName, cpfCnpj, email, password: hashPassword, active });

            return res.status(200).json({
                Ok: true,
                Message: "Created.",
                Data: []
            });
        } catch (err: any) {
            return res.status(400).json({
                Ok: false,
                Message: err,
                Data: []
            });
        }
    }
}