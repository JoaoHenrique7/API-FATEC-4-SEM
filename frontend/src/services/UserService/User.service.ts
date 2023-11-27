import UsuarioDTO from "../../@types/DTOs/UsuarioDTO";
import TUsuario from "../../@types/Models/TUsuario";
import TGenericResponse from "../../@types/Responses/TGenericResponse";
import API from "../API";
import URLs from "../URLs";

export default abstract class User {
	public static async All() {
		return await API.Get<TGenericResponse<TUsuario[]>>(URLs.UserRoutes.All);
	}

	public static async Create(usuario: UsuarioDTO) {
		return await API.Post<TGenericResponse<TUsuario>>(URLs.UserRoutes.Create, JSON.stringify(usuario));
	}
	public static async GetOneUser() {
		return await API.Get<TGenericResponse<TUsuario[]>>(URLs.UserRoutes.OneUser);
	}

	public static async Edit(usuario: Omit<UsuarioDTO, "tipoUsuario" | "senhaUsuario"> & { id: string }) {
		return await API.Patch<TGenericResponse<object>>(URLs.UserRoutes.Edit, JSON.stringify(usuario));
	}
}