import AddOilDTO from "../../@types/DTOs/AddOilDTO";
import TAddOil from "../../@types/Models/TAddOil";
import TGenericResponse from "../../@types/Responses/TGenericResponse";
import API from "../API";
import URLs from "../URLs";

export default abstract class AddOil {
	public static async UpdateOilById(addOil: AddOilDTO) {
		return await API.Post<TGenericResponse<TAddOil>>(
			URLs.RegistryRoutes.UpdateOilById,
			JSON.stringify(addOil),
		);
	}
}
