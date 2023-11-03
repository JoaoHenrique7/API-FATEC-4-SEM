import RegistryResponse from "../../model/interfaces/IRegistry";
import DataServiceAPI from "../DataServiceAPI";

export default class RegistryService {
	public static async findByid(id: number){
		const requestBody = { id: id };
		try {
		  const response = await DataServiceAPI.get('http://localhost:3001/registry/find-by-id', requestBody);
	
		  const responseJson = await response.json();
	
		  const userResponse = { 
			data: responseJson.Data, 
			message: responseJson.message, 
			ok: responseJson.Ok };
	
		  return userResponse;
		} catch (error) {
			const response: RegistryResponse = {
				data: [],
				message: `${error}`,
				ok: false
		  };
		  return response;
		}
	  }
}
