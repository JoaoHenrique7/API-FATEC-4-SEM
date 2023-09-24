import Usuario from "../../../database/models/Usuario.model";
import IAuthRepository from "../../../repositories/IAuthRepository";
import IUserRepository from "../../../repositories/IUserRepository";
import ILoginDTO from "./ILoginDTO";

export default class LoginUC {

    /**
     * Constructor for the class.
     *
     * @param {IAuthRepository} authRepository - The authentication repository.
     */
    constructor(
        private authRepository: IAuthRepository
    ) {}

    /**
     * Executes the login process using the provided credentials.
     *
     * @param {ILoginDTO} credentials - The login credentials.
     * @return {Promise<{ success: boolean, usuario: Usuario | null }>} - A promise that resolves with an object containing the success status and the user object.
     */
    async execute(credentials: ILoginDTO): Promise<{ success: boolean, usuario: Usuario | null }> {
        const usuario: Usuario | null = await this.authRepository.login(credentials);

        if (usuario) {
            return { success: true, usuario: usuario };
        } else {
            return { success: false, usuario: null };
        }
    }
}