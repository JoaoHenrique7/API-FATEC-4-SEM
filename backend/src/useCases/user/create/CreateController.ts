import { Request, Response } from "express";
import CreateUC from "./CreateUC";
import ICreateDTO from "./ICreateDTO";
import Usuario from "../../../database/models/Usuario.model";

export default class CreatePartnerController {
    /**
     * constructor - A constructor for the class.
     *
     * @param {CreateUC} createUserUC - an instance of the CreateUC class
     */
    constructor(
        private createUserUC: CreateUC
    ) { }

    /**
     * Creates a new resource.
     *
     * @param {Request<ICreateDTO>} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<Response>} The response containing the created resource.
     */
    async create(req: Request<ICreateDTO>, res: Response): Promise<Response> {
        let body: ICreateDTO = req.body;
        
        try {
            const createdUsuario: Usuario = await this.createUserUC.execute(body);

            return res.status(200).json({
                Ok: true,
                Message: "Created.",
                Data: [ createdUsuario ]
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