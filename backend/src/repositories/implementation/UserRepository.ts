import Endereco from "../../database/models/Endereco.model";
import TipoUsuario from "../../database/models/TipoUsuario.model";
import Usuario from "../../database/models/Usuario.model";
import IUserRepository from "../IUserRepository";
import Registro from "../../database/models/Registro.model";

export default class UserRepository implements IUserRepository {
	/**
	 * Retrieves all users.
	 *
	 * @return {Promise<Usuario[]>} A promise that resolves to an array of Usuario objects.
	 */
	all(): Promise<Usuario[]> {
		return Usuario.findAll({ include: [TipoUsuario, Endereco, Registro] });
	}

	/**
	 * Creates a new user.
	 *
	 * @param {Usuario} user - The user object to be created.
	 * @return {Promise<Usuario>} A promise that resolves to the created user.
	 */
	create(user: Usuario): Promise<Usuario> {
		return user.save();
	}

	/**
	 * Finds a user by email.
	 *
	 * @param {string} email - The email of the user to find.
	 * @return {Promise<Usuario | null>} A promise that resolves to the found user or null if not found.
	 */
	findByEmail(email: string): Promise<Usuario | null> {
		return Usuario.findOne({ where: { emailUsuario: email } });
	}

	/**
	 * Finds a user by id.
	 *
	 * @param {number} id - The id of the user to find.
	 * @return {Promise<Usuario | null>} A promise that resolves to the found user or null if not found.
	 */
	getOneUser(id: number): Promise<Usuario | null> {
		return Usuario.findOne({ where: { id: id } });
	}

		/**
	 * .
	 *
	 * @param {number} id 
	 *
	 * @return {Promise<boolean>}
	 */
	async update(id: number, nomeUsuario: string, emailUsuario: string,  documentoUsuario: string): Promise<boolean> {
		try {
			const [rowsAffected] = await Usuario.update({ id: id, nomeUsuario: nomeUsuario, emailUsuario: emailUsuario, documentoUsuario: documentoUsuario }, { where: { id: id } });
			return rowsAffected > 0;
		  } catch (error) {
			console.error("Erro ao atualizar usuário:", error);
			throw error;
		  }
		}
	/**
	 * .
	 *
	 * @param {number} id 
	 * 
	 * @return {Promise<boolean>}
	 */
	async updateEndereco(id: number, zip_code: string, numero: number, rua: string, bairro: string, cidade:string, estado:string, complemento: string): Promise<boolean> {
		try {
			const [rowsAffected] = await Endereco.update({ idUsuario: id, zip_code: zip_code, numero: numero, rua: rua, bairro: bairro, cidade:cidade, estado:estado, complemento:complemento }, { where: { idUsuario: id } });
			return rowsAffected > 0;
			} catch (error) {
			console.error("Erro ao atualizar usuário:", error);
			throw error;
			}
		}
		
}
