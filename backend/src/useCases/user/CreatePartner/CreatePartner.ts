import UserRepository from "../../../repositories/implementation/UserRepository";
import { CreatePartnerController } from "./CreatePartnerController";
import CreatePartnerUC from "./CreatePartnerUC";

export const createPartner = new CreatePartnerController(
    new CreatePartnerUC(
        new UserRepository()
    )
); 