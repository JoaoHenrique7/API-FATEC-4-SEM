import Registro from "../../../database/models/Registro.model";
import IRegistryRepository from "../../../repositories/IRegistryRepository";

export default class AllUC {
    /**
     * Constructs a new instance of the class.
     *
     * @param {IRegistryRepository} registerRepository - The user repository.
     */
    constructor(
       private registryRepository: IRegistryRepository 
    ) {}

    /**
     * Retrieves a list of registries by executing the function.
     *
     * @return {Promise<Registro[]>} The list of registries.
     */
    async execute(): Promise<Registro[]> {
        return await this.registryRepository.all();
    }
}