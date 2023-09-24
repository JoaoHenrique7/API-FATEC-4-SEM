import Bairro from "../../database/models/Bairro.model";
import Cidade from "../../database/models/Cidade.model";
import Endereco from "../../database/models/Endereco.model";
import Logradouro from "../../database/models/Logradouro.model";
import TipoUsuario from "../../database/models/TipoUsuario.model";
import Usuario from "../../database/models/Usuario.model";
import IUserRepository from "../IUserRepository";

export default class UserRepository implements IUserRepository {
    /**
     * Retrieves all users.
     *
     * @return {Promise<Usuario[]>} A promise that resolves to an array of Usuario objects.
     */
    all(): Promise<Usuario[]> {
        return Usuario.findAll({ include: [ TipoUsuario, Endereco, Logradouro, Bairro, Cidade ] });
    }

    /**
     * Creates a new user.
     *
     * @param {Usuario} user - The user object to be created.
     * @return {Promise<Usuario>} A promise that resolves to the created user.
     */
    create(user: Usuario): Promise<Usuario> {
        return Usuario.create({ ...user }, {
            include: [ TipoUsuario, Endereco, Logradouro, Bairro, Cidade ]
        });
	}
	
	/**
	 * Finds a user by email.
	 *
	 * @param {string} email - The email of the user to find.
	 * @return {Promise<Usuario | null>} A promise that resolves to the found user or null if not found.
	 */
	findByEmail(email: string): Promise<Usuario | null> {
		return Usuario.findOne({ where: { email } });
	}
}
