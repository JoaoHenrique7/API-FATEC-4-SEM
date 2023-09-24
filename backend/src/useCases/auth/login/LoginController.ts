import { Request, Response } from "express";
import ILoginDTO from "./ILoginDTO";
import LoginUC from "./LoginUC";
import Usuario from "../../../database/models/Usuario.model";

export default class LoginController {
/**
 * Creates a new instance of the constructor.
 *
 * @param {LoginUC} loginUC - the login use case
 */
    constructor(
        private loginUC: LoginUC
    ) {}

    /**
     * Asynchronously logs in the user.
     *
     * @param {Request<ILoginDTO>} req - The request object containing the login credentials in the body.
     * @param {Response} res - The response object.
     * @return {Promise<Response>} The response containing the login success status, message, and data.
     */
    async login(req: Request<ILoginDTO>, res: Response): Promise<Response> {
        const credentials: ILoginDTO = req.body;
        const success: { success: boolean, usuario: Usuario | null } = await this.loginUC.execute(credentials);

        return res.status(200).json({
            Ok: success,
            Message: success ? "Logged-in." : "Failed to login.",
            Data: []
        });
    }
}