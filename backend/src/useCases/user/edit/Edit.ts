import UserRepository from "../../../repositories/implementation/UserRepository";
import EditController from "./EditController";
import EditUC from "./EditUC";

export const edit = new EditController(
    new EditUC(
        new UserRepository()
    )
);