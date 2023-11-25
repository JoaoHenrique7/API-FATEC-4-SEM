import Registro from "../../../database/models/Registro.model";
import RegistryRepository from "../../../repositories/implementation/RegistryRepository ";
import UpdateOilValueById from "./IUpdateOilValueByIdDTO";
import { UnprocessableEntityError } from "../../../utils/customError";

export default class UpdateOilValueByIdUC {
	constructor(private RegistryRepository: RegistryRepository) {}

	async execute(props: UpdateOilValueById): Promise<Registro> {
		if (typeof props.volume !== "number")
			throw new UnprocessableEntityError("Falha na atualização de volume.");

		this.RegistryRepository.updateOilValueById(props.id, props.volume, props.tipoOleo);

		const user = await this.RegistryRepository.getRegistry(props.id);

		if (!user) throw new Error("Id Inexistente");

		return user;
	}
}
