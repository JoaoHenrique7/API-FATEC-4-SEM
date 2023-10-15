export default class Transaction {
	public id: number;
	public tipoOleo: string;
	public volume: number;
	public valorTransacao: number;
	public idVendedor: number;
	public idComprador: number;

	constructor(
		id: number,
		tipoOleo: string,
		volume: number,
		valorTransacao: number,
		idVendedor: number,
		idComprador: number,
	) {
		id ? (this.id = id) : (this.id = -1);
		this.tipoOleo = tipoOleo;
		this.volume = volume;
		this.valorTransacao = valorTransacao;
		this.idVendedor = idVendedor;
		this.idComprador = idComprador;
	}

	public getTipoOleo(): string {
		return this.tipoOleo;
	}
	public getId(): number {
		return this.id;
	}
	public getVolume(): number {
		return this.volume;
	}
	public getValorTransacao(): number {
		return this.valorTransacao;
	}
	public getIdVendedor(): number {
		return this.idVendedor;
	}
	public getIdComprador(): number {
		return this.idComprador;
	}

	public toJson() {
		return {
			tipoOleo: this.getTipoOleo(),
			volume: this.getVolume(),
			valorTransacaoOleo: this.getValorTransacao(),
			idVendedor: this.getIdVendedor,
			idComprador: this.getIdComprador,
		};
	}
}
