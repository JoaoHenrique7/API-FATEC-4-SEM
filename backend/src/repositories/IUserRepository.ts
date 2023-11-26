import Endereco from "../database/models/Endereco.model"
import Usuario from "../database/models/Usuario.model"

export default interface IUsuarioRepository {
    all(): Promise<Usuario[]>
    create(user: Usuario): Promise<Usuario>
    findByEmail(email: string): Promise<Usuario | null>
    getOneUser(id: number): Promise<Usuario | null>
    update(id: number, nomeUsuario: string, emailUsuario: string, documentoUsuario: string): Promise<boolean>
    updateEndereco(id: number, zip_code: string, numero: number, rua: string, bairro: string, cidade:string, estado:string, complemento: string): Promise<boolean>
}
