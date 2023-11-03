import Usuario from "../database/models/Usuario.model"

export default interface IUsuarioRepository {
    all(): Promise<Usuario[]>
    create(user: Usuario): Promise<Usuario>
    findByEmail(email: string): Promise<Usuario | null>
    findById(id:number): Promise<Usuario | null>
}
