import Registro from "../database/models/Registro.model";

export default interface IRegistryRepository {
	getRegistry: (id: number) => Promise<Registro | null>;
	updateCreditById: (id: number, credit: number) => Promise<number>;
	updateOilValueById: (id: number, value: number, oilType: string) => Promise<number>;
	updateOilQuotationById: (id: number, value: number, oilType: string) => Promise<number>;
}
