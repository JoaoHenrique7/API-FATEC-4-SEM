import UserResponse from "../../model/interfaces/IUserResponse";
import DataServiceAPI from "../DataServiceAPI";

export default class TransactionService {
	public static async getAllTransactions(): Promise<UserResponse> {
		try {
			const response = await DataServiceAPI.get(" http://localhost:3001/oil-transaction/get-all");

			const responseJson = await response.json();

			const userResponse = {
				data: responseJson.Data,
				message: responseJson.message,
				ok: responseJson.Ok,
			};

			return userResponse;
		} catch (error) {
			const response: UserResponse = {
				data: [],
				message: `${error}`,
				ok: false,
			};
			return response;
		}
	}

	// public static async create(user: User): Promise<boolean> {
	// 	try {
	// 		const response = await DataServiceAPI.postCreate("http://localhost:3001/transaction/create", user);
			
	// 		if (response.ok) {
	// 			return true;
	// 		} else {
	// 			return false;
	// 		}
	
	// 	} catch (error) {
	// 		console.error(error);
	// 		return false;
	// 	}
	// }
}
