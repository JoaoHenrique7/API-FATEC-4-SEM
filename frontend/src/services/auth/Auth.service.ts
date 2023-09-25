import TLoginDTO from "../../@types/DTOs/LoginDTO";
import TLoginResponse from "../../@types/Responses/TLoginResponse";
import API from "../API";
import URLs from "../URLs";

export default abstract class Auth {
	public static async Login(credentials: TLoginDTO) {
		return await API.Post<TLoginResponse>(URLs.AuthRoutes.Login, JSON.stringify(credentials));
	}
}