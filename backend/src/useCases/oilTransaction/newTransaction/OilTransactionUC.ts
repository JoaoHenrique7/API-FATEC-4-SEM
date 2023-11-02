import IOilTransactionDTO from "./IOilTransactionDTO";
import IOiltransactionRepository from "../../../repositories/IOilTransactionRepository";
import IWalletRepository from "../../../repositories/IRegistryRepository";
import Transacao from "../../../database/models/TransacaoOleo.model";
import Carteira from "../../../database/models/Registro.model";
import { UnprocessableEntityError } from "../../../utils/customError";

export default class OilTransactionUC {
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {IOiltransactionRepository} oilTransactionRepository - The transaction repository.
	 * @param {IWalletRepository} walletRepository - The transaction repository.
	 */
	constructor(
		private oilTransactionRepository: IOiltransactionRepository,
		private walletRepository: IWalletRepository,
	) {}

	/**
	 * Executes the function with the given props and returns a Promise that resolves to a Transacao object.
	 *
	 * @param {IOilTransactionDTO} props - The properties needed to create a new Transacao object.
	 * @return {Promise<Transacao>} - A Promise that resolves to a Transacao object.
	 */
	async execute(props: IOilTransactionDTO): Promise<Transacao> {
		const seller: Carteira | null = await this.walletRepository.getCredit(props.idVendedor);
		const payer: Carteira | null = await this.walletRepository.getCredit(props.idComprador);

		if (!seller || !payer || payer.saldo < props.valorTransacaoOleo) {
			throw new UnprocessableEntityError(
				"A transação não foi concluida.",
			);
		}
		this.walletRepository.updateCreditById(
			props.idVendedor,
			seller.saldo + props.valorTransacaoOleo,
		);
		this.walletRepository.updateCreditById(
			props.idComprador,
			payer.saldo - props.valorTransacaoOleo,
		);
		const transaction: Transacao = Transacao.build({ ...props });
		return await this.oilTransactionRepository.create(transaction);
	}
}
