export default class User {
	public id: number;
	public userName: string;
	public cpf: string;
	public email: string;
	public password: string;
	public active: boolean;
	public address: string;
	public neighbordhood: string;
	public number: string;
	public complement: string;
	public city: string;

	constructor(
		userName: string,
		cpf: string,
		email: string,
		password: string,
		active: boolean,
		address: string,
		neighbordhood: string,
		number: string,
		complement: string,
		city: string,
		id?: number,
	) {
		id ? (this.id = id) : (this.id = -1);
		this.userName = userName;
		this.cpf = cpf;
		this.email = email;
		this.password = password;
		this.active = active;
		this.address = address;
		this.neighbordhood= neighbordhood;
		this.number= number;
		this.complement= complement;
		this.city= city;
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

	public isActive(): boolean {
		return this.active;
	}
	public getAddress(): string {
		return this.address;
	}
	public getNeighbordhood(): string {
		return this.neighbordhood;
	}
	public getNumber(): string {
		return this.number;
	}
	public getComplement(): string {
		return this.complement;
	}
	public getCity(): string {
		return this.city;
	}
}
