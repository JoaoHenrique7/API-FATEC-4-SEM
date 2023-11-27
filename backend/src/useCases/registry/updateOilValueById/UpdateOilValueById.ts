import RegisterRepository from "../../../repositories/implementation/RegistryRepository";
import UpdateOilValueByIdController from "./UpdateOilValueByIdController";
import UpdateOilValueByIdUC from "./UpdateOilValueByIdUC";

export const UpdateOilValueById = new UpdateOilValueByIdController(
	new UpdateOilValueByIdUC(new RegisterRepository()),
);
