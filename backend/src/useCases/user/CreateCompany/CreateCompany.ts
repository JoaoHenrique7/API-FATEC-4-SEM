import UserRepository from "../../../repositories/implementation/UserRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import CreateCompanyUC from "./CreateCompanyUC";

export const createCompany = new CreateCompanyController(
    new CreateCompanyUC(
        new UserRepository()
    )
); 