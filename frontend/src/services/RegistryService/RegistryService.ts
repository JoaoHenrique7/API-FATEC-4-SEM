import RegistryResponse from "../../model/interfaces/IRegistry";
import DataServiceAPI from "../DataServiceAPI";

export default class RegistryService {
	public static async getOneRegistry(id:number): Promise<RegistryResponse> {
		const requestBody = {
			id: id,
		};
		try {
			const response = await DataServiceAPI.post(
				" http://localhost:3001/registry/get-one-registry", requestBody
			);
			const responseJson = await response.json();

			const registryResponse = {
				data: responseJson.Data,
				message: responseJson.message,
				ok: responseJson.Ok,
			};

			return registryResponse;
		} catch (error) {
			const response: RegistryResponse = {
				data: [],
				message: `${error}`,
				ok: false,
			};
			return response;
		}
	}

	public static async getAllRegistry(): Promise<RegistryResponse> {
		try {
			const response = await DataServiceAPI.get("http://localhost:3001/registry/get-all");

			const responseJson = await response.json();

			const registryResponse = {
				data: responseJson.Data,
				message: responseJson.message,
				ok: responseJson.Ok,
			};

			return registryResponse;
		} catch (error) {
			const response: RegistryResponse = {
				data: [],
				message: `${error}`,
				ok: false,
			};
			return response;
		}
	}

}
