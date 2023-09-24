import Endereco from "../../../database/models/Endereco.model";
import TipoUsuario from "../../../database/models/TipoUsuario.model";

export default interface ICreateDTO {
    nomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
    documentoUsuario: string;
    tipoUsuario: Pick<TipoUsuario, "tipoUsuario">;
    endereco: Omit<Endereco, "id" | "idUsuario">;
}