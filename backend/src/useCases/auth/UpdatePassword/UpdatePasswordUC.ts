import IAuthRepository from "../../../repositories/IAuthRepository";
import UpdatePasswordDTO from "./UpdatePasswordDTO";


export default class RecoveryPassUC {
    constructor(
        private authRepository:IAuthRepository,
    ) {}

    async execute(props: UpdatePasswordDTO) : Promise<number> {
        const lines = await this.authRepository.updatePasswordByEmail(props.email, props.newPassword);

        if (lines == 0) throw new Error('Nenhuma linha alterada.')
        
        return lines;
    }
}