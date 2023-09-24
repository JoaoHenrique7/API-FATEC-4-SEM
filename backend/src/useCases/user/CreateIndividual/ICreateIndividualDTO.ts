export default interface ICreateIndividualDTO {
    id?: number;
    userName: string;
    cpfCnpj: string;
    email: string;
    password: string;
    active: boolean;
}