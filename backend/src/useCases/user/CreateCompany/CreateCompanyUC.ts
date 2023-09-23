import { uuid } from "uuidv4";
import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import ICreateCompanyDTO from "./ICreateCompanyDTO";

export default class CreateCompanyUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: ICreateCompanyDTO) {

        const userExists = await this.userRepository.findByEmail(props.email);

        if (userExists) {
            throw new Error('User already exists.');
        }

        const user = new User({ ...props });
        await this.userRepository.saveCompany(user);
    }
}