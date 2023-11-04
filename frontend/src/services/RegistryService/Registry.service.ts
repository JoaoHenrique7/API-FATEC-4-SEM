import RegistryDTO from "../../@types/DTOs/RegistryDTO";
import TRegistry from "../../@types/Models/TRegistry";
import TGenericResponse from "../../@types/Responses/TGenericResponse";
import API from "../API";
import URLs from "../URLs";

export default abstract class Registry {
	public static async GetOneRegistry() {
		return await API.Get<TGenericResponse<TRegistry[]>>(URLs.RegistryRoutes.OneRegistry);
	}
}
