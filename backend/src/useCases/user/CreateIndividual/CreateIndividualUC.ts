import { uuid } from "uuidv4";
import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import ICreateIndividualDTO from "./ICreateIndividualDTO";

export default class CreateIndividualUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: ICreateIndividualDTO) {

        const userExists = await this.userRepository.findByEmail(props.email);

        if (userExists) {
            throw new Error('User already exists.');
        }

        const user = new User({ ...props });
        await this.userRepository.saveIndividual(user);
    }
}