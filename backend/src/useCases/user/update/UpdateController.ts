import { Request, Response } from "express";
import UpdateUC from "./UpdateUC";
import UpdateDTO from "./UpdateDTO";

export default class updateController {
	constructor(private UpdateUC: UpdateUC) {}

	async update(req: Request, res: Response): Promise<Response> {
		let body: UpdateDTO = req.body;

		try {
			const newValue = await this.UpdateUC.execute(body);

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
