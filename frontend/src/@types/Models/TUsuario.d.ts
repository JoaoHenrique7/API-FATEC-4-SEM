import TCarteira from "./TCarteira";
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
	carteira: TCarteira;
	createdAt: string;
	updatedAt: string
};

export default TUsuario;