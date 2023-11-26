import Registro from "../../../database/models/Registro.model";
import Endereco from "../../../database/models/Endereco.model";
import TipoUsuario from "../../../database/models/TipoUsuario.model";
import Usuario from "../../../database/models/Usuario.model";
import IUserRepository from "../../../repositories/IUserRepository";
import ICreateDTO from "./ICreateDTO";

export default class CreateUC {
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {IUserRepository} userRepository - The user repository.
	 */
	constructor(private userRepository: IUserRepository) {}

	/**
	 * Executes the function with the given props and returns a Promise that resolves to a Usuario object.
	 *
	 * @param {ICreateDTO} props - The properties needed to create a new Usuario object.
	 * @return {Promise<Usuario>} - A Promise that resolves to a Usuario object.
	 */
	async execute(props: ICreateDTO): Promise<Usuario> {
		const userExists: Usuario | null = await this.userRepository.findByEmail(
			props.emailUsuario,
		);

		if (userExists) {
			console.log(userExists);
			throw new Error("User already exists.");
		}

		const user: Usuario = Usuario.build(
			{
				...props,
				registro: {
					saldo: 0,
					volumeOleoUsado: 0,
					volumeOleoVirgem: 0,
					cotacaoOleoUsado: 1,
					cotacaoOleoVirgem: 1,
				},
			},
			{ include: [Endereco, TipoUsuario, Registro] },
		);
		return await this.userRepository.create(user);
	}
}
