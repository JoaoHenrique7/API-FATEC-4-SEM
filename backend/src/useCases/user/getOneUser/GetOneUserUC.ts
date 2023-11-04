import Usuario from "../../../database/models/Usuario.model";
import UserRepository from "../../../repositories/implementation/UserRepository";
import GetOneUser from "./GetOneUserDTO";

export default class GetOneUserUC {
    constructor(
        private UserRepository:UserRepository,
    ) {}

    async execute(props: GetOneUser) : Promise<Usuario> {
        const user = await this.UserRepository.getOneUser(props.id);

        if (!user) throw new Error('Id Inexistente')
        
        return user;
    }
}