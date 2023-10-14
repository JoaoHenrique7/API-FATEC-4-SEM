export default class User {
	public id: number;
	public tipoOleo: string;
	public volume: number;
	public valorTransacao: number;
	public createdAt: Date;
	public updatedAt: Date;
	public idVendedor: number;
	public idComprador: number;

	constructor(
        id: number,
        tipoOleo: string,
        volume: number,
        valorTransacao: number,
        createdAt: Date,
        updatedAt: Date,
        idVendedor: number,
        idComprador: number,
	) {
		id ? (this.id = id) : (this.id = -1);
		this.tipoOleo = tipoOleo;
		this.volume = volume;
		this.valorTransacao = valorTransacao;
		this.createdAt= createdAt;
		this.updatedAt = updatedAt;
		this.idVendedor= idVendedor;
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

	public getCreatedAt(): Date {
		return this.createdAt;
	}
	public getUpdatedAt(): Date {
		return this.updatedAt;
	}
	public getIdVendedor(): number {
		return this.idVendedor;
	}
	public getIdComprador(): number {
		return this.idComprador;
	}


	// public toJson() {
	// 	return {
	// 		"nomeUsuario": this.getTipoOleo(),
	// 		"emailUsuario": this.getEmail(),
	// 		"senhaUsuario": this.getPassword(),
	// 		"documentoUsuario": this.getCpf(),
	// 		"tipoUsuario": {
	// 			"tipoUsuario": this.getTypeUser()
	// 		},
	// 		"endereco": {
	// 			"zip_code": this.getCep(),
	// 			"numero": this.getNumber(),
	// 			"rua": this.getAddress(),
	// 			"bairro": this.getNeighbordhood(),
	// 			"cidade": this.getCity(),
	// 			"estado": this.getState(),
	// 			"complemento": this.getComplement()
	// 		}
	// 	};
	// }
}
