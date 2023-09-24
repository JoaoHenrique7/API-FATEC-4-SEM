import { uuid } from "uuidv4";
import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import ICreatePartnerDTO from "./ICreatePartnerDTO";

export default class CreatePartnerUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: ICreatePartnerDTO) {

        const userExists = await this.userRepository.findByEmail(props.email);

        if (userExists) {
            throw new Error('User already exists.');
        }

        const user = new User({ ...props });
        await this.userRepository.savePartner(user);
    }
}