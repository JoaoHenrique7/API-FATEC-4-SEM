import Usuario from "../../../database/models/Usuario.model";
import UserRepository from "../../../repositories/implementation/UserRepository";
import FindById from "./FindUserByIdDTO";

export default class FindUserByIdUC {
    constructor(
        private RegistryRepository:UserRepository,
    ) {}

    async execute(props: FindById) : Promise<Usuario> {
        const user = await this.RegistryRepository.findById(props.id);

        if (!user) throw new Error('Id Inexistente')
        
        return user;
    }
}