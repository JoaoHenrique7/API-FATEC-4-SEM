import Usuario from "../database/models/Usuario.model"
import IEditDTO from "../useCases/user/edit/IEditDTO"

export default interface IUsuarioRepository {
    all(): Promise<Usuario[]>
    create(user: Usuario): Promise<Usuario>
    findByEmail(email: string): Promise<Usuario | null>
    getOneUser(id: number): Promise<Usuario | null>
    edit(user: IEditDTO): Promise<any>
}
