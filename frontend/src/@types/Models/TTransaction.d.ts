type TTransaction = {
	id: number;
	tipoOleo: string;
	volume: number;
	valorTransacao: number;
	dataTransacao: Date;
	createdAt: Date;
	updatedAt: Date;
	idVendedor: number;
	idComprador: number;
};

export default TTransaction;