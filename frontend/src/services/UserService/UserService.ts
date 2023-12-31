import User from "../../model/classes/User";
import IRecoveryPass from "../../model/interfaces/IRecoveryPass";
import UserResponse from "../../model/interfaces/IUserResponse";
import DataServiceAPI from "../DataServiceAPI";

export default class UserService {
	public static async recoveryPass(email: string): Promise<boolean> {
		const credentials: IRecoveryPass = {
			email: email,
		};

		try {
			const response = await DataServiceAPI.post(
				"http://localhost:3001/auth/recovery",
				credentials,
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

	public static async updatePassword(email: string, newPassword: string): Promise<boolean> {
		const requestBody = {
			email: email,
			newPassword: newPassword,
		};

		try {
			const response = await DataServiceAPI.post(
				"http://localhost:3001/updatePassword",
				requestBody,
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

	public static async getAllUsers(): Promise<UserResponse> {
		try {
			const response = await DataServiceAPI.get("http://localhost:3001/user/get-all");

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

	public static async create(user: User): Promise<boolean> {
		try {
			const response = await DataServiceAPI.postCreate(
				"http://localhost:3001/oil-transaction/new-transaction",
				user,
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

	public static async getOneUser(id:number): Promise<UserResponse> {
		const requestBody = {
			id: id,
		};
		try {
			const response = await DataServiceAPI.post(
				" http://localhost:3001/user/get-one-user", requestBody
			);
			const responseJson = await response.json();

			const registryResponse = {
				data: responseJson.Data,
				message: responseJson.message,
				ok: responseJson.Ok,
			};

			return registryResponse;
		} catch (error) {
			const response: UserResponse = {
				data: [],
				message: `${error}`,
				ok: false,
			};
			return response;
		}
	}
	public static async update(id: number, nomeUsuario: string, emailUsuario: string, documentoUsuario: string): Promise<UserResponse> {
		const requestBody = {
			id: id,
			nomeUsuario:nomeUsuario,
			emailUsuario:emailUsuario,
			documentoUsuario:documentoUsuario
		};
		try {
			const response = await DataServiceAPI.post(
				" http://localhost:3001/user/update", requestBody
			);
			const responseJson = await response.json();

			const registryResponse = {
				data: responseJson.Data,
				message: responseJson.message,
				ok: responseJson.Ok,
			};

			return registryResponse;
		} catch (error) {
			const response: UserResponse = {
				data: [],
				message: `${error}`,
				ok: false,
			};
			return response;
		}
	}

	public static async updateEndereco(id: number, zip_code: string, numero: string, rua: string, bairro: string, cidade:string, estado:string, complemento: string): Promise<UserResponse> {
		const requestBody = {
			id: id,
			zip_code:zip_code,
			numero:numero,
			rua:rua,
			bairro:bairro,
			cidade:cidade,
			estado:estado,
			complemento:complemento
		};
		try {
			const response = await DataServiceAPI.post(
				" http://localhost:3001/user/update-endereco", requestBody
			);
			const responseJson = await response.json();

			const registryResponse = {
				data: responseJson.Data,
				message: responseJson.message,
				ok: responseJson.Ok,
			};

			return registryResponse;
		} catch (error) {
			const response: UserResponse = {
				data: [],
				message: `${error}`,
				ok: false,
			};
			return response;
		}
	}
}
