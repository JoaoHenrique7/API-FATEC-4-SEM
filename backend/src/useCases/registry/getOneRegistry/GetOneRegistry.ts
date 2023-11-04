import RegisterRepository from "../../../repositories/implementation/RegistryRepository ";
import GetOneRegistryController from "./GetOneRegistryController";
import GetOneRegistryUC from "./GetOneRegistryUC";

export const GetOneRegistry = new GetOneRegistryController(
    new GetOneRegistryUC(
        new RegisterRepository()
    )
);