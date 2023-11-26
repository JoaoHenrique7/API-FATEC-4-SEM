import IOilTransactionDTO from "./IOilTransactionDTO";
import IOiltransactionRepository from "../../../repositories/IOilTransactionRepository";
import IRegistryRepository from "../../../repositories/IRegistryRepository";
import Transacao from "../../../database/models/TransacaoOleo.model";
import Registro from "../../../database/models/Registro.model";

export default class OilTransactionUC {
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {IOiltransactionRepository} oilTransactionRepository - The transaction repository.
	 * @param {IRegistryRepository} registryRepository - The transaction repository.
	 */
	constructor(
		private oilTransactionRepository: IOiltransactionRepository,
		private registryRepository: IRegistryRepository,
	) {}

	/**
	 * Executes the function with the given props and returns a Promise that resolves to a Transacao object.
	 *
	 * @param {IOilTransactionDTO} props - The properties needed to create a new Transacao object.
	 * @return {Promise<Transacao>} - A Promise that resolves to a Transacao object.
	 */
	async execute(props: IOilTransactionDTO): Promise<Transacao> {
		const seller: Registro | null = await this.registryRepository.getRegistry(props.idVendedor);
		const payer: Registro | null = await this.registryRepository.getRegistry(props.idComprador);

		switch (props.tipoOleo) {
			case "Virgem":
				if (
					!seller ||
					!payer ||
					payer.saldo < props.valorTransacaoOleo ||
					seller.volumeOleoVirgem < props.volume
				) {
					throw new Error("A transação não foi concluida.");
				}
				this.registryRepository.updateCreditById(
					props.idVendedor,
					seller.saldo + props.valorTransacaoOleo,
				);
				this.registryRepository.updateCreditById(
					props.idComprador,
					payer.saldo - props.valorTransacaoOleo,
				);
				this.registryRepository.updateOilValueById(
					props.idVendedor,
					seller.volumeOleoVirgem - props.volume,
					props.tipoOleo,
				);
				this.registryRepository.updateOilValueById(
					props.idComprador,
					payer.volumeOleoVirgem + props.volume,
					props.tipoOleo,
				);
				break;

			case "Usado":
				if (
					!seller ||
					!payer ||
					payer.saldo < props.valorTransacaoOleo ||
					seller.volumeOleoUsado < props.volume
				) {
					throw new Error("A transação não foi concluida.");
				}
				this.registryRepository.updateCreditById(
					props.idVendedor,
					seller.saldo + props.valorTransacaoOleo,
				);
				this.registryRepository.updateCreditById(
					props.idComprador,
					payer.saldo - props.valorTransacaoOleo,
				);
				this.registryRepository.updateOilValueById(
					props.idVendedor,
					seller.volumeOleoUsado - props.volume,
					props.tipoOleo
				);
				this.registryRepository.updateOilValueById(
					props.idComprador,
					payer.volumeOleoUsado + props.volume,
					props.tipoOleo
				);
				break;

			default:
				throw new Error(
					"A transação não foi concluida. Tipo de óleo inválido.",
				);
		}

		const transaction: Transacao = Transacao.build({ ...props });
		return await this.oilTransactionRepository.create(transaction);
	}
}
