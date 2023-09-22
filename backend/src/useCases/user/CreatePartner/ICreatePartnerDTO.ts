export default interface ICreatePartnerDTO {
    id?: number;
    userName: string;
    cpfCnpj: string;
    email: string;
    password: string;
    active: boolean;
}