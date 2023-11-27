import Registro from "../database/models/Registro.model";

export default interface IRegistryRepository {
	all(): Promise<Registro[]>;
	getRegistry: (id: number) => Promise<Registro | null>;
	updateCreditById: (id: number, credit: number) => Promise<number>;
	updateOilValueById: (id: number, value: number, oilType: string) => Promise<number>;
}
