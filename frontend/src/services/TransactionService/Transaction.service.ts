import TransactionDTO from "../../@types/DTOs/TransactionDTO";
import TTransaction from "../../@types/Models/TTransaction";
import TGenericResponse from "../../@types/Responses/TGenericResponse";
import API from "../API";
import URLs from "../URLs";

export default abstract class Transaction {
	public static async All() {
		return await API.Get<TGenericResponse<TTransaction[]>>(URLs.TransactionRoutes.All);
	}

	public static async Create(transacao: TransactionDTO) {
		return await API.Post<TGenericResponse<TTransaction>>(URLs.TransactionRoutes.Create, JSON.stringify(transacao));
	}
}