import UserRepository from "../../../repositories/implementation/UserRepository";
import UpdateController from "./UpdateController";
import UpdateUC from "./UpdateUC";

export const Update = new UpdateController(
	new UpdateUC(new UserRepository()),
);
