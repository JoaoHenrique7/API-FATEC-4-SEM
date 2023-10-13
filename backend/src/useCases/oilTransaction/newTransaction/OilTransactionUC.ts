import IOilTransactionDTO from "./IOilTransactionDTO";
import IOiltransactionRepository from "../../../repositories/IOilTransactionRepository";
import Transacao from "../../../database/models/TransacaoOleo.model";

export default class OilTransactionUC {
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {IOiltransactionRepository} oilTransactionRepository - The transaction repository.
	 */
	constructor(private oilTransactionRepository: IOiltransactionRepository) {}

	/**
	 * Executes the function with the given props and returns a Promise that resolves to a Transacao object.
	 *
	 * @param {IOilTransactionDTO} props - The properties needed to create a new Transacao object.
	 * @return {Promise<Transacao>} - A Promise that resolves to a Transacao object.
	 */
	async execute(props: IOilTransactionDTO): Promise<Transacao> {
		const transaction: Transacao = Transacao.build({ ...props });
		return await this.oilTransactionRepository.create(transaction);
	}
}
