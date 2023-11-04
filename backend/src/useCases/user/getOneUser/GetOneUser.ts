import UserRepository from "../../../repositories/implementation/UserRepository";
import GetOneUserController from "./GetOneUserController";
import GetOneUserUC from "./GetOneUserUC";

export const GetOneUser = new GetOneUserController(
    new GetOneUserUC(
        new UserRepository()
    )
);