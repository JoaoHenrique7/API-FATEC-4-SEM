import Registro from "../../../database/models/Registro.model";
import RegistryRepository from "../../../repositories/implementation/RegistryRepository ";
import FindById from "./FindByIdDTO";

export default class FindByIdUC {
    constructor(
        private RegistryRepository:RegistryRepository,
    ) {}

    async execute(props: FindById) : Promise<Registro> {
        const user = await this.RegistryRepository.findById(props.id);

        if (!user) throw new Error('Id Inexistente')
        
        return user;
    }
}