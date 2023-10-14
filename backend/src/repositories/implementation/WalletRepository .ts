import Usuario from "../../database/models/Usuario.model";
import Carteira from "../../database/models/Carteira.model";
import IWalletRepository from "../IWalletRepository";

export default class WalletRepository implements IWalletRepository {
	async getCredit(id: number): Promise<Carteira | null> {
		const result = await Carteira.findOne({ where: { id: id } });
		return result;
	}

	async updateCreditById(id: number, credit: number): Promise<number> {
		const result = await Carteira.update({ saldo: credit }, { where: { id: id } });
		return result[0];
	}
}
