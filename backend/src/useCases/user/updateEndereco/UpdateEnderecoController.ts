import { Request, Response } from "express";
import UpdateEnderecoUC from "./UpdateEnderecoUC";
import UpdateEnderecoDTO from "./UpdateEnderecoDTO";

export default class updateEnderecoController {
	constructor(private UpdateEnderecoUC: UpdateEnderecoUC) {}

	async updateEndereco(req: Request, res: Response): Promise<Response> {
		let body: UpdateEnderecoDTO = req.body;

		try {
			const newValue = await this.UpdateEnderecoUC.execute(body);

			return res.status(200).json({
				Ok: true,
				Message: "Succesfully",
				Data: newValue,
			});
		} catch (err: unknown) {
			let message: string;
			if (err instanceof Error) message = err.message;
			else message = String(err);

			return res.status(400).json({
				Ok: false,
				Message: message,
				Data: [],
			});
		}
	}
}
