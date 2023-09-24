import UserRepository from "../../../repositories/implementation/UserRepository";
import CreateController from "./CreateController";
import CreateUC from "./CreateUC";

export const create = new CreateController(
    new CreateUC(
        new UserRepository()
    )
); 