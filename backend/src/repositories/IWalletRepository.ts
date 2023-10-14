import Carteira from "../database/models/Carteira.model";

export default interface IWalletRepository {
	getCredit: (id: number) => Promise<Carteira | null>;
	updateCreditById: (id: number, credit: number) => Promise<number>;
}
