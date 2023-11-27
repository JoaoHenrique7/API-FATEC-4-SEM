import { Request, Response } from "express";
import UpdateOilQuotationByIdUC from "./UpdateOilQuotationByIdUC";
import IUpdateOilQuotationByIdDTO from "./IUpdateOilQuotationByIdDTO";

export default class updateOilQuotationByIdController {
	constructor(private UpdateOilQuotationByIdUC: UpdateOilQuotationByIdUC) {}

	async updateOilQuotationById(req: Request, res: Response): Promise<Response> {
		let body: IUpdateOilQuotationByIdDTO = req.body;

		try {
			const newQuotation = await this.UpdateOilQuotationByIdUC.execute(body);

			return res.status(200).json({
				Ok: true,
				Message: "Succesfully",
				Data: newQuotation,
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
