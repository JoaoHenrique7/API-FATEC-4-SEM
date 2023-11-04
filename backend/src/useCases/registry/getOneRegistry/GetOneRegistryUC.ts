import Registro from "../../../database/models/Registro.model";
import RegistryRepository from "../../../repositories/implementation/RegistryRepository ";
import GetOneRegistry from "./GetOneRegistryDTO";

export default class GetOneRegistryUC {
    constructor(
        private RegistryRepository:RegistryRepository,
    ) {}

    async execute(props: GetOneRegistry) : Promise<Registro> {
        const user = await this.RegistryRepository.getRegistry(props.id);

        if (!user) throw new Error('Id Inexistente')
        
        return user;
    }
}