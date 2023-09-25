import AuthRepository from "../../../repositories/implementation/AuthRepository";
import { UpdatePasswordController } from "./UpdatePasswordController";
import UpdatePasswordUC from "./UpdatePasswordUC";


export const updatePassword = new UpdatePasswordController(
    new UpdatePasswordUC(
        new AuthRepository()
    )
);