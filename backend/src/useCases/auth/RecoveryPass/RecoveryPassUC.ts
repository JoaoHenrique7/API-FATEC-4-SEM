import Usuario from "../../../database/models/Usuario.model";
import IUserRepository from "../../../repositories/IUserRepository";
import IRecoveryPassDTO from "./IRecoveryPassDTO";


export default class RecoveryPassUC {
    constructor(
        private userRepository:IUserRepository,
    ) {}

    async execute(props: IRecoveryPassDTO) : Promise<Usuario> {
        const user = await this.userRepository.findByEmail(props.email);

        if (!user) throw new Error('Credenciais Inválidas')
        
        return user;
    }
}