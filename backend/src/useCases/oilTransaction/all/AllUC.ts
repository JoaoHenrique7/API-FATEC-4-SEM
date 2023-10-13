import Transacao from "../../../database/models/TransacaoOleo.model"
import IOilTransactionRepository from "../../../repositories/IOilTransactionRepository";

export default class AllUC {
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {IOilTransactionRepository} oilTransactionRepository - The user repository.
	 */
	constructor(private oilTransactionRepository: IOilTransactionRepository) {}

	/**
	 * Retrieves a list of users by executing the function.
	 *
	 * @return {Promise<Transacao[]>} The list of users.
	 */
	async execute(): Promise<Transacao[]> {
		return await this.oilTransactionRepository.all();
	}
}