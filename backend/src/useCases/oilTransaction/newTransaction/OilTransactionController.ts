import { Request, Response } from "express";
import OilTransactionUC from "./OilTransactionUC";
import IOilTransactionDTO from "./IOilTransactionDTO";
import Transacao from "../../../database/models/TransacaoOleo.model";

export default class OilTransactionController {
	/**
	 * constructor - A constructor for the class.
	 *
	 * @param {OilTransactionUC} newTransactionUC - an instance of the OilTransactionUC class
	 */
	constructor(private newTransactionUC: OilTransactionUC) { }

	/**
	 * Creates a new resource.
	 *
	 * @param {Request<IOilTransactionDTO>} req - The request object.
	 * @param {Response} res - The response object.
	 * @return {Promise<Response>} The response containing the created resource.
	 */
	async newTransaction(req: Request<IOilTransactionDTO>, res: Response): Promise<Response> {
		let body: IOilTransactionDTO = req.body;
		console.log(body);

		try {
			const newTransaction: Transacao = await this.newTransactionUC.execute(body);

			return res.status(200).json({
				Ok: true,
				Message: "A new transaction created.",
				Data: [newTransaction],
			});
		} catch (err) {
			console.log(err);
			return res.status(400).json({
				Ok: false,
				Message: String(err),
				Data: [],
			});
		}
	}
}
