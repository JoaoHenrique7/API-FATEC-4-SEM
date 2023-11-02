import Registro from "../database/models/Registro.model";

export default interface IRegistryRepository {
	getCredit: (id: number) => Promise<Registro | null>;
	updateCreditById: (id: number, credit: number) => Promise<number>;
}
