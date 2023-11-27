
import IUserRepository from "../../../repositories/IUserRepository";
import updateEnderecoDTO from "./UpdateEnderecoDTO";

export default class updateEnderecoUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: updateEnderecoDTO) {

        const id = props.id;
        const zip_code = props.zip_code;
        const numero = props.numero;
        const rua = props.rua;
        const bairro = props.bairro ;
        const cidade = props.cidade ;
        const estado = props.estado ;
        const complemento = props.complemento ;
  

        const editEndereco = await this.userRepository.updateEndereco(id, zip_code, numero, rua, bairro, cidade, estado, complemento);

        if (!editEndereco) throw new Error('something went wrong')
        
        return editEndereco;

    }
}