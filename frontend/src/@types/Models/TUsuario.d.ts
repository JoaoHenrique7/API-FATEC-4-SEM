import TRegistro from "./TRegistro";
import TEndereco from "./TEndereco";
import TTipoUsuario from "./TTipoUsuario";

type TUsuario = {
	id: number;
	nomeUsuario: string;
	emailUsuario: string;
	senhaUsuario: string;
	documentoUsuario: string;
	tipoUsuario: TTipoUsuario;
	endereco: TEndereco;
	registro: TRegistro;
	createdAt: string;
	updatedAt: string
};

export default TUsuario;