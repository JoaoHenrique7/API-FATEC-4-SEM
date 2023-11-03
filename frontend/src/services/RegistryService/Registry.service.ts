import RegistryDTO from "../../@types/DTOs/RegistryDTO";
import TRegistry from "../../@types/Models/TRegistry";
import TGenericResponse from "../../@types/Responses/TGenericResponse";
import API from "../API";
import URLs from "../URLs";

export default abstract class Transaction {
	public static async FindById() {
		return await API.Get<TGenericResponse<TRegistry[]>>(URLs.UserRoutes.FindUserById);
	}
}
