
import IUserRepository from "../../../repositories/IUserRepository";
import updateDTO from "./UpdateDTO";

export default class updateUserUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: updateDTO) {

        const email = props.emailUsuario;
        const user = await this.userRepository.findByEmail(email);
        const id = props.id;

        if (user && user.id != id) throw new Error("email already registered")
        
        const nomeUsuario = props.nomeUsuario;
        const documentoUsuario = props.documentoUsuario ;
  

        const editUser = await this.userRepository.update(id, nomeUsuario, email,documentoUsuario);

        if (!editUser) throw new Error('something went wrong')
        
        return editUser;

    }
}