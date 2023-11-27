import { Request, Response } from "express";
import EditUC from "./EditUC";
import IEditDTO from "./IEditDTO";

export default class EditController {
    /**
     * Initializes a new instance of the constructor.
     *
     * @param {EditUC} EditUC - an instance of the EditUC class
     */
    constructor(
        private EditUC: EditUC
    ) {}

    /**
     * Retrieves all users.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<Response>} The response object containing the result of the operation.
     */
    async edit(req: Request, res: Response): Promise<Response> {
        let body: IEditDTO = req.body;

        return res.status(200).json({
            Ok: true,
            Message: "Edited user...",
            Data: await this.EditUC.execute(body)
        });
    }
}