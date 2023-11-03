import UserRepository from "../../../repositories/implementation/UserRepository";
import FindByIdController from "./FindUserByIdController";
import FindByIdUC from "./FindUserByIdUC";

export const findById = new FindByIdController(
    new FindByIdUC(
        new UserRepository()
    )
);