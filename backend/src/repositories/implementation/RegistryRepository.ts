import Registro from "../../database/models/Registro.model";
import IRegistryRepository from "../IRegistryRepository";

export default class RegistryRepository implements IRegistryRepository {
		/**
	 * Retrieves all users.
	 *
	 * @return {Promise<Registro[]>} A promise that resolves to an array of Usuario objects.
	 */
	async all(): Promise<Registro[]> {
		return Registro.findAll();
	}
	
	async getRegistry(id: number): Promise<Registro | null> {
		const result = await Registro.findOne({ where: { id: id } });
		return result;
	}

	async updateCreditById(id: number, credit: number): Promise<number> {
		const result = await Registro.update({ saldo: credit }, { where: { id: id } });
		return result[0];
	}

	async updateOilValueById(id: number, value: number, oilType: string): Promise<number> {
		if (oilType === "Virgem") {
			const result = await Registro.update(
				{ volumeOleoVirgem: value },
				{ where: { id: id } },
			);
			return result[0];
		} else {
			const result = await Registro.update(
				{ volumeOleoUsado: value },
				{ where: { id: id } },
			);
			return result[0];
		}
	}
}
