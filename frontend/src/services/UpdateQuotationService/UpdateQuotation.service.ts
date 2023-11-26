import UpdateQuotationDTO from "../../@types/DTOs/UpdateQuotationDTO";
import TUpdateQuotation from "../../@types/Models/TUpdateQuotation";
import TGenericResponse from "../../@types/Responses/TGenericResponse";
import API from "../API";
import URLs from "../URLs";

export default abstract class UpdateQuotation {
	public static async UpdateQuotationById(updateQuotation: UpdateQuotationDTO) {
		return await API.Post<TGenericResponse<TUpdateQuotation>>(
			URLs.RegistryRoutes.UpdateQuotationById,
			JSON.stringify(updateQuotation),
		);
	}
}
