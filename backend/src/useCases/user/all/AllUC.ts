import Usuario from "../../../database/models/Usuario.model";
import IUserRepository from "../../../repositories/IUserRepository";

export default class AllUC {
    /**
     * Constructs a new instance of the class.
     *
     * @param {IUserRepository} userRepository - The user repository.
     */
    constructor(
       private userRepository: IUserRepository 
    ) {}

    /**
     * Retrieves a list of users by executing the function.
     *
     * @return {Promise<Usuario[]>} The list of users.
     */
    async execute(): Promise<Usuario[]> {
        return await this.userRepository.all();
    }
}