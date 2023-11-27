import Endereco from "../../../database/models/Endereco.model";

export default interface IEditDTO {
	id: string;
	nomeUsuario: string;
	emailUsuario: string;
	documentoUsuario: string;
	enderco: Omit<Endereco, "id" | "idUsuario">
}