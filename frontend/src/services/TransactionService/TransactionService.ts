import Transaction from "../../model/classes/Transaction";
import TransactionResponse from "../../model/interfaces/ITransaction";
import DataServiceAPI from "../DataServiceAPI";

export default class TransactionService {
	public static async getAllTransactions(): Promise<TransactionResponse> {
		try {
			const response = await DataServiceAPI.get(
				" http://localhost:3001/oil-transaction/get-all",
			);

			const responseJson = await response.json();

			const transactionResponse = {
				data: responseJson.Data,
				message: responseJson.message,
				ok: responseJson.Ok,
			};

			return transactionResponse;
		} catch (error) {
			const response: TransactionResponse = {
				data: [],
				message: `${error}`,
				ok: false,
			};
			return response;
		}
	}

	public static async setNewTransaction(transaction: Transaction): Promise<boolean> {
		try {
			const response = await DataServiceAPI.postCreate(
				"http://localhost:3001/transaction/create",
				transaction,
			);

			if (response.ok) {
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}
