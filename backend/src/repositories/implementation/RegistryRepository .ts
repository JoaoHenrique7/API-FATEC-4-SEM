import Usuario from "../../database/models/Usuario.model";
import Registro from "../../database/models/Registro.model";
import IRegistryRepository from "../IRegistryRepository";

export default class RegistryRepository implements IRegistryRepository {
	async getCredit(id: number): Promise<Registro | null> {
		const result = await Registro.findOne({ where: { id: id } });
		return result;
	}

	async updateCreditById(id: number, credit: number): Promise<number> {
		const result = await Registro.update({ saldo: credit }, { where: { id: id } });
		return result[0];
	}
	async findById(id: number): Promise<Registro | null> {
		const result = await Registro.findOne({ where: { id: id } });
		return result;
	}
}
