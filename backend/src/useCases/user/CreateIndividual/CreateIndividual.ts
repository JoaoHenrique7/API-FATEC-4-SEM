import UserRepository from "../../../repositories/implementation/UserRepository";
import { CreateIndividualController } from "./CreateIndividualController";
import CreateIndividualUC from "./CreateIndividualUC";

export const createIndividual = new CreateIndividualController(
    new CreateIndividualUC(
        new UserRepository()
    )
); 