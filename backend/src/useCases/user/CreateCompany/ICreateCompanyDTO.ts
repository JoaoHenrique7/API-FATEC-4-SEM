export default interface ICreateCompanyDTO {
    id?: number;
    userName: string;
    cpfCnpj: string;
    email: string;
    password: string;
    active: boolean;
}