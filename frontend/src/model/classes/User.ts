export default class User {
	public id: number;
	public userName: string;
	public cpf: string;
	public email: string;
	public password: string;
	public address: string;
	public neighbordhood: string;
	public number: string;
	public complement: string;
	public city: string;
	public cep: string;
	public state: string;
	public typeUser: string;

	constructor(
		userName: string,
		email: string,
		password: string,
		cpf: string,
		typeUser: string,
		cep: string,
		number: string,
		address: string,
		neighbordhood: string,
		city: string,
		state: string,
		complement: string,
		id?: number,
	) {
		id ? (this.id = id) : (this.id = -1);
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.cpf = cpf;
		this.typeUser= typeUser;
		this.cep = cep;
		this.number= number;
		this.address = address;
		this.neighbordhood= neighbordhood;
		this.city= city;
		this.state=state;
		this.complement= complement;
	}

	public getUserName(): string {
		return this.userName;
	}
	public getId(): number {
		return this.id;
	}
	public getCpf(): string {
		return this.cpf;
	}
	public getEmail(): string {
		return this.email;
	}
	public getPassword(): string {
		return this.password;
	}
	public getCep(): string {
		return this.cep;
	}
	public getNumber(): string {
		return this.number;
	}
	public getAddress(): string {
		return this.address;
	}
	public getNeighbordhood(): string {
		return this.neighbordhood;
	}
	public getCity(): string {
		return this.city;
	}
	public getState(): string {
		return this.state;
	}
	public getComplement(): string {
		return this.complement;
	}
	public getTypeUser(): string {
		return this.typeUser;
	}

	public toJson() {
		return {
			"nomeUsuario": this.getUserName(),
			"emailUsuario": this.getEmail(),
			"senhaUsuario": this.getPassword(),
			"documentoUsuario": this.getCpf(),
			"tipoUsuario": {
				"tipoUsuario": this.getTypeUser()
			},
			"endereco": {
				"zip_code": this.getCep(),
				"numero": this.getNumber(),
				"rua": this.getAddress(),
				"bairro": this.getNeighbordhood(),
				"cidade": this.getCity(),
				"estado": this.getState(),
				"complemento": this.getComplement()
			}
		};
	}
}
