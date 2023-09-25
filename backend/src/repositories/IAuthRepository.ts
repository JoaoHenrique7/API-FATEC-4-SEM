import Usuario from "../database/models/Usuario.model";
import IRecoveryPassDTO from "../useCases/auth/RecoveryPass/IRecoveryPassDTO";
import ILoginDTO from "../useCases/auth/login/ILoginDTO";

export default interface IAuthRepository {
	login: (credentials: ILoginDTO) => Promise<Usuario | null>;
	updatePasswordByEmail: (email: string, newPassword: string) => Promise<number>;
}