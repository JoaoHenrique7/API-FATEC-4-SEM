import Transacao from "../database/models/TransacaoOleo.model";

export default interface IOiltransactionRepository {
	all(): Promise<Transacao[]>;
	create(oilTransaction: Transacao): Promise<Transacao>;
	findById(id: number): Promise<Transacao | null>;
}
