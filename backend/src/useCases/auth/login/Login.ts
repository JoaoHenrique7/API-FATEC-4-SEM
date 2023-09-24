import AuthRepository from "../../../repositories/implementation/AuthRepository";
import LoginController from "./LoginController";
import LoginUC from "./LoginUC";

export const login = new LoginController(
    new LoginUC(
        new AuthRepository()
    )
);