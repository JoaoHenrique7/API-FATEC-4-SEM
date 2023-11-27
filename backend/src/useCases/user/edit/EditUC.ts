import Usuario from "../../../database/models/Usuario.model";
import IUserRepository from "../../../repositories/IUserRepository";
import IEditDTO from "./IEditDTO";

export default class EditUC {
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
    async execute(user: IEditDTO): Promise<Usuario[]> {
        return await this.userRepository.edit(user);
    }
}