import Registro from "../../../database/models/Registro.model";
import RegistryRepository from "../../../repositories/implementation/RegistryRepository";
import UpdateOilQuotationById from "./IUpdateOilQuotationByIdDTO";
import { UnprocessableEntityError } from "../../../utils/customError";

export default class UpdateOilQuotationByIdUC {
	constructor(private RegistryRepository: RegistryRepository) {}

	async execute(props: UpdateOilQuotationById): Promise<Registro> {
		if (typeof props.cotacao !== "number" || typeof props.id !== "number")
			throw new Error("Falha na atualização da cotação.");

		this.RegistryRepository.updateOilQuotationById(props.id, props.cotacao, props.tipoOleo);

		const user = await this.RegistryRepository.getRegistry(props.id);

		if (!user) throw new Error("Id Inexistente");

		return user;
	}
}
