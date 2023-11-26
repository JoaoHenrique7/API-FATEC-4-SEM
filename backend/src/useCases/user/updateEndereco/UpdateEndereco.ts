import UserRepository from "../../../repositories/implementation/UserRepository";
import UpdateEnderecoController from "./UpdateEnderecoController";
import UpdateEnderecoUC from "./UpdateEnderecoUC";

export const UpdateEndereco = new UpdateEnderecoController(
	new UpdateEnderecoUC(new UserRepository()),
);
