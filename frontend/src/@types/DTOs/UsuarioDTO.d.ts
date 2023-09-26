import TEndereco from "../Models/TEndereco";
import TTipoUsuario from "../Models/TTipoUsuario";

type UsuarioDTO = {
	nomeUsuario: string;
	emailUsuario: string;
	senhaUsuario: string;
	documentoUsuario: string;
	tipoUsuario: Pick<TTipoUsuario, "tipoUsuario">;
	endereco: Omit<TEndereco, "id" | "idUsuario" | "createdAt" | "updatedAt">;
}

export default UsuarioDTO;