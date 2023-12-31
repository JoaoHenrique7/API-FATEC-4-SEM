import Endereco from "../../database/models/Endereco.model";
import TipoUsuario from "../../database/models/TipoUsuario.model";
import Usuario from "../../database/models/Usuario.model";
import ILoginDTO from "../../useCases/auth/login/ILoginDTO";
import IAuthRepository from "../IAuthRepository";
import Registro from "../../database/models/Registro.model";

export default class AuthRepository implements IAuthRepository {
	async login(credentials: ILoginDTO): Promise<Usuario | null> {
		return Usuario.findOne({ where: { emailUsuario: credentials.email }, include: [ Endereco, TipoUsuario, Registro ] });
	};

	async updatePasswordByEmail(email: string, newPassword: string): Promise<number> {
        const result = await Usuario.update({ password: newPassword }, { where: { email } });
        return result[0];
    }
}