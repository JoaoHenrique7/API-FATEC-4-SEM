import RegisterRepository from "../../../repositories/implementation/RegistryRepository";
import UpdateOilQuotationByIdController from "./UpdateOilQuotationByIdController";
import UpdateOilQuotationByIdUC from "./UpdateOilQuotationByIdUC";

export const UpdateOilQuotationById = new UpdateOilQuotationByIdController(
	new UpdateOilQuotationByIdUC(new RegisterRepository()),
);
