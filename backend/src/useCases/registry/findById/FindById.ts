import RegisterRepository from "../../../repositories/implementation/RegistryRepository ";
import FindByIdController from "./FindByIdController";
import FindByIdUC from "./FindByIdUC";

export const findById = new FindByIdController(
    new FindByIdUC(
        new RegisterRepository()
    )
);