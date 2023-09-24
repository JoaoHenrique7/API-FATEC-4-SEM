import Usuario from "../database/models/Usuario.model";
import ILoginDTO from "../useCases/auth/login/ILoginDTO";

export default interface IAuthRepository {
	login: (credentials: ILoginDTO) => Promise<Usuario | null>;
}