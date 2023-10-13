import Transacao from "../../database/models/TransacaoOleo.model";
import IOilTransactionRepository from "../IOilTransactionRepository";

export default class OilTransactionRepository implements IOilTransactionRepository {
	/**
	 * Retrieves all OilTransactions.
	 *
	 * @return {Promise<Transacao[]>} A promise that resolves to an array of Transacao objects.
	 */
	all(): Promise<Transacao[]> {
		return Transacao.findAll();
	}

	/**
	 * Creates a new OilTransaction.
	 *
	 * @param {Transacao} oilTransaction - The OilTransaction object to be created.
	 * @return {Promise<Transacao>} A promise that resolves to the created OilTransaction.
	 */
	create(oilTransaction: Transacao): Promise<Transacao> {
		return oilTransaction.save();
	}

	/**
	 * Finds a OilTransaction by id.
	 *
	 * @param {number} id - The id of the OilTransaction to find.
	 * @return {Promise<Transacao | null>} A promise that resolves to the found OilTransaction or null if not found.
	 */
	findById(id: number): Promise<Transacao | null> {
		return Transacao.findOne({ where: { id: id } });
	}
}
