import { Request, Response } from "express";
import UpdateOilValueByIdUC from "./UpdateOilValueByIdUC";
import IUpdateOilValueByIdDTO from "./IUpdateOilValueByIdDTO";

export default class updateOilValueByIdController {
	constructor(private UpdateOilValueByIdUC: UpdateOilValueByIdUC) {}

	async updateOilValueById(req: Request, res: Response): Promise<Response> {
		let body: IUpdateOilValueByIdDTO = req.body;

		try {
			const newValue = await this.UpdateOilValueByIdUC.execute(body);

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
